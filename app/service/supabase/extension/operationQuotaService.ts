import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import {
  PLAN_KEYS,
  PLAN_OPERATION_QUOTAS,
  OPERATIONS,
  type PlanKey,
  type OperationId,
} from '@/lib/credits/config';
import { grantFreeSignupCredits } from '@/app/service/supabase/user/grantFreeSignupCredits';
import { resolvePlanKeyForUser } from '@/app/service/supabase/extension/resolvePlanKey';

// ── Types ─────────────────────────────────────────────────────────────────────

export type QuotaCheckResult =
  | { allowed: true; used: number; limit: number | null }
  | {
      allowed: false;
      code:
        | 'PLAN_BLOCKED'
        | 'QUOTA_EXHAUSTED'
        | 'CONCURRENT_MODIFICATION'
        | 'USER_NOT_FOUND'
        | 'DB_ERROR';
    };

export type OperationStatus = { used: number; limit: number | null };

export type QuotaStatusResult = {
  planKey: PlanKey;
  planType: string | null;
  operations: Record<OperationId, OperationStatus>;
};

export type ResolvedUser =
  | { userId: string; planKey: PlanKey; planType: string | null }
  | { error: 'USER_NOT_FOUND' | 'DB_ERROR' };

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Returns the ISO date string for the first day of the current UTC month. */
export function getCurrentPeriodStart(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  return `${year}-${month}-01`;
}

/**
 * Resolves a clerkId to its internal userId and plan info.
 * If the user_credits row is missing (Clerk webhook missed), grants a free row first.
 */
export async function resolveUserPlan(clerkId: string): Promise<ResolvedUser> {
  const { data: user, error: userErr } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .maybeSingle();

  if (userErr) {
    console.error('[quotaService] resolveUserPlan: users lookup error', { clerkId, userErr });
    return { error: 'DB_ERROR' };
  }
  if (!user) {
    return { error: 'USER_NOT_FOUND' };
  }

  const userId = user.id as string;

  const { data: uc, error: ucErr } = await supabaseAdmin
    .from('user_credits')
    .select('plan_id, plan_type')
    .eq('user_id', userId)
    .maybeSingle();

  if (ucErr) {
    console.error('[quotaService] resolveUserPlan: user_credits lookup error', { userId, ucErr });
    return { error: 'DB_ERROR' };
  }

  // Safety net: no credits row means the Clerk webhook was missed.
  // Grant a free row now so subsequent reads always find something.
  if (!uc) {
    await grantFreeSignupCredits(userId);
    const { data: ucAfter, error: ucAfterErr } = await supabaseAdmin
      .from('user_credits')
      .select('plan_id, plan_type')
      .eq('user_id', userId)
      .maybeSingle();

    if (ucAfterErr || !ucAfter) {
      console.error('[quotaService] resolveUserPlan: re-read after grant failed', { userId });
      return { error: 'DB_ERROR' };
    }

    const planId = (ucAfter.plan_id as string | null) ?? null;
    const planType = (ucAfter.plan_type as string | null) ?? null;
    const planKey = await resolvePlanKeyForUser(userId, planId, planType);
    return { userId, planKey, planType };
  }

  const planId = (uc.plan_id as string | null) ?? null;
  const planType = (uc.plan_type as string | null) ?? null;
  const planKey = await resolvePlanKeyForUser(userId, planId, planType);
  return { userId, planKey, planType };
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Check whether a user is allowed to perform an operation and, if so, atomically
 * increment their monthly usage count.
 *
 * Flow:
 *   1. Resolve user + plan
 *   2. Look up monthly quota from config
 *   3. quota = 0   → PLAN_BLOCKED (hard block for Free users on premium-only ops)
 *   4. quota = null → allowed immediately (unlimited — no DB write needed)
 *   5. Ensure a usage row exists for the current period (upsert with ignoreDuplicates)
 *   6. Optimistic-lock loop: read → check → UPDATE WHERE used_count = <read_value>
 *   7. If lock misses every retry → CONCURRENT_MODIFICATION
 */
export async function checkAndIncrementQuota(
  clerkId: string,
  operationId: OperationId,
  maxRetries = 3,
): Promise<QuotaCheckResult> {
  const resolved = await resolveUserPlan(clerkId);
  if ('error' in resolved) {
    return { allowed: false, code: resolved.error };
  }

  const { userId, planKey } = resolved;
  const quota = PLAN_OPERATION_QUOTAS[planKey][operationId];

  if (quota === 0) {
    return { allowed: false, code: 'PLAN_BLOCKED' };
  }

  if (quota === null) {
    return { allowed: true, used: 0, limit: null };
  }

  const periodStart = getCurrentPeriodStart();

  // Ensure a row exists for this period before the optimistic-lock loop.
  // ignoreDuplicates = true means a concurrent INSERT won't clobber an existing count.
  const { error: upsertErr } = await supabaseAdmin
    .from('operation_usage')
    .upsert(
      { user_id: userId, operation_id: operationId, used_count: 0, period_start: periodStart },
      { onConflict: 'user_id,operation_id,period_start', ignoreDuplicates: true },
    );

  if (upsertErr) {
    console.error('[quotaService] checkAndIncrementQuota: upsert error', {
      userId,
      operationId,
      upsertErr,
    });
    return { allowed: false, code: 'DB_ERROR' };
  }

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const { data: row, error: readErr } = await supabaseAdmin
      .from('operation_usage')
      .select('used_count')
      .eq('user_id', userId)
      .eq('operation_id', operationId)
      .eq('period_start', periodStart)
      .maybeSingle();

    if (readErr) {
      console.error('[quotaService] checkAndIncrementQuota: read error', {
        userId,
        operationId,
        readErr,
      });
      return { allowed: false, code: 'DB_ERROR' };
    }

    const current = Number(row?.used_count ?? 0);

    if (current >= quota) {
      return { allowed: false, code: 'QUOTA_EXHAUSTED' };
    }

    const newCount = current + 1;

    const { data: updated, error: updateErr } = await supabaseAdmin
      .from('operation_usage')
      .update({ used_count: newCount })
      .eq('user_id', userId)
      .eq('operation_id', operationId)
      .eq('period_start', periodStart)
      .eq('used_count', current) // optimistic lock
      .select('used_count')
      .maybeSingle();

    if (updateErr) {
      console.error('[quotaService] checkAndIncrementQuota: update error', {
        userId,
        operationId,
        updateErr,
      });
      return { allowed: false, code: 'DB_ERROR' };
    }

    if (updated !== null) {
      return { allowed: true, used: newCount, limit: quota };
    }

    console.warn(
      `[quotaService] checkAndIncrementQuota: optimistic lock miss (attempt ${attempt + 1}/${maxRetries})`,
      { userId, operationId },
    );
  }

  return { allowed: false, code: 'CONCURRENT_MODIFICATION' };
}

/**
 * Decrement a user's monthly usage count by 1 after a downstream service failure.
 *
 * Best-effort: errors are logged but never thrown so a failed refund never
 * masks the original error returned to the client.
 *
 * No-ops for unlimited (null) and hard-blocked (0) quotas — no row was written.
 */
export async function decrementQuota(clerkId: string, operationId: OperationId): Promise<void> {
  try {
    const resolved = await resolveUserPlan(clerkId);
    if ('error' in resolved) {
      console.error('[quotaService] decrementQuota: resolveUserPlan failed', {
        clerkId,
        error: resolved.error,
      });
      return;
    }

    const { userId, planKey } = resolved;
    const quota = PLAN_OPERATION_QUOTAS[planKey][operationId];

    // No DB row was written for unlimited or blocked operations
    if (quota === null || quota === 0) return;

    const periodStart = getCurrentPeriodStart();

    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: row, error: readErr } = await supabaseAdmin
        .from('operation_usage')
        .select('used_count')
        .eq('user_id', userId)
        .eq('operation_id', operationId)
        .eq('period_start', periodStart)
        .maybeSingle();

      if (readErr || !row) {
        console.error('[quotaService] decrementQuota: read failed', { userId, operationId, readErr });
        return;
      }

      const current = Number(row.used_count);

      // Guard against going below zero (DB check constraint also enforces this)
      if (current <= 0) return;

      const newCount = current - 1;

      const { data: updated, error: updateErr } = await supabaseAdmin
        .from('operation_usage')
        .update({ used_count: newCount })
        .eq('user_id', userId)
        .eq('operation_id', operationId)
        .eq('period_start', periodStart)
        .eq('used_count', current) // optimistic lock
        .select('used_count')
        .maybeSingle();

      if (updateErr) {
        console.error('[quotaService] decrementQuota: update failed', {
          userId,
          operationId,
          updateErr,
        });
        return;
      }

      if (updated !== null) return;

      console.warn(
        `[quotaService] decrementQuota: optimistic lock miss (attempt ${attempt + 1}/3)`,
        { userId, operationId },
      );
    }

    console.error('[quotaService] decrementQuota: all retries exhausted', { userId, operationId });
  } catch (err) {
    console.error('[quotaService] decrementQuota: unexpected error', { clerkId, operationId, err });
  }
}

/**
 * Return the current month's quota usage for all operations for a given user.
 * Used by GET /api/user/quota-status to drive extension UI state.
 *
 * Returns null if the user cannot be resolved (caller should return 401/500).
 * Unlimited operations return { used: 0, limit: null } — no DB row is written for them.
 * Hard-blocked operations return { used: 0, limit: 0 }.
 */
export async function getUserQuotaStatus(clerkId: string): Promise<QuotaStatusResult | null> {
  const resolved = await resolveUserPlan(clerkId);
  if ('error' in resolved) {
    console.error('[quotaService] getUserQuotaStatus: resolveUserPlan failed', { clerkId });
    return null;
  }

  const { userId, planKey, planType } = resolved;
  const periodStart = getCurrentPeriodStart();

  const { data: usageRows, error: usageErr } = await supabaseAdmin
    .from('operation_usage')
    .select('operation_id, used_count')
    .eq('user_id', userId)
    .eq('period_start', periodStart);

  if (usageErr) {
    console.error('[quotaService] getUserQuotaStatus: usage fetch error', { userId, usageErr });
    return null;
  }

  const usageMap = new Map<string, number>();
  for (const row of usageRows ?? []) {
    usageMap.set(row.operation_id as string, Number(row.used_count));
  }

  const operations = {} as Record<OperationId, OperationStatus>;
  for (const opId of Object.values(OPERATIONS) as OperationId[]) {
    const quota = PLAN_OPERATION_QUOTAS[planKey][opId];

    if (quota === null) {
      operations[opId] = { used: 0, limit: null };
    } else if (quota === 0) {
      operations[opId] = { used: 0, limit: 0 };
    } else {
      operations[opId] = { used: usageMap.get(opId) ?? 0, limit: quota };
    }
  }

  return { planKey, planType, operations };
}

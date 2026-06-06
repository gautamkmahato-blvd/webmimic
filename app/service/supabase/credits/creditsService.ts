import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { grantFreeSignupCredits } from '@/app/service/supabase/user/grantFreeSignupCredits';
import {
  getFeatureCreditCost,
  isCreditFeatureId,
  type CreditFeatureId,
} from '@/lib/credits/config';
import type {
  CreditReferenceType,
  DeductCreditsResult,
  GrantCreditsResult,
  RefundCreditsResult,
  UserCreditsSnapshot,
} from '@/lib/credits/types';

const MAX_OPTIMISTIC_RETRIES = 5;

type UserCreditsRow = {
  id: string;
  user_id: string;
  plan_id: string | null;
  plan_type: string | null;
  total_credits: number;
  remaining_credits: number;
  last_recharge_at: string | null;
  updated_at: string | null;
};

function normalizeCredits(value: unknown): number {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
}

export async function resolveUserIdFromClerkId(clerkId: string): Promise<string | null> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .maybeSingle();

  if (error) {
    console.error('[creditsService] resolveUserIdFromClerkId error', { clerkId, error });
    return null;
  }

  return (data?.id as string | undefined) ?? null;
}

async function readUserCreditsRow(userId: string): Promise<UserCreditsRow | null> {
  const { data, error } = await supabaseAdmin
    .from('user_credits')
    .select('id, user_id, plan_id, plan_type, total_credits, remaining_credits, last_recharge_at, updated_at')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('[creditsService] readUserCreditsRow error', { userId, error });
    return null;
  }

  return (data as UserCreditsRow | null) ?? null;
}

export async function ensureUserCreditsRow(userId: string): Promise<UserCreditsRow | null> {
  let row = await readUserCreditsRow(userId);
  if (row) return row;

  await grantFreeSignupCredits(userId);
  row = await readUserCreditsRow(userId);
  return row;
}

export async function getUserCreditsSnapshot(userId: string): Promise<UserCreditsSnapshot | null> {
  const row = await ensureUserCreditsRow(userId);
  if (!row) return null;

  return {
    userId,
    totalCredits: normalizeCredits(row.total_credits),
    remainingCredits: normalizeCredits(row.remaining_credits),
    planId: (row.plan_id as string | null) ?? null,
    planType: (row.plan_type as string | null) ?? null,
  };
}

export async function getUserCreditsSnapshotForClerkId(
  clerkId: string,
): Promise<UserCreditsSnapshot | null> {
  const userId = await resolveUserIdFromClerkId(clerkId);
  if (!userId) return null;
  return getUserCreditsSnapshot(userId);
}

async function findCompletedIdempotentTransaction(
  userId: string,
  idempotencyKey: string,
): Promise<{ id: string; balance_after: number; amount: number } | null> {
  const { data, error } = await supabaseAdmin
    .from('credit_transactions')
    .select('id, balance_after, amount')
    .eq('user_id', userId)
    .eq('idempotency_key', idempotencyKey)
    .eq('status', 'completed')
    .maybeSingle();

  if (error) {
    // Table may not exist yet during rollout — log and continue without idempotency.
    if (error.code === '42P01') {
      console.warn('[creditsService] credit_transactions table missing — idempotency disabled');
      return null;
    }
    console.error('[creditsService] findCompletedIdempotentTransaction error', { userId, error });
    return null;
  }

  return data as { id: string; balance_after: number; amount: number } | null;
}

async function insertCreditTransaction(params: {
  userId: string;
  featureId: string;
  amount: number;
  balanceAfter: number;
  idempotencyKey?: string | null;
  referenceType: CreditReferenceType;
  referenceId?: string | null;
  metadata?: Record<string, unknown>;
}): Promise<string | null> {
  const { data, error } = await supabaseAdmin
    .from('credit_transactions')
    .insert([
      {
        user_id: params.userId,
        feature_id: params.featureId,
        amount: params.amount,
        balance_after: params.balanceAfter,
        idempotency_key: params.idempotencyKey ?? null,
        status: 'completed',
        reference_type: params.referenceType,
        reference_id: params.referenceId ?? null,
        metadata: params.metadata ?? {},
      },
    ])
    .select('id')
    .single();

  if (error) {
    if (error.code === '23505' && params.idempotencyKey) {
      const existing = await findCompletedIdempotentTransaction(params.userId, params.idempotencyKey);
      return existing?.id ?? null;
    }
    if (error.code === '42P01') {
      console.warn('[creditsService] credit_transactions table missing — skipping ledger insert');
      return null;
    }
    console.error('[creditsService] insertCreditTransaction error', { userId: params.userId, error });
    return null;
  }

  return (data?.id as string | undefined) ?? null;
}

/**
 * Atomically deduct credits for a feature. Idempotent when idempotencyKey is supplied.
 */
export async function deductCreditsForFeature(params: {
  userId: string;
  featureId: CreditFeatureId;
  idempotencyKey?: string | null;
}): Promise<DeductCreditsResult> {
  const { userId, featureId } = params;

  if (!isCreditFeatureId(featureId)) {
    return { ok: false, code: 'INVALID_FEATURE', message: 'Unknown feature' };
  }

  const cost = getFeatureCreditCost(featureId);
  const idempotencyKey =
    typeof params.idempotencyKey === 'string' && params.idempotencyKey.trim()
      ? params.idempotencyKey.trim().slice(0, 128)
      : null;

  if (idempotencyKey) {
    const existing = await findCompletedIdempotentTransaction(userId, idempotencyKey);
    if (existing) {
      return {
        ok: true,
        transactionId: existing.id,
        creditsCharged: Math.abs(existing.amount),
        creditsRemaining: normalizeCredits(existing.balance_after),
        duplicate: true,
      };
    }
  }

  const row = await ensureUserCreditsRow(userId);
  if (!row) {
    return { ok: false, code: 'USER_NOT_FOUND', message: 'User credits row not found' };
  }

  for (let attempt = 0; attempt < MAX_OPTIMISTIC_RETRIES; attempt++) {
    const currentRemaining = normalizeCredits(row.remaining_credits);

    if (currentRemaining < cost) {
      return {
        ok: false,
        code: 'INSUFFICIENT_CREDITS',
        message: 'Insufficient credits. Purchase more credits to continue.',
      };
    }

    const newRemaining = currentRemaining - cost;
    const now = new Date().toISOString();

    const { data: updated, error } = await supabaseAdmin
      .from('user_credits')
      .update({ remaining_credits: newRemaining, updated_at: now })
      .eq('user_id', userId)
      .eq('remaining_credits', currentRemaining)
      .select('remaining_credits')
      .maybeSingle();

    if (error) {
      console.error('[creditsService] deductCreditsForFeature update error', { userId, error });
      return { ok: false, code: 'DB_ERROR', message: 'Failed to deduct credits' };
    }

    if (!updated) {
      const fresh = await readUserCreditsRow(userId);
      if (!fresh) {
        return { ok: false, code: 'DB_ERROR', message: 'Failed to read credits balance' };
      }
      Object.assign(row, fresh);
      continue;
    }

    const transactionId =
      (await insertCreditTransaction({
        userId,
        featureId,
        amount: -cost,
        balanceAfter: newRemaining,
        idempotencyKey,
        referenceType: 'feature_use',
        metadata: { featureId },
      })) ?? `local-${userId}-${Date.now()}`;

    return {
      ok: true,
      transactionId,
      creditsCharged: cost,
      creditsRemaining: newRemaining,
      duplicate: false,
    };
  }

  return {
    ok: false,
    code: 'CONCURRENT_MODIFICATION',
    message: 'Credits update conflict, please retry',
  };
}

/**
 * Refund a prior feature deduction (e.g. when downstream AI work fails).
 */
export async function refundCreditTransaction(transactionId: string): Promise<RefundCreditsResult> {
  if (!transactionId || transactionId.startsWith('local-')) {
    return { ok: false, code: 'NOT_FOUND', message: 'Transaction not found' };
  }

  const { data: tx, error: txErr } = await supabaseAdmin
    .from('credit_transactions')
    .select('id, user_id, amount, status, feature_id')
    .eq('id', transactionId)
    .maybeSingle();

  if (txErr) {
    if (txErr.code === '42P01') {
      return { ok: false, code: 'NOT_FOUND', message: 'Transaction ledger unavailable' };
    }
    console.error('[creditsService] refundCreditTransaction read error', { transactionId, txErr });
    return { ok: false, code: 'DB_ERROR', message: 'Failed to load transaction' };
  }

  if (!tx) {
    return { ok: false, code: 'NOT_FOUND', message: 'Transaction not found' };
  }

  if (tx.status === 'refunded') {
    return { ok: false, code: 'ALREADY_REFUNDED', message: 'Transaction already refunded' };
  }

  const refundAmount = Math.abs(Number(tx.amount));
  if (!Number.isFinite(refundAmount) || refundAmount <= 0) {
    return { ok: false, code: 'NOT_FOUND', message: 'Transaction is not a deduction' };
  }

  const userId = tx.user_id as string;
  const row = await ensureUserCreditsRow(userId);
  if (!row) {
    return { ok: false, code: 'DB_ERROR', message: 'User credits row not found' };
  }

  for (let attempt = 0; attempt < MAX_OPTIMISTIC_RETRIES; attempt++) {
    const currentRemaining = normalizeCredits(row.remaining_credits);
    const newRemaining = currentRemaining + refundAmount;
    const now = new Date().toISOString();

    const { data: updated, error: updateErr } = await supabaseAdmin
      .from('user_credits')
      .update({ remaining_credits: newRemaining, updated_at: now })
      .eq('user_id', userId)
      .eq('remaining_credits', currentRemaining)
      .select('remaining_credits')
      .maybeSingle();

    if (updateErr) {
      console.error('[creditsService] refundCreditTransaction update error', { transactionId, updateErr });
      return { ok: false, code: 'DB_ERROR', message: 'Failed to refund credits' };
    }

    if (!updated) {
      const fresh = await readUserCreditsRow(userId);
      if (!fresh) {
        return { ok: false, code: 'DB_ERROR', message: 'Failed to read credits balance' };
      }
      Object.assign(row, fresh);
      continue;
    }

    const { error: markErr } = await supabaseAdmin
      .from('credit_transactions')
      .update({ status: 'refunded' })
      .eq('id', transactionId)
      .eq('status', 'completed');

    if (markErr && markErr.code !== '42P01') {
      console.error('[creditsService] refundCreditTransaction mark refunded error', { transactionId, markErr });
    }

    await insertCreditTransaction({
      userId,
      featureId: String(tx.feature_id),
      amount: refundAmount,
      balanceAfter: newRemaining,
      referenceType: 'feature_use',
      referenceId: transactionId,
      metadata: { refundOf: transactionId },
    });

    return { ok: true, creditsRemaining: newRemaining };
  }

  return { ok: false, code: 'DB_ERROR', message: 'Refund conflict, please retry' };
}

/**
 * Grant credits after plan purchase, custom payment, or internal billing.
 */
export async function grantCreditsToUser(params: {
  userId: string;
  amount: number;
  referenceType: CreditReferenceType;
  referenceId?: string | null;
  planId?: string | null;
  setPremium?: boolean;
}): Promise<GrantCreditsResult> {
  const amount = Math.floor(Number(params.amount) || 0);
  if (amount <= 0) {
    return { ok: false, code: 'INVALID_AMOUNT', message: 'Grant amount must be positive' };
  }

  const { userId } = params;
  const row = await ensureUserCreditsRow(userId);
  if (!row) {
    return { ok: false, code: 'USER_NOT_FOUND', message: 'User credits row not found' };
  }

  for (let attempt = 0; attempt < MAX_OPTIMISTIC_RETRIES; attempt++) {
    const currentRemaining = normalizeCredits(row.remaining_credits);
    const currentTotal = normalizeCredits(row.total_credits);
    const newRemaining = currentRemaining + amount;
    const newTotal = currentTotal + amount;
    const now = new Date().toISOString();

    const updatePayload: Record<string, unknown> = {
      remaining_credits: newRemaining,
      total_credits: newTotal,
      last_recharge_at: now,
      updated_at: now,
    };

    if (params.planId) {
      updatePayload.plan_id = params.planId;
    }
    if (params.setPremium) {
      updatePayload.plan_type = 'Premium';
    }

    const { data: updated, error } = await supabaseAdmin
      .from('user_credits')
      .update(updatePayload)
      .eq('user_id', userId)
      .eq('remaining_credits', currentRemaining)
      .eq('total_credits', currentTotal)
      .select('remaining_credits, total_credits')
      .maybeSingle();

    if (error) {
      console.error('[creditsService] grantCreditsToUser update error', { userId, error });
      return { ok: false, code: 'DB_ERROR', message: 'Failed to grant credits' };
    }

    if (!updated) {
      const fresh = await readUserCreditsRow(userId);
      if (!fresh) {
        return { ok: false, code: 'DB_ERROR', message: 'Failed to read credits balance' };
      }
      Object.assign(row, fresh);
      continue;
    }

    await insertCreditTransaction({
      userId,
      featureId: params.referenceType,
      amount,
      balanceAfter: newRemaining,
      referenceType: params.referenceType,
      referenceId: params.referenceId ?? null,
      metadata: { planId: params.planId ?? null },
    });

    return {
      ok: true,
      creditsGranted: amount,
      creditsRemaining: normalizeCredits(updated.remaining_credits),
      totalCredits: normalizeCredits(updated.total_credits),
    };
  }

  return { ok: false, code: 'DB_ERROR', message: 'Grant conflict, please retry' };
}

/**
 * Claw back credits on refund/chargeback (never reduces remaining below 0).
 */
export async function clawBackCredits(params: {
  userId: string;
  amount: number;
  referenceId?: string | null;
}): Promise<GrantCreditsResult | { ok: false; code: 'DB_ERROR' | 'INVALID_AMOUNT'; message: string }> {
  const amount = Math.floor(Number(params.amount) || 0);
  if (amount <= 0) {
    return { ok: false, code: 'INVALID_AMOUNT', message: 'Clawback amount must be positive' };
  }

  const row = await ensureUserCreditsRow(params.userId);
  if (!row) {
    return { ok: false, code: 'DB_ERROR', message: 'User credits row not found' };
  }

  for (let attempt = 0; attempt < MAX_OPTIMISTIC_RETRIES; attempt++) {
    const currentRemaining = normalizeCredits(row.remaining_credits);
    const currentTotal = normalizeCredits(row.total_credits);
    const deduct = Math.min(amount, currentRemaining);
    const newRemaining = currentRemaining - deduct;
    const newTotal = Math.max(0, currentTotal - deduct);
    const now = new Date().toISOString();

    const { data: updated, error } = await supabaseAdmin
      .from('user_credits')
      .update({
        remaining_credits: newRemaining,
        total_credits: newTotal,
        updated_at: now,
      })
      .eq('user_id', params.userId)
      .eq('remaining_credits', currentRemaining)
      .eq('total_credits', currentTotal)
      .select('remaining_credits, total_credits')
      .maybeSingle();

    if (error) {
      console.error('[creditsService] clawBackCredits update error', { userId: params.userId, error });
      return { ok: false, code: 'DB_ERROR', message: 'Failed to claw back credits' };
    }

    if (!updated) {
      const fresh = await readUserCreditsRow(params.userId);
      if (!fresh) {
        return { ok: false, code: 'DB_ERROR', message: 'Failed to read credits balance' };
      }
      Object.assign(row, fresh);
      continue;
    }

    if (deduct > 0) {
      await insertCreditTransaction({
        userId: params.userId,
        featureId: 'refund_clawback',
        amount: -deduct,
        balanceAfter: newRemaining,
        referenceType: 'refund_clawback',
        referenceId: params.referenceId ?? null,
      });
    }

    return {
      ok: true,
      creditsGranted: -deduct,
      creditsRemaining: normalizeCredits(updated.remaining_credits),
      totalCredits: normalizeCredits(updated.total_credits),
    };
  }

  return { ok: false, code: 'DB_ERROR', message: 'Clawback conflict, please retry' };
}

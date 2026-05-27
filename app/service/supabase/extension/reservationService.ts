import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { PLAN_OPERATION_QUOTAS, CLIENT_CONFIRM_OPERATIONS, type OperationId } from '@/lib/credits/config';
import {
  resolveUserPlan,
  getCurrentPeriodStart,
} from '@/app/service/supabase/extension/operationQuotaService';

// ── Types ─────────────────────────────────────────────────────────────────────

export type ReserveResult =
  | { allowed: true; reservationId: string | null; used: number; limit: number | null }
  | {
      allowed: false;
      code:
        | 'PLAN_BLOCKED'
        | 'QUOTA_EXHAUSTED'
        | 'CONCURRENT_MODIFICATION'
        | 'USER_NOT_FOUND'
        | 'DB_ERROR';
    };

// ── Internal helpers ──────────────────────────────────────────────────────────

/**
 * Decrement operation_usage by 1 using userId directly.
 *
 * Used by rollbackReservation and expireStaleReservations. Skips plan
 * resolution since a reservation only exists for finite-quota operations
 * (quota > 0 and != null), so the decrement is always valid.
 *
 * Best-effort: errors logged and swallowed so a failed refund never
 * propagates to the caller.
 */
async function decrementQuotaByUserId(
  userId: string,
  operationId: OperationId,
  periodStart: string,
): Promise<void> {
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { data: row, error: readErr } = await supabaseAdmin
        .from('operation_usage')
        .select('used_count')
        .eq('user_id', userId)
        .eq('operation_id', operationId)
        .eq('period_start', periodStart)
        .maybeSingle();

      if (readErr || !row) {
        console.error('[reservationService] decrementQuotaByUserId: read failed', {
          userId,
          operationId,
          readErr,
        });
        return;
      }

      const current = Number(row.used_count);
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
        console.error('[reservationService] decrementQuotaByUserId: update failed', {
          userId,
          operationId,
          updateErr,
        });
        return;
      }

      if (updated !== null) return;

      console.warn(
        `[reservationService] decrementQuotaByUserId: optimistic lock miss (attempt ${attempt + 1}/3)`,
        { userId, operationId },
      );
    }

    console.error('[reservationService] decrementQuotaByUserId: all retries exhausted', {
      userId,
      operationId,
    });
  } catch (err) {
    console.error('[reservationService] decrementQuotaByUserId: unexpected error', {
      userId,
      operationId,
      err,
    });
  }
}

export type ReservationActionResult = 'ok' | 'forbidden' | 'not_found';

async function getUserIdForClerk(clerkId: string): Promise<string | null> {
  const { data: user, error } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .maybeSingle();

  if (error || !user) return null;
  return user.id as string;
}

/**
 * Confirm a reservation only when it belongs to the authenticated Clerk user.
 */
export async function confirmReservationForClerk(
  reservationId: string,
  clerkId: string,
): Promise<ReservationActionResult> {
  const userId = await getUserIdForClerk(clerkId);
  if (!userId) return 'not_found';

  const { data: reservation, error } = await supabaseAdmin
    .from('quota_reservations')
    .select('user_id')
    .eq('id', reservationId)
    .maybeSingle();

  if (error || !reservation) return 'not_found';
  if (reservation.user_id !== userId) return 'forbidden';

  await confirmReservation(reservationId);
  return 'ok';
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Expire all pending reservations past their TTL for a given user + operation + period.
 *
 * Called inline at the start of reserveQuota — no background job needed. For server-side
 * operations (AI routes), expired pending rows refund the credit. For client-confirmed
 * operations, credits are kept — the client may have already received value.
 *
 * Best-effort: errors logged and swallowed so a failed sweep never blocks a new request.
 */
export async function expireStaleReservations(
  userId: string,
  operationId: OperationId,
  periodStart: string,
): Promise<void> {
  try {
    const { data: stale, error: fetchErr } = await supabaseAdmin
      .from('quota_reservations')
      .select('id')
      .eq('user_id', userId)
      .eq('operation_id', operationId)
      .eq('period_start', periodStart)
      .eq('status', 'pending')
      .lte('expires_at', new Date().toISOString());

    if (fetchErr) {
      console.error('[reservationService] expireStaleReservations: fetch error', {
        userId,
        operationId,
        fetchErr,
      });
      return;
    }

    if (!stale || stale.length === 0) return;

    const ids = stale.map((r) => r.id as string);

    const { error: updateErr } = await supabaseAdmin
      .from('quota_reservations')
      .update({ status: 'expired' })
      .in('id', ids)
      .eq('status', 'pending'); // guard: skip rows already resolved by a concurrent call

    if (updateErr) {
      console.error('[reservationService] expireStaleReservations: update error', {
        userId,
        operationId,
        updateErr,
      });
      return;
    }

    const refundOnExpiry = !CLIENT_CONFIRM_OPERATIONS.has(operationId);
    if (refundOnExpiry) {
      for (let i = 0; i < stale.length; i++) {
        await decrementQuotaByUserId(userId, operationId, periodStart);
      }
    }

    console.log(`[reservationService] expireStaleReservations: expired ${stale.length} row(s)`, {
      userId,
      operationId,
      refunded: refundOnExpiry,
    });
  } catch (err) {
    console.error('[reservationService] expireStaleReservations: unexpected error', {
      userId,
      operationId,
      err,
    });
  }
}

/**
 * Reserve quota for an operation: immediately deduct one credit from operation_usage
 * and create a pending reservation record that tracks the outcome.
 *
 * The reservation is resolved by:
 *   - confirmReservation  → operation succeeded, deduction stands (no usage change)
 *   - rollbackReservation → operation failed, credit refunded (decrements usage)
 *   - TTL expiry          → server-side ops: credit refunded; client-side ops: credit kept
 *
 * idempotencyKey prevents double-charges on client retry: if a pending reservation
 * with this key already exists it is returned as-is without a new deduction.
 */
export async function reserveQuota(
  clerkId: string,
  operationId: OperationId,
  idempotencyKey: string | null = null,
  maxRetries = 3,
): Promise<ReserveResult> {
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
    return { allowed: true, reservationId: null, used: 0, limit: null };
  }

  const periodStart = getCurrentPeriodStart();

  // Sweep expired reservations before counting pending so stale rows don't
  // inflate the in-flight count and block legitimate requests.
  await expireStaleReservations(userId, operationId, periodStart);

  // Idempotency: reuse an existing pending reservation instead of deducting again.
  // If the previous cycle completed (confirmed / rolled_back / expired), clear the
  // key so the new reservation doesn't collide with the UNIQUE constraint.
  let effectiveIdempotencyKey = idempotencyKey;
  if (idempotencyKey) {
    const { data: existing, error: idempErr } = await supabaseAdmin
      .from('quota_reservations')
      .select('id, status')
      .eq('idempotency_key', idempotencyKey)
      .maybeSingle();

    if (idempErr) {
      console.error('[reservationService] reserveQuota: idempotency key lookup error', {
        userId,
        operationId,
        idempErr,
      });
      // Non-fatal: proceed without idempotency protection
      effectiveIdempotencyKey = null;
    } else if (existing) {
      if (existing.status === 'pending') {
        // In-flight reservation — return it to prevent a double deduction
        const { data: usageRow } = await supabaseAdmin
          .from('operation_usage')
          .select('used_count')
          .eq('user_id', userId)
          .eq('operation_id', operationId)
          .eq('period_start', periodStart)
          .maybeSingle();

        console.log('[reservationService] reserveQuota: idempotency hit', {
          reservationId: existing.id,
          userId,
          operationId,
        });

        return {
          allowed: true,
          reservationId: existing.id as string,
          used: Number(usageRow?.used_count ?? 0),
          limit: quota,
        };
      }
      // Cycle completed — don't reuse the key on the new reservation
      effectiveIdempotencyKey = null;
    }
  }

  // Count active pending reservations so they are included in the quota check.
  // This prevents over-allocation when multiple requests are in-flight simultaneously.
  const { count: pendingCount, error: pendingErr } = await supabaseAdmin
    .from('quota_reservations')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('operation_id', operationId)
    .eq('period_start', periodStart)
    .eq('status', 'pending')
    .gt('expires_at', new Date().toISOString());

  if (pendingErr) {
    console.error('[reservationService] reserveQuota: pending count error', {
      userId,
      operationId,
      pendingErr,
    });
    return { allowed: false, code: 'DB_ERROR' };
  }

  const pending = pendingCount ?? 0;

  // Ensure a usage row exists for this period before the lock loop.
  const { error: upsertErr } = await supabaseAdmin
    .from('operation_usage')
    .upsert(
      { user_id: userId, operation_id: operationId, used_count: 0, period_start: periodStart },
      { onConflict: 'user_id,operation_id,period_start', ignoreDuplicates: true },
    );

  if (upsertErr) {
    console.error('[reservationService] reserveQuota: upsert error', {
      userId,
      operationId,
      upsertErr,
    });
    return { allowed: false, code: 'DB_ERROR' };
  }

  // Optimistic-lock increment: committed + pending must stay below quota.
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const { data: row, error: readErr } = await supabaseAdmin
      .from('operation_usage')
      .select('used_count')
      .eq('user_id', userId)
      .eq('operation_id', operationId)
      .eq('period_start', periodStart)
      .maybeSingle();

    if (readErr) {
      console.error('[reservationService] reserveQuota: read error', {
        userId,
        operationId,
        readErr,
      });
      return { allowed: false, code: 'DB_ERROR' };
    }

    const committed = Number(row?.used_count ?? 0);

    if (committed + pending >= quota) {
      return { allowed: false, code: 'QUOTA_EXHAUSTED' };
    }

    const newCount = committed + 1;

    const { data: updated, error: updateErr } = await supabaseAdmin
      .from('operation_usage')
      .update({ used_count: newCount })
      .eq('user_id', userId)
      .eq('operation_id', operationId)
      .eq('period_start', periodStart)
      .eq('used_count', committed) // optimistic lock
      .select('used_count')
      .maybeSingle();

    if (updateErr) {
      console.error('[reservationService] reserveQuota: update error', {
        userId,
        operationId,
        updateErr,
      });
      return { allowed: false, code: 'DB_ERROR' };
    }

    if (updated !== null) {
      // Deduction committed — create the reservation record.
      const { data: reservation, error: insertErr } = await supabaseAdmin
        .from('quota_reservations')
        .insert({
          user_id: userId,
          operation_id: operationId,
          period_start: periodStart,
          status: 'pending',
          idempotency_key: effectiveIdempotencyKey ?? null,
        })
        .select('id')
        .single();

      if (insertErr || !reservation) {
        // Reservation insert failed after the deduction was committed — roll back
        // the usage increment to keep the counts consistent.
        console.error('[reservationService] reserveQuota: reservation insert failed, rolling back deduction', {
          userId,
          operationId,
          insertErr,
        });
        await decrementQuotaByUserId(userId, operationId, periodStart);
        return { allowed: false, code: 'DB_ERROR' };
      }

      console.log('[reservationService] reserveQuota: reserved', {
        reservationId: reservation.id,
        userId,
        operationId,
      });

      return {
        allowed: true,
        reservationId: reservation.id as string,
        used: newCount,
        limit: quota,
      };
    }

    console.warn(
      `[reservationService] reserveQuota: optimistic lock miss (attempt ${attempt + 1}/${maxRetries})`,
      { userId, operationId },
    );
  }

  return { allowed: false, code: 'CONCURRENT_MODIFICATION' };
}

/**
 * Confirm a pending reservation — the operation succeeded, the deduction stands.
 *
 * No change to operation_usage; the credit was already deducted in reserveQuota.
 * Idempotent: safe to call multiple times (subsequent calls find status != 'pending'
 * and no-op via the WHERE clause).
 */
export async function confirmReservation(reservationId: string): Promise<void> {
  try {
    const { error } = await supabaseAdmin
      .from('quota_reservations')
      .update({ status: 'confirmed' })
      .eq('id', reservationId)
      .eq('status', 'pending');

    if (error) {
      console.error('[reservationService] confirmReservation: update error', {
        reservationId,
        error,
      });
    }
  } catch (err) {
    console.error('[reservationService] confirmReservation: unexpected error', {
      reservationId,
      err,
    });
  }
}

/**
 * Roll back a pending reservation — the operation failed, refund the deducted credit.
 *
 * Fetches the reservation to retrieve the user/operation/period context needed for
 * the decrement, then transitions status to 'rolled_back' and calls decrementQuotaByUserId.
 *
 * Idempotent: if the reservation is already resolved the status guard (WHERE status='pending')
 * prevents a double-decrement.
 *
 * Best-effort: errors logged and swallowed so a failed rollback never propagates to the caller.
 */
export async function rollbackReservation(reservationId: string): Promise<void> {
  try {
    const { data: reservation, error: fetchErr } = await supabaseAdmin
      .from('quota_reservations')
      .select('id, user_id, operation_id, period_start, status')
      .eq('id', reservationId)
      .maybeSingle();

    if (fetchErr || !reservation) {
      console.error('[reservationService] rollbackReservation: fetch error', {
        reservationId,
        fetchErr,
      });
      return;
    }

    if (reservation.status !== 'pending') {
      // Already resolved by confirm, another rollback, or TTL expiry — no-op
      return;
    }

    const { error: updateErr } = await supabaseAdmin
      .from('quota_reservations')
      .update({ status: 'rolled_back' })
      .eq('id', reservationId)
      .eq('status', 'pending'); // guard against concurrent resolution

    if (updateErr) {
      console.error('[reservationService] rollbackReservation: update error', {
        reservationId,
        updateErr,
      });
      return;
    }

    await decrementQuotaByUserId(
      reservation.user_id as string,
      reservation.operation_id as OperationId,
      reservation.period_start as string,
    );

    console.log('[reservationService] rollbackReservation: rolled back', { reservationId });
  } catch (err) {
    console.error('[reservationService] rollbackReservation: unexpected error', {
      reservationId,
      err,
    });
  }
}

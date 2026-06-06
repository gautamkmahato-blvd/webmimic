import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { PLAN_IDS } from '@/lib/billing/plans';
import { PLAN_KEYS, type PlanKey } from '@/lib/credits/config';

function planIdToPlanKey(planId: string): PlanKey | null {
  if (planId === PLAN_IDS.BASIC) return PLAN_KEYS.BASIC;
  if (planId === PLAN_IDS.PRO) return PLAN_KEYS.PRO;
  if (planId === PLAN_IDS.BASIC_ANNUALLY) return PLAN_KEYS.BASIC_ANNUALLY;
  if (planId === PLAN_IDS.PRO_ANNUALLY) return PLAN_KEYS.PRO_ANNUALLY;
  return null;
}

/**
 * Resolve plan key from a succeeded Polar payment when user_credits metadata is stale.
 */
async function resolvePlanKeyFromLatestPayment(userId: string): Promise<PlanKey | null> {
  const { data: latestPay, error } = await supabaseAdmin
    .from('payments')
    .select('plan_id')
    .eq('user_id', userId)
    .eq('status', 'succeeded')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !latestPay?.plan_id) return null;
  return planIdToPlanKey(latestPay.plan_id as string);
}

/**
 * Maps user_credits plan metadata to an internal PlanKey.
 *
 * Fail-closed defaults:
 * - `plan_type = 'Free'` → FREE
 * - Known `plan_id` → mapped plan
 * - Unknown/null metadata → FREE unless a succeeded payment resolves the plan
 */
export async function resolvePlanKeyForUser(
  userId: string,
  planId: string | null,
  planType: string | null,
): Promise<PlanKey> {
  if (planType === 'Free') return PLAN_KEYS.FREE;

  const direct = planId ? planIdToPlanKey(planId) : null;
  if (direct) return direct;

  const fromPayment = await resolvePlanKeyFromLatestPayment(userId);
  if (fromPayment) return fromPayment;

  if (planType === 'Premium') {
    // Legacy premium row without a known plan_id — conservative BASIC, not PRO.
    return PLAN_KEYS.BASIC;
  }

  return PLAN_KEYS.FREE;
}

/** Synchronous resolver when payment lookup is unavailable (no userId). */
export function resolvePlanKeySync(planId: string | null, planType: string | null): PlanKey {
  if (planType === 'Free') return PLAN_KEYS.FREE;
  const direct = planId ? planIdToPlanKey(planId) : null;
  if (direct) return direct;
  if (planType === 'Premium') return PLAN_KEYS.BASIC;
  return PLAN_KEYS.FREE;
}

import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { PLAN_IDS } from '@/lib/billing/plans';
import { PLAN_ASSET_LIMITS } from '@/lib/credits/config';

const PLAN_SAVE_LIMITS: Record<string, number> = {
  [PLAN_IDS.BASIC]: PLAN_ASSET_LIMITS.BASIC,
  [PLAN_IDS.PRO]: PLAN_ASSET_LIMITS.PRO,
  [PLAN_IDS.BASIC_ANNUALLY]: PLAN_ASSET_LIMITS.BASIC_ANNUALLY,
  [PLAN_IDS.PRO_ANNUALLY]: PLAN_ASSET_LIMITS.PRO_ANNUALLY,
};

function resolveSaveLimit(planId: string | null, planType: string | null): number {
  if (planType === 'Free' || (!planId && planType !== 'Premium')) {
    return PLAN_ASSET_LIMITS.FREE;
  }
  if (planId && planId in PLAN_SAVE_LIMITS) {
    return PLAN_SAVE_LIMITS[planId];
  }
  // Legacy premium without a known plan_id → permissive cap
  return PLAN_ASSET_LIMITS.PRO;
}

export async function checkAssetSaveLimit(userId: string): Promise<{
  allowed: boolean;
  current: number;
  limit: number;
}> {
  const { data: uc, error: ucErr } = await supabaseAdmin
    .from('user_credits')
    .select('plan_id, plan_type')
    .eq('user_id', userId)
    .maybeSingle();

  if (ucErr) {
    console.error('[checkAssetSaveLimit] user_credits lookup error', ucErr);
    return { allowed: true, current: 0, limit: PLAN_ASSET_LIMITS.PRO };
  }

  const planId = (uc?.plan_id as string | null) ?? null;
  const planType = (uc?.plan_type as string | null) ?? null;
  const limit = resolveSaveLimit(planId, planType);

  const { count, error: countErr } = await supabaseAdmin
    .from('assets')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);

  if (countErr) {
    console.error('[checkAssetSaveLimit] count error', countErr);
    return { allowed: true, current: 0, limit };
  }

  const current = count ?? 0;
  return { allowed: current < limit, current, limit };
}

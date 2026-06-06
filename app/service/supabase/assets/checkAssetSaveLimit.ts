import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { PLAN_ASSET_LIMITS } from '@/lib/credits/config';
import { resolvePlanKeyForUser } from '@/app/service/supabase/extension/resolvePlanKey';

export type AssetSaveLimitResult =
  | { allowed: boolean; current: number; limit: number; error?: undefined }
  | { allowed: false; current: 0; limit: number; error: 'DB_ERROR' };

export async function checkAssetSaveLimit(userId: string): Promise<AssetSaveLimitResult> {
  const { data: uc, error: ucErr } = await supabaseAdmin
    .from('user_credits')
    .select('plan_id, plan_type')
    .eq('user_id', userId)
    .maybeSingle();

  if (ucErr) {
    console.error('[checkAssetSaveLimit] user_credits lookup error', ucErr);
    return { allowed: false, current: 0, limit: PLAN_ASSET_LIMITS.FREE, error: 'DB_ERROR' };
  }

  const planId = (uc?.plan_id as string | null) ?? null;
  const planType = (uc?.plan_type as string | null) ?? null;
  const planKey = await resolvePlanKeyForUser(userId, planId, planType);
  const limit = PLAN_ASSET_LIMITS[planKey];

  const { count, error: countErr } = await supabaseAdmin
    .from('assets')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);

  if (countErr) {
    console.error('[checkAssetSaveLimit] count error', countErr);
    return { allowed: false, current: 0, limit, error: 'DB_ERROR' };
  }

  const current = count ?? 0;
  return { allowed: current < limit, current, limit };
}

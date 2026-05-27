import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { grantFreeSignupCredits } from '@/app/service/supabase/user/grantFreeSignupCredits';

/**
 * Access rule:
 *   - plan_type === 'Free'    → denied.
 *   - plan_type === 'Premium' → allowed.
 *   - plan_type === null      → legacy row; allowed only when a succeeded payment exists.
 */
async function resolveIsPremium(userId: string, planType: string | null): Promise<boolean> {
  if (planType === 'Premium') return true;
  if (planType === 'Free') return false;

  const { data: pay, error } = await supabaseAdmin
    .from('payments')
    .select('id')
    .eq('user_id', userId)
    .eq('status', 'succeeded')
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error('[hasPremiumAccess] payments lookup', error);
    return false;
  }

  return !!pay;
}

export async function hasPremiumAccessForClerkId(clerkId: string): Promise<{
  premium: boolean;
  planType: string | null;
}> {
  const { data: user, error } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .maybeSingle();

  if (error || !user) {
    return { premium: false, planType: null };
  }

  const userId = user.id as string;

  const { data: uc, error: ucErr } = await supabaseAdmin
    .from('user_credits')
    .select('plan_type')
    .eq('user_id', userId)
    .maybeSingle();

  if (ucErr) {
    console.error('[hasPremiumAccess] user_credits', ucErr);
    return { premium: false, planType: null };
  }

  if (!uc) {
    await grantFreeSignupCredits(userId);
    const { data: ucAfter } = await supabaseAdmin
      .from('user_credits')
      .select('plan_type')
      .eq('user_id', userId)
      .maybeSingle();
    const planType = (ucAfter?.plan_type as string | null) ?? null;
    return { premium: await resolveIsPremium(userId, planType), planType };
  }

  const planType = (uc.plan_type as string | null) ?? null;
  return { premium: await resolveIsPremium(userId, planType), planType };
}

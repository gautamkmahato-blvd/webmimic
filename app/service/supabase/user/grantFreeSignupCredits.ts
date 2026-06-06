import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';

/**
 * Ensure a user_credits row exists for a new user.
 *
 * Uses upsert with ignoreDuplicates so it is fully idempotent:
 * - If the row doesn't exist  → creates it with plan_type='Free' and zero balance.
 * - If the row already exists → does nothing (paid users are safe).
 *
 * Never throws — a failed row creation must not block user registration.
 */
export async function grantFreeSignupCredits(userId: string): Promise<boolean> {
  try {
    const now = new Date().toISOString();

    const { error } = await supabaseAdmin
      .from('user_credits')
      .upsert(
        {
          user_id: userId,
          plan_id: null,
          plan_type: 'Free',
          total_credits: 0,
          remaining_credits: 0,
          updated_at: now,
        },
        {
          onConflict: 'user_id',
          ignoreDuplicates: true,
        }
      );

    if (error) {
      console.error('[grantFreeSignupCredits] upsert error', { userId, error });
      return false;
    }

    return true;
  } catch (err) {
    console.error('[grantFreeSignupCredits] unexpected error', { userId, err });
    return false;
  }
}

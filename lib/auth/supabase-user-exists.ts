import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';

/** True when a `users` row exists for this Clerk ID. */
export async function supabaseUserExistsByClerkId(clerkId: string): Promise<boolean> {
  if (!clerkId) return false;

  const { data, error } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('clerk_id', clerkId)
    .maybeSingle();

  if (error) {
    console.error('[supabaseUserExistsByClerkId]', error);
    return false;
  }

  return !!data?.id;
}

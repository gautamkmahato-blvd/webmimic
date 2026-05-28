import { clerkClient } from '@clerk/nextjs/server';
import createOrUpdateUser from '@/app/service/supabase/user/createOrUpdateUser';
import { grantFreeSignupCredits } from '@/app/service/supabase/user/grantFreeSignupCredits';
import { supabaseUserExistsByClerkId } from '@/lib/auth/supabase-user-exists';

/** Grace window for webhook-missed new signups (also used by /api/user/details). */
export const CLERK_PROVISION_GRACE_MS = 10 * 60 * 1000;

export function isRecentClerkSignup(createdAt: Date | number | null | undefined): boolean {
  const createdMs = createdAt instanceof Date ? createdAt.getTime() : Number(createdAt ?? 0);
  if (!createdMs) return false;
  return Date.now() - createdMs <= CLERK_PROVISION_GRACE_MS;
}

export async function provisionUserFromClerk(clerkId: string): Promise<{ success: boolean; userId?: string }> {
  try {
    const client = await clerkClient();
    const u = await client.users.getUser(clerkId);
    const email = u.emailAddresses?.[0]?.emailAddress ?? null;
    const name =
      [u.firstName, u.lastName].filter(Boolean).join(' ').trim() || u.username || null;

    const res = await createOrUpdateUser({
      clerk_id: clerkId,
      name,
      username: u.username ?? null,
      email,
      image: u.imageUrl ?? null,
    });

    if (!res.success) {
      console.error('[provisionUserFromClerk] createOrUpdateUser failed', res.error);
      return { success: false };
    }

    const userId = res.result?.id as string | undefined;
    if (userId) {
      await grantFreeSignupCredits(userId);
    }

    return { success: true, userId };
  } catch (e) {
    console.error('[provisionUserFromClerk]', e);
    return { success: false };
  }
}

/**
 * Web/API fallback: provision only for brand-new Clerk accounts (webhook grace window).
 */
export async function syncUserFromClerkIfMissing(clerkId: string): Promise<boolean> {
  if (await supabaseUserExistsByClerkId(clerkId)) return true;

  try {
    const client = await clerkClient();
    const u = await client.users.getUser(clerkId);
    if (!isRecentClerkSignup(u.createdAt)) return false;
    const res = await provisionUserFromClerk(clerkId);
    return res.success;
  } catch (e) {
    console.error('[syncUserFromClerkIfMissing]', e);
    return false;
  }
}

export type EnsureAppUserResult =
  | { ok: true }
  | { ok: false; reason: 'removed' | 'provision_failed' };

/**
 * Middleware gate: allow existing users; auto-provision new signups; sign out removed accounts.
 */
export async function ensureAppUserForClerkSession(clerkId: string): Promise<EnsureAppUserResult> {
  if (await supabaseUserExistsByClerkId(clerkId)) {
    return { ok: true };
  }

  let createdAt: Date | number | null = null;
  try {
    const client = await clerkClient();
    const u = await client.users.getUser(clerkId);
    createdAt = u.createdAt;
  } catch (e) {
    console.error('[ensureAppUserForClerkSession] clerk lookup failed', e);
    return { ok: false, reason: 'removed' };
  }

  if (!isRecentClerkSignup(createdAt)) {
    return { ok: false, reason: 'removed' };
  }

  const provisioned = await provisionUserFromClerk(clerkId);
  if (provisioned.success) {
    return { ok: true };
  }

  return { ok: false, reason: 'provision_failed' };
}

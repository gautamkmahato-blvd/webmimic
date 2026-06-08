import { v2 as cloudinary } from 'cloudinary';
import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { revokeExtensionTokensForClerk } from '@/lib/extension-jwt-revocation';
import { ServiceResponse } from '@/types/ServiceResponse';

const LOG_PREFIX = '[deleteUser]';
const CLOUDINARY_CONCURRENCY = 5;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type DeleteUserInput = {
  /** Clerk user id (preferred when deleting from auth webhooks). */
  clerkId?: string | null;
  /** Internal Supabase users.id uuid. */
  userId?: string | null;
};

export type DeleteUserDeletedCounts = {
  assets: number;
  payments: number;
  creditTransactions: number;
  hadUserCredits: boolean;
};

export type DeleteUserCloudinaryCleanup = {
  attempted: number;
  succeeded: number;
  failed: number;
  skipped: number;
};

export type DeleteUserResult = {
  deleted: boolean;
  alreadyDeleted: boolean;
  userId: string | null;
  clerkId: string | null;
  deletedCounts: DeleteUserDeletedCounts;
  cloudinaryCleanup: DeleteUserCloudinaryCleanup;
  extensionTokensRevoked: boolean;
  warnings: string[];
};

type ResolvedUser = {
  id: string;
  clerk_id: string;
  email: string | null;
};

type CloudinaryTarget = {
  publicId: string;
  resourceType: 'image' | 'video' | 'raw';
};

function isValidUuid(value: string): boolean {
  return UUID_RE.test(value);
}

function normalizeOptionalId(value: string | null | undefined): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function cloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_NAME?.trim() &&
      process.env.CLOUDINARY_API_KEY?.trim() &&
      process.env.CLOUDINARY_API_SECRET?.trim(),
  );
}

function ensureCloudinaryConfig(): void {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME?.trim(),
    api_key: process.env.CLOUDINARY_API_KEY?.trim(),
    api_secret: process.env.CLOUDINARY_API_SECRET?.trim(),
  });
}

/**
 * Extract Cloudinary public_id + resource type from a secure URL.
 * Only returns a target when the URL belongs to our configured cloud.
 */
function parseCloudinaryTarget(url: string | null | undefined): CloudinaryTarget | null {
  if (!url || typeof url !== 'string') return null;

  const cloudName = process.env.CLOUDINARY_NAME?.trim();
  if (!cloudName) return null;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  if (!parsed.hostname.includes('cloudinary.com')) return null;
  if (!parsed.pathname.includes(`/${cloudName}/`)) return null;

  const resourceMatch = parsed.pathname.match(/\/(image|video|raw)\/upload\//);
  if (!resourceMatch) return null;

  const resourceType = resourceMatch[1] as CloudinaryTarget['resourceType'];
  const uploadIdx = parsed.pathname.indexOf('/upload/');
  if (uploadIdx === -1) return null;

  let publicId = parsed.pathname.slice(uploadIdx + '/upload/'.length);
  publicId = publicId.replace(/^v\d+\//, '');
  publicId = publicId.replace(/\.[a-zA-Z0-9]+$/, '');

  if (!publicId) return null;

  return { publicId, resourceType };
}

function cloudinaryTargetKey(target: CloudinaryTarget): string {
  return `${target.resourceType}:${target.publicId}`;
}

async function countRows(
  table: 'assets' | 'payments' | 'credit_transactions',
  userId: string,
): Promise<number> {
  const { count, error } = await supabaseAdmin
    .from(table)
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId);

  if (error) {
    console.error(`${LOG_PREFIX} count ${table} failed`, { userId, error });
    throw new Error(`Failed to count ${table}: ${error.message}`);
  }

  return count ?? 0;
}

async function userHasCreditsRow(userId: string): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from('user_credits')
    .select('id')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error(`${LOG_PREFIX} user_credits lookup failed`, { userId, error });
    throw new Error(`Failed to look up user_credits: ${error.message}`);
  }

  return Boolean(data);
}

async function resolveUser(input: DeleteUserInput): Promise<ResolvedUser | null> {
  const clerkId = normalizeOptionalId(input.clerkId);
  const userId = normalizeOptionalId(input.userId);

  if (!clerkId && !userId) {
    throw new Error('Either clerkId or userId is required');
  }

  if (userId && !isValidUuid(userId)) {
    throw new Error('userId must be a valid UUID');
  }

  if (clerkId && userId) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id, clerk_id, email')
      .eq('clerk_id', clerkId)
      .maybeSingle();

    if (error) {
      console.error(`${LOG_PREFIX} resolve user by clerkId failed`, { clerkId, error });
      throw new Error(`Failed to resolve user: ${error.message}`);
    }

    if (!data) return null;
    if (data.id !== userId) {
      throw new Error('clerkId and userId refer to different users');
    }

    return data as ResolvedUser;
  }

  if (userId) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('id, clerk_id, email')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error(`${LOG_PREFIX} resolve user by userId failed`, { userId, error });
      throw new Error(`Failed to resolve user: ${error.message}`);
    }

    return (data as ResolvedUser | null) ?? null;
  }

  const { data, error } = await supabaseAdmin
    .from('users')
    .select('id, clerk_id, email')
    .eq('clerk_id', clerkId!)
    .maybeSingle();

  if (error) {
    console.error(`${LOG_PREFIX} resolve user by clerkId failed`, { clerkId, error });
    throw new Error(`Failed to resolve user: ${error.message}`);
  }

  return (data as ResolvedUser | null) ?? null;
}

async function fetchAssetUrls(userId: string): Promise<string[]> {
  const { data, error } = await supabaseAdmin
    .from('assets')
    .select('url')
    .eq('user_id', userId);

  if (error) {
    console.error(`${LOG_PREFIX} fetch asset urls failed`, { userId, error });
    throw new Error(`Failed to fetch assets: ${error.message}`);
  }

  return (data ?? [])
    .map((row) => (typeof row.url === 'string' ? row.url : null))
    .filter((url): url is string => Boolean(url));
}

async function destroyCloudinaryTarget(target: CloudinaryTarget): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    cloudinary.uploader.destroy(
      target.publicId,
      { resource_type: target.resourceType },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        const status = (result as { result?: string } | undefined)?.result;
        if (status === 'ok' || status === 'not found') {
          resolve();
          return;
        }

        reject(new Error(`Unexpected Cloudinary destroy result: ${status ?? 'unknown'}`));
      },
    );
  });
}

async function cleanupCloudinaryAssets(urls: string[]): Promise<DeleteUserCloudinaryCleanup> {
  const summary: DeleteUserCloudinaryCleanup = {
    attempted: 0,
    succeeded: 0,
    failed: 0,
    skipped: 0,
  };

  if (urls.length === 0) return summary;

  if (!cloudinaryConfigured()) {
    summary.skipped = urls.length;
    return summary;
  }

  ensureCloudinaryConfig();

  const uniqueTargets = new Map<string, CloudinaryTarget>();
  for (const url of urls) {
    const target = parseCloudinaryTarget(url);
    if (!target) {
      summary.skipped += 1;
      continue;
    }
    uniqueTargets.set(cloudinaryTargetKey(target), target);
  }

  const targets = [...uniqueTargets.values()];
  summary.attempted = targets.length;

  for (let i = 0; i < targets.length; i += CLOUDINARY_CONCURRENCY) {
    const batch = targets.slice(i, i + CLOUDINARY_CONCURRENCY);
    const results = await Promise.allSettled(batch.map((target) => destroyCloudinaryTarget(target)));

    for (const result of results) {
      if (result.status === 'fulfilled') {
        summary.succeeded += 1;
      } else {
        summary.failed += 1;
        console.error(`${LOG_PREFIX} cloudinary destroy failed`, result.reason);
      }
    }
  }

  return summary;
}

async function deleteUserRow(userId: string): Promise<void> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .delete()
    .eq('id', userId)
    .select('id')
    .maybeSingle();

  if (error) {
    console.error(`${LOG_PREFIX} delete users row failed`, { userId, error });
    throw new Error(`Failed to delete user: ${error.message}`);
  }

  if (!data) {
    throw new Error('User delete returned no row — user may have been removed concurrently');
  }
}

async function verifyUserDeleted(userId: string): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    console.error(`${LOG_PREFIX} post-delete verification failed`, { userId, error });
    throw new Error(`Failed to verify user deletion: ${error.message}`);
  }

  return !data;
}

/**
 * Permanently delete a user and all Supabase data tied to them.
 *
 * Cascades (via FK on delete cascade from `users`):
 * - assets
 * - payments
 * - user_credits
 * - credit_transactions
 *
 * Also performs best-effort cleanup of:
 * - Cloudinary media referenced by asset URLs (our cloud only)
 * - Extension JWT revocation marker (Upstash Redis when configured)
 *
 * Idempotent: if the user row is already gone, returns success with `alreadyDeleted: true`.
 * Does not delete Clerk or Polar records — handle those in the calling layer.
 */
export async function deleteUser(
  input: DeleteUserInput,
): Promise<ServiceResponse<DeleteUserResult>> {
  const warnings: string[] = [];

  try {
    const user = await resolveUser(input);

    if (!user) {
      return {
        success: true,
        result: {
          deleted: false,
          alreadyDeleted: true,
          userId: normalizeOptionalId(input.userId),
          clerkId: normalizeOptionalId(input.clerkId),
          deletedCounts: {
            assets: 0,
            payments: 0,
            creditTransactions: 0,
            hadUserCredits: false,
          },
          cloudinaryCleanup: {
            attempted: 0,
            succeeded: 0,
            failed: 0,
            skipped: 0,
          },
          extensionTokensRevoked: false,
          warnings,
        },
        message: 'User already deleted or not found',
      };
    }

    const { id: userId, clerk_id: clerkId } = user;

    const [assetsCount, paymentsCount, creditTransactionsCount, hadUserCredits, assetUrls] =
      await Promise.all([
        countRows('assets', userId),
        countRows('payments', userId),
        countRows('credit_transactions', userId),
        userHasCreditsRow(userId),
        fetchAssetUrls(userId),
      ]);

    let extensionTokensRevoked = false;
    try {
      const revokeResult = await revokeExtensionTokensForClerk(clerkId);
      extensionTokensRevoked = revokeResult.ok;
      if (!revokeResult.ok) {
        warnings.push('Extension token revocation unavailable');
      }
    } catch (revokeErr) {
      console.error(`${LOG_PREFIX} extension revoke failed`, { clerkId, revokeErr });
      warnings.push('Extension token revocation failed');
    }

    const cloudinaryCleanup = await cleanupCloudinaryAssets(assetUrls);
    if (cloudinaryCleanup.failed > 0) {
      warnings.push(
        `Cloudinary cleanup incomplete (${cloudinaryCleanup.failed} of ${cloudinaryCleanup.attempted} failed)`,
      );
    }
    if (assetUrls.length > 0 && !cloudinaryConfigured()) {
      warnings.push('Cloudinary not configured — remote media was not deleted');
    }

    await deleteUserRow(userId);

    const verified = await verifyUserDeleted(userId);
    if (!verified) {
      throw new Error('User row still exists after delete');
    }

    const result: DeleteUserResult = {
      deleted: true,
      alreadyDeleted: false,
      userId,
      clerkId,
      deletedCounts: {
        assets: assetsCount,
        payments: paymentsCount,
        creditTransactions: creditTransactionsCount,
        hadUserCredits,
      },
      cloudinaryCleanup,
      extensionTokensRevoked,
      warnings,
    };

    console.info(`${LOG_PREFIX} user deleted`, {
      userId,
      clerkId,
      email: user.email,
      deletedCounts: result.deletedCounts,
      cloudinaryCleanup: result.cloudinaryCleanup,
      extensionTokensRevoked,
      warnings,
    });

    return {
      success: true,
      result,
      message: 'User and related data deleted successfully',
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`${LOG_PREFIX} unexpected error`, err);

    return {
      success: false,
      result: {
        deleted: false,
        alreadyDeleted: false,
        userId: normalizeOptionalId(input.userId),
        clerkId: normalizeOptionalId(input.clerkId),
        deletedCounts: {
          assets: 0,
          payments: 0,
          creditTransactions: 0,
          hadUserCredits: false,
        },
        cloudinaryCleanup: {
          attempted: 0,
          succeeded: 0,
          failed: 0,
          skipped: 0,
        },
        extensionTokensRevoked: false,
        warnings,
      },
      error: 'DELETE_USER_FAILED',
      message,
    };
  }
}

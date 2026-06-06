import { Redis } from '@upstash/redis';

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const hasRedis = Boolean(url && token);

if (!hasRedis) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      '[extension-jwt-revocation] UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be set in production — extension JWT revocation cannot be disabled',
    );
  }
  console.warn(
    '[extension-jwt-revocation] Redis not configured — using in-memory revocation store (dev/test only)',
  );
}

const redis = hasRedis ? new Redis({ url: url!, token: token! }) : null;

const REVOKE_KEY_PREFIX = 'ext:jwt:revoke-after:';
/** Keep revocation markers slightly longer than max JWT TTL. */
const REVOKE_TTL_SECONDS = 90_000;

type MemoryRevocation = { revokedAfter: number; expiresAt: number };

/** Dev-only fallback when Upstash is not configured. */
const memoryRevocations = new Map<string, MemoryRevocation>();

function revokeKey(clerkId: string): string {
  return `${REVOKE_KEY_PREFIX}${clerkId}`;
}

function setMemoryRevocation(clerkId: string, revokedAfter: number): void {
  memoryRevocations.set(clerkId, {
    revokedAfter,
    expiresAt: Date.now() + REVOKE_TTL_SECONDS * 1000,
  });
}

function getMemoryRevocation(clerkId: string): number | null {
  const entry = memoryRevocations.get(clerkId);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    memoryRevocations.delete(clerkId);
    return null;
  }
  return entry.revokedAfter;
}

export type RevokeExtensionTokensResult =
  | { ok: true }
  | { ok: false; code: 'REVOKE_UNAVAILABLE' };

/**
 * Marks all extension JWTs issued before `now` as invalid for this Clerk user.
 * Uses Upstash Redis in all environments where it is configured; otherwise an
 * in-memory store in development only.
 */
export async function revokeExtensionTokensForClerk(
  clerkId: string,
): Promise<RevokeExtensionTokensResult> {
  if (!clerkId) {
    return { ok: false, code: 'REVOKE_UNAVAILABLE' };
  }

  const revokedAfter = Math.floor(Date.now() / 1000);

  if (redis) {
    await redis.set(revokeKey(clerkId), revokedAfter, { ex: REVOKE_TTL_SECONDS });
    return { ok: true };
  }

  if (process.env.NODE_ENV !== 'production') {
    setMemoryRevocation(clerkId, revokedAfter);
    return { ok: true };
  }

  return { ok: false, code: 'REVOKE_UNAVAILABLE' };
}

/**
 * Returns the unix timestamp after which newly issued tokens must have been minted.
 * Tokens with `iat` strictly less than this value are rejected.
 */
export async function getExtensionJwtRevokedAfter(clerkId: string): Promise<number | null> {
  if (!clerkId) return null;

  if (redis) {
    const value = await redis.get<number>(revokeKey(clerkId));
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
  }

  if (process.env.NODE_ENV !== 'production') {
    return getMemoryRevocation(clerkId);
  }

  return null;
}

export function isExtensionJwtRevoked(iat: unknown, revokedAfter: number | null): boolean {
  if (revokedAfter == null) return false;
  if (typeof iat !== 'number' || !Number.isFinite(iat)) return true;
  return iat < revokedAfter;
}

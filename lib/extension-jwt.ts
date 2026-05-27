import { jwtVerify } from 'jose';
import { createPublicKey } from 'node:crypto';

/** Extension JWT lifetime in seconds (default 24h). Override with EXTENSION_JWT_TTL_SECONDS. */
export function getExtensionJwtTtlSeconds(): number {
  const raw = process.env.EXTENSION_JWT_TTL_SECONDS?.trim();
  if (raw) {
    const parsed = Number.parseInt(raw, 10);
    if (Number.isFinite(parsed) && parsed >= 300) {
      return parsed;
    }
  }
  return 86_400;
}

// Fail fast in production: JWT issuer must come from env, not untrusted request headers.
if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_APP_URL?.trim()) {
  throw new Error(
    '[extension-jwt] NEXT_PUBLIC_APP_URL must be set in production — JWT issuer cannot be derived from request headers'
  );
}

/**
 * JWT `iss` claim — must match across issue-token, refresh-extension-token, and extension background verify.
 * In production, always uses NEXT_PUBLIC_APP_URL. In development only, falls back to request headers.
 */
export function getIssuer(request: Request): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* ignore invalid URL, fall through */
    }
  }
  // Development only path — NEXT_PUBLIC_APP_URL not set.
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') ?? 'http';
  if (host) {
    return `${proto}://${host}`;
  }
  return 'http://localhost:3000';
}

/**
 * `iss` values accepted when verifying extension JWTs. Minting uses {@link getIssuer} for the
 * callback request; API calls from the extension may hit the same app via `localhost` vs
 * `127.0.0.1` (different Host → different {@link getIssuer}). Include env origin, request
 * issuer, and localhost/127.0.0.1 aliases so verification matches the signed token.
 */
export function getExtensionJwtVerifyIssuers(req: Request): string[] {
  const set = new Set<string>();
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (fromEnv) {
    try {
      set.add(new URL(fromEnv).origin);
    } catch {
      /* ignore */
    }
  }
  set.add(getIssuer(req));

  const withAliases = new Set<string>(set);
  for (const origin of set) {
    try {
      const u = new URL(origin);
      if (u.hostname !== 'localhost' && u.hostname !== '127.0.0.1') continue;
      const portPart = u.port ? `:${u.port}` : '';
      const otherHost = u.hostname === 'localhost' ? '127.0.0.1' : 'localhost';
      withAliases.add(`${u.protocol}//${otherHost}${portPart}`);
    } catch {
      /* ignore */
    }
  }
  return [...withAliases];
}

/**
 * Chrome extension id for JWT `aud`. Prefer `X-Extension-Id` from the installing
 * extension (auth bridge / panel) so unpacked dev builds work when .env is stale.
 */
export function getExtensionAudienceFromRequest(req: Request): string | null {
  const fromHeader = req.headers.get('X-Extension-Id')?.trim();
  const fromEnv = process.env.EXTENSION_CHROME_ID?.trim();
  return fromHeader || fromEnv || null;
}

/** All acceptable `aud` values when verifying an extension JWT. */
export function getExtensionAudienceVerifyList(req: Request): string[] {
  const fromHeader = req.headers.get('X-Extension-Id')?.trim();
  const fromEnv = process.env.EXTENSION_CHROME_ID?.trim();
  return [...new Set([fromHeader, fromEnv].filter((x): x is string => Boolean(x)))];
}

/**
 * Verifies the extension's custom RS256 JWT (same rules as POST /api/refresh-extension-token).
 * Returns Clerk `sub` or null.
 */
export async function getClerkIdFromExtensionJwt(req: Request, token: string): Promise<string | null> {
  const pubPem = process.env.EXTENSION_JWT_PUBLIC_KEY?.trim();
  const audiences = getExtensionAudienceVerifyList(req);
  if (!pubPem || audiences.length === 0) return null;

  let publicKey: ReturnType<typeof createPublicKey>;
  try {
    publicKey = createPublicKey(pubPem);
  } catch {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, publicKey, {
      audience: audiences.length === 1 ? audiences[0] : audiences,
      issuer: getExtensionJwtVerifyIssuers(req),
    });
    const sub = payload.sub;
    return typeof sub === 'string' && sub ? sub : null;
  } catch {
    return null;
  }
}

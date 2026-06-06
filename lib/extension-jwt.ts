import { jwtVerify } from 'jose';
import { createPublicKey } from 'node:crypto';
import {
  getExtensionJwtRevokedAfter,
  isExtensionJwtRevoked,
} from '@/lib/extension-jwt-revocation';

const CHROME_EXTENSION_ID_RE = /^[a-z]{32}$/;

export function isValidChromeExtensionId(id: string): boolean {
  return CHROME_EXTENSION_ID_RE.test(id.trim());
}

function getConfiguredExtensionId(): string | null {
  const id = process.env.EXTENSION_CHROME_ID?.trim();
  return id && isValidChromeExtensionId(id) ? id : null;
}

function getDevExtensionAllowlist(): Set<string> {
  const raw = process.env.ALLOW_DEV_EXTENSION_IDS?.trim();
  if (!raw) return new Set();
  return new Set(
    raw
      .split(',')
      .map((part) => part.trim())
      .filter((part) => isValidChromeExtensionId(part)),
  );
}

export type ExtensionAudienceMintResult =
  | { ok: true; aud: string }
  | { ok: false; code: 'MISSING_CONFIG' | 'INVALID_EXTENSION_ID' | 'EXTENSION_ID_NOT_ALLOWED' };

/**
 * Resolves JWT `aud` when minting a new extension token.
 * Production: always the configured store extension id; rejects mismatched X-Extension-Id.
 * Development: allows X-Extension-Id for unpacked builds on the dev allowlist.
 */
export function resolveExtensionAudienceForMint(req: Request): ExtensionAudienceMintResult {
  const configured = getConfiguredExtensionId();
  const fromHeader = req.headers.get('X-Extension-Id')?.trim() || null;

  if (process.env.NODE_ENV === 'production') {
    if (!configured) {
      return { ok: false, code: 'MISSING_CONFIG' };
    }
    // Mint for the requesting extension (content script sends chrome.runtime.id).
    // background.mjs verifies audience against runtime.id — aud must match the caller.
    if (fromHeader && isValidChromeExtensionId(fromHeader)) {
      return { ok: true, aud: fromHeader };
    }
    return { ok: true, aud: configured };
  }

  if (fromHeader) {
    if (!isValidChromeExtensionId(fromHeader)) {
      return { ok: false, code: 'INVALID_EXTENSION_ID' };
    }
    const allowlist = getDevExtensionAllowlist();
    if (configured && fromHeader !== configured && !allowlist.has(fromHeader)) {
      return { ok: false, code: 'EXTENSION_ID_NOT_ALLOWED' };
    }
    return { ok: true, aud: fromHeader };
  }

  if (configured) {
    return { ok: true, aud: configured };
  }

  return { ok: false, code: 'MISSING_CONFIG' };
}

/** Audiences accepted when verifying an extension JWT. */
export function resolveExtensionAudiencesForVerify(req: Request): string[] {
  const configured = getConfiguredExtensionId();
  const fromHeader = req.headers.get('X-Extension-Id')?.trim() || null;

  if (process.env.NODE_ENV === 'production') {
    const allowed = new Set<string>();
    if (configured) allowed.add(configured);
    if (fromHeader && isValidChromeExtensionId(fromHeader)) {
      allowed.add(fromHeader);
    }
    return [...allowed];
  }

  const allowed = new Set<string>();
  if (configured) allowed.add(configured);
  if (fromHeader && isValidChromeExtensionId(fromHeader)) {
    const allowlist = getDevExtensionAllowlist();
    if (!configured || fromHeader === configured || allowlist.has(fromHeader)) {
      allowed.add(fromHeader);
    }
  }
  return [...allowed];
}

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

// Fail fast in production: JWT issuer and extension audience must come from env.
if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_APP_URL?.trim()) {
  throw new Error(
    '[extension-jwt] NEXT_PUBLIC_APP_URL must be set in production — JWT issuer cannot be derived from request headers'
  );
}
if (process.env.NODE_ENV === 'production' && !getConfiguredExtensionId()) {
  throw new Error(
    '[extension-jwt] EXTENSION_CHROME_ID must be set in production — extension JWT audience cannot be derived from request headers'
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

/** @deprecated Use {@link resolveExtensionAudienceForMint} */
export function getExtensionAudienceFromRequest(req: Request): string | null {
  const resolved = resolveExtensionAudienceForMint(req);
  return resolved.ok ? resolved.aud : null;
}

/** @deprecated Use {@link resolveExtensionAudiencesForVerify} */
export function getExtensionAudienceVerifyList(req: Request): string[] {
  return resolveExtensionAudiencesForVerify(req);
}

/**
 * Verifies the extension's custom RS256 JWT (same rules as POST /api/refresh-extension-token).
 * Returns Clerk `sub` or null.
 */
export async function getClerkIdFromExtensionJwt(req: Request, token: string): Promise<string | null> {
  const pubPem = process.env.EXTENSION_JWT_PUBLIC_KEY?.trim();
  const audiences = resolveExtensionAudiencesForVerify(req);
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
    if (typeof sub !== 'string' || !sub) return null;

    const revokedAfter = await getExtensionJwtRevokedAfter(sub);
    if (isExtensionJwtRevoked(payload.iat, revokedAfter)) {
      return null;
    }

    return sub;
  } catch {
    return null;
  }
}

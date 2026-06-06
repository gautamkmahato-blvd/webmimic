import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getClerkIdFromExtensionJwt, isValidChromeExtensionId } from '@/lib/extension-jwt';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

const _extensionId = process.env.EXTENSION_CHROME_ID?.trim();
const _configuredExtensionId =
  _extensionId && isValidChromeExtensionId(_extensionId) ? _extensionId : null;

if (process.env.NODE_ENV === 'production' && !_configuredExtensionId) {
  throw new Error(
    '[extension-route-helpers] EXTENSION_CHROME_ID must be set in production — extension CORS cannot be configured'
  );
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

function resolveExtensionCorsOrigin(req?: Request): string {
  if (process.env.NODE_ENV === 'production') {
    return _configuredExtensionId ? `chrome-extension://${_configuredExtensionId}` : 'null';
  }

  const fromHeader = req?.headers.get('X-Extension-Id')?.trim();
  if (fromHeader && isValidChromeExtensionId(fromHeader)) {
    const allowlist = getDevExtensionAllowlist();
    if (
      !_configuredExtensionId ||
      fromHeader === _configuredExtensionId ||
      allowlist.has(fromHeader)
    ) {
      return `chrome-extension://${fromHeader}`;
    }
  }

  if (_configuredExtensionId) {
    return `chrome-extension://${_configuredExtensionId}`;
  }

  return 'null';
}

/** CORS for browser extension calling APIs from chrome-extension:// origins */
export function getExtensionCorsHeaders(req?: Request): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': resolveExtensionCorsOrigin(req),
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type, X-Extension-Id',
  };
}

function getAllowedWebAppOrigins(): string[] {
  const origins: string[] = [];
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (appUrl) {
    try {
      origins.push(new URL(appUrl).origin);
    } catch {
      // ignore invalid URL
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    origins.push('http://localhost:3000', 'http://127.0.0.1:3000');
  }
  return origins;
}

/** CORS for web app routes that accept Clerk session cookies (not extension origins). */
export function getWebAppCorsHeaders(req?: Request): Record<string, string> {
  const allowed = getAllowedWebAppOrigins();
  const origin = req?.headers.get('Origin')?.trim();
  let allowOrigin = 'null';
  if (origin && allowed.includes(origin)) {
    allowOrigin = origin;
  } else if (allowed.length > 0) {
    allowOrigin = allowed[0];
  }
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  };
}

/** CORS for routes that accept Bearer from the extension or Clerk session from the web app. */
export function getBearerRouteCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('Origin')?.trim();
  if (origin?.startsWith('chrome-extension://')) {
    return getExtensionCorsHeaders(req);
  }
  return getWebAppCorsHeaders(req);
}

/**
 * Extract the raw Bearer token string from the Authorization header.
 * Single source of truth for the extraction regex — update here to affect all routes.
 */
export function extractBearerToken(req: Request): string | null {
  return req.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim() || null;
}

/**
 * Bearer must be a custom RS256 extension JWT issued by POST /api/extension/issue-token.
 */
export async function resolveClerkIdFromBearerRequest(req: Request): Promise<string | null> {
  const bearer = extractBearerToken(req);
  if (!bearer) return null;
  return getClerkIdFromExtensionJwt(req, bearer);
}

/**
 * Resolve the authenticated Clerk user ID for routes that accept both extension
 * Bearer tokens and web session cookies.
 * Tries Bearer first (extension), falls back to the Clerk session cookie (web).
 */
export async function resolveClerkId(req: Request): Promise<string | null> {
  const bearer = extractBearerToken(req);
  if (bearer) {
    return resolveClerkIdFromBearerRequest(req);
  }
  const { userId } = await auth();
  return userId ?? null;
}

export async function getClerkIdFromExtensionBearer(req: Request): Promise<string | null> {
  const bearer = extractBearerToken(req);
  if (!bearer) return null;
  return getClerkIdFromExtensionJwt(req, bearer);
}

/**
 * Restricted extension features: valid Clerk session token + Premium plan.
 */
export async function requirePremiumExtension(req: Request): Promise<
  { ok: true; clerkId: string } | { ok: false; response: NextResponse }
> {
  const corsHeaders = getExtensionCorsHeaders(req);
  const clerkId = await getClerkIdFromExtensionBearer(req);
  if (!clerkId) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: corsHeaders }
      ),
    };
  }
  const { premium, planType } = await hasPremiumAccessForClerkId(clerkId);
  if (!premium) {
    const isFreeUser = planType === 'Free';
    return {
      ok: false,
      response: NextResponse.json(
        {
          success: false,
          error: isFreeUser
            ? 'This feature requires a paid plan. Upgrade to access it.'
            : 'No credits remaining. Purchase credits to use this feature.',
          code: isFreeUser ? 'FREE_PLAN_NOT_ALLOWED' : 'INSUFFICIENT_CREDITS',
        },
        { status: 403, headers: corsHeaders }
      ),
    };
  }
  return { ok: true, clerkId };
}

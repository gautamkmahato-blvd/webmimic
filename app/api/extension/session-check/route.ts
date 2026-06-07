import { NextResponse } from 'next/server';
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

/**
 * Lightweight auth heartbeat for the extension panel.
 * Confirms the bearer JWT is still valid server-side (including revocation).
 */
export async function GET(req: Request) {
  const cors = getExtensionCorsHeaders(req);
  try {
    const clerkId = await getClerkIdFromExtensionBearer(req);
    if (!clerkId) {
      return NextResponse.json(
        { valid: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors },
      );
    }

    const rateLimited = await enforceRateLimit('extension-session-check', clerkId, cors);
    if (rateLimited) return rateLimited;

    return NextResponse.json({ valid: true }, { status: 200, headers: cors });
  } catch (e) {
    console.error('[extension/session-check]', e);
    return NextResponse.json(
      { valid: false, error: 'Session check failed' },
      { status: 500, headers: cors },
    );
  }
}

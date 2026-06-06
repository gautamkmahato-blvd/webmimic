import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { revokeExtensionTokensForClerk } from '@/lib/extension-jwt-revocation';
import {
  getClerkIdFromExtensionBearer,
  getExtensionCorsHeaders,
} from '@/lib/extension-route-helpers';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

/**
 * Invalidates all previously issued extension JWTs for the signed-in user.
 * Called from the web sign-out flow and may be called by the extension bearer itself.
 */
export async function POST(req: Request) {
  const cors = getExtensionCorsHeaders(req);
  try {
    const bearerClerkId = await getClerkIdFromExtensionBearer(req);
    const { userId: sessionClerkId } = await auth();
    const clerkId = sessionClerkId ?? bearerClerkId;

    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401, headers: cors },
      );
    }

    if (bearerClerkId && sessionClerkId && bearerClerkId !== sessionClerkId) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403, headers: cors },
      );
    }

    const rateLimited = await enforceRateLimit('extension-revoke-token', clerkId, cors);
    if (rateLimited) return rateLimited;

    const revokeResult = await revokeExtensionTokensForClerk(clerkId);
    if (!revokeResult.ok) {
      return NextResponse.json(
        { success: false, error: 'Token revocation is unavailable', code: revokeResult.code },
        { status: 503, headers: cors },
      );
    }

    return NextResponse.json({ success: true }, { headers: cors });
  } catch (e) {
    console.error('[extension/revoke-token]', e);
    return NextResponse.json(
      { success: false, error: 'Failed to revoke extension tokens' },
      { status: 500, headers: cors },
    );
  }
}

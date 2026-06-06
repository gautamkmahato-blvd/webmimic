import { auth } from '@clerk/nextjs/server';
import { SignJWT } from 'jose';
import { createPrivateKey } from 'node:crypto';
import { NextResponse } from 'next/server';

import {
  getExtensionJwtTtlSeconds,
  getIssuer,
  resolveExtensionAudienceForMint,
} from '@/lib/extension-jwt';
import { getWebAppCorsHeaders } from '@/lib/extension-route-helpers';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

/**
 * Issues a custom RS256 JWT for the browser extension (not Clerk's session JWT).
 * POST with an active Clerk session (cookies). Used from the web app callback flow.
 */
export async function POST(request: Request) {
  const cors = getWebAppCorsHeaders(request);
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: cors });
    }

    const rateLimited = await enforceRateLimit('extension-issue-token', userId, cors);
    if (rateLimited) return rateLimited;

    const pem = process.env.EXTENSION_JWT_PRIVATE_KEY?.trim();
    if (!pem) {
      console.error('[issue-token] Missing EXTENSION_JWT_PRIVATE_KEY');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500, headers: cors });
    }

    const audience = resolveExtensionAudienceForMint(request);
    if (!audience.ok) {
      if (audience.code === 'INVALID_EXTENSION_ID') {
        return NextResponse.json(
          { error: 'Invalid X-Extension-Id header', code: 'INVALID_EXTENSION_ID' },
          { status: 400, headers: cors },
        );
      }
      console.error('[issue-token] Missing EXTENSION_CHROME_ID or extension audience configuration');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500, headers: cors });
    }

    let privateKey: ReturnType<typeof createPrivateKey>;
    try {
      privateKey = createPrivateKey(pem);
    } catch (e) {
      console.error('[issue-token] Invalid EXTENSION_JWT_PRIVATE_KEY', e);
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500, headers: cors });
    }

    const iss = getIssuer(request);
    const now = Math.floor(Date.now() / 1000);

    const token = await new SignJWT({ sub: userId })
      .setProtectedHeader({ alg: 'RS256' })
      .setIssuer(iss)
      .setAudience(audience.aud)
      .setIssuedAt(now)
      .setExpirationTime(now + getExtensionJwtTtlSeconds())
      .sign(privateKey);

    return NextResponse.json({ token }, { headers: cors });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Failed to issue token';
    console.error('[issue-token]', e);
    return NextResponse.json({ error: msg }, { status: 500, headers: cors });
  }
}

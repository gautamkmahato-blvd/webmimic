import { NextResponse } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';
import { createPrivateKey, createPublicKey } from 'node:crypto';

import {
  getExtensionJwtTtlSeconds,
  getExtensionJwtVerifyIssuers,
  getIssuer,
  resolveExtensionAudiencesForVerify,
} from '@/lib/extension-jwt';
import {
  getExtensionJwtRevokedAfter,
  isExtensionJwtRevoked,
} from '@/lib/extension-jwt-revocation';
import { extractBearerToken, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

/**
 * Verifies the extension's custom RS256 JWT and issues a new one with fresh entitlements.
 * Called by the extension before expiry (no cookies on extension requests).
 */
export async function POST(req: Request) {
  const corsHeaders = getExtensionCorsHeaders(req);
  try {
    const raw = extractBearerToken(req);
    if (!raw) {
      return NextResponse.json(
        { error: 'Missing bearer token' },
        { status: 401, headers: corsHeaders }
      );
    }

    const pubPem = process.env.EXTENSION_JWT_PUBLIC_KEY?.trim();
    const privPem = process.env.EXTENSION_JWT_PRIVATE_KEY?.trim();
    const verifyAudiences = resolveExtensionAudiencesForVerify(req);
    if (!pubPem || !privPem || verifyAudiences.length === 0) {
      console.error(
        '[refresh-extension-token] Missing EXTENSION_JWT keys or extension audience (X-Extension-Id / EXTENSION_CHROME_ID)'
      );
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500, headers: corsHeaders }
      );
    }

    let publicKey: ReturnType<typeof createPublicKey>;
    let privateKey: ReturnType<typeof createPrivateKey>;
    try {
      publicKey = createPublicKey(pubPem);
      privateKey = createPrivateKey(privPem);
    } catch (e) {
      console.error('[refresh-extension-token] Invalid JWT keys', e);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500, headers: corsHeaders }
      );
    }

    const iss = getIssuer(req);

    let sub: string;
    let signAud: string;
    try {
      const { payload } = await jwtVerify(raw, publicKey, {
        audience: verifyAudiences.length === 1 ? verifyAudiences[0] : verifyAudiences,
        issuer: getExtensionJwtVerifyIssuers(req),
      });
      const s = payload.sub;
      if (typeof s !== 'string' || !s) {
        return NextResponse.json(
          { error: 'Invalid token payload' },
          { status: 401, headers: corsHeaders }
        );
      }
      const revokedAfter = await getExtensionJwtRevokedAfter(s);
      if (isExtensionJwtRevoked(payload.iat, revokedAfter)) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401, headers: corsHeaders }
        );
      }
      sub = s;
      const tokenAud = typeof payload.aud === 'string' ? payload.aud : null;
      if (!tokenAud || !verifyAudiences.includes(tokenAud)) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401, headers: corsHeaders }
        );
      }
      signAud = tokenAud;
    } catch {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401, headers: corsHeaders }
      );
    }

    const rateLimited = await enforceRateLimit('refresh-extension-token', sub, corsHeaders);
    if (rateLimited) return rateLimited;

    const now = Math.floor(Date.now() / 1000);

    const token = await new SignJWT({ sub })
      .setProtectedHeader({ alg: 'RS256' })
      .setIssuer(iss)
      .setAudience(signAud)
      .setIssuedAt(now)
      .setExpirationTime(now + getExtensionJwtTtlSeconds())
      .sign(privateKey);

    return NextResponse.json({ token }, { headers: corsHeaders });
  } catch (e: unknown) {
    console.error('[refresh-extension-token]', e);
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 401, headers: corsHeaders }
    );
  }
}



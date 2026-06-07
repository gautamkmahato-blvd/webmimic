import { NextResponse } from 'next/server';
import { buildExtensionJwks } from '@/lib/extension-jwt-keys';
import { getExtensionCorsHeaders } from '@/lib/extension-route-helpers';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

/**
 * Public signing keys for extension JWT verification (Option B key rotation).
 * Extension caches keys locally and refetches on signature failure.
 */
export async function GET(req: Request) {
  const cors = getExtensionCorsHeaders(req);
  const jwks = buildExtensionJwks();
  if (!jwks.keys.length) {
    return NextResponse.json(
      { error: 'JWKS not configured' },
      { status: 503, headers: cors },
    );
  }

  return NextResponse.json(
    {
      keys: jwks.keys,
      /** Suggested client cache TTL (seconds). */
      cacheTtlSeconds: 86_400,
    },
    {
      status: 200,
      headers: {
        ...cors,
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
}

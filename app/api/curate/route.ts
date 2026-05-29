import { NextResponse } from 'next/server';
import { getBearerRouteCorsHeaders, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { buildCuratedSpecMarkdown } from '@/lib/curate/buildCuratedSpec';
import { ratelimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getBearerRouteCorsHeaders(req) });
}

export async function POST(request: Request) {
  const cors = getBearerRouteCorsHeaders(request);
  try {
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      return NextResponse.json(
        { error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors }
      );
    }

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429, headers: cors });
    }

    const pkg = await request.json();
    if (!pkg || typeof pkg !== 'object') {
      return NextResponse.json({ error: 'Invalid evidence package body' }, { status: 400, headers: cors });
    }

    const curatedSpec = buildCuratedSpecMarkdown(pkg);
    return NextResponse.json({ curatedSpec }, { headers: cors });
  } catch (error) {
    console.error('[curate] error:', error);
    return NextResponse.json(
      { error: 'Curate failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: cors }
    );
  }
}

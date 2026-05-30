import { NextResponse } from 'next/server';
import { getBearerRouteCorsHeaders, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { buildCuratedSpecMarkdown } from '@/lib/curate/buildCuratedSpec';
import { ratelimit } from '@/lib/upstash/rateLimiter';
import deepseekV4Flash from '@/app/service/openRouter/deepseekV4Flash';

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

    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid evidence package body' }, { status: 400, headers: cors });
    }

    // Extension LLM analysis: { prompt: "<evidence-package JSON string>" }
    if (typeof body.prompt === 'string' && body.prompt.trim()) {
      const openRouterKey = process.env.OPENROUTER_API_KEY?.trim();
      if (!openRouterKey) {
        return NextResponse.json(
          { status: false, statusText: 'OPENROUTER_API_KEY is not configured or is empty.' },
          { status: 500, headers: cors }
        );
      }

      const modelResponse = await deepseekV4Flash(body.prompt.trim());
      if (!modelResponse.status) {
        return NextResponse.json(
          { status: false, statusText: modelResponse.message },
          { status: 500, headers: cors }
        );
      }

      return NextResponse.json(
        { status: true, analysis: modelResponse, statusText: modelResponse.message },
        { status: 200, headers: cors }
      );
    }

    const curatedSpec = buildCuratedSpecMarkdown(body);
    return NextResponse.json({ curatedSpec }, { headers: cors });
  } catch (error) {
    console.error('[curate] error:', error);
    return NextResponse.json(
      { error: 'Curate failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: cors }
    );
  }
}

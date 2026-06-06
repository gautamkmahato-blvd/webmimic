import { NextResponse } from 'next/server';
import { getBearerRouteCorsHeaders, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { buildCuratedSpecMarkdown } from '@/lib/curate/buildCuratedSpec';
import { ratelimit } from '@/lib/upstash/rateLimiter';
import deepseekV4Flash from '@/app/service/openRouter/deepseekV4Flash';
import {
  finalizeDesignAnalysisReservation,
  requireExtensionLlmAccess,
  reserveDesignAnalysisQuota,
} from '@/lib/extension-llm-access';

const MAX_CURATE_PROMPT_CHARS = 500_000;

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getBearerRouteCorsHeaders(req) });
}

export async function POST(request: Request) {
  const cors = getBearerRouteCorsHeaders(request);
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid evidence package body' }, { status: 400, headers: cors });
    }

    // Extension LLM analysis: { prompt: "<evidence-package JSON string>" }
    if (typeof body.prompt === 'string' && body.prompt.trim()) {
      const prompt = body.prompt.trim();
      if (prompt.length > MAX_CURATE_PROMPT_CHARS) {
        return NextResponse.json(
          { error: `prompt exceeds maximum length (${MAX_CURATE_PROMPT_CHARS} characters)` },
          { status: 413, headers: cors }
        );
      }

      const access = await requireExtensionLlmAccess(request);
      if (!access.ok) return access.response;

      const quota = await reserveDesignAnalysisQuota(
        access.clerkId,
        typeof body.idempotencyKey === 'string' ? body.idempotencyKey : null,
        access.cors,
      );
      if (!quota.ok) return quota.response;
      const { reservationId } = quota;

      const openRouterKey = process.env.OPENROUTER_API_KEY?.trim();
      if (!openRouterKey) {
        await finalizeDesignAnalysisReservation(reservationId, false);
        return NextResponse.json(
          { status: false, statusText: 'OPENROUTER_API_KEY is not configured or is empty.' },
          { status: 500, headers: cors }
        );
      }

      try {
        const modelResponse = await deepseekV4Flash(prompt);
        if (!modelResponse.status) {
          await finalizeDesignAnalysisReservation(reservationId, false);
          return NextResponse.json(
            { status: false, statusText: modelResponse.message },
            { status: 500, headers: cors }
          );
        }

        await finalizeDesignAnalysisReservation(reservationId, true);
        return NextResponse.json(
          {
            status: true,
            analysis: modelResponse,
            statusText: modelResponse.message,
            reservationId,
          },
          { status: 200, headers: cors }
        );
      } catch (error) {
        await finalizeDesignAnalysisReservation(reservationId, false);
        throw error;
      }
    }

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

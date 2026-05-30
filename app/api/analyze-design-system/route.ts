import { NextResponse } from 'next/server';
import deepseekV4Flash from '@/app/service/openRouter/deepseekV4Flash';
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { ratelimit } from '@/lib/upstash/rateLimiter';

const MAX_PROMPT_CHARS = 5_000_000;

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

function resolvePrompt(body: unknown): { ok: true; prompt: string } | { ok: false; error: string } {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'Request body must be a JSON object' };
  }

  const record = body as Record<string, unknown>;
  const rawPrompt = record.prompt;

  if (typeof rawPrompt === 'string') {
    const prompt = rawPrompt.trim();
    if (!prompt) return { ok: false, error: 'prompt must not be empty' };
    if (prompt.length > MAX_PROMPT_CHARS) {
      return { ok: false, error: `prompt exceeds maximum length (${MAX_PROMPT_CHARS} characters)` };
    }
    return { ok: true, prompt };
  }

  if ('evidencePackage' in record) {
    const pkg = record.evidencePackage;
    if (!pkg || typeof pkg !== 'object' || Array.isArray(pkg)) {
      return { ok: false, error: 'evidencePackage must be a JSON object' };
    }
    let prompt: string;
    try {
      prompt = JSON.stringify(pkg);
    } catch {
      return { ok: false, error: 'evidencePackage could not be serialized to JSON' };
    }
    if (!prompt || prompt === '{}') {
      return { ok: false, error: 'evidencePackage must not be empty' };
    }
    if (prompt.length > MAX_PROMPT_CHARS) {
      return { ok: false, error: `evidencePackage exceeds maximum size (${MAX_PROMPT_CHARS} characters)` };
    }
    return { ok: true, prompt };
  }

  return { ok: false, error: 'Provide either prompt (string) or evidencePackage (object)' };
}

export async function POST(request: Request) {
  const requestId = `analyze-design-system-${Date.now()}`;
  console.log(`[${requestId}] POST /api/analyze-design-system received`);

  try {
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      console.warn(`[${requestId}] Unauthorized`);
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: EXTENSION_CORS_HEADERS },
      );
    }

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      console.warn(`[${requestId}] Rate limited: clerkId=${clerkId}`);
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: EXTENSION_CORS_HEADERS },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'invalid_body', message: 'Invalid JSON body' },
        { status: 400, headers: EXTENSION_CORS_HEADERS },
      );
    }

    const parsed = resolvePrompt(body);
    if (parsed.ok === false) {
      return NextResponse.json(
        { success: false, error: 'validation_error', message: parsed.error },
        { status: 400, headers: EXTENSION_CORS_HEADERS },
      );
    }

    const openRouterKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!openRouterKey) {
      console.error(`[${requestId}] OPENROUTER_API_KEY is missing or empty`);
      return NextResponse.json(
        { status: false, statusText: 'OPENROUTER_API_KEY is not configured or is empty.' },
        { status: 500, headers: EXTENSION_CORS_HEADERS },
      );
    }

    console.log(`[${requestId}] Calling deepseekV4Flash, promptLength=${parsed.prompt.length}`);
    const modelResponse = await deepseekV4Flash(parsed.prompt);
    console.log(`[${requestId}] deepseekV4Flash returned`, {
      status: modelResponse.status,
      message: modelResponse.message,
      resultLength: modelResponse.result?.length ?? 0,
    });

    if (!modelResponse.status) {
      return NextResponse.json(
        { status: false, statusText: modelResponse.message },
        { status: 500, headers: EXTENSION_CORS_HEADERS },
      );
    }

    return NextResponse.json(
      { status: true, analysis: modelResponse, statusText: modelResponse.message },
      { status: 200, headers: EXTENSION_CORS_HEADERS },
    );
  } catch (error) {
    console.error(`[${requestId}] Unexpected error`, error);
    return NextResponse.json(
      { status: false, statusText: 'Design system analysis failed' },
      { status: 500, headers: EXTENSION_CORS_HEADERS },
    );
  }
}

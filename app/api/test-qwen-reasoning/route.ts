import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import geminiReasoning from '@/app/service/openRouter/models/geminiReasoning';
import grok4Reasoning from '@/app/service/openRouter/models/grok4Reasoning';
import grokReasoning from '@/app/service/openRouter/models/grokReasoning';
import kimiReasoning from '@/app/service/openRouter/models/kimiReasoning';
import minimaxReasoning from '@/app/service/openRouter/models/minimaxReasoning';
import testQwenReasoning from '@/app/service/openRouter/models/testQwenReasoning';
import {
  parseTestReasoningBody,
  validateRequiredInputs,
  type TestReasoningInput,
  type TestReasoningResult,
} from '@/app/service/openRouter/models/testReasoningShared';
import zlmReasoning from '@/app/service/openRouter/models/zlmReasoning';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

const MODEL_SERVICES = {
  qwen: testQwenReasoning,
  kimi: kimiReasoning,
  gemini: geminiReasoning,
  zlm: zlmReasoning,
  grok: grokReasoning,
  grok4: grok4Reasoning,
  minimax: minimaxReasoning,
} as const;

type ModelKey = keyof typeof MODEL_SERVICES;

const MODEL_KEYS = Object.keys(MODEL_SERVICES).join(', ');

function resolveModelKey(value: unknown): ModelKey | null {
  if (typeof value !== 'string') return null;
  const key = value.trim().toLowerCase();
  return key in MODEL_SERVICES ? (key as ModelKey) : null;
}

export async function POST(request: Request) {
  const requestId = `test-qwen-reasoning-${Date.now()}`;
  console.log(`[${requestId}] POST /api/test-qwen-reasoning`);

  try {
    if (process.env.NODE_ENV === 'production' && process.env.ALLOW_TEST_QWEN_REASONING !== 'true') {
      return NextResponse.json(
        { success: false, error: 'This endpoint is disabled in production.' },
        { status: 403 },
      );
    }

    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const rateLimited = await enforceRateLimit('test-qwen-reasoning', userId);
    if (rateLimited) return rateLimited;

    const body = await request.json().catch(() => ({}));
    const modelKey = resolveModelKey(
      body && typeof body === 'object' && !Array.isArray(body)
        ? (body as Record<string, unknown>).model
        : undefined,
    );

    if (!modelKey) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid or missing model. Use one of: ${MODEL_KEYS}.`,
        },
        { status: 400 },
      );
    }

    const input = parseTestReasoningBody(body);
    const validation = validateRequiredInputs(input);

    if (!validation.ok) {
      return NextResponse.json(
        { success: false, error: validation.message },
        { status: 400 },
      );
    }

    const runModel = MODEL_SERVICES[modelKey] as (
      input: TestReasoningInput,
    ) => Promise<TestReasoningResult>;

    const result = await runModel(input);

    if (!result.status) {
      return NextResponse.json(
        { success: false, error: result.message ?? 'Test request failed.', result },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, model: modelKey, result });
  } catch (error) {
    console.error(`[${requestId}] error`, error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Test request failed',
      },
      { status: 500 },
    );
  }
}

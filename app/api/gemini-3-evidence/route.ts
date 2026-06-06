import { NextResponse } from 'next/server';
import gemini3EvidenceReasoning from '@/app/service/openRouter/models/gemini3EvidenceReasoning';
import {
  parseEvidenceReasoningBody,
  validateEvidencePayloadLimits,
  validateEvidenceRequiredInputs,
} from '@/app/service/openRouter/models/evidenceReasoningShared';
import { getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { requireExtensionLlmAccess } from '@/lib/extension-llm-access';
import { CREDIT_FEATURES } from '@/lib/credits/config';
import { chargeFeatureCredits, refundFeatureCredits } from '@/lib/credits/extensionCredits';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

export async function POST(request: Request) {
  const requestId = `gemini-3-evidence-${Date.now()}`;
  console.log(`[${requestId}] POST /api/gemini-3-evidence`);

  const access = await requireExtensionLlmAccess(request);
  if (!access.ok) return access.response;
  const { clerkId, cors } = access;

  try {
    const body = await request.json().catch(() => ({}));
    const rawIdempotencyKey =
      body && typeof body === 'object' && !Array.isArray(body)
        ? (body as Record<string, unknown>).idempotencyKey
        : undefined;
    const idempotencyKey =
      typeof rawIdempotencyKey === 'string' ? rawIdempotencyKey : undefined;

    const input = parseEvidenceReasoningBody(body);
    const validation = validateEvidenceRequiredInputs(input);

    if (!validation.ok) {
      return NextResponse.json(
        { success: false, error: validation.message },
        { status: 400, headers: cors },
      );
    }

    const limits = validateEvidencePayloadLimits(input);
    if (!limits.ok) {
      return NextResponse.json(
        { success: false, error: limits.message },
        { status: 413, headers: cors },
      );
    }

    const charge = await chargeFeatureCredits({
      clerkId,
      featureId: CREDIT_FEATURES.DESIGN_SYSTEM_EXTRACTION,
      idempotencyKey,
      cors,
    });
    if (!charge.ok) return charge.response;

    try {
      const result = await gemini3EvidenceReasoning(input);

      if (!result.status) {
        if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
        return NextResponse.json(
          { success: false, error: result.message ?? 'Request failed.', result },
          { status: 500, headers: cors },
        );
      }

      return NextResponse.json(
        {
          success: true,
          model: 'gemini-3',
          result,
          creditsCharged: charge.creditsCharged,
          creditsRemaining: charge.creditsRemaining,
        },
        { headers: cors },
      );
    } catch (error) {
      if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
      throw error;
    }
  } catch (error) {
    console.error(`[${requestId}] error`, error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Request failed',
      },
      { status: 500, headers: cors },
    );
  }
}

import { NextResponse } from 'next/server';
import type { CreditFeatureId } from '@/lib/credits/config';
import { getFeatureCreditCost } from '@/lib/credits/config';
import type { DeductCreditsResult } from '@/lib/credits/types';
import {
  deductCreditsForFeature,
  refundCreditTransaction,
  resolveUserIdFromClerkId,
} from '@/app/service/supabase/credits/creditsService';

export function creditsErrorResponse(
  result: Extract<DeductCreditsResult, { ok: false }>,
  cors: Record<string, string>,
): NextResponse {
  switch (result.code) {
    case 'INSUFFICIENT_CREDITS':
      return NextResponse.json(
        {
          success: false,
          error: result.message,
          code: 'INSUFFICIENT_CREDITS',
        },
        { status: 402, headers: cors },
      );
    case 'USER_NOT_FOUND':
      return NextResponse.json(
        { success: false, error: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 401, headers: cors },
      );
    case 'CONCURRENT_MODIFICATION':
      return NextResponse.json(
        { success: false, error: result.message, code: 'CONCURRENT_MODIFICATION' },
        { status: 409, headers: cors },
      );
    case 'INVALID_FEATURE':
      return NextResponse.json(
        { success: false, error: result.message, code: 'INVALID_FEATURE' },
        { status: 400, headers: cors },
      );
    default:
      return NextResponse.json(
        { success: false, error: 'Failed to process credits', code: 'DB_ERROR' },
        { status: 503, headers: cors },
      );
  }
}

export async function chargeFeatureCredits(params: {
  clerkId: string;
  featureId: CreditFeatureId;
  idempotencyKey?: string | null;
  cors: Record<string, string>;
}): Promise<
  | {
      ok: true;
      transactionId: string;
      creditsCharged: number;
      creditsRemaining: number;
      duplicate: boolean;
    }
  | { ok: false; response: NextResponse }
> {
  const userId = await resolveUserIdFromClerkId(params.clerkId);
  if (!userId) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 401, headers: params.cors },
      ),
    };
  }

  const result = await deductCreditsForFeature({
    userId,
    featureId: params.featureId,
    idempotencyKey: params.idempotencyKey,
  });

  if (!result.ok) {
    const response = creditsErrorResponse(result, params.cors);
    if (result.code === 'INSUFFICIENT_CREDITS') {
      const body = {
        success: false,
        error: result.message,
        code: 'INSUFFICIENT_CREDITS',
        creditsRequired: getFeatureCreditCost(params.featureId),
      };
      return {
        ok: false,
        response: NextResponse.json(body, { status: 402, headers: params.cors }),
      };
    }
    return { ok: false, response };
  }

  return {
    ok: true,
    transactionId: result.transactionId,
    creditsCharged: result.creditsCharged,
    creditsRemaining: result.creditsRemaining,
    duplicate: result.duplicate,
  };
}

export async function refundFeatureCredits(transactionId: string): Promise<void> {
  const result = await refundCreditTransaction(transactionId);
  if (!result.ok && result.code !== 'ALREADY_REFUNDED' && result.code !== 'NOT_FOUND') {
    console.error('[extensionCredits] refund failed', { transactionId, result });
  }
}

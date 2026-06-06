import { NextResponse } from 'next/server';
import {
  getClerkIdFromExtensionBearer,
  getExtensionCorsHeaders,
  requirePremiumExtension,
} from '@/lib/extension-route-helpers';
import { ratelimit } from '@/lib/upstash/rateLimiter';
import {
  confirmReservation,
  reserveQuota,
  rollbackReservation,
  type ReserveResult,
} from '@/app/service/supabase/extension/reservationService';
import { OPERATIONS } from '@/lib/credits/config';

export const DESIGN_ANALYSIS_OPERATION = OPERATIONS.DESIGN_ANALYSIS;

export function quotaDeniedResponse(
  result: Extract<ReserveResult, { allowed: false }>,
  cors: Record<string, string>,
): NextResponse {
  switch (result.code) {
    case 'PLAN_BLOCKED':
      return NextResponse.json(
        {
          success: false,
          error: 'This feature requires a paid plan. Upgrade to access it.',
          code: 'PLAN_BLOCKED',
        },
        { status: 403, headers: cors },
      );
    case 'QUOTA_EXHAUSTED':
      return NextResponse.json(
        {
          success: false,
          error: 'Monthly quota exhausted. Upgrade your plan or wait until next month.',
          code: 'QUOTA_EXHAUSTED',
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
        { success: false, error: 'Request conflict, please retry', code: 'CONCURRENT_MODIFICATION' },
        { status: 409, headers: cors },
      );
    default:
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500, headers: cors },
      );
  }
}

/** Extension auth + rate limit + premium gate. Does not reserve quota. */
export async function requireExtensionLlmAccess(req: Request): Promise<
  { ok: true; clerkId: string; cors: Record<string, string> } | { ok: false; response: NextResponse }
> {
  const cors = getExtensionCorsHeaders(req);

  const clerkId = await getClerkIdFromExtensionBearer(req);
  if (!clerkId) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors },
      ),
    };
  }

  const { success: rateLimitOk } = await ratelimit.limit(clerkId);
  if (!rateLimitOk) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: cors },
      ),
    };
  }

  const premiumGate = await requirePremiumExtension(req);
  if (!premiumGate.ok) {
    return { ok: false, response: premiumGate.response };
  }

  return { ok: true, clerkId: premiumGate.clerkId, cors };
}

export async function reserveDesignAnalysisQuota(
  clerkId: string,
  idempotencyKey: string | null | undefined,
  cors: Record<string, string>,
): Promise<
  | { ok: true; reservationId: string | null }
  | { ok: false; response: NextResponse }
> {
  const key =
    typeof idempotencyKey === 'string' && idempotencyKey.trim() ? idempotencyKey.trim() : null;
  const reserveResult = await reserveQuota(clerkId, DESIGN_ANALYSIS_OPERATION, key);
  if (!reserveResult.allowed) {
    return { ok: false, response: quotaDeniedResponse(reserveResult, cors) };
  }
  return { ok: true, reservationId: reserveResult.reservationId };
}

export async function finalizeDesignAnalysisReservation(
  reservationId: string | null,
  success: boolean,
): Promise<void> {
  if (!reservationId) return;
  if (success) {
    await confirmReservation(reservationId);
  } else {
    await rollbackReservation(reservationId);
  }
}

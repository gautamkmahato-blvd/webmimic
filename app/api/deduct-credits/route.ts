import { NextResponse } from 'next/server';
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { reserveQuota } from '@/app/service/supabase/extension/reservationService';
import { ratelimit } from '@/lib/upstash/rateLimiter';
import { OPERATIONS, type OperationId } from '@/lib/credits/config';

const ALLOWED_OPERATIONS = Object.values(OPERATIONS) as OperationId[];

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function POST(request: Request) {
  try {
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: EXTENSION_CORS_HEADERS }
      );
    }

    let body: { operation?: string; idempotencyKey?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const operation = body.operation as OperationId;
    if (!operation || !ALLOWED_OPERATIONS.includes(operation)) {
      return NextResponse.json(
        { success: false, error: 'Invalid operation', code: 'INVALID_OPERATION' },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const { idempotencyKey } = body;
    if (!idempotencyKey || typeof idempotencyKey !== 'string' || !idempotencyKey.trim()) {
      return NextResponse.json(
        { success: false, error: 'idempotencyKey is required', code: 'MISSING_IDEMPOTENCY_KEY' },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    console.log(`[deduct-credits] request  | operation="${operation}" clerkId=${clerkId}`);

    const result = await reserveQuota(clerkId, operation, idempotencyKey);

    if (!result.allowed) {
      console.warn(`[deduct-credits] denied   | operation="${operation}" code=${result.code} clerkId=${clerkId}`);

      switch (result.code) {
        case 'PLAN_BLOCKED':
          return NextResponse.json(
            {
              success: false,
              error: 'This feature requires a paid plan. Upgrade to access it.',
              code: 'PLAN_BLOCKED',
            },
            { status: 403, headers: EXTENSION_CORS_HEADERS }
          );
        case 'QUOTA_EXHAUSTED':
          return NextResponse.json(
            {
              success: false,
              error: 'Monthly quota exhausted. Upgrade your plan or wait until next month.',
              code: 'QUOTA_EXHAUSTED',
            },
            { status: 402, headers: EXTENSION_CORS_HEADERS }
          );
        case 'USER_NOT_FOUND':
          return NextResponse.json(
            { success: false, error: 'User not found', code: 'USER_NOT_FOUND' },
            { status: 401, headers: EXTENSION_CORS_HEADERS }
          );
        case 'CONCURRENT_MODIFICATION':
          return NextResponse.json(
            { success: false, error: 'Request conflict, please retry', code: 'CONCURRENT_MODIFICATION' },
            { status: 409, headers: EXTENSION_CORS_HEADERS }
          );
        default:
          return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500, headers: EXTENSION_CORS_HEADERS }
          );
      }
    }

    const quotaRemaining = result.limit === null ? null : result.limit - result.used;
    const { reservationId } = result;
    console.log(`[deduct-credits] success   | operation="${operation}" used=${result.used} limit=${result.limit} quotaRemaining=${quotaRemaining} reservationId=${reservationId} clerkId=${clerkId}`);

    return NextResponse.json(
      { success: true, quotaRemaining, reservationId },
      { status: 200, headers: EXTENSION_CORS_HEADERS }
    );
  } catch (error) {
    console.error('[deduct-credits] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}

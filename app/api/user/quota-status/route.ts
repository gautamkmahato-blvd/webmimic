import { NextResponse } from 'next/server';
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { getUserQuotaStatus } from '@/app/service/supabase/extension/operationQuotaService';
import { ratelimit } from '@/lib/upstash/rateLimiter';
import { type PlanKey } from '@/lib/credits/config';

const PLAN_DISPLAY_NAMES: Record<PlanKey, string> = {
  FREE:           'Free',
  BASIC:          'Basic',
  PRO:            'Pro',
  BASIC_ANNUALLY: 'Basic (Annual)',
  PRO_ANNUALLY:   'Pro (Annual)',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function GET(request: Request) {
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

    const status = await getUserQuotaStatus(clerkId);
    if (!status) {
      return NextResponse.json(
        { success: false, error: 'Failed to retrieve quota status' },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }

    return NextResponse.json(
      {
        plan: PLAN_DISPLAY_NAMES[status.planKey],
        planKey: status.planKey,
        planType: status.planType,
        operations: status.operations,
      },
      { status: 200, headers: EXTENSION_CORS_HEADERS }
    );
  } catch (error) {
    console.error('[quota-status] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}

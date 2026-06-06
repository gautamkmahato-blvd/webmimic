import { NextResponse } from 'next/server';
import { getExtensionCorsHeaders, resolveClerkId } from '@/lib/extension-route-helpers';
import { getUserCreditsSnapshotForClerkId } from '@/app/service/supabase/credits/creditsService';
import { FEATURE_CREDIT_COSTS } from '@/lib/credits/config';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

export async function GET(req: Request) {
  const cors = getExtensionCorsHeaders(req);
  try {
    const clerkId = await resolveClerkId(req);
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors },
      );
    }

    const rateLimited = await enforceRateLimit('credits-status', clerkId, cors);
    if (rateLimited) return rateLimited;

    const snapshot = await getUserCreditsSnapshotForClerkId(clerkId);
    if (!snapshot) {
      return NextResponse.json(
        { success: false, error: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 404, headers: cors },
      );
    }

    return NextResponse.json(
      {
        success: true,
        remainingCredits: snapshot.remainingCredits,
        totalCredits: snapshot.totalCredits,
        planType: snapshot.planType,
        featureCosts: FEATURE_CREDIT_COSTS,
      },
      { status: 200, headers: cors },
    );
  } catch (error) {
    console.error('[credits-status] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: cors },
    );
  }
}

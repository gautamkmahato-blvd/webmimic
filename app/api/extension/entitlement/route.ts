import { NextResponse } from 'next/server';
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';
import { getUserCreditsSnapshotForClerkId } from '@/app/service/supabase/credits/creditsService';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

export async function GET(req: Request) {
  const cors = getExtensionCorsHeaders(req);
  try {
    const clerkId = await getClerkIdFromExtensionBearer(req);
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors }
      );
    }

    const rateLimited = await enforceRateLimit('extension-entitlement', clerkId, cors);
    if (rateLimited) return rateLimited;

    const [{ premium }, credits] = await Promise.all([
      hasPremiumAccessForClerkId(clerkId),
      getUserCreditsSnapshotForClerkId(clerkId),
    ]);

    return NextResponse.json(
      {
        success: true,
        premium,
        plan: premium ? 'paid' : 'free',
        remainingCredits: credits?.remainingCredits ?? 0,
        totalCredits: credits?.totalCredits ?? 0,
      },
      { status: 200, headers: cors }
    );
  } catch (e: unknown) {
    console.error('[extension/entitlement]', e);
    return NextResponse.json(
      { success: false, error: 'Internal error' },
      { status: 500, headers: cors }
    );
  }
}

import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';
import { getWebAppCorsHeaders } from '@/lib/extension-route-helpers';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getWebAppCorsHeaders(req) });
}

export async function GET(req: Request) {
  const corsHeaders = getWebAppCorsHeaders(req);
  try {
    // ── AUTH FIRST ─────────────────────────────────────────────
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'AUTH_REQUIRED' },
        { status: 401, headers: corsHeaders }
      );
    }

    // ── PREMIUM GATE ───────────────────────────────────────────
    const { premium } = await hasPremiumAccessForClerkId(userId);
    if (!premium) {
      return NextResponse.json(
        {
          success: false,
          error: 'Premium subscription required to use Design Editor.',
          code: 'PREMIUM_REQUIRED',
          premium: false,
        },
        { status: 403, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { success: true, premium: true },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error('[design-editor/entitlement] error', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

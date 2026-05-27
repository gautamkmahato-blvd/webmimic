import { NextResponse } from 'next/server';
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: EXTENSION_CORS_HEADERS });
}

export async function GET(req: Request) {
  try {
    const clerkId = await getClerkIdFromExtensionBearer(req);
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: EXTENSION_CORS_HEADERS }
      );
    }

    const { premium } = await hasPremiumAccessForClerkId(clerkId);

    return NextResponse.json(
      {
        success: true,
        premium,
        plan: premium ? 'paid' : 'free',
      },
      { status: 200, headers: EXTENSION_CORS_HEADERS }
    );
  } catch (e: unknown) {
    console.error('[extension/entitlement]', e);
    return NextResponse.json(
      { success: false, error: 'Internal error' },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}

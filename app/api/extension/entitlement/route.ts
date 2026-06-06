import { NextResponse } from 'next/server';
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

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

    const { premium } = await hasPremiumAccessForClerkId(clerkId);

    return NextResponse.json(
      {
        success: true,
        premium,
        plan: premium ? 'paid' : 'free',
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

import { NextResponse } from 'next/server';
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

export async function POST(request: Request) {
  const cors = getExtensionCorsHeaders(request);
  try {
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors }
      );
    }

    let body: { reservationId?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400, headers: cors }
      );
    }

    if (!body.reservationId || typeof body.reservationId !== 'string' || !body.reservationId.trim()) {
      return NextResponse.json(
        { success: false, error: 'reservationId is required' },
        { status: 400, headers: cors }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Client-initiated rollback is not permitted',
        code: 'CLIENT_ROLLBACK_FORBIDDEN',
      },
      { status: 403, headers: cors }
    );
  } catch (error) {
    console.error('[quota/rollback] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: cors }
    );
  }
}

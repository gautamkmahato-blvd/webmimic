import { NextResponse } from 'next/server';
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';

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

    let body: { reservationId?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    if (!body.reservationId || typeof body.reservationId !== 'string' || !body.reservationId.trim()) {
      return NextResponse.json(
        { success: false, error: 'reservationId is required' },
        { status: 400, headers: EXTENSION_CORS_HEADERS }
      );
    }

    // Client-initiated rollback enables quota bypass (deduct → rollback → free local use).
    // Failed client-side operations are refunded when the reservation TTL expires.
    return NextResponse.json(
      {
        success: false,
        error: 'Client-initiated rollback is not permitted',
        code: 'CLIENT_ROLLBACK_FORBIDDEN',
      },
      { status: 403, headers: EXTENSION_CORS_HEADERS }
    );
  } catch (error) {
    console.error('[quota/rollback] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}

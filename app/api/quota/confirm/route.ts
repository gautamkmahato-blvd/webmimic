import { NextResponse } from 'next/server';
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from '@/lib/extension-route-helpers';
import { confirmReservationForClerk } from '@/app/service/supabase/extension/reservationService';

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

    const result = await confirmReservationForClerk(body.reservationId.trim(), clerkId);

    if (result === 'forbidden') {
      return NextResponse.json(
        { success: false, error: 'Forbidden', code: 'RESERVATION_FORBIDDEN' },
        { status: 403, headers: EXTENSION_CORS_HEADERS }
      );
    }

    // 200 for ok / not_found — idempotent; client must not be punished for late or duplicate confirms
    return NextResponse.json({ success: true }, { status: 200, headers: EXTENSION_CORS_HEADERS });
  } catch (error) {
    console.error('[quota/confirm] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}

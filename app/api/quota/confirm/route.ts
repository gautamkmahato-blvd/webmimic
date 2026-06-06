import { NextResponse } from 'next/server';
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { confirmReservationForClerk } from '@/app/service/supabase/extension/reservationService';

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

    const result = await confirmReservationForClerk(body.reservationId.trim(), clerkId);

    if (result === 'forbidden') {
      return NextResponse.json(
        { success: false, error: 'Forbidden', code: 'RESERVATION_FORBIDDEN' },
        { status: 403, headers: cors }
      );
    }

    if (result === 'not_found') {
      return NextResponse.json(
        { success: false, error: 'Reservation not found', code: 'RESERVATION_NOT_FOUND' },
        { status: 404, headers: cors }
      );
    }

    if (result === 'already_confirmed') {
      return NextResponse.json(
        { success: true, code: 'ALREADY_CONFIRMED' },
        { status: 200, headers: cors }
      );
    }

    return NextResponse.json(
      { success: true, code: 'CONFIRMED' },
      { status: 200, headers: cors }
    );
  } catch (error) {
    console.error('[quota/confirm] unexpected error', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: cors }
    );
  }
}

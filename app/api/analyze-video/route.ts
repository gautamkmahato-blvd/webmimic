import { NextResponse } from "next/server";
import openRouterAnalysis from "@/app/service/openRouterAnalysis";
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from "@/lib/extension-route-helpers";
import { parseBody } from "@/lib/validation/validate";
import { AnalyzeVideoSchema } from "@/lib/validation/schemas";
import { reserveQuota, confirmReservation, rollbackReservation } from "@/app/service/supabase/extension/reservationService";
import { ratelimit } from "@/lib/upstash/rateLimiter";
import cursorVideoAnalysis from "@/app/service/cursor/cursorVideoAnalysis";

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

export async function POST(request: Request) {
  const cors = getExtensionCorsHeaders(request);
  const requestId = `analyze-video-${Date.now()}`;
  console.log(`[${requestId}] ── POST /api/analyze-video received`);

  try {
    console.log(`[${requestId}] Step 1: Checking extension auth`);
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      console.warn(`[${requestId}] Step 1 FAILED: Unauthorized`);
      return NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors }
      );
    }
    console.log(`[${requestId}] Step 1 PASSED: clerkId=${clerkId}`);

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      console.warn(`[${requestId}] Rate limited: clerkId=${clerkId}`);
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: cors }
      );
    }

    // Validate body before deducting — invalid requests don't consume quota
    console.log(`[${requestId}] Step 2: Parsing and validating request body`);
    const parsed = await parseBody(request, AnalyzeVideoSchema, cors);
    if (!parsed.ok) {
      console.warn(`[${requestId}] Step 2 FAILED: Body validation error`);
      return parsed.response;
    }
    const { videoUrl, imageUrl, code, operationType, idempotencyKey } = parsed.data;
    console.log(`[${requestId}] Step 2 PASSED: videoUrl=${videoUrl}, imageUrl=${imageUrl}, operationType=${operationType}, codeLength=${code?.length ?? 0}`);

    console.log(`[${requestId}] Step 3: Checking CURSOR_API_KEY`);
    const cursorKey = process.env.CURSOR_API_KEY?.trim();
    if (!cursorKey) {
      console.error(`[${requestId}] Step 3 FAILED: CURSOR_API_KEY is missing or empty`);
      return NextResponse.json(
        { status: false, statusText: "CURSOR_API_KEY is not configured or is empty" },
        { status: 500, headers: cors }
      );
    }
    console.log(`[${requestId}] Step 3 PASSED: API key present`);

    console.log(`[${requestId}] Step 4: Reserving quota for operation=${operationType} clerkId=${clerkId}`);
    const reserveResult = await reserveQuota(clerkId, operationType, idempotencyKey ?? null);
    if (!reserveResult.allowed) {
      console.warn(`[${requestId}] Step 4 FAILED: Quota denied`, { code: reserveResult.code, operationType });
      switch (reserveResult.code) {
        case 'PLAN_BLOCKED':
          return NextResponse.json(
            {
              success: false,
              error: 'This feature requires a paid plan. Upgrade to access it.',
              code: 'PLAN_BLOCKED',
            },
            { status: 403, headers: cors }
          );
        case 'QUOTA_EXHAUSTED':
          return NextResponse.json(
            {
              success: false,
              error: 'Monthly quota exhausted. Upgrade your plan or wait until next month.',
              code: 'QUOTA_EXHAUSTED',
            },
            { status: 402, headers: cors }
          );
        case 'USER_NOT_FOUND':
          return NextResponse.json(
            { success: false, error: 'User not found', code: 'USER_NOT_FOUND' },
            { status: 401, headers: cors }
          );
        case 'CONCURRENT_MODIFICATION':
          return NextResponse.json(
            { success: false, error: 'Request conflict, please retry', code: 'CONCURRENT_MODIFICATION' },
            { status: 409, headers: cors }
          );
        default:
          return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500, headers: cors }
          );
      }
    }
    console.log(`[${requestId}] Step 4 PASSED: Quota reserved, used=${reserveResult.used} limit=${reserveResult.limit} reservationId=${reserveResult.reservationId}`);

    const { reservationId } = reserveResult;
    
    try {
      console.log(`[${requestId}] Step 5: Calling openRouterAnalysis`);
      const modelResponse = await openRouterAnalysis(videoUrl, imageUrl, code);
      // const modelResponse = await cursorVideoAnalysis(videoUrl, imageUrl, code);

      console.log(`[${requestId}] Step 5: openRouterAnalysis returned`, { status: modelResponse.status, message: modelResponse.message, resultLength: modelResponse.result?.length ?? 0 });

      if (!modelResponse.status) {
        console.warn(`[${requestId}] Step 5 FAILED: Model returned status=false, rolling back reservation. message=${modelResponse.message}`);
        if (reservationId) await rollbackReservation(reservationId);
        return NextResponse.json(
          { status: false, statusText: modelResponse.message },
          { status: 500, headers: cors }
        );
      }

      console.log(`[${requestId}] Step 5 PASSED: Analysis complete, confirming reservation`);
      if (reservationId) await confirmReservation(reservationId);
      return NextResponse.json(
        { status: true, analysis: modelResponse, statusText: modelResponse.message, reservationId },
        { status: 200, headers: cors }
      );
    } catch (error) {
      console.error(`[${requestId}] Step 5 EXCEPTION: openRouterAnalysis threw an error, rolling back reservation`, error);
      if (reservationId) await rollbackReservation(reservationId);
      return NextResponse.json(
        { status: false, statusText: "Analysis failed" },
        { status: 500, headers: cors }
      );
    }
  } catch (error) {
    console.error(`[${requestId}] UNEXPECTED EXCEPTION in outer try-catch`, error);
    return NextResponse.json(
      { status: false, statusText: "Gemini request failed" },
      { status: 500, headers: cors }
    );
  }
}

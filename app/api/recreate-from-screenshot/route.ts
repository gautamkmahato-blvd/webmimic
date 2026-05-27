import { NextResponse } from "next/server";
import recreateComponent from "@/app/service/recreateComponent";
import { EXTENSION_CORS_HEADERS, getClerkIdFromExtensionBearer } from "@/lib/extension-route-helpers";
import { parseBody } from "@/lib/validation/validate";
import { RecreateFromScreenshotSchema } from "@/lib/validation/schemas";
import { reserveQuota, confirmReservation, rollbackReservation } from "@/app/service/supabase/extension/reservationService";
import { ratelimit } from "@/lib/upstash/rateLimiter";
import cursorRecreateComponent from "@/app/service/cursor/cursorRecreateComponent";

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

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: EXTENSION_CORS_HEADERS }
      );
    }

    // Validate body before deducting — invalid requests don't consume quota
    const parsed = await parseBody(request, RecreateFromScreenshotSchema, EXTENSION_CORS_HEADERS);
    if (!parsed.ok) return parsed.response;
    const { html, css, screenshotUrl, idempotencyKey } = parsed.data;

    // const openrouterKey = process.env.OPENROUTER_API_KEY?.trim();
    // if (!openrouterKey) {
    //   return NextResponse.json(
    //     { success: false, error: "OPENROUTER_API_KEY is not configured or is empty" },
    //     { status: 500, headers: EXTENSION_CORS_HEADERS }
    //   );
    // }

    const reserveResult = await reserveQuota(clerkId, 'code-generation', idempotencyKey ?? null);
    if (!reserveResult.allowed) {
      switch (reserveResult.code) {
        case 'PLAN_BLOCKED':
          return NextResponse.json(
            {
              success: false,
              error: 'This feature requires a paid plan. Upgrade to access it.',
              code: 'PLAN_BLOCKED',
            },
            { status: 403, headers: EXTENSION_CORS_HEADERS }
          );
        case 'QUOTA_EXHAUSTED':
          return NextResponse.json(
            {
              success: false,
              error: 'Monthly quota exhausted. Upgrade your plan or wait until next month.',
              code: 'QUOTA_EXHAUSTED',
            },
            { status: 402, headers: EXTENSION_CORS_HEADERS }
          );
        case 'USER_NOT_FOUND':
          return NextResponse.json(
            { success: false, error: 'User not found', code: 'USER_NOT_FOUND' },
            { status: 401, headers: EXTENSION_CORS_HEADERS }
          );
        case 'CONCURRENT_MODIFICATION':
          return NextResponse.json(
            { success: false, error: 'Request conflict, please retry', code: 'CONCURRENT_MODIFICATION' },
            { status: 409, headers: EXTENSION_CORS_HEADERS }
          );
        default:
          return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500, headers: EXTENSION_CORS_HEADERS }
          );
      }
    }

    const { reservationId } = reserveResult;

    try {
      console.log("[recreate-from-screenshot] Generating code...");
      // const result = await recreateComponent({ html, css, screenshotUrl });
      const result = await cursorRecreateComponent({ html, css, screenshotUrl });

      if (!result.status) {
        console.log("[recreate-from-screenshot] Generation failed:", result.message);
        if (reservationId) await rollbackReservation(reservationId);
        return NextResponse.json(
          { success: false, error: result.message },
          { status: 500, headers: EXTENSION_CORS_HEADERS }
        );
      }

      const code = result.result ?? "";
      console.log("[recreate-from-screenshot] Generated code successfully, length:", code.length);
      if (reservationId) await confirmReservation(reservationId);
      return NextResponse.json(
        { success: true, code, message: result.message, reservationId },
        { headers: EXTENSION_CORS_HEADERS }
      );
    } catch (error) {
      console.error("Recreate from screenshot error:", error);
      if (reservationId) await rollbackReservation(reservationId);
      return NextResponse.json(
        {
          success: false,
          error: error instanceof Error ? error.message : "Recreate from screenshot failed",
        },
        { status: 500, headers: EXTENSION_CORS_HEADERS }
      );
    }
  } catch (error) {
    console.error("Recreate from screenshot unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Recreate from screenshot failed",
      },
      { status: 500, headers: EXTENSION_CORS_HEADERS }
    );
  }
}

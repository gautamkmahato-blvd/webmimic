import { NextResponse } from "next/server";
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from "@/lib/extension-route-helpers";
import { parseBody } from "@/lib/validation/validate";
import { RecreateFromScreenshotSchema } from "@/lib/validation/schemas";
import { ratelimit } from "@/lib/upstash/rateLimiter";
import cursorRecreateComponent from "@/app/service/cursor/cursorRecreateComponent";
import { CREDIT_FEATURES } from "@/lib/credits/config";
import { chargeFeatureCredits, refundFeatureCredits } from "@/lib/credits/extensionCredits";
import recreateFromScreenshot from "@/app/service/recreateFromScreenshot";

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

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: cors }
      );
    }

    const parsed = await parseBody(request, RecreateFromScreenshotSchema, cors);
    if (!parsed.ok) return parsed.response;
    const { html, css, screenshotUrl, idempotencyKey } = parsed.data;

    const charge = await chargeFeatureCredits({
      clerkId,
      featureId: CREDIT_FEATURES.RECREATE_FROM_SCREENSHOT,
      idempotencyKey,
      cors,
    });
    if (!charge.ok) return charge.response;

    try {
      console.log("[recreate-from-screenshot] Generating code...");
      const result = await recreateFromScreenshot({ html, css, screenshotUrl });

      if (!result.status) {
        console.log("[recreate-from-screenshot] Generation failed:", result.message);
        if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
        return NextResponse.json(
          { success: false, error: result.message },
          { status: 500, headers: cors }
        );
      }

      const code = result.result ?? "";
      console.log("[recreate-from-screenshot] Generated code successfully, length:", code.length);
      return NextResponse.json(
        {
          success: true,
          code,
          message: result.message,
          creditsCharged: charge.creditsCharged,
          creditsRemaining: charge.creditsRemaining,
        },
        { headers: cors }
      );
    } catch (error) {
      if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
      console.error("Recreate from screenshot error:", error);
      return NextResponse.json(
        {
          success: false,
          error: error instanceof Error ? error.message : "Recreate from screenshot failed",
        },
        { status: 500, headers: cors }
      );
    }
  } catch (error) {
    console.error("Recreate from screenshot unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Recreate from screenshot failed",
      },
      { status: 500, headers: cors }
    );
  }
}

import { NextResponse } from "next/server";
import openRouterAnalysis from "@/app/service/openRouterAnalysis";
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from "@/lib/extension-route-helpers";
import { parseBody } from "@/lib/validation/validate";
import { AnalyzeVideoSchema } from "@/lib/validation/schemas";
import { ratelimit } from "@/lib/upstash/rateLimiter";
import { creditFeatureForVideoOperation } from "@/lib/credits/config";
import { chargeFeatureCredits, refundFeatureCredits } from "@/lib/credits/extensionCredits";

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

    const featureId = creditFeatureForVideoOperation(operationType);
    const charge = await chargeFeatureCredits({
      clerkId,
      featureId,
      idempotencyKey,
      cors,
    });
    if (!charge.ok) return charge.response;

    try {
      console.log(`[${requestId}] Step 4: Calling openRouterAnalysis`);
      const modelResponse = await openRouterAnalysis(videoUrl, imageUrl, code);

      console.log(`[${requestId}] Step 4: openRouterAnalysis returned`, { status: modelResponse.status, message: modelResponse.message, resultLength: modelResponse.result?.length ?? 0 });

      if (!modelResponse.status) {
        console.warn(`[${requestId}] Step 4 FAILED: Model returned status=false. message=${modelResponse.message}`);
        if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
        return NextResponse.json(
          { status: false, statusText: modelResponse.message },
          { status: 500, headers: cors }
        );
      }

      console.log(`[${requestId}] Step 4 PASSED: Analysis complete`);
      return NextResponse.json(
        {
          status: true,
          analysis: modelResponse,
          statusText: modelResponse.message,
          creditsCharged: charge.creditsCharged,
          creditsRemaining: charge.creditsRemaining,
        },
        { status: 200, headers: cors }
      );
    } catch (error) {
      if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
      console.error(`[${requestId}] Step 4 EXCEPTION: openRouterAnalysis threw an error`, error);
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

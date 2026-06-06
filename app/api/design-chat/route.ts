import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import fs from 'fs/promises';
import path from 'path';
import { getWebAppCorsHeaders } from '@/lib/extension-route-helpers';
import openRouterDesignChat from '@/app/service/openRouterDesignChat';
import { CREDIT_FEATURES } from '@/lib/credits/config';
import { chargeFeatureCredits, refundFeatureCredits } from '@/lib/credits/extensionCredits';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

const MAX_INPUT_CHARS = 20_000;
const MAX_IMAGES = 6;
const SLUG_PATTERN = /^[a-zA-Z0-9 _.()-]+$/;

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getWebAppCorsHeaders(req) });
}

export async function POST(req: Request) {
  const corsHeaders = getWebAppCorsHeaders(req);
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401, headers: corsHeaders }
      );
    }

    const rateLimited = await enforceRateLimit('design-chat', userId, corsHeaders);
    if (rateLimited) return rateLimited;

    // ── Parse body ─────────────────────────────────────────────
    let body: {
      designSystemSlug?: string;
      userInput?: string;
      imageUrls?: string[];
    };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON body' },
        { status: 400, headers: corsHeaders }
      );
    }

    const userInput = (body.userInput ?? '').trim();
    if (!userInput) {
      return NextResponse.json(
        { success: false, error: 'userInput is required' },
        { status: 400, headers: corsHeaders }
      );
    }
    if (userInput.length > MAX_INPUT_CHARS) {
      return NextResponse.json(
        { success: false, error: `userInput exceeds ${MAX_INPUT_CHARS} characters` },
        { status: 400, headers: corsHeaders }
      );
    }

    const imageUrls = Array.isArray(body.imageUrls)
      ? body.imageUrls.filter((u) => typeof u === 'string' && u.trim()).slice(0, MAX_IMAGES)
      : [];

    // ── Load design system markdown (optional) ─────────────────
    let designSystemMarkdown: string | undefined;
    let designSystemName: string | undefined;

    if (body.designSystemSlug && typeof body.designSystemSlug === 'string') {
      const slug = body.designSystemSlug.trim();
      // Defense against path traversal — allow only safe characters.
      if (!SLUG_PATTERN.test(slug)) {
        return NextResponse.json(
          { success: false, error: 'Invalid design system identifier' },
          { status: 400, headers: corsHeaders }
        );
      }

      const baseDir = path.join(process.cwd(), 'public', 'files');
      const filePath = path.join(baseDir, `${slug}.md`);
      // Resolve and ensure the final path stays inside baseDir.
      const resolved = path.resolve(filePath);
      if (!resolved.startsWith(path.resolve(baseDir) + path.sep)) {
        return NextResponse.json(
          { success: false, error: 'Invalid design system identifier' },
          { status: 400, headers: corsHeaders }
        );
      }

      try {
        designSystemMarkdown = await fs.readFile(resolved, 'utf-8');
        designSystemName = slug;
      } catch {
        return NextResponse.json(
          { success: false, error: 'Design system file not found' },
          { status: 404, headers: corsHeaders }
        );
      }
    }

    const charge = await chargeFeatureCredits({
      clerkId: userId,
      featureId: CREDIT_FEATURES.DESIGN_CHAT,
      cors: corsHeaders,
    });
    if (!charge.ok) return charge.response;

    // ── Call service ───────────────────────────────────────────
    try {
      const result = await openRouterDesignChat({
        designSystemName,
        designSystemMarkdown,
        userInput,
        imageUrls,
      });

      if (!result.status) {
        if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
        return NextResponse.json(
          { success: false, error: result.message },
          { status: 500, headers: corsHeaders }
        );
      }

      return NextResponse.json(
        {
          success: true,
          result: result.result,
          message: result.message,
          creditsCharged: charge.creditsCharged,
          creditsRemaining: charge.creditsRemaining,
        },
        { status: 200, headers: corsHeaders }
      );
    } catch (serviceErr) {
      if (!charge.duplicate) await refundFeatureCredits(charge.transactionId);
      throw serviceErr;
    }
  } catch (err) {
    console.error('[design-chat] error', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

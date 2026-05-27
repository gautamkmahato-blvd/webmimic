import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import cursorDesignChat from '@/app/service/cursor/cursorDesignChat';
import { resolveClerkId, getWebAppCorsHeaders } from '@/lib/extension-route-helpers';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

export const runtime = 'nodejs';
export const maxDuration = 300;

const SLUG_PATTERN = /^[a-zA-Z0-9 _.()-]+$/;

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getWebAppCorsHeaders(req) });
}

export async function POST(req: Request) {
  const corsHeaders = getWebAppCorsHeaders(req);

  const clerkId = await resolveClerkId(req);
  if (!clerkId) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401, headers: corsHeaders }
    );
  }

  const { premium } = await hasPremiumAccessForClerkId(clerkId);
  if (!premium) {
    return NextResponse.json(
      { success: false, error: 'Premium subscription required to use Design Chat.' },
      { status: 403, headers: corsHeaders }
    );
  }

  let body: {
    message?: string;
    agentId?: string;
    images?: unknown;
    systemPrefix?: string;
    designSystemSlug?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400, headers: corsHeaders }
    );
  }

  const message = (body.message ?? '').trim();

  if (!message) {
    return NextResponse.json(
      { success: false, error: 'message is required' },
      { status: 400, headers: corsHeaders }
    );
  }

  let systemPrefix = body.systemPrefix;

  if (body.designSystemSlug && typeof body.designSystemSlug === 'string') {
    const slug = body.designSystemSlug.trim();
    if (!SLUG_PATTERN.test(slug)) {
      return NextResponse.json(
        { success: false, error: 'Invalid design system identifier' },
        { status: 400, headers: corsHeaders }
      );
    }

    const baseDir = path.join(process.cwd(), 'public', 'files');
    const filePath = path.join(baseDir, `${slug}.md`);
    const resolved = path.resolve(filePath);
    if (!resolved.startsWith(path.resolve(baseDir) + path.sep)) {
      return NextResponse.json(
        { success: false, error: 'Invalid design system identifier' },
        { status: 400, headers: corsHeaders }
      );
    }

    try {
      const designSystemMarkdown = await fs.readFile(resolved, 'utf-8');
      const designSystemBlock = [
        `The user selected the "${slug}" design system.`,
        'Use the documentation below as the source of truth for colors, typography, spacing, components, and tone.',
        '',
        '--- DESIGN SYSTEM START ---',
        designSystemMarkdown,
        '--- DESIGN SYSTEM END ---',
      ].join('\n');
      systemPrefix = systemPrefix
        ? `${systemPrefix}\n\n${designSystemBlock}`
        : designSystemBlock;
    } catch {
      return NextResponse.json(
        { success: false, error: 'Design system file not found' },
        { status: 404, headers: corsHeaders }
      );
    }
  }

  const result = await cursorDesignChat({
    message,
    agentId: body.agentId,
    images: body.images,
    systemPrefix,
  });

  if (!result.success) {
    const { httpStatus, error, retryable, agentId, status } = result;
    return NextResponse.json(
      {
        success: false,
        error,
        ...(retryable !== undefined ? { retryable } : {}),
        ...(agentId ? { agentId } : {}),
        ...(status ? { status } : {}),
      },
      { status: httpStatus, headers: corsHeaders }
    );
  }

  return NextResponse.json(
    {
      success: true,
      agentId: result.agentId,
      status: result.status,
      result: result.result,
    },
    { headers: corsHeaders }
  );
}

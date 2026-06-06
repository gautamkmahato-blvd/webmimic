import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import fs from 'fs/promises';
import path from 'path';
import { getWebAppCorsHeaders } from '@/lib/extension-route-helpers';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getWebAppCorsHeaders(req) });
}

export async function GET(req: Request) {
  const corsHeaders = getWebAppCorsHeaders(req);
  try {
    // ── AUTH FIRST ─────────────────────────────────────────────
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401, headers: corsHeaders }
      );
    }

    const rateLimited = await enforceRateLimit('design-chat-files', userId, corsHeaders);
    if (rateLimited) return rateLimited;

    const dir = path.join(process.cwd(), 'public', 'files');
    const entries = await fs.readdir(dir);
    const files = entries
      .filter((name) => name.toLowerCase().endsWith('.md'))
      .map((name) => name.replace(/\.md$/i, ''))
      .sort((a, b) => a.localeCompare(b));

    return NextResponse.json(
      { success: true, files },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error('[design-chat/files] error', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

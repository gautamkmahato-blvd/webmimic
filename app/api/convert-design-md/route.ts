import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { convertUiInspectorToGoogleDesignMd } from '@/lib/design-md/convertToGoogleDesignMd';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const rateLimited = await enforceRateLimit('convert-design-md', userId);
    if (rateLimited) return rateLimited;

    let body: { markdown?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
    }

    const markdown = typeof body.markdown === 'string' ? body.markdown.trim() : '';
    if (!markdown) {
      return NextResponse.json({ success: false, error: 'markdown is required' }, { status: 400 });
    }

    if (markdown.length > 2_000_000) {
      return NextResponse.json({ success: false, error: 'File is too large (max 2MB)' }, { status: 413 });
    }

    const result = convertUiInspectorToGoogleDesignMd(markdown);

    return NextResponse.json({
      success: true,
      designMd: result.designMd,
      meta: result.meta,
    });
  } catch (error) {
    console.error('[convert-design-md]', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Conversion failed',
      },
      { status: 500 },
    );
  }
}

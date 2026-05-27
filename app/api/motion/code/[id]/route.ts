import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { codeToHtml } from 'shiki';
import { COMPONENTS } from '@/data/motion/animations';
import { getMotionCode } from '@/app/service/supabase/motion/getMotionCode';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';

// In-process cache: avoids re-fetching + re-highlighting within the same server instance.
// Key: "{id}:{tier}"  Value: { html: string; raw: string }
const cache = new Map<string, { html: string; raw: string }>();

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // ── AUTH FIRST ─────────────────────────────────────────────
    // Every code fetch requires a signed-in user, including free components.
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const component = COMPONENTS.find((c) => c.id === id);
    if (!component) {
      return NextResponse.json({ error: 'Component not found' }, { status: 404 });
    }

    const isPro = component.isPro === true;

    // ── PRO gate (additional premium check) ────────────────────
    if (isPro) {
      const { premium } = await hasPremiumAccessForClerkId(userId);
      if (!premium) {
        return NextResponse.json({ error: 'PRO subscription required' }, { status: 403 });
      }
    }

    // ── Cache hit ──────────────────────────────────────────────
    const cacheKey = `${id}:${isPro ? 'pro' : 'free'}`;
    const cached = cache.get(cacheKey);
    if (cached) {
      return respond(cached, isPro);
    }

    // ── Fetch from Supabase Storage ────────────────────────────
    const raw = await getMotionCode(id, isPro);
    if (!raw) {
      return NextResponse.json({ error: 'Code not available yet' }, { status: 404 });
    }

    // ── Syntax highlight with shiki ────────────────────────────
    const html = await codeToHtml(raw, {
      lang: 'tsx',
      theme: 'github-dark-dimmed',
    });

    const result = { html, raw };
    cache.set(cacheKey, result);

    return respond(result, isPro);
  } catch (err) {
    console.error('[motion/code] error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function respond(result: { html: string; raw: string }, isPro: boolean) {
  const res = NextResponse.json(result);
  // All responses are now behind auth, so they must never be stored in shared caches.
  // `no-store` forces the auth gate to run on every request.
  res.headers.set('Cache-Control', 'private, no-store');
  void isPro;
  return res;
}

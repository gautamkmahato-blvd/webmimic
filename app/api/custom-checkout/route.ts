import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getPolarAccessTokenForApi, getPolarCheckoutApiUrl, isPolarSandbox } from '@/config/polar/env';
import { POLAR_CUSTOM_PAY_PRODUCT_ID, POLAR_PRODUCT_IDS } from '@/lib/billing/plans';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';
import { parseBody } from '@/lib/validation/validate';
import { CustomCheckoutSchema } from '@/lib/validation/schemas';

const MAX_CUSTOM_AMOUNT_USD = 10_000;

function isAllowedCheckoutRedirect(url: string): boolean {
  try {
    const parsed = new URL(url);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
    if (appUrl) {
      return parsed.origin === new URL(appUrl).origin;
    }
    // In production without NEXT_PUBLIC_APP_URL, reject all redirects (misconfiguration).
    if (process.env.NODE_ENV === 'production') {
      return false;
    }
    // Development only fallback.
    return parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

const ALLOWED_PRODUCT_IDS: Set<string> = new Set(Object.values(POLAR_PRODUCT_IDS));

export async function POST(req: NextRequest) {
  try {
    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;

    if (!clerkId) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const rateLimited = await enforceRateLimit('custom-checkout', clerkId);
    if (rateLimited) return rateLimited;

    const parsed = await parseBody(req, CustomCheckoutSchema);
    if (!parsed.ok) return parsed.response;
    const { productId, amount, isCustom, successUrl, cancelUrl } = parsed.data;

    if (!isAllowedCheckoutRedirect(successUrl) || (cancelUrl != null && !isAllowedCheckoutRedirect(cancelUrl))) {
      return NextResponse.json(
        { success: false, error: 'Invalid redirect URL', message: 'successUrl and cancelUrl must be on the same origin as this app' },
        { status: 400 }
      );
    }

    const isCustomFlow = isCustom === true;

    /** Custom pay uses a dedicated Polar product id from lib/billing/plans.ts (ignore client productId). */
    let resolvedProductId: string;
    if (isCustomFlow) {
      resolvedProductId = POLAR_CUSTOM_PAY_PRODUCT_ID;
    } else {
      if (!productId) {
        return NextResponse.json({ success: false, error: 'productId required' }, { status: 400 });
      }
      const trimmed = productId.trim();
      if (!ALLOWED_PRODUCT_IDS.has(trimmed)) {
        return NextResponse.json({ success: false, error: 'Invalid product ID' }, { status: 400 });
      }
      resolvedProductId = trimmed;
    }

    let priceOverrideCents: number | null = null;

    if (isCustomFlow) {
      if (typeof amount !== 'number' || amount < 1 || amount > MAX_CUSTOM_AMOUNT_USD) {
        return NextResponse.json(
          { success: false, error: `Invalid amount. Must be between $1 and $${MAX_CUSTOM_AMOUNT_USD}.` },
          { status: 400 }
        );
      }

      priceOverrideCents = Math.round(amount * 100);
    }

    const isSandbox = isPolarSandbox();
    const apiUrl = getPolarCheckoutApiUrl();
    const polarToken = getPolarAccessTokenForApi();

    if (!polarToken) {
      return NextResponse.json({ success: false, error: 'Missing Polar token' }, { status: 500 });
    }

    const payload: Record<string, unknown> = {
      products: [resolvedProductId],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        clerk_id: clerkId,
        billing_type: 'custom',
        env: isSandbox ? 'sandbox' : 'production',
      } satisfies Record<string, string>,
    };

    if (priceOverrideCents) {
      payload.price = {
        amount: priceOverrideCents,
        currency: 'USD',
      };
    }

    const polarRes = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${polarToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const polarData = await polarRes.json().catch(() => null);

    if (!polarRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: polarData?.error?.message || 'Failed to create Polar checkout',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        result: {
          checkoutUrl: polarData.url,
          checkoutId: polarData.id,
        },
        message: 'Checkout created',
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

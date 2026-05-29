import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getPolarAccessTokenForApi, getPolarCheckoutApiUrl, isPolarSandbox } from '@/config/polar/env';
import { resolvePlanForCheckout } from '@/app/service/supabase/billing/polar/resolvePlanForCheckout';
import { ratelimit } from '@/lib/upstash/rateLimiter';
import { parseBody } from '@/lib/validation/validate';
import { CreateCheckoutSchema } from '@/lib/validation/schemas';

function isAllowedCheckoutRedirect(url: string | null | undefined): boolean {
  if (!url) return true;
  try {
    const parsed = new URL(url);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
    if (appUrl) {
      return parsed.origin === new URL(appUrl).origin;
    }
    return parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clerkUser = await currentUser();
    const clerkId = clerkUser?.id;
    if (!clerkId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized', message: 'User not signed in via Clerk' },
        { status: 401 }
      );
    }

    const { success } = await ratelimit.limit(clerkId);
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        { status: 429 }
      );
    }

    const parsed = await parseBody(request, CreateCheckoutSchema);
    if (!parsed.ok) return parsed.response;
    const { productId, successUrl, cancelUrl } = parsed.data;

    if (!isAllowedCheckoutRedirect(successUrl) || !isAllowedCheckoutRedirect(cancelUrl)) {
      return NextResponse.json(
        { success: false, error: 'Invalid redirect URL', message: 'successUrl and cancelUrl must be on the same origin as this app' },
        { status: 400 }
      );
    }

    const { plan: planRow, dbError } = await resolvePlanForCheckout(productId);

    if (dbError) {
      return NextResponse.json(
        { success: false, error: 'DB error', message: dbError },
        { status: 500 }
      );
    }

    if (!planRow) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plan not found',
          message:
            'productId does not match any plan. Use a Polar product id from lib/billing/plans.ts (POLAR_PRODUCT_IDS) or seed the plans table.',
        },
        { status: 404 }
      );
    }

    const isSandbox = isPolarSandbox();
    const apiUrl = getPolarCheckoutApiUrl();
    const polarToken = getPolarAccessTokenForApi();

    /** Polar Checkout `products` must use Polar’s product id (UUID from dashboard). */
    const polarProductId = (planRow.provider_product_id as string | null) || productId;

    if (!polarProductId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plan misconfiguration',
          message: 'Plan is missing provider_product_id; set it to the Polar product id',
        },
        { status: 400 }
      );
    }

    if (!polarToken) {
      console.error('Missing Polar API token for mode:', isSandbox ? 'sandbox' : 'production');
      return NextResponse.json(
        { success: false, error: 'Server misconfiguration', message: 'Missing Polar API token' },
        { status: 500 }
      );
    }

    /** Polar metadata values must be strings — null/numbers cause 422 RequestValidationError. */
    const metadata: Record<string, string> = {
      clerk_id: clerkId,
      plan_id: String(planRow.id),
      product_id: productId,
      provider_product_id: polarProductId,
      env: isSandbox ? 'sandbox' : 'production',
      internal_order_id: `order_${Date.now()}`,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${polarToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products: [polarProductId],
        success_url: successUrl,
        cancel_url: cancelUrl ?? undefined,
        metadata,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const detail =
        Array.isArray(data?.detail) && data.detail.length > 0
          ? data.detail.map((d: { msg?: string; loc?: unknown[] }) => d.msg).filter(Boolean).join('; ')
          : null;
      console.error('Polar checkout creation failed', { status: response.status, body: data });
      return NextResponse.json(
        {
          success: false,
          error: detail || data?.error?.message || data?.error || 'Failed to create checkout',
          message: 'Polar API error',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        result: {
          checkoutUrl: data?.url,
          checkoutId: data?.id,
        },
        message: 'Checkout created',
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error('create-checkout unexpected error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Internal Server Error',
        message: 'Failed to create checkout',
      },
      { status: 500 }
    );
  }
}

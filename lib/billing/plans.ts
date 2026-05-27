/**
 * Polar product IDs from your Polar dashboard (used in Checkout `products[]` and webhooks).
 * Internal plan UUIDs — keep in sync with `supabase/seed_sample_data.sql`.
 */
export const POLAR_PRODUCT_IDS = {
  /** Basic plan (Polar product) */
  BASIC: 'f99eb0de-5919-4d9e-a7a3-04d4ee5dda03',
  /** Pro plan (Polar product) */
  PRO: '4e77e6f9-9e8f-4663-ba0f-be148ab8b752',
  /** Basic plan (Polar product) */
  BASIC_ANNUALLY: '9c87a109-c805-4c66-bd98-c4dc853ad96b',
  /** Pro plan (Polar product) */
  PRO_ANNUALLY: '33d617b1-a821-4a0c-b865-8782826c9532',
} as const;

/** Polar product used for pay-what-you-want / custom amount checkout (`/api/custom-checkout` when `isCustom: true`). */
export const POLAR_CUSTOM_PAY_PRODUCT_ID = 'be808c19-766f-4bb0-ba62-f69a93f8ab63';

/** Supabase `plans.id` values from seed SQL (for `/api/plans/subscribe` with ALLOW_INTERNAL_PLAN_SUBSCRIBE). */
export const PLAN_IDS = {
  BASIC: 'a0000001-0000-4000-8000-000000000001',
  PRO: 'a0000001-0000-4000-8000-000000000002',
  BASIC_ANNUALLY: 'c4f9d2e7-8a61-4b5a-92e3-7d1f0c6b8a21',
  PRO_ANNUALLY: 'e8a7c1d4-3f52-4e98-b7d1-2c9f6a4e5b73',
} as const;

export type BillingPlanKey = keyof typeof POLAR_PRODUCT_IDS;

/** Display + catalog copy — keep price in sync with `plans` rows in Supabase. */
export const PLAN_DISPLAY: Record<
  BillingPlanKey,
  { name: string; description: string; priceUsd: number }
> = {
  BASIC: {
    name: 'Basic',
    description: 'For individuals getting started.',
    priceUsd: 9.99,
  },
  PRO: {
    name: 'Pro',
    description: 'For teams and power users.',
    priceUsd: 29.99,
  },
  BASIC_ANNUALLY: {
    name: 'Basic_Annually',
    description: 'For individuals getting started.',
    priceUsd: 50.00,
  },
  PRO_ANNUALLY: {
    name: 'Pro_Annually',
    description: 'For teams and power users.',
    priceUsd: 200.00,
  },
};

/** Order shown on the Polar checkout UI */
export const CHECKOUT_PLAN_ORDER: BillingPlanKey[] = ['BASIC', 'PRO', 'BASIC_ANNUALLY', 'PRO_ANNUALLY'];

export function getPolarProductId(plan: BillingPlanKey): string {
  return POLAR_PRODUCT_IDS[plan];
}

/** Match checkout `productId` (Polar product UUID or internal plan id) to catalog. */
export function getCatalogPlanByPolarOrInternalId(productId: string): {
  planId: string;
  name: string;
  providerProductId: string;
  priceUsd: number;
} | null {
  const id = productId.trim();
  if (!id) return null;
  for (const key of CHECKOUT_PLAN_ORDER) {
    if (POLAR_PRODUCT_IDS[key] === id || PLAN_IDS[key] === id) {
      const d = PLAN_DISPLAY[key];
      return {
        planId: PLAN_IDS[key],
        name: d.name,
        providerProductId: POLAR_PRODUCT_IDS[key],
        priceUsd: d.priceUsd,
      };
    }
  }
  return null;
}

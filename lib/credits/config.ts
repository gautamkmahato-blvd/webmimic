/**
 * Central catalog of credit-priced features.
 * Add new features here — routes import the id and cost from this file only.
 */
export const CREDIT_FEATURES = {
  /** Extract full design system + extra (analyze-design-system, gemini-3-evidence, curate LLM) */
  DESIGN_SYSTEM_EXTRACTION: 'design-system-extraction',
  /** Recreate component from screenshot */
  RECREATE_FROM_SCREENSHOT: 'recreate-from-screenshot',
  /** Recreate component + animations (analyze-video ai-recreate) */
  RECREATE_WITH_ANIMATIONS: 'recreate-with-animations',
  /** Extract Lottie animations (analyze-video lottie-animations) */
  LOTTIE_EXTRACTION: 'lottie-extraction',
  /** Design Chat (OpenRouter) */
  DESIGN_CHAT: 'design-chat',
  /** Design Chat (Cursor agent) */
  DESIGN_CHAT_CURSOR: 'design-chat-cursor',
} as const;

export type CreditFeatureId = (typeof CREDIT_FEATURES)[keyof typeof CREDIT_FEATURES];

/** Credits charged per feature use. */
export const FEATURE_CREDIT_COSTS: Record<CreditFeatureId, number> = {
  [CREDIT_FEATURES.DESIGN_SYSTEM_EXTRACTION]: 2,
  [CREDIT_FEATURES.RECREATE_FROM_SCREENSHOT]: 3,
  [CREDIT_FEATURES.RECREATE_WITH_ANIMATIONS]: 5,
  [CREDIT_FEATURES.LOTTIE_EXTRACTION]: 3,
  [CREDIT_FEATURES.DESIGN_CHAT]: 2,
  [CREDIT_FEATURES.DESIGN_CHAT_CURSOR]: 5,
};

export function getFeatureCreditCost(featureId: CreditFeatureId): number {
  const cost = FEATURE_CREDIT_COSTS[featureId];
  if (!Number.isFinite(cost) || cost <= 0) {
    throw new Error(`[credits] invalid cost for feature "${featureId}"`);
  }
  return cost;
}

export function isCreditFeatureId(value: string): value is CreditFeatureId {
  return Object.values(CREDIT_FEATURES).includes(value as CreditFeatureId);
}

/** analyze-video operationType → credit feature */
export function creditFeatureForVideoOperation(
  operationType: 'lottie-animations' | 'ai-recreate',
): CreditFeatureId {
  if (operationType === 'lottie-animations') {
    return CREDIT_FEATURES.LOTTIE_EXTRACTION;
  }
  return CREDIT_FEATURES.RECREATE_WITH_ANIMATIONS;
}

/** $1 USD = 100 credits (amount is Polar total in cents). */
export function creditsFromCustomPaymentCents(amountCents: number): number {
  const cents = Math.max(0, Math.floor(Number(amountCents) || 0));
  return cents;
}

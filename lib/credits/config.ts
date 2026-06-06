/**
 * Single source of truth for all quota limits, plan keys, and operation identifiers.
 *
 * To change a limit: update the value here — it propagates everywhere automatically.
 * The extension mirrors this file in credits-config.js (UX only; server is always authoritative).
 */

// ── Plan keys ─────────────────────────────────────────────────────────────────

export const PLAN_KEYS = {
  FREE:            'FREE',
  BASIC:           'BASIC',
  PRO:             'PRO',
  BASIC_ANNUALLY:  'BASIC_ANNUALLY',
  PRO_ANNUALLY:    'PRO_ANNUALLY',
} as const;

export type PlanKey = (typeof PLAN_KEYS)[keyof typeof PLAN_KEYS];

// ── Operation identifiers (string values sent over the wire) ──────────────────

export const OPERATIONS = {
  ACCESSIBILITY_AUDIT: 'accessibility-audit',
  CODE_GENERATION:     'code-generation',
  LOTTIE_ANIMATIONS:   'lottie-animations',
  AI_RECREATE:         'ai-recreate',
  EXTRACT_TOKENS:      'extract-tokens',
  DESIGN_ANALYSIS:     'design-analysis',
  MEDIA_UPLOAD:        'media-upload',
} as const;

export type OperationId = (typeof OPERATIONS)[keyof typeof OPERATIONS];

// ── Per-plan per-operation monthly quotas ─────────────────────────────────────
//
// null = unlimited (no DB tracking needed)
// 0    = no access — hard block for Free users
// N    = monthly usage limit

export const PLAN_OPERATION_QUOTAS: Record<PlanKey, Record<OperationId, number | null>> = {
  FREE: {
    'accessibility-audit': 100,
    'code-generation':     0,
    'lottie-animations':   10,
    'ai-recreate':         0,
    'extract-tokens':      10,
    'design-analysis':     0,
    'media-upload':        50,
  },
  BASIC: {
    'accessibility-audit': null,
    'code-generation':     10,
    'lottie-animations':   100,
    'ai-recreate':         5,
    'extract-tokens':      100,
    'design-analysis':     10,
    'media-upload':        1000,
  },
  PRO: {
    'accessibility-audit': null,
    'code-generation':     100,
    'lottie-animations':   null,
    'ai-recreate':         50,
    'extract-tokens':      null,
    'design-analysis':     50,
    'media-upload':        10000,
  },
  BASIC_ANNUALLY: {
    'accessibility-audit': null,
    'code-generation':     150,
    'lottie-animations':   1500,
    'ai-recreate':         70,
    'extract-tokens':      1500,
    'design-analysis':     70,
    'media-upload':        15000,
  },
  PRO_ANNUALLY: {
    'accessibility-audit': null,
    'code-generation':     1500,
    'lottie-animations':   null,
    'ai-recreate':         700,
    'extract-tokens':      null,
    'design-analysis':     700,
    'media-upload':        100000,
  },
};

// ── Operations blocked entirely for Free users (plan_type = 'Free') ───────────

export const PLAN_REQUIRES_PREMIUM: Record<OperationId, boolean> = {
  'accessibility-audit': false,
  'code-generation':     true,
  'lottie-animations':   false,
  'ai-recreate':         true,
  'extract-tokens':      false,
  'design-analysis':     true,
  'media-upload':        false,
};

/**
 * Operations where work runs client-side after deduct-credits; the client confirms via
 * POST /api/quota/confirm. TTL expiry must not refund credits — the user may already
 * have received value without confirming.
 */
export const CLIENT_CONFIRM_OPERATIONS: ReadonlySet<OperationId> = new Set([
  OPERATIONS.ACCESSIBILITY_AUDIT,
  OPERATIONS.CODE_GENERATION,
  OPERATIONS.EXTRACT_TOKENS,
]);

// ── Asset save limits per plan ────────────────────────────────────────────────

export const PLAN_ASSET_LIMITS = {
  FREE:           100,
  BASIC:          1000,
  PRO:            10000,
  BASIC_ANNUALLY: 2000,
  PRO_ANNUALLY:   100000,
} as const;


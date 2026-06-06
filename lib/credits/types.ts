import type { CreditFeatureId } from '@/lib/credits/config';

export type CreditTransactionStatus = 'completed' | 'refunded';

export type CreditReferenceType =
  | 'feature_use'
  | 'plan_purchase'
  | 'custom_payment'
  | 'refund_clawback'
  | 'signup';

export type UserCreditsSnapshot = {
  userId: string;
  totalCredits: number;
  remainingCredits: number;
  planId: string | null;
  planType: string | null;
};

export type DeductCreditsResult =
  | {
      ok: true;
      transactionId: string;
      creditsCharged: number;
      creditsRemaining: number;
      duplicate: boolean;
    }
  | {
      ok: false;
      code: 'INSUFFICIENT_CREDITS' | 'USER_NOT_FOUND' | 'DB_ERROR' | 'CONCURRENT_MODIFICATION' | 'INVALID_FEATURE';
      message: string;
    };

export type GrantCreditsResult =
  | {
      ok: true;
      creditsGranted: number;
      creditsRemaining: number;
      totalCredits: number;
    }
  | {
      ok: false;
      code: 'USER_NOT_FOUND' | 'DB_ERROR' | 'INVALID_AMOUNT';
      message: string;
    };

export type RefundCreditsResult =
  | { ok: true; creditsRemaining: number }
  | { ok: false; code: 'NOT_FOUND' | 'ALREADY_REFUNDED' | 'DB_ERROR'; message: string };

export type ChargeFeatureParams = {
  clerkId: string;
  featureId: CreditFeatureId;
  idempotencyKey?: string | null;
};

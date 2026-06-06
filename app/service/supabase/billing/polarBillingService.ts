// src/lib/polarBillingService.ts

import { supabaseAdmin } from "@/config/supabase/supabaseAdmin";
import { grantCreditsToUser, clawBackCredits } from '@/app/service/supabase/credits/creditsService';
import { creditsFromCustomPaymentCents } from '@/lib/credits/config';


/**
 * DB helper functions for Polar webhook processing.
 * All functions use supabaseAdmin (service-role client).
 * Keep these functions small & focused for easier testing.
 */

/** Try find a plan by provider product id, provider price id, or plan id in metadata */
export async function findPlanByProductOrPriceIds(productId?: string, metadataPlanId?: string | number | boolean) {
  try {
    if (productId) {
      const { data: planRow, error } = await supabaseAdmin
        .from('plans')
        .select('*')
        .or(`id.eq.${productId},provider_product_id.eq.${productId}`)
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('[polarService] findPlanByProductOrPriceIds productId query error', error);
      }
      if (planRow) return planRow;
    }

    // if (productPriceId) {
    //   const { data: planRow, error } = await supabaseAdmin
    //     .from('plans')
    //     .select('*')
    //     .or(`provider_price_id.eq.${productPriceId},id.eq.${productPriceId}`)
    //     .limit(1)
    //     .maybeSingle();

    //   if (error) {
    //     console.error('[polarService] findPlanByProductOrPriceIds priceId query error', error);
    //   }
    //   if (planRow) return planRow;
    // }

    if (metadataPlanId) {
      const { data: planRow, error } = await supabaseAdmin
        .from('plans')
        .select('*')
        .eq('id', metadataPlanId)
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error('[polarService] findPlanByProductOrPriceIds metadata plan query error', error);
      }
      if (planRow) return planRow;
    }

    return null;
  } catch (err) {
    console.error('[polarService] findPlanByProductOrPriceIds unexpected', err);
    return null;
  }
}

/** Resolve a user by clerk_id. Returns { userId, clerkId } or null */
export async function findUserByClerkId(clerkId: string) {
  try {
    const { data: u, error } = await supabaseAdmin
      .from('users')
      .select('id, clerk_id')
      .eq('clerk_id', clerkId)
      .maybeSingle();

    if (error) {
      console.error('[polarService] findUserByClerkId query error', error);
      throw error;
    }
    if (!u) return null;
    return { userId: u.id, clerkId: u.clerk_id };
  } catch (err) {
    console.error('[polarService] findUserByClerkId unexpected', err);
    throw err;
  }
}

/** Check if a payment with provider_payment_id already exists AND credits were successfully granted (idempotency) */
export async function paymentExists(providerPaymentId: string) {
  if (!providerPaymentId) return false;
  try {
    const { data: existing, error } = await supabaseAdmin
      .from('payments')
      .select('id, status')
      .eq('provider_payment_id', providerPaymentId)
      .eq('status', 'succeeded')
      .maybeSingle();

    if (error) {
      console.error('[polarService] paymentExists error', error);
      // conservative: return false so caller can attempt insert (but DB unique constraint will protect)
      return false;
    }
    return !!existing;
  } catch (err) {
    console.error('[polarService] paymentExists unexpected', err);
    return false;
  }
}

/**
 * Find any payment row by provider_payment_id regardless of status.
 * Used to detect a 'pending' row left by a previously interrupted attempt.
 */
export async function findPaymentByProviderId(providerPaymentId: string) {
  if (!providerPaymentId) return null;
  try {
    const { data, error } = await supabaseAdmin
      .from('payments')
      .select('id, status, user_id, clerk_id, plan_id, credits_purchased, metadata')
      .eq('provider_payment_id', providerPaymentId)
      .maybeSingle();

    if (error) {
      console.error('[polarService] findPaymentByProviderId error', error);
      return null;
    }
    return data;
  } catch (err) {
    console.error('[polarService] findPaymentByProviderId unexpected', err);
    return null;
  }
}

/** Insert payment record. Caller should ideally have checked idempotency first. */
export async function insertPaymentRecord(params: {
  providerPaymentId: string;
  userId: string;
  clerkId?: string | null;
  planId?: string | null;
  provider?: string;
  amount?: number | null;
  creditsPurchased?: number | null;
  metadata?: any;
}) {
  const {
    providerPaymentId,
    userId,
    clerkId,
    planId,
    provider = 'polar',
    amount = null,
    creditsPurchased = null,
    metadata = {},
  } = params;

  try {
    const payload = {
      user_id: userId,
      plan_id: planId ?? null,
      clerk_id: clerkId ?? null,
      payment_provider: provider,
      provider_payment_id: providerPaymentId,
      amount,
      credits_purchased: creditsPurchased,
      status: 'pending',
      metadata,
    };

    const { data, error } = await supabaseAdmin
      .from('payments')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error('[polarService] insertPaymentRecord error', error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error('[polarService] insertPaymentRecord unexpected', err);
    throw err;
  }
}

/**
 * Grant plan access after a successful payment.
 * Adds plan.credits to the user balance and sets plan_id / plan_type='Premium'.
 */
export async function updatePlanAccess(
  userId: string,
  planId: string,
  providerPaymentId?: string | null,
) {
  try {
    const { data: plan, error: planErr } = await supabaseAdmin
      .from('plans')
      .select('id, credits')
      .eq('id', planId)
      .maybeSingle();

    if (planErr) {
      console.error('[polarService] updatePlanAccess plan read error', planErr);
      throw planErr;
    }

    const creditsToGrant = Math.max(0, Math.floor(Number(plan?.credits) || 0));

    if (creditsToGrant > 0) {
      const grant = await grantCreditsToUser({
        userId,
        amount: creditsToGrant,
        referenceType: 'plan_purchase',
        referenceId: providerPaymentId ?? planId,
        planId,
        setPremium: true,
      });

      if (!grant.ok) {
        console.error('[polarService] updatePlanAccess grant credits failed', { userId, planId, grant });
        throw new Error(grant.message);
      }

      console.log('[polarService] updatePlanAccess granted credits', {
        userId,
        planId,
        creditsToGrant,
        remaining: grant.creditsRemaining,
      });
      return grant;
    }

    const now = new Date().toISOString();
    const { data: updated, error: updateErr } = await supabaseAdmin
      .from('user_credits')
      .update({ plan_id: planId, plan_type: 'Premium', updated_at: now })
      .eq('user_id', userId)
      .select()
      .maybeSingle();

    if (updateErr) {
      console.error('[polarService] updatePlanAccess premium-only update error', updateErr);
      throw updateErr;
    }

    console.log('[polarService] updatePlanAccess premium flag only', { userId, planId });
    return updated;
  } catch (err) {
    console.error('[polarService] updatePlanAccess unexpected', err);
    throw err;
  }
}

/**
 * Grant credits for pay-what-you-want / custom Polar checkout ($1 = 100 credits).
 */
export async function grantCustomPaymentCredits(
  userId: string,
  amountCents: number,
  providerPaymentId: string,
) {
  const credits = creditsFromCustomPaymentCents(amountCents);
  if (credits <= 0) {
    console.warn('[polarService] grantCustomPaymentCredits skipped — zero credits', {
      userId,
      amountCents,
    });
    return { ok: true as const, creditsGranted: 0, creditsRemaining: 0, totalCredits: 0 };
  }

  const grant = await grantCreditsToUser({
    userId,
    amount: credits,
    referenceType: 'custom_payment',
    referenceId: providerPaymentId,
  });

  if (!grant.ok) {
    console.error('[polarService] grantCustomPaymentCredits failed', { userId, grant });
    throw new Error(grant.message);
  }

  console.log('[polarService] grantCustomPaymentCredits', {
    userId,
    credits,
    remaining: grant.creditsRemaining,
  });
  return grant;
}

/**
 * Downgrade plan access after a refund/chargeback when no succeeded payments remain.
 * If other succeeded plan payments exist, keeps Premium with the latest plan_id.
 */
export async function reconcilePlanAccessAfterPaymentChange(userId: string) {
  try {
    const { data: payments, error } = await supabaseAdmin
      .from('payments')
      .select('id, plan_id, updated_at')
      .eq('user_id', userId)
      .eq('status', 'succeeded')
      .not('plan_id', 'is', null)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('[polarService] reconcilePlanAccessAfterPaymentChange query error', error);
      throw error;
    }

    const now = new Date().toISOString();

    if (payments && payments.length > 0) {
      const latestPlanId = payments[0].plan_id as string;
      const { error: updateErr } = await supabaseAdmin
        .from('user_credits')
        .update({ plan_id: latestPlanId, plan_type: 'Premium', updated_at: now })
        .eq('user_id', userId);

      if (updateErr) {
        console.error('[polarService] reconcilePlanAccessAfterPaymentChange update error', updateErr);
        throw updateErr;
      }

      console.log('[polarService] reconcilePlanAccessAfterPaymentChange kept Premium', {
        userId,
        planId: latestPlanId,
      });
      return;
    }

    const { error: downgradeErr } = await supabaseAdmin
      .from('user_credits')
      .update({ plan_id: null, plan_type: 'Free', updated_at: now })
      .eq('user_id', userId);

    if (downgradeErr) {
      console.error('[polarService] reconcilePlanAccessAfterPaymentChange downgrade error', downgradeErr);
      throw downgradeErr;
    }

    console.log('[polarService] reconcilePlanAccessAfterPaymentChange downgraded to Free', { userId });
  } catch (err) {
    console.error('[polarService] reconcilePlanAccessAfterPaymentChange unexpected', err);
    throw err;
  }
}

/** Claw back credits tied to a refunded/chargeback payment when possible. */
export async function clawBackCreditsForPayment(
  userId: string,
  providerPaymentId: string,
  creditsPurchased: number | null | undefined,
) {
  const amount = Math.max(0, Math.floor(Number(creditsPurchased) || 0));
  if (amount <= 0) return;

  const result = await clawBackCredits({
    userId,
    amount,
    referenceId: providerPaymentId,
  });

  if (!result.ok) {
    console.error('[polarService] clawBackCreditsForPayment failed', {
      userId,
      providerPaymentId,
      result,
    });
    return;
  }

  console.log('[polarService] clawBackCreditsForPayment', {
    userId,
    providerPaymentId,
    clawedBack: Math.abs(result.creditsGranted),
    remaining: result.creditsRemaining,
  });
}

/** Update payment status and metadata (used for order.updated on failures/refunds) */
export async function updatePaymentStatus(providerPaymentId: string, status: string, extraMetadata?: any) {
  try {
    const { data: existing, error: existingErr } = await supabaseAdmin
      .from('payments')
      .select('*')
      .eq('provider_payment_id', providerPaymentId)
      .maybeSingle();

    if (existingErr) {
      console.error('[polarService] updatePaymentStatus read error', existingErr);
      throw existingErr;
    }
    if (!existing) {
      // Nothing to update
      return null;
    }

    const updatedMetadata = { ...(existing.metadata || {}), ...(extraMetadata || {}) };

    const { data: updated, error: updateErr } = await supabaseAdmin
      .from('payments')
      .update({ status, metadata: updatedMetadata, updated_at: new Date().toISOString() })
      .eq('provider_payment_id', providerPaymentId)
      .select()
      .single();

    if (updateErr) {
      console.error('[polarService] updatePaymentStatus update error', updateErr);
      throw updateErr;
    }
    return updated;
  } catch (err) {
    console.error('[polarService] updatePaymentStatus unexpected', err);
    throw err;
  }
}

/** Optional: record a checkout row for audit (if you want) */
export async function recordCheckout(checkoutData: any) {
  try {
    // implement if you have a checkouts table. For now this is a no-op that logs.
    console.log('[polarService] recordCheckout (noop) checkoutData.id', checkoutData?.id);
    return;
  } catch (err) {
    console.error('[polarService] recordCheckout unexpected', err);
  }
}

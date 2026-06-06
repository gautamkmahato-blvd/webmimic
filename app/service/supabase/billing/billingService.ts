// services/billingService.ts
import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { grantCreditsToUser } from '@/app/service/supabase/credits/creditsService';
import { SubscribeResult } from './type';
import { ServiceResponse } from '@/types/ServiceResponse';

/**
 * Note: this service MUST run in server context (API route). It uses the Supabase service role key.
 */
export async function billingService(
  clerkId: string,
  planId: string
): Promise<ServiceResponse<SubscribeResult>> {
  if (!clerkId) {
    return { success: false, result: {}, error: 'clerkId required', message: 'Missing clerkId' };
  }
  if (!planId) {
    return { success: false, result: {}, error: 'planId required', message: 'Missing planId' };
  }

  try {
    // 1) Resolve internal user by clerk_id
    const { data: user, error: userErr } = await supabaseAdmin
      .from('users')
      .select('id, clerk_id, email')
      .eq('clerk_id', clerkId)
      .maybeSingle();

    if (userErr) {
      console.error('DB error finding user:', userErr);
      return { success: false, result: {}, error: 'DB error finding user', message: String(userErr) };
    }
    if (!user) {
      return { success: false, result: {}, error: 'User not found', message: 'No user for given clerkId' };
    }
    const userId: string = user.id;

    // 2) Load plan
    const { data: plan, error: planErr } = await supabaseAdmin
      .from('plans')
      .select('*')
      .eq('id', planId)
      .maybeSingle();

    if (planErr) {
      console.error('DB error finding plan:', planErr);
      return { success: false, result: {}, error: 'DB error finding plan', message: String(planErr) };
    }
    if (!plan) {
      return { success: false, result: {}, error: 'Plan not found', message: 'No plan for given id' };
    }

    // 3) Create provider_payment_id (idempotency key)
    const providerPaymentId = `internal_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    const { data: existingPayment, error: existingPaymentErr } = await supabaseAdmin
      .from('payments')
      .select('id')
      .eq('provider_payment_id', providerPaymentId)
      .maybeSingle();

    if (existingPaymentErr) {
      console.error('Error checking existing payment:', existingPaymentErr);
    }
    if (existingPayment) {
      return {
        success: true,
        result: { payment: existingPayment, planAccess: {} },
        message: 'Payment already processed',
      };
    }

    // 4) Insert payment record
    const creditsPurchased = Math.max(0, Math.floor(Number(plan.credits) || 0));

    const paymentPayload = {
      user_id: userId,
      plan_id: plan.id,
      clerk_id: clerkId,
      payment_provider: 'internal',
      provider_payment_id: providerPaymentId,
      amount: plan.price_usd,
      credits_purchased: creditsPurchased,
      status: 'succeeded',
      metadata: { note: 'Immediate grant for manual purchase flow', credits_granted: true },
    };

    const { data: paymentRow, error: paymentErr } = await supabaseAdmin
      .from('payments')
      .insert([paymentPayload])
      .select()
      .single();

    if (paymentErr) {
      console.error('Failed to record payment:', paymentErr);
      return { success: false, result: {}, error: 'Failed to record payment', message: String(paymentErr) };
    }

    // 5) Grant credits + Premium plan access
    if (creditsPurchased > 0) {
      const grant = await grantCreditsToUser({
        userId,
        amount: creditsPurchased,
        referenceType: 'plan_purchase',
        referenceId: providerPaymentId,
        planId: plan.id,
        setPremium: true,
      });

      if (!grant.ok) {
        console.error('Failed to grant plan credits:', grant);
        return {
          success: true,
          result: { payment: paymentRow, credits: {} },
          message: 'Payment recorded, but failed to grant credits',
        };
      }

      return {
        success: true,
        result: { payment: paymentRow, credits: grant },
        message: 'Plan purchased and credits granted',
      };
    }

    const now = new Date().toISOString();
    const { data: planAccess, error: planAccessErr } = await supabaseAdmin
      .from('user_credits')
      .update({ plan_id: plan.id, plan_type: 'Premium', updated_at: now })
      .eq('user_id', userId)
      .select()
      .maybeSingle();

    if (planAccessErr) {
      console.error('Failed to update premium plan access:', planAccessErr);
      return {
        success: true,
        result: { payment: paymentRow, credits: {} },
        message: 'Payment recorded, but failed to update plan access',
      };
    }

    return {
      success: true,
      result: { payment: paymentRow, credits: planAccess },
      message: 'Plan purchased and access granted',
    };
  } catch (err) {
    console.error('billingService unexpected error:', err);
    return { success: false, result: {}, error: 'Unexpected server error', message: String(err) };
  }
}

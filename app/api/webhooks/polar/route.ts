// src/app/api/webhook/polar/route.ts
import { Webhooks } from '@polar-sh/nextjs';
import {
  updatePlanAccess,
  findPaymentByProviderId,
  findPlanByProductOrPriceIds,
  findUserByClerkId,
  insertPaymentRecord,
  updatePaymentStatus,
  reconcilePlanAccessAfterPaymentChange,
} from '@/app/service/supabase/billing/polarBillingService';
import { extractPolarOrderProductId } from '@/lib/polar/orderPayload';


const POLAR_WEBHOOK_SECRET = process.env.POLAR_WEBHOOK_SECRET;
if (!POLAR_WEBHOOK_SECRET) {
  throw new Error('[polar-webhook] POLAR_WEBHOOK_SECRET env var is required — set it in Vercel Server scope');
}

/**
 * Full Polar webhook handler tuned to the payloads you logged.
 * Handles: checkout.created, checkout.updated, order.created, order.paid, order.updated, customer.updated
 */
const webhook = Webhooks({
  webhookSecret: POLAR_WEBHOOK_SECRET,

  onPayload: async (payload) => {
    console.log('[polar:webhook] onPayload', { type: payload?.type ?? 'unknown' });
  },

  onCheckoutCreated: async (checkout) => {
    try {
      console.log('[polar:webhook] checkout.created', { id: checkout?.data.id, productId: checkout?.data.productId, amount: checkout?.data.amount });
      return;
    } catch (err) {
      console.error('[polar:webhook] onCheckoutCreated error', err);
      throw err;
    }
  },

  onCheckoutUpdated: async (checkout) => {
    try {
      console.log('[polar:webhook] checkout.updated', { id: checkout?.data.id, status: checkout?.data.status });

      if (checkout?.data.status === 'succeeded') {
        console.log('[polar:webhook] checkout succeeded', { id: checkout?.data.id, customerEmail: checkout.data.customerEmail });
      }

      return;
    } catch (err) {
      console.error('[polar:webhook] onCheckoutUpdated error', err);
      throw err;
    }
  },

  onOrderCreated: async (orderEvent) => {
    try {
      const data = orderEvent?.data ?? orderEvent;
      console.log('[polar:webhook] order.created', { id: data?.id, status: data?.status, paid: data?.paid });
      return;
    } catch (err) {
      console.error('[polar:webhook] onOrderCreated error', err);
      throw err;
    }
  },

  onOrderPaid: async (orderEvent) => {
    try {
      const data = orderEvent?.data ?? orderEvent;
      console.log('[polar:webhook] order.paid received', {
        id: data?.id,
        status: data?.status,
        metadata: data?.metadata,
      });

      const providerPaymentId = data?.id;
      if (!providerPaymentId) {
        throw new Error('[polar:webhook] order.paid missing order id (non-retryable payload)');
      }

      const existingPayment = await findPaymentByProviderId(providerPaymentId);

      if (existingPayment?.status === 'succeeded') {
        console.log('[polar:webhook] order.paid already processed', providerPaymentId);
        return;
      }

      const metadata = data?.metadata ?? data?.customer?.metadata ?? {};
      const clerkIdFromMeta = metadata?.clerk_id ?? null;

      if (!clerkIdFromMeta) {
        console.error(
          `[polar:webhook] order.paid missing clerk_id in metadata — skipping (non-retryable): orderId=${String(providerPaymentId)}`
        );
        return;
      }

      const userResolve = await findUserByClerkId(String(clerkIdFromMeta));

      if (!userResolve) {
        throw new Error(
          `[polar:webhook] user not found (retryable): clerkId=${String(clerkIdFromMeta)}`
        );
      }

      const { userId, clerkId } = userResolve;

      const amountCents = data?.totalAmount ?? data?.netAmount ?? 0;

      let planId: string | null = null;

      if (metadata?.billing_type === 'custom') {
        console.log('[polar:webhook] custom billing — recording payment, no plan change', { amountCents });
      } else {
        const extracted = extractPolarOrderProductId(data);
        const productId =
          extracted ??
          (data?.productId != null ? String(data.productId) : null) ??
          (data?.product?.id != null ? String(data.product.id) : null);

        const metadataPlanId = metadata?.plan_id ?? metadata?.planId ?? null;

        const plan = await findPlanByProductOrPriceIds(
          productId ?? undefined,
          metadataPlanId ?? undefined
        );

        if (!plan) {
          throw new Error(
            `[polar:webhook] no matching plan (retryable): productId=${String(productId)} planId=${String(metadataPlanId)}`
          );
        }

        planId = plan.id;
      }

      if (existingPayment?.status === 'pending') {
        console.log('[polar:webhook] order.paid resuming pending payment', providerPaymentId);
      } else {
        await insertPaymentRecord({
          providerPaymentId,
          userId,
          clerkId,
          planId,
          provider: 'polar',
          amount: amountCents,
          metadata,
        });
      }

      const planAlreadyGranted = (existingPayment?.metadata as Record<string, unknown>)?.plan_granted === true;

      if (!planAlreadyGranted && planId !== null) {
        await updatePlanAccess(userId, planId);
        await updatePaymentStatus(providerPaymentId, 'pending', { plan_granted: true });
      }

      await updatePaymentStatus(providerPaymentId, 'succeeded');

      console.log('[polar:webhook] order.paid processed', {
        providerPaymentId,
        userId,
        planId,
      });
    } catch (err) {
      console.error('[polar:webhook] onOrderPaid fatal error', err);
      throw err;
    }
  },


  onOrderUpdated: async (orderEvent) => {
    try {
      const data = orderEvent?.data ?? orderEvent;
      console.log('[polar:webhook] order.updated', { id: data?.id, status: data?.status });

      const providerPaymentId = data?.id;
      if (!providerPaymentId) {
        console.warn('[polar:webhook] order.updated missing id');
        return;
      }

      const status = (data?.status || '').toString().toLowerCase();
      const failureStatuses = [
        'failed',
        'cancelled',
        'canceled',
        'refunded',
        'chargeback',
        'charge_failed',
        'voided',
      ];

      if (failureStatuses.some((s) => status.includes(s))) {
        const updated = await updatePaymentStatus(providerPaymentId, status, { webhook_note: 'order.updated' });
        if (updated) {
          console.log('[polar:webhook] order.updated payment status updated', { providerPaymentId, status });

          const wasPlanPayment =
            updated.plan_id != null ||
            (updated.metadata as Record<string, unknown> | null)?.plan_granted === true;
          const userId = updated.user_id as string | null;

          if (wasPlanPayment && userId && (status.includes('refund') || status.includes('chargeback'))) {
            await reconcilePlanAccessAfterPaymentChange(userId);
            console.log('[polar:webhook] order.updated plan access reconciled after refund/chargeback', {
              providerPaymentId,
              userId,
            });
          }
        } else {
          console.log('[polar:webhook] order.updated no existing payment to update', providerPaymentId);
        }
      }

      return;
    } catch (err) {
      console.error('[polar:webhook] onOrderUpdated error', err);
      throw err;
    }
  },

  onCustomerUpdated: async (customer) => {
    try {
      console.log('[polar:webhook] customer.updated', { id: customer?.data.id, email: customer?.data.email });
      return;
    } catch (err) {
      console.error('[polar:webhook] onCustomerUpdated error', err);
      throw err;
    }
  },
});

export const POST = webhook;

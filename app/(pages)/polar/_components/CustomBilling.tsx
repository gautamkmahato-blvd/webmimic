'use client';

import { useState } from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';
import { POLAR_CUSTOM_PAY_PRODUCT_ID } from '@/lib/billing/plans';

/**
 * Custom amount checkout: uses `POLAR_CUSTOM_PAY_PRODUCT_ID` with Polar `price` override.
 * Ensure that product in Polar allows checkout price override.
 */

export default function CustomBilling() {
  const [amount, setAmount] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!amount || amount < 1) {
        setError('Minimum amount is $1');
        return;
      }

      const origin = window.location.origin;

      const res = await fetch('/api/custom-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          isCustom: true,
          productId: POLAR_CUSTOM_PAY_PRODUCT_ID,
          amount,
          successUrl: `${origin}/polar?checkout=success`,
          cancelUrl: `${origin}/polar?checkout=cancel`,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error((data && typeof data.error === 'string' ? data.error : null) || 'Checkout failed');
      }

      const checkoutUrl = data?.result?.checkoutUrl;
      if (!checkoutUrl || typeof checkoutUrl !== 'string') {
        throw new Error('No checkout URL returned');
      }

      window.location.href = checkoutUrl;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-[min(1160px,calc(100%-48px))] pb-[96px]">
      <div className="max-w-[780px] mx-auto rounded-[20px] border border-[#e5eaf3] bg-white shadow-[0_8px_32px_rgba(15,23,42,.07)] p-[28px]">

        {/* Header */}
        <p className="text-[11px] font-extrabold tracking-[.18em] text-[#9aa3b2] mb-[6px]">CUSTOM AMOUNT</p>
        <h2 className="text-[22px] font-bold tracking-[-0.03em] text-[#090b12] mb-[6px]">Pay what you need</h2>
        <p className="text-[13px] text-[#667489] leading-[1.65] mb-[24px]">
          Pay any whole-dollar amount (USD).{' '}
          <span className="font-semibold text-[#536174]">$1 = 100 credits</span>{' '}
          — based on the charged total after payment.
        </p>

        <div className="h-px bg-[#edf1f7] mb-[24px]" />

        {/* Input */}
        <label className="block text-[12px] font-semibold text-[#536174] mb-[8px] tracking-[.04em]">
          AMOUNT (USD)
        </label>
        <div className="relative mb-[20px]">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[16px] font-semibold text-[#9aa3b2]">$</span>
          <input
            type="number"
            min={1}
            step={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border border-[#e5eaf3] rounded-[10px] pl-[30px] pr-[14px] py-[12px] text-[16px] font-semibold text-[#090b12] bg-white focus:outline-none focus:border-[#1463ff] focus:ring-2 focus:ring-[#1463ff]/10 transition-colors"
          />
        </div>

        {/* Credits preview */}
        <div className="flex items-center gap-[8px] mb-[24px] px-[14px] py-[10px] rounded-[10px] bg-[#f3f5f8] border border-[#e5eaf3]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#1463ff]" />
          <span className="text-[12.5px] text-[#536174]">
            You&apos;ll receive{' '}
            <span className="font-bold text-[#090b12]">{(Math.max(0, amount || 0) * 100).toLocaleString()} credits</span>
          </span>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={createCheckout}
          disabled={loading}
          className="w-full h-[48px] rounded-[10px] flex items-center justify-center gap-[8px] text-[14px] font-bold bg-[#090b12] text-white shadow-[0_4px_14px_rgba(9,11,18,.22)] transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CreditCard size={16} />
          {loading ? 'Processing…' : `Pay $${amount || 0}`}
        </button>

        {/* Error */}
        {error && (
          <div className="mt-[16px] bg-red-50 border border-red-100 rounded-[10px] px-[16px] py-[12px] flex items-start gap-[10px]">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-[1px]" />
            <p className="text-[12.5px] text-red-600">{error}</p>
          </div>
        )}

      </div>
    </section>
  );
}

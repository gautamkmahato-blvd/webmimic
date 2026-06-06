'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SignInButton, UserButton, useAuth } from '@clerk/nextjs';
import {
  AlertCircle,
  CheckCircle2,
  Coins,
  History,
  Loader2,
  XCircle,
} from 'lucide-react';
import PolarPaymentGateway from '../billing/_components/PolarPaymentGateway';
import CustomBilling from '../billing/_components/CustomBilling';
import type { PaymentRow } from '@/app/service/supabase/payments/types';

type CreditsSnapshot = {
  remainingCredits: number;
  totalCredits: number;
  planType: string | null;
};

function formatUsdFromCents(cents: number | null): string {
  if (cents == null) return '—';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function paymentLabel(row: PaymentRow): string {
  if (row.plan_id) return 'Plan subscription';
  if ((row.credits_purchased ?? 0) > 0) return 'Credit top-up';
  return row.payment_provider || 'Payment';
}

function statusStyles(status: string): string {
  const normalized = status.toLowerCase();
  if (normalized === 'completed' || normalized === 'succeeded' || normalized === 'paid') {
    return 'bg-emerald-50 text-emerald-700 border-emerald-100';
  }
  if (normalized === 'pending' || normalized === 'processing') {
    return 'bg-amber-50 text-amber-700 border-amber-100';
  }
  if (normalized === 'failed' || normalized === 'canceled' || normalized === 'cancelled') {
    return 'bg-red-50 text-red-600 border-red-100';
  }
  return 'bg-neutral-100 text-neutral-600 border-neutral-200';
}

function CreditsContent() {
  const searchParams = useSearchParams();
  const checkout = searchParams.get('checkout');
  const { isLoaded, isSignedIn } = useAuth();

  const [credits, setCredits] = useState<CreditsSnapshot | null>(null);
  const [payments, setPayments] = useState<PaymentRow[]>([]);
  const [loadingCredits, setLoadingCredits] = useState(true);
  const [loadingPayments, setLoadingPayments] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    if (!isSignedIn) {
      setLoadingCredits(false);
      setLoadingPayments(false);
      return;
    }

    setFetchError(null);
    setLoadingCredits(true);
    setLoadingPayments(true);

    const [creditsRes, paymentsRes] = await Promise.all([
      fetch('/api/user/credits-status', { credentials: 'include' }),
      fetch('/api/payments/list', { method: 'POST', credentials: 'include' }),
    ]);

    try {
      const creditsData = await creditsRes.json().catch(() => null);
      if (creditsRes.ok && creditsData?.success) {
        setCredits({
          remainingCredits: creditsData.remainingCredits ?? 0,
          totalCredits: creditsData.totalCredits ?? 0,
          planType: creditsData.planType ?? null,
        });
      } else if (!creditsRes.ok) {
        setFetchError(creditsData?.error ?? 'Failed to load credits');
      }
    } finally {
      setLoadingCredits(false);
    }

    try {
      const paymentsData = await paymentsRes.json().catch(() => null);
      if (paymentsRes.ok && paymentsData?.success && Array.isArray(paymentsData.result)) {
        setPayments(paymentsData.result as PaymentRow[]);
      }
    } finally {
      setLoadingPayments(false);
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (!isLoaded) return;
    void loadData();
  }, [isLoaded, loadData]);

  return (
    <div className="min-h-full bg-white">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <Coins className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">Credits</span>
          </div>

          <div className="flex shrink-0 items-center">
            {!isLoaded ? (
              <span className="h-9 w-20 animate-pulse rounded-lg bg-neutral-200" />
            ) : isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
                  Sign in
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-10">
        {checkout === 'success' && (
          <div className="mb-8 flex items-start gap-3 rounded-[14px] border border-emerald-100 bg-emerald-50 px-5 py-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-900">Payment successful</p>
              <p className="mt-1 text-[13px] text-emerald-800">
                Your credits will appear shortly once the payment is confirmed.
              </p>
            </div>
          </div>
        )}

        {checkout === 'cancel' && (
          <div className="mb-8 flex items-start gap-3 rounded-[14px] border border-amber-100 bg-amber-50 px-5 py-4">
            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-900">Checkout canceled</p>
              <p className="mt-1 text-[13px] text-amber-800">
                No charge was made. Pick a plan below when you&apos;re ready.
              </p>
            </div>
          </div>
        )}

        {fetchError && (
          <div className="mb-8 flex items-start gap-3 rounded-[14px] border border-red-100 bg-red-50 px-5 py-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
            <p className="text-[13px] text-red-600">{fetchError}</p>
          </div>
        )}

        <section className="mb-12">
          <p className="mb-2 text-[11px] font-extrabold tracking-[.18em] text-[#9aa3b2]">
            YOUR BALANCE
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[18px] border border-[#e5eaf3] bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,.06)]">
              <p className="text-[12px] font-semibold tracking-[.04em] text-[#667489]">
                REMAINING
              </p>
              {loadingCredits ? (
                <div className="mt-3 h-10 w-28 animate-pulse rounded-lg bg-neutral-100" />
              ) : (
                <p className="mt-2 text-[40px] font-bold leading-none tracking-[-0.04em] text-[#090b12]">
                  {(credits?.remainingCredits ?? 0).toLocaleString()}
                </p>
              )}
              <p className="mt-2 text-[12px] text-[#9aa3b2]">credits available</p>
            </div>

            <div className="rounded-[18px] border border-[#e5eaf3] bg-[#f8fafc] p-6">
              <p className="text-[12px] font-semibold tracking-[.04em] text-[#667489]">
                LIFETIME TOTAL
              </p>
              {loadingCredits ? (
                <div className="mt-3 h-10 w-28 animate-pulse rounded-lg bg-neutral-200" />
              ) : (
                <p className="mt-2 text-[40px] font-bold leading-none tracking-[-0.04em] text-[#090b12]">
                  {(credits?.totalCredits ?? 0).toLocaleString()}
                </p>
              )}
              <p className="mt-2 text-[12px] text-[#9aa3b2]">credits granted</p>
            </div>

            <div className="rounded-[18px] border border-[#e5eaf3] bg-white p-6">
              <p className="text-[12px] font-semibold tracking-[.04em] text-[#667489]">
                CURRENT PLAN
              </p>
              {loadingCredits ? (
                <div className="mt-3 h-10 w-36 animate-pulse rounded-lg bg-neutral-100" />
              ) : (
                <p className="mt-2 text-[28px] font-bold capitalize leading-none tracking-[-0.03em] text-[#090b12]">
                  {credits?.planType?.replace(/_/g, ' ') ?? 'Free'}
                </p>
              )}
              <p className="mt-2 text-[12px] text-[#9aa3b2]">active subscription tier</p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-5 flex items-center gap-2">
            <History className="h-4 w-4 text-[#667489]" />
            <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#090b12]">
              Transaction history
            </h2>
          </div>

          <div className="overflow-hidden rounded-[16px] border border-[#e5eaf3] bg-white shadow-[0_4px_24px_rgba(15,23,42,.05)]">
            {!isSignedIn ? (
              <p className="px-6 py-10 text-center text-[13px] text-[#667489]">
                Sign in to view your payment history.
              </p>
            ) : loadingPayments ? (
              <div className="flex items-center justify-center gap-2 px-6 py-14 text-[13px] text-[#667489]">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading transactions…
              </div>
            ) : payments.length === 0 ? (
              <p className="px-6 py-10 text-center text-[13px] text-[#667489]">
                No transactions yet. Purchase a plan or top up credits below.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-[#edf1f7] bg-[#f8fafc] text-[11px] font-extrabold tracking-[.12em] text-[#9aa3b2]">
                      <th className="px-5 py-3">DATE</th>
                      <th className="px-5 py-3">TYPE</th>
                      <th className="px-5 py-3">AMOUNT</th>
                      <th className="px-5 py-3">CREDITS</th>
                      <th className="px-5 py-3">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-[#f1f5f9] last:border-b-0 hover:bg-[#fafbfc]"
                      >
                        <td className="px-5 py-4 text-[#536174]">{formatDate(row.created_at)}</td>
                        <td className="px-5 py-4 font-medium text-[#090b12]">
                          {paymentLabel(row)}
                        </td>
                        <td className="px-5 py-4 text-[#536174]">
                          {formatUsdFromCents(row.amount)}
                        </td>
                        <td className="px-5 py-4 font-semibold text-[#090b12]">
                          {row.credits_purchased != null
                            ? `+${row.credits_purchased.toLocaleString()}`
                            : '—'}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold capitalize ${statusStyles(row.status)}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <section id="plans" className="border-t border-[#edf1f7] pt-10">
          <p className="mb-2 text-center text-[11px] font-extrabold tracking-[.24em] text-[#1463ff]">
            PLANS
          </p>
          <h2 className="mb-10 text-center text-[28px] font-bold tracking-[-0.03em] text-[#090b12]">
            Buy or upgrade
          </h2>
          <PolarPaymentGateway embedded />
          <CustomBilling />
        </section>
      </div>
    </div>
  );
}

export default function CreditsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center text-[13px] text-[#667489]">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading…
        </div>
      }
    >
      <CreditsContent />
    </Suspense>
  );
}

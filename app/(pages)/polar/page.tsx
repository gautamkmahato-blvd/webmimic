'use client';

import { CreditCard } from 'lucide-react';
import { SignInButton, UserButton, useAuth } from '@clerk/nextjs';
import PolarPaymentGateway from './_components/PolarPaymentGateway';
import CustomBilling from './_components/CustomBilling';

/**
 * /polar — test Polar checkout (protected by Clerk middleware).
 * Product IDs: lib/billing/plans.ts (POLAR_PRODUCT_IDS).
 */
export default function PolarPage() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* ─── TOP BAR ─────────────────────────────────────── */}
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <CreditCard className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              billing
            </span>
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

      <PolarPaymentGateway />
      <CustomBilling />
    </div>
  );
}

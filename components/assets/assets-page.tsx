"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { FolderOpen, Loader2 } from "lucide-react";
import { useAssets } from "./use-assets";
import { AssetsDashboard } from "./assets-dashboard";

// ─────────────────────────────────────────────────────────────
// STAT
// ─────────────────────────────────────────────────────────────
function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight tabular-nums">{value}</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">{label}</div>
    </div>
  );
}

function AssetsSignedInView() {
  const { assets, loading, error } = useAssets();
  return <AssetsDashboard assets={assets} loading={loading} error={error} />;
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export function AssetsPage() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ─── TOP BAR ─────────────────────────────────────── */}
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <FolderOpen className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              assets.gallery
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

      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[1600px] px-8 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Assets,
                <br />
                <span className="text-neutral-400">saved & organized.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base text-neutral-600">
                Browse colors, images, code snippets, typography, and more — all
                saved from the browser extension and organized in one place.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Stat value="Colors" label="Palette" />
              <div className="h-10 w-px bg-neutral-200" />
              <Stat value="Code" label="Snippets" />
              <div className="h-10 w-px bg-neutral-200" />
              <Stat value="Media" label="Files" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─────────────────────────────────────── */}
      {!isLoaded ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="size-10 animate-spin text-neutral-300" aria-hidden />
        </div>
      ) : !isSignedIn ? (
        <div className="mx-auto max-w-[1600px] px-8 py-16">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-10 py-16 text-center">
            <p className="text-neutral-600">
              Sign in to view assets saved to your account.
            </p>
            <SignInButton mode="modal">
              <button className="mt-5 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">
                Sign in
              </button>
            </SignInButton>
          </div>
        </div>
      ) : (
        <AssetsSignedInView />
      )}
    </div>
  );
}

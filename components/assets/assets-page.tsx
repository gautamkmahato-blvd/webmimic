"use client";

import { useMemo, useState } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import {
  Search,
  FolderOpen,
  LayoutGrid,
  List,
  RefreshCw,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { useAssets } from "./use-assets";
import {
  ASSET_SECTION_TABS,
  assetMatchesTypeFilter,
  formatDomainFilterLabel,
  getHostnameFromSourceUrl,
} from "./asset-format";
import { AssetGrid, type AssetViewMode } from "./asset-grid";
import type { AssetTypeFilter, SourceDomainFilter } from "./asset-toolbar";
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

// ─────────────────────────────────────────────────────────────
// FILTERING HOOK
// ─────────────────────────────────────────────────────────────
function useFilteredAssets() {
  const { assets, loading, error, refetch } = useAssets();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<AssetTypeFilter>("all");
  const [sourceDomainFilter, setSourceDomainFilter] = useState<SourceDomainFilter>("all");

  const { sourceDomainOptions, noSourceCount } = useMemo(() => {
    const byHost = new Map<string, string>();
    let noSource = 0;
    for (const a of assets) {
      const host = getHostnameFromSourceUrl(a.source_url);
      if (!host) { noSource++; continue; }
      if (!byHost.has(host)) byHost.set(host, formatDomainFilterLabel(host));
    }
    const options = Array.from(byHost.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([value, label]) => ({ value, label }));
    return { sourceDomainOptions: options, noSourceCount: noSource };
  }, [assets]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return assets.filter((a) => {
      if (!assetMatchesTypeFilter(a, typeFilter)) return false;
      if (sourceDomainFilter !== "all") {
        const host = getHostnameFromSourceUrl(a.source_url);
        if (sourceDomainFilter === "__no_source__") { if (host) return false; }
        else if (host !== sourceDomainFilter) return false;
      }
      if (!q) return true;
      const title = (a.title ?? "").toLowerCase();
      const content = (a.content ?? "").toLowerCase();
      const url = (a.url ?? "").toLowerCase();
      return title.includes(q) || content.includes(q) || url.includes(q);
    });
  }, [assets, search, typeFilter, sourceDomainFilter]);

  return {
    assets, loading, error, refetch,
    search, setSearch,
    typeFilter, setTypeFilter,
    sourceDomainFilter, setSourceDomainFilter, sourceDomainOptions, noSourceCount,
    filtered,
  };
}

// ─────────────────────────────────────────────────────────────
// SIGNED-IN VIEW — filter bar + dashboard / grid
// ─────────────────────────────────────────────────────────────
function AssetsSignedInView() {
  const [viewMode, setViewMode] = useState<AssetViewMode>("grid");
  const {
    assets, loading, error, refetch,
    search, setSearch,
    typeFilter, setTypeFilter,
    sourceDomainFilter, setSourceDomainFilter, sourceDomainOptions, noSourceCount,
    filtered,
  } = useFilteredAssets();

  return (
    <>
      {/* ─── FILTER BAR (TWO ROWS) ───────────────────────── */}
      <section className="sticky top-0 z-30 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-8">
          {/* ── ROW 1: search + source + view toggle + refresh ── */}
          <div className="flex items-center gap-3 py-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search assets by title or content…"
                className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {sourceDomainOptions.length > 0 && (
              <div className="relative shrink-0">
                <select
                  value={sourceDomainFilter}
                  onChange={(e) =>
                    setSourceDomainFilter(e.target.value as SourceDomainFilter)
                  }
                  className="appearance-none rounded-xl border border-neutral-200 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-neutral-800 focus:border-neutral-400 focus:outline-none"
                >
                  <option value="all">All pages</option>
                  {noSourceCount > 0 && (
                    <option value="__no_source__">No page ({noSourceCount})</option>
                  )}
                  {sourceDomainOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              </div>
            )}

            <div
              className="inline-flex shrink-0 rounded-xl border border-neutral-200 bg-neutral-100 p-0.5"
              role="group"
              aria-label="View mode"
            >
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
                title="Grid view"
                className={`inline-flex size-9 items-center justify-center rounded-[10px] transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                <LayoutGrid className="size-[18px]" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-pressed={viewMode === "list"}
                title="List view"
                className={`inline-flex size-9 items-center justify-center rounded-[10px] transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                <List className="size-[18px]" aria-hidden />
              </button>
            </div>

            <button
              type="button"
              onClick={() => void refetch()}
              disabled={loading}
              title="Refresh"
              aria-label="Refresh"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-50 disabled:opacity-40"
            >
              <RefreshCw
                className={`size-[18px] ${loading ? "animate-spin" : ""}`}
                aria-hidden
              />
            </button>
          </div>

          {/* ── ROW 2: type pills ─────────────────────────── */}
          <div className="border-t border-neutral-100">
            <nav className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => setTypeFilter("all")}
                className={`shrink-0 rounded-full px-5 py-2 text-sm transition-colors ${
                  typeFilter === "all"
                    ? "bg-neutral-100 font-medium text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                All
              </button>
              {ASSET_SECTION_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setTypeFilter(tab.key)}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm transition-colors ${
                    typeFilter === tab.key
                      ? "bg-neutral-100 font-medium text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <div className="mb-6 flex items-center justify-between px-8 pt-6 mx-auto max-w-[1600px]">
        <p className="text-sm text-neutral-500">
          Showing{" "}
          <span className="font-medium text-neutral-900">{filtered.length}</span>{" "}
          of{" "}
          <span className="font-medium text-neutral-900">{assets.length}</span>{" "}
          assets
        </p>
      </div>

      {typeFilter === "all" && viewMode === "grid" ? (
        <AssetsDashboard
          assets={filtered}
          loading={loading}
          error={error}
          onViewAll={(section) => setTypeFilter(section)}
        />
      ) : (
        <main className="mx-auto max-w-[1600px] px-8 pb-8">
          {loading && assets.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-neutral-400">
              <Loader2 className="size-10 animate-spin" aria-hidden />
              <p className="mt-3 text-sm">Loading assets…</p>
            </div>
          ) : (
            <AssetGrid
              assets={filtered}
              viewMode={typeFilter === "all" ? viewMode : "grid"}
            />
          )}
        </main>
      )}
    </>
  );
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

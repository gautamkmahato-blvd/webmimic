"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import {
  Copy,
  Download,
  ExternalLink,
  Loader2,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import { useAssets } from "@/components/assets/use-assets";
import {
  formatAssetDate,
  formatDomainFilterLabel,
  getHostnameFromSourceUrl,
} from "@/components/assets/asset-format";
import {
  parseAccessibilityReportStats,
  scoreColor,
} from "./parse-report-stats";

function isAccessibilityReport(asset: AssetRow): boolean {
  return asset.type?.toLowerCase() === "report";
}

function downloadReportMarkdown(asset: AssetRow) {
  const content = asset.content?.trim();
  if (!content) return;
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const slug = getHostnameFromSourceUrl(asset.source_url) ?? "page";
  a.href = url;
  a.download = `accessibility-report-${slug}-${Date.now()}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

function ReportGalleryCard({ asset }: { asset: AssetRow }) {
  const [copied, setCopied] = useState(false);
  const stats = parseAccessibilityReportStats(asset.content);
  const host =
    getHostnameFromSourceUrl(asset.source_url) ??
    getHostnameFromSourceUrl(stats.pageUrl);
  const domainLabel = host ? formatDomainFilterLabel(host) : null;
  const pageUrl = asset.source_url || stats.pageUrl;
  const title = asset.title?.trim() || "Accessibility audit report";
  const ringColor = scoreColor(stats.score);

  const copyReport = async () => {
    const text = asset.content?.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:border-neutral-300 hover:shadow-lg">
      <Link
        href={`/accessibility-report/${asset.id}`}
        className="flex flex-1 flex-col p-5 text-left"
      >
        <div className="mb-4">
          {domainLabel ? (
            <div className="inline-flex max-w-full items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-amber-800">
              <span className="truncate">{domainLabel}</span>
            </div>
          ) : (
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-500">
              Unknown site
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div
            className="relative flex size-20 shrink-0 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(${ringColor} ${stats.score ?? 0}%, #f5f5f5 0)`,
            }}
          >
            <div className="flex size-[4.25rem] flex-col items-center justify-center rounded-full bg-white">
              <span
                className="text-2xl font-bold tabular-nums leading-none"
                style={{ color: ringColor }}
              >
                {stats.score ?? "—"}
              </span>
              <span className="mt-0.5 text-[10px] font-medium text-neutral-400">
                /100
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-sm font-semibold text-neutral-900">
              {title}
            </h3>
            <p className="mt-1 text-xs text-neutral-500">
              {formatAssetDate(asset.created_at)}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-2 border-t border-neutral-100 px-4 py-3">
        <button
          type="button"
          onClick={() => void copyReport()}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          <Copy className="size-3.5" aria-hidden />
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          type="button"
          onClick={() => downloadReportMarkdown(asset)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          <Download className="size-3.5" aria-hidden />
          Download
        </button>
        {pageUrl ? (
          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50"
            aria-label="Open audited page"
          >
            <ExternalLink className="size-4" aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ReportsSignedInView() {
  const { assets, loading, error, refetch } = useAssets();
  const [search, setSearch] = useState("");

  const reports = useMemo(
    () => assets.filter(isAccessibilityReport),
    [assets],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return reports;
    return reports.filter((asset) => {
      const title = (asset.title ?? "").toLowerCase();
      const content = (asset.content ?? "").toLowerCase();
      const host = getHostnameFromSourceUrl(asset.source_url) ?? "";
      return (
        title.includes(q) ||
        content.includes(q) ||
        host.toLowerCase().includes(q)
      );
    });
  }, [reports, search]);

  return (
    <>
      <section className="sticky top-0 z-30 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-8 py-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reports by page, score, or content…"
              className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
            />
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
      </section>

      <div className="mx-auto max-w-[1600px] px-8 pb-10 pt-6">
        <p className="mb-6 text-sm text-neutral-500">
          Showing{" "}
          <span className="font-medium text-neutral-900">{filtered.length}</span>{" "}
          of{" "}
          <span className="font-medium text-neutral-900">{reports.length}</span>{" "}
          accessibility reports
        </p>

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center text-sm text-red-700">
            {error}
          </div>
        ) : loading && reports.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-neutral-400">
            <Loader2 className="size-10 animate-spin" aria-hidden />
            <p className="mt-3 text-sm">Loading reports…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-24 text-center">
            <ShieldCheck className="mb-3 size-12 text-neutral-300" aria-hidden />
            <p className="text-sm font-medium text-neutral-500">
              No accessibility reports yet.
            </p>
            <p className="mt-1 max-w-sm text-xs text-neutral-400">
              Run an audit in the browser extension and save the report to see it here.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((asset) => (
              <li key={asset.id} className="flex min-h-0 min-w-0">
                <ReportGalleryCard asset={asset} />
              </li>
            ))}
          </ul>
        )}
      </div>

    </>
  );
}

export function AccessibilityReportsPage() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <ShieldCheck className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              accessibility.reports
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

      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[1600px] px-8 py-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Accessibility reports,
              <br />
              <span className="text-neutral-400">saved from your audits.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-neutral-600">
              Browse WCAG audit reports saved from the browser extension — scores,
              issues, and full markdown exports in one gallery.
            </p>
          </div>
        </div>
      </section>

      {isLoaded && !isSignedIn ? (
        <div className="mx-auto max-w-[1600px] px-8 py-16">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-10 py-16 text-center">
            <p className="text-neutral-600">
              Sign in to view accessibility reports saved to your account.
            </p>
            <SignInButton mode="modal">
              <button className="mt-5 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">
                Sign in
              </button>
            </SignInButton>
          </div>
        </div>
      ) : isLoaded && isSignedIn ? (
        <ReportsSignedInView />
      ) : (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="size-10 animate-spin text-neutral-300" aria-hidden />
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import { useParams } from "next/navigation";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Grid3x3,
  Info,
  Layers,
  Lightbulb,
  Loader2,
  RefreshCw,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import { useAssets } from "@/components/assets/use-assets";
import {
  formatAssetDate,
  formatDomainFilterLabel,
  getHostnameFromSourceUrl,
} from "@/components/assets/asset-format";
import {
  parseAccessibilityReport,
  scoreColor,
  type ReportIssue,
} from "./parse-accessibility-report";

function downloadReport(asset: AssetRow) {
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

function impactBadge(impact: string) {
  const i = impact.toLowerCase();
  if (i === "critical" || i === "serious" || i === "high") {
    return "bg-red-100 text-red-700";
  }
  if (i === "moderate" || i === "medium") {
    return "bg-amber-100 text-amber-800";
  }
  return "bg-blue-100 text-blue-700";
}

function impactLabel(impact: string) {
  const i = impact.toLowerCase();
  if (i === "critical" || i === "serious") return "High";
  if (i === "moderate") return "Medium";
  return "Low";
}

function DonutChart({
  slices,
  total,
}: {
  slices: { label: string; count: number; color: string }[];
  total: number;
}) {
  if (!slices.length) {
    return (
      <div className="flex size-36 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-400">
        No issues
      </div>
    );
  }

  let cursor = 0;
  const gradient = slices
    .map((slice) => {
      const pct = (slice.count / Math.max(total, 1)) * 100;
      const start = cursor;
      cursor += pct;
      return `${slice.color} ${start}% ${cursor}%`;
    })
    .join(", ");

  return (
    <div
      className="relative size-36 shrink-0 rounded-full"
      style={{ background: `conic-gradient(${gradient})` }}
    >
      <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-white">
        <span className="text-2xl font-bold text-neutral-900">{total}</span>
        <span className="text-[10px] font-medium uppercase tracking-wide text-neutral-400">
          Issues
        </span>
      </div>
    </div>
  );
}

function TopIssueRow({ issue, index }: { issue: ReportIssue; index: number }) {
  return (
    <div className="flex items-center gap-4 border-b border-neutral-100 px-5 py-4 last:border-b-0">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-neutral-900">
          {index + 1}. {issue.message.slice(0, 80)}
          {issue.message.length > 80 ? "…" : ""}
        </p>
        <p className="mt-1 line-clamp-1 text-xs text-neutral-500">
          WCAG {issue.rule}
          {issue.element ? ` · ${issue.element}` : ""}
        </p>
      </div>
      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${impactBadge(issue.impact)}`}
      >
        {impactLabel(issue.impact)}
      </span>
      <span className="w-10 shrink-0 text-center text-sm font-semibold tabular-nums text-neutral-700">
        1
      </span>
      <span className="w-10 shrink-0 text-center text-sm tabular-nums text-neutral-500">
        1
      </span>
      <ChevronRight className="size-4 shrink-0 text-neutral-300" aria-hidden />
    </div>
  );
}

function ReportDashboard({ asset }: { asset: AssetRow }) {
  const parsed = useMemo(
    () => parseAccessibilityReport(asset.content),
    [asset.content],
  );

  const pageUrl = asset.source_url || parsed.pageUrl || "";
  const host = getHostnameFromSourceUrl(pageUrl);
  const domainLabel = host ? formatDomainFilterLabel(host) : "Unknown site";
  const scannedAt = parsed.generatedAt || formatAssetDate(asset.created_at);
  const ringColor = scoreColor(parsed.score);
  const score = parsed.score ?? 0;
  const errors = parsed.errorItems.length || parsed.errors || 0;
  const warnings = parsed.warningItems.length || parsed.warnings || 0;
  const passes = parsed.passItems.length || parsed.passes || 0;
  const totalIssues = parsed.totalIssues || errors + warnings;

  const banner =
    score >= 70
      ? {
          bg: "bg-emerald-50 border-emerald-200",
          icon: CheckCircle2,
          iconColor: "text-emerald-600",
          text: "Great start! You're on your way to an accessible experience. Keep improving contrast and labels to reach full WCAG 2.1 AA compliance.",
        }
      : score >= 50
        ? {
            bg: "bg-amber-50 border-amber-200",
            icon: AlertTriangle,
            iconColor: "text-amber-600",
            text: "You're making progress. Address high-impact errors first to improve your accessibility score.",
          }
        : {
            bg: "bg-red-50 border-red-200",
            icon: XCircle,
            iconColor: "text-red-600",
            text: "Critical accessibility barriers were found. Focus on fixing high-impact issues to improve the experience.",
          };

  const BannerIcon = banner.icon;

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/accessibility-report"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All reports
            </Link>
            <div className="hidden h-5 w-px bg-neutral-200 sm:block" />
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-600">
                <ShieldCheck className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold">accessibility.reports</span>
            </div>
          </div>
          <UserButton />
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-6 py-8 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
              WCAG 2.1 Accessibility Scan
            </h1>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
              <span>
                Scanned{" "}
                <span className="font-medium text-neutral-700">
                  {pageUrl || domainLabel}
                </span>{" "}
                on {scannedAt}
              </span>
              <RefreshCw className="size-3.5 text-neutral-400" aria-hidden />
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => downloadReport(asset)}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              <Download className="size-4" aria-hidden />
              Download Report
            </button>
            {pageUrl ? (
              <a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700"
              >
                <RefreshCw className="size-4" aria-hidden />
                Open Page
              </a>
            ) : null}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-6">
              <div
                className="relative flex size-28 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(${ringColor} ${score}%, #f1f5f9 0)`,
                }}
              >
                <div className="flex size-[5.5rem] flex-col items-center justify-center rounded-full bg-white">
                  <span
                    className="text-3xl font-bold tabular-nums leading-none"
                    style={{ color: ringColor }}
                  >
                    {parsed.score ?? "—"}
                  </span>
                  <span className="mt-1 text-xs font-medium text-neutral-400">
                    / 100
                  </span>
                </div>
              </div>
              <div>
                <p
                  className="text-lg font-semibold"
                  style={{ color: ringColor }}
                >
                  {parsed.scoreLabel}
                </p>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-neutral-500">
                  {parsed.scoreDescription}
                </p>
                <span className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {parsed.wcagLevel}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MetricCard
              label="Total Issues"
              value={totalIssues}
              icon={<Layers className="size-4 text-violet-600" />}
              tone="neutral"
            />
            <MetricCard
              label="Errors (A)"
              value={errors}
              icon={<XCircle className="size-4 text-red-500" />}
              tone="red"
            />
            <MetricCard
              label="Warnings (AA)"
              value={warnings}
              icon={<Eye className="size-4 text-amber-500" />}
              tone="amber"
            />
            <MetricCard
              label="Passes"
              value={passes}
              icon={<Info className="size-4 text-emerald-500" />}
              tone="green"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">
              WCAG 2.1 Conformance
            </h2>
            <div className="mt-5 space-y-4">
              <ConformanceBar label="Level A" value={parsed.conformance.a} tone="green" />
              <ConformanceBar label="Level AA" value={parsed.conformance.aa} tone="green" />
              <ConformanceBar label="Level AAA" value={parsed.conformance.aaa} tone="amber" />
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">
              Issues by Type
            </h2>
            <div className="mt-5 flex items-center gap-5">
              <DonutChart slices={parsed.issueTypes} total={totalIssues} />
              <div className="min-w-0 flex-1 space-y-2">
                {parsed.issueTypes.map((slice) => (
                  <div key={slice.label} className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex min-w-0 items-center gap-2">
                      <span
                        className="size-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: slice.color }}
                      />
                      <span className="truncate text-neutral-600">{slice.label}</span>
                    </div>
                    <span className="shrink-0 font-semibold tabular-nums text-neutral-800">
                      {slice.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <MiniStatCard
              icon={<FileText className="size-5 text-violet-600" />}
              label="Pages Scanned"
              value="1"
            />
            <MiniStatCard
              icon={<Grid3x3 className="size-5 text-violet-600" />}
              label="Checks Run"
              value={String(totalIssues + passes)}
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div
            id="top-issues"
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <div className="border-b border-neutral-100 px-5 py-4">
              <h2 className="text-sm font-semibold text-neutral-900">Top Issues</h2>
            </div>
            <div className="hidden grid-cols-[1fr_auto_auto_auto_auto] gap-4 border-b border-neutral-100 px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-400 sm:grid">
              <span>Issue</span>
              <span>Impact</span>
              <span className="w-10 text-center">Inst.</span>
              <span className="w-10 text-center">Pages</span>
              <span className="w-4" />
            </div>
            {parsed.topIssues.length ? (
              parsed.topIssues.map((issue, index) => (
                <TopIssueRow key={`${issue.rule}-${index}`} issue={issue} index={index} />
              ))
            ) : (
              <div className="px-5 py-10 text-center text-sm text-neutral-500">
                No issues parsed from this report.
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Scan Summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <SummaryRow label="Domain" value={domainLabel} />
              <SummaryRow label="Pages Scanned" value="1" />
              <SummaryRow label="Checks Run" value={String(totalIssues + passes)} />
              <SummaryRow label="Date" value={scannedAt} />
              <SummaryRow label="Standard" value="WCAG 2.1" />
              <SummaryRow label="Mode" value="Automated" />
            </dl>
            <div className="mt-6 rounded-xl bg-violet-50 p-4">
              <div className="flex gap-3">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-violet-600" aria-hidden />
                <p className="text-xs leading-relaxed text-violet-900">
                  <span className="font-semibold">Tip:</span> Focus on fixing High
                  impact issues first to improve accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 rounded-2xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${banner.bg}`}
        >
          <div className="flex items-start gap-3">
            <BannerIcon className={`mt-0.5 size-5 shrink-0 ${banner.iconColor}`} aria-hidden />
            <p className="text-sm leading-relaxed text-neutral-700">{banner.text}</p>
          </div>
          <a
            href="#top-issues"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-neutral-50"
          >
            View Issues
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </main>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  tone,
}: {
  label: string;
  value: number | string;
  icon: ReactNode;
  tone: "neutral" | "red" | "amber" | "green";
}) {
  const tones = {
    neutral: "border-neutral-200",
    red: "border-red-100",
    amber: "border-amber-100",
    green: "border-emerald-100",
  };
  return (
    <div className={`rounded-2xl border bg-white p-4 shadow-sm ${tones[tone]}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-500">{label}</span>
        {icon}
      </div>
      <div className="text-3xl font-bold tabular-nums text-neutral-900">{value}</div>
    </div>
  );
}

function ConformanceBar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "green" | "amber";
}) {
  const color = tone === "green" ? "bg-emerald-500" : "bg-amber-500";
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-medium text-neutral-700">{label}</span>
        <span className="font-semibold tabular-nums text-neutral-900">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function MiniStatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-violet-50">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-500">{label}</p>
          <p className="text-2xl font-bold tabular-nums text-neutral-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0">
      <dt className="text-neutral-500">{label}</dt>
      <dd className="text-right font-medium text-neutral-800">{value}</dd>
    </div>
  );
}

export function AccessibilityReportDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const { isLoaded, isSignedIn } = useAuth();
  const { assets, loading, error } = useAssets();

  const report = useMemo(
    () =>
      assets.find(
        (asset) => asset.id === id && asset.type?.toLowerCase() === "report",
      ) ?? null,
    [assets, id],
  );

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f6fb]">
        <Loader2 className="size-10 animate-spin text-neutral-300" aria-hidden />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f6fb] px-6">
        <div className="max-w-md rounded-2xl border border-neutral-200 bg-white px-8 py-12 text-center shadow-sm">
          <p className="text-neutral-600">Sign in to view this accessibility report.</p>
          <SignInButton mode="modal">
            <button className="mt-5 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">
              Sign in
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f6fb]">
        <Loader2 className="size-10 animate-spin text-neutral-300" aria-hidden />
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f4f6fb] px-6">
        <p className="text-sm text-neutral-600">
          {error || "Accessibility report not found."}
        </p>
        <Link
          href="/accessibility-report"
          className="mt-4 text-sm font-medium text-violet-600 hover:text-violet-700"
        >
          Back to all reports
        </Link>
      </div>
    );
  }

  return <ReportDashboard asset={report} />;
}

"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import {
  Copy,
  Download,
  Image as ImageIcon,
  Layers,
  Loader2,
  Palette,
  Play,
  Sparkles,
  Type,
  Video,
} from "lucide-react";
import {
  isColorAsset,
  isImageLikeAsset,
  isVideoAsset,
  parseHexFromContent,
} from "./asset-format";
import { AssetGrid } from "./asset-grid";

type AssetGroups = {
  images: AssetRow[];
  svgs: AssetRow[];
  videos: AssetRow[];
  colors: AssetRow[];
  typography: AssetRow[];
  other: AssetRow[];
};

function groupAssets(assets: AssetRow[]): AssetGroups {
  const images: AssetRow[] = [];
  const svgs: AssetRow[] = [];
  const videos: AssetRow[] = [];
  const colors: AssetRow[] = [];
  const typography: AssetRow[] = [];
  const other: AssetRow[] = [];

  for (const asset of assets) {
    const t = asset.type?.toLowerCase() ?? "";
    if (isColorAsset(asset)) colors.push(asset);
    else if (t === "svg") svgs.push(asset);
    else if (isVideoAsset(asset)) videos.push(asset);
    else if (t === "typography") typography.push(asset);
    else if (isImageLikeAsset(asset)) images.push(asset);
    else other.push(asset);
  }

  return { images, svgs, videos, colors, typography, other };
}

function assetFilename(asset: AssetRow): string {
  const title = asset.title?.trim();
  if (title) return title;
  const url = asset.url?.trim();
  if (url) {
    try {
      const name = new URL(url).pathname.split("/").pop();
      if (name) return decodeURIComponent(name);
    } catch {
      /* ignore */
    }
  }
  return asset.type || "asset";
}

function imageDimensions(asset: AssetRow): string | null {
  const meta = asset.meta as Record<string, unknown> | null;
  const w = meta?.width ?? meta?.naturalWidth;
  const h = meta?.height ?? meta?.naturalHeight;
  if (w != null && h != null) return `${w} × ${h}`;
  return null;
}

function typographyMeta(asset: AssetRow) {
  const meta = asset.meta as Record<string, unknown> | null;
  const fontFamily =
    (typeof meta?.fontFamily === "string" && meta.fontFamily.trim()) ||
    asset.title?.split("·").pop()?.trim() ||
    "Font";
  const role =
    (typeof meta?.role === "string" && meta.role.trim()) || "Font";
  return { fontFamily, role };
}

function fontWeightsFromContent(content: string | null): string {
  if (!content) return "Regular";
  const weights = new Set<string>();
  for (const m of content.matchAll(/font-weight:\s*([^;\n]+)/gi)) {
    const raw = m[1].trim();
    if (raw) weights.add(raw);
  }
  return weights.size ? Array.from(weights).join(" / ") : "Regular";
}

function uniqueFontFamilies(typography: AssetRow[]): string[] {
  const set = new Set<string>();
  for (const t of typography) {
    set.add(typographyMeta(t).fontFamily);
  }
  return Array.from(set);
}

function fontByRole(typography: AssetRow[], roleMatch: RegExp): string | null {
  for (const t of typography) {
    const { fontFamily, role } = typographyMeta(t);
    if (roleMatch.test(role)) return fontFamily;
  }
  return typography[0] ? typographyMeta(typography[0]).fontFamily : null;
}

function buildStyleReport(groups: AssetGroups, total: number): string {
  const fonts = uniqueFontFamilies(groups.typography);
  const lines = [
    "Style Summary",
    "─────────────",
    `Total Assets: ${total}`,
    `Images: ${groups.images.length}`,
    `SVGs: ${groups.svgs.length}`,
    `Videos: ${groups.videos.length}`,
    `Unique Colors: ${groups.colors.length}`,
    `Font Families: ${fonts.length}`,
  ];
  const primary = fontByRole(groups.typography, /primary/i);
  const secondary = fontByRole(groups.typography, /secondary/i);
  const mono = fontByRole(groups.typography, /mono/i);
  if (primary) lines.push(`Primary Font: ${primary}`);
  if (secondary) lines.push(`Secondary Font: ${secondary}`);
  if (mono) lines.push(`Monospace Font: ${mono}`);
  if (groups.colors.length) {
    lines.push("", "Colors:");
    for (const c of groups.colors.slice(0, 20)) {
      const hex = parseHexFromContent(c.content);
      if (hex) lines.push(`  ${hex}`);
    }
  }
  return lines.join("\n");
}

type SectionKey = "images" | "svgs" | "videos" | "colors" | "typography" | null;

type Props = {
  assets: AssetRow[];
  loading: boolean;
  error: string | null;
};

function SummaryCard({
  icon,
  iconClass,
  label,
  count,
  subtitle,
}: {
  icon: ReactNode;
  iconClass: string;
  label: string;
  count: number;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-sm">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconClass}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-neutral-900">{label}</p>
        <p className="text-2xl font-semibold tabular-nums tracking-tight text-neutral-900">
          {count}
        </p>
        <p className="truncate text-[11px] text-neutral-500">{subtitle}</p>
      </div>
    </div>
  );
}

function PanelCard({
  title,
  count,
  onViewAll,
  children,
  footer,
}: {
  title: string;
  count: number;
  onViewAll?: () => void;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
        <h3 className="text-sm font-semibold text-neutral-900">
          {title}{" "}
          <span className="font-normal text-neutral-400">({count})</span>
        </h3>
        {count > 0 && onViewAll ? (
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-medium text-violet-600 transition-colors hover:text-violet-700"
          >
            View all →
          </button>
        ) : null}
      </div>
      <div className="flex-1 px-5 py-4">{children}</div>
      {footer ? (
        <div className="border-t border-neutral-100 px-5 py-3">{footer}</div>
      ) : null}
    </div>
  );
}

function EmptyPanel({ message }: { message: string }) {
  return (
    <p className="py-8 text-center text-sm text-neutral-400">{message}</p>
  );
}

export function AssetsDashboard({ assets, loading, error }: Props) {
  const [expanded, setExpanded] = useState<SectionKey>(null);
  const [copied, setCopied] = useState(false);

  const groups = useMemo(() => groupAssets(assets), [assets]);
  const total = assets.length;
  const uniqueColors = groups.colors.length;
  const fontFamilies = uniqueFontFamilies(groups.typography);

  const expandedAssets = useMemo(() => {
    if (!expanded) return [];
    if (expanded === "images") return groups.images;
    if (expanded === "svgs") return groups.svgs;
    if (expanded === "videos") return groups.videos;
    if (expanded === "colors") return groups.colors;
    if (expanded === "typography") return groups.typography;
    return [];
  }, [expanded, groups]);

  const colorGradient = useMemo(() => {
    const hexes = groups.colors
      .map((c) => parseHexFromContent(c.content))
      .filter((h): h is string => Boolean(h))
      .slice(0, 8);
    if (hexes.length < 2) return null;
    return `linear-gradient(90deg, ${hexes.join(", ")})`;
  }, [groups.colors]);

  const copyStyleReport = async () => {
    try {
      await navigator.clipboard.writeText(buildStyleReport(groups, total));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const exportAllAssets = () => {
    const payload = JSON.stringify(assets, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `assets-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleSection = (key: SectionKey) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  if (loading && assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-neutral-400">
        <Loader2 className="size-10 animate-spin" aria-hidden />
        <p className="mt-3 text-sm">Loading assets…</p>
      </div>
    );
  }

  return (
    <main className="bg-[#f8f9fb]">
      <div className="mx-auto max-w-[1600px] px-8 py-8">
        {error ? (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        ) : null}

        {/* Summary bar */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <SummaryCard
            icon={<ImageIcon className="h-4 w-4 text-violet-600" />}
            iconClass="bg-violet-100"
            label="Images"
            count={groups.images.length}
            subtitle="PNG, JPG, WEBP, AVIF"
          />
          <SummaryCard
            icon={<Layers className="h-4 w-4 text-emerald-600" />}
            iconClass="bg-emerald-100"
            label="SVGs"
            count={groups.svgs.length}
            subtitle="Vector Graphics"
          />
          <SummaryCard
            icon={<Video className="h-4 w-4 text-rose-600" />}
            iconClass="bg-rose-100"
            label="Videos"
            count={groups.videos.length}
            subtitle="MP4, WEBM"
          />
          <SummaryCard
            icon={<Palette className="h-4 w-4 text-amber-600" />}
            iconClass="bg-gradient-to-br from-violet-200 via-rose-200 to-amber-200"
            label="Colors"
            count={groups.colors.length}
            subtitle="Unique Colors"
          />
          <SummaryCard
            icon={<Type className="h-4 w-4 text-sky-600" />}
            iconClass="bg-sky-100"
            label="Typography"
            count={fontFamilies.length || groups.typography.length}
            subtitle="Font Families"
          />
        </div>

        {/* Main grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <PanelCard
              title="Images"
              count={groups.images.length}
              onViewAll={() => toggleSection("images")}
              footer={
                groups.images.length > 6 ? (
                  <p className="text-center text-xs text-neutral-400">
                    + {groups.images.length - 6} more images
                  </p>
                ) : undefined
              }
            >
              {groups.images.length === 0 ? (
                <EmptyPanel message="No images saved yet." />
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {groups.images.slice(0, 6).map((asset) => (
                    <div key={asset.id} className="min-w-0">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-neutral-200/80">
                        {asset.url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={asset.url}
                            alt={asset.title ?? ""}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <ImageIcon className="h-5 w-5 text-neutral-300" />
                          </div>
                        )}
                      </div>
                      <p className="mt-1.5 truncate text-[11px] font-medium text-neutral-800">
                        {assetFilename(asset)}
                      </p>
                      {imageDimensions(asset) ? (
                        <p className="text-[10px] text-neutral-400">
                          {imageDimensions(asset)}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </PanelCard>

            <PanelCard
              title="SVGs"
              count={groups.svgs.length}
              onViewAll={() => toggleSection("svgs")}
              footer={
                groups.svgs.length > 8 ? (
                  <p className="text-center text-xs text-neutral-400">
                    + {groups.svgs.length - 8} more SVGs
                  </p>
                ) : undefined
              }
            >
              {groups.svgs.length === 0 ? (
                <EmptyPanel message="No SVGs saved yet." />
              ) : (
                <div className="grid grid-cols-4 gap-2.5">
                  {groups.svgs.slice(0, 8).map((asset) => (
                    <div key={asset.id} className="min-w-0 text-center">
                      <div className="flex aspect-square items-center justify-center rounded-lg bg-neutral-50 ring-1 ring-neutral-200/80">
                        {asset.content ? (
                          <img
                            src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(asset.content)}`}
                            alt={asset.title ?? "SVG"}
                            className="max-h-[28px] max-w-[28px] object-contain"
                          />
                        ) : asset.url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={asset.url}
                            alt={asset.title ?? "SVG"}
                            className="max-h-[28px] max-w-[28px] object-contain"
                          />
                        ) : (
                          <Layers className="h-5 w-5 text-neutral-300" />
                        )}
                      </div>
                      <p className="mt-1 truncate text-[10px] text-neutral-600">
                        {assetFilename(asset)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </PanelCard>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <PanelCard
              title="Colors"
              count={groups.colors.length}
              onViewAll={() => toggleSection("colors")}
              footer={
                groups.colors.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => toggleSection("colors")}
                    className="w-full rounded-xl border border-neutral-200 py-2.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                  >
                    View Color Palette
                  </button>
                ) : undefined
              }
            >
              {groups.colors.length === 0 ? (
                <EmptyPanel message="No colors saved yet." />
              ) : (
                <>
                  <div className="grid grid-cols-5 gap-2.5">
                    {groups.colors.slice(0, 10).map((asset) => {
                      const hex = parseHexFromContent(asset.content);
                      return (
                        <div key={asset.id} className="text-center">
                          <div
                            className="mx-auto aspect-square w-full max-w-[52px] rounded-xl ring-1 ring-black/5"
                            style={{ backgroundColor: hex ?? "#e5e5e5" }}
                          />
                          <p className="mt-1.5 font-mono text-[9px] text-neutral-500">
                            {hex ?? "—"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  {colorGradient ? (
                    <div
                      className="mt-4 h-2.5 w-full rounded-full"
                      style={{ background: colorGradient }}
                    />
                  ) : null}
                </>
              )}
            </PanelCard>

            <PanelCard
              title="Videos"
              count={groups.videos.length}
              onViewAll={() => toggleSection("videos")}
              footer={
                groups.videos.length > 6 ? (
                  <p className="text-center text-xs text-neutral-400">
                    + {groups.videos.length - 6} more videos
                  </p>
                ) : undefined
              }
            >
              {groups.videos.length === 0 ? (
                <EmptyPanel message="No videos saved yet." />
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {groups.videos.slice(0, 6).map((asset) => (
                    <div key={asset.id} className="min-w-0">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-neutral-200/80">
                        {asset.url ? (
                          <video
                            src={asset.url}
                            className="h-full w-full object-cover opacity-80"
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : null}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm">
                            <Play className="h-3 w-3 fill-neutral-900 text-neutral-900" />
                          </div>
                        </div>
                      </div>
                      <p className="mt-1.5 truncate text-[11px] font-medium text-neutral-800">
                        {assetFilename(asset)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </PanelCard>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            <PanelCard
              title="Typography"
              count={fontFamilies.length || groups.typography.length}
              onViewAll={() => toggleSection("typography")}
              footer={
                groups.typography.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => toggleSection("typography")}
                    className="w-full rounded-xl border border-neutral-200 py-2.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                  >
                    View Typography Details
                  </button>
                ) : undefined
              }
            >
              {groups.typography.length === 0 ? (
                <EmptyPanel message="No typography saved yet." />
              ) : (
                <div className="space-y-4">
                  {groups.typography.slice(0, 3).map((asset) => {
                    const { fontFamily, role } = typographyMeta(asset);
                    return (
                      <div
                        key={asset.id}
                        className="flex items-center gap-3 border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
                      >
                        <span
                          className="shrink-0 text-2xl font-medium text-neutral-900"
                          style={{ fontFamily: `'${fontFamily}', sans-serif` }}
                        >
                          Aa
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-neutral-900">
                            {fontFamily}
                          </p>
                          <p className="truncate text-[11px] text-neutral-400">
                            {fontWeightsFromContent(asset.content)}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-md bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-700">
                          {role}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </PanelCard>

            <PanelCard title="Style Summary" count={total}>
              <dl className="space-y-2.5 text-sm">
                {[
                  ["Total Assets Extracted", total],
                  ["Unique Colors", uniqueColors],
                  ["Font Families", fontFamilies.length],
                  ["Primary Font", fontByRole(groups.typography, /primary/i) ?? "—"],
                  ["Secondary Font", fontByRole(groups.typography, /secondary/i) ?? "—"],
                  ["Monospace Font", fontByRole(groups.typography, /mono/i) ?? "—"],
                ].map(([label, value]) => (
                  <div key={String(label)} className="flex items-center justify-between gap-4">
                    <dt className="text-neutral-500">{label}</dt>
                    <dd className="font-medium text-neutral-900">{value}</dd>
                  </div>
                ))}
              </dl>
              <button
                type="button"
                onClick={() => void copyStyleReport()}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 py-2.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "Copied!" : "Copy Style Report"}
              </button>
            </PanelCard>
          </div>
        </div>

        {/* Expanded section */}
        {expanded && expandedAssets.length > 0 ? (
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold capitalize text-neutral-900">
                All {expanded}
              </h2>
              <button
                type="button"
                onClick={() => setExpanded(null)}
                className="text-xs font-medium text-neutral-500 hover:text-neutral-800"
              >
                Close
              </button>
            </div>
            <AssetGrid assets={expandedAssets} viewMode="grid" />
          </section>
        ) : null}

        {/* Bottom banner */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-violet-100 bg-violet-50/80 px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
            <p className="max-w-2xl text-sm leading-relaxed text-violet-900/80">
              All set! You now have all the visual assets and styles from this website.
              Use them for inspiration, design systems, or recreating the look and feel.
            </p>
          </div>
          <button
            type="button"
            onClick={exportAllAssets}
            disabled={total === 0}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-700 shadow-sm transition-colors hover:bg-violet-50 disabled:opacity-40"
          >
            <Download className="h-4 w-4" />
            Export All Assets
          </button>
        </div>
      </div>
    </main>
  );
}

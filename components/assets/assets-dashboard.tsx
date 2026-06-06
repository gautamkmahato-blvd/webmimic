"use client";

import { useMemo, type ReactNode } from "react";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import {
  Clapperboard,
  Code2,
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
  isLottieAsset,
  isVideoAsset,
  parseHexFromContent,
  truncateText,
  type AssetSectionFilter,
} from "./asset-format";

type AssetGroups = {
  images: AssetRow[];
  svgs: AssetRow[];
  videos: AssetRow[];
  lotties: AssetRow[];
  colors: AssetRow[];
  typography: AssetRow[];
  code: AssetRow[];
};

function groupAssets(assets: AssetRow[]): AssetGroups {
  const images: AssetRow[] = [];
  const svgs: AssetRow[] = [];
  const videos: AssetRow[] = [];
  const lotties: AssetRow[] = [];
  const colors: AssetRow[] = [];
  const typography: AssetRow[] = [];
  const code: AssetRow[] = [];

  for (const asset of assets) {
    const t = asset.type?.toLowerCase() ?? "";
    if (isColorAsset(asset)) colors.push(asset);
    else if (t === "svg") svgs.push(asset);
    else if (isLottieAsset(asset)) lotties.push(asset);
    else if (isVideoAsset(asset)) videos.push(asset);
    else if (t === "typography") typography.push(asset);
    else if (t === "code") code.push(asset);
    else if (isImageLikeAsset(asset)) images.push(asset);
  }

  return { images, svgs, videos, lotties, colors, typography, code };
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

type Props = {
  assets: AssetRow[];
  loading: boolean;
  error: string | null;
  onViewAll: (section: AssetSectionFilter) => void;
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
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
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
}: {
  title: string;
  count: number;
  onViewAll?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm">
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
    </div>
  );
}

function EmptyPanel({ message }: { message: string }) {
  return (
    <p className="py-8 text-center text-sm text-neutral-400">{message}</p>
  );
}

function MediaPreview({ asset }: { asset: AssetRow }) {
  if (isVideoAsset(asset) && asset.url) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-neutral-200/80">
        <video
          src={asset.url}
          className="h-full w-full object-cover opacity-80"
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm">
            <Play className="h-3 w-3 fill-neutral-900 text-neutral-900" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-1.5 rounded-lg bg-violet-50 ring-1 ring-violet-100">
      <Clapperboard className="h-5 w-5 text-violet-500" />
      <span className="text-[9px] font-medium uppercase tracking-wide text-violet-600">
        Lottie
      </span>
    </div>
  );
}

export function AssetsDashboard({
  assets,
  loading,
  error,
  onViewAll,
}: Props) {
  const groups = useMemo(() => groupAssets(assets), [assets]);
  const total = assets.length;
  const fontFamilies = uniqueFontFamilies(groups.typography);
  const mediaAssets = useMemo(
    () => [...groups.videos, ...groups.lotties],
    [groups.videos, groups.lotties],
  );

  const colorGradient = useMemo(() => {
    const hexes = groups.colors
      .map((c) => parseHexFromContent(c.content))
      .filter((h): h is string => Boolean(h))
      .slice(0, 8);
    if (hexes.length < 2) return null;
    return `linear-gradient(90deg, ${hexes.join(", ")})`;
  }, [groups.colors]);

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
            icon={<ImageIcon className="h-8 w-8 text-violet-600" />}
            iconClass="bg-violet-100"
            label="Images"
            count={groups.images.length}
            subtitle="PNG, JPG, WEBP, AVIF"
          />
          <SummaryCard
            icon={<Layers className="h-8 w-8 text-emerald-600" />}
            iconClass="bg-emerald-100"
            label="SVGs"
            count={groups.svgs.length}
            subtitle="Vector Graphics"
          />
          <SummaryCard
            icon={<Video className="h-8 w-8 text-rose-600" />}
            iconClass="bg-rose-100"
            label="Videos"
            count={groups.videos.length + groups.lotties.length}
            subtitle="MP4, WEBM, Lottie"
          />
          <SummaryCard
            icon={<Palette className="h-8 w-8 text-amber-600" />}
            iconClass="bg-gradient-to-br from-violet-200 via-rose-200 to-amber-200"
            label="Colors"
            count={groups.colors.length}
            subtitle="Unique Colors"
          />
          <SummaryCard
            icon={<Type className="h-8 w-8 text-sky-600" />}
            iconClass="bg-sky-100"
            label="Typography"
            count={fontFamilies.length || groups.typography.length}
            subtitle="Font Families"
          />
        </div>

        {/* Row 1: Images | Colors */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PanelCard
            title="Images"
            count={groups.images.length}
            onViewAll={() => onViewAll("__images__")}
          >
            {groups.images.length === 0 ? (
              <EmptyPanel message="No images saved yet." />
            ) : (
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
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
            title="Colors"
            count={groups.colors.length}
            onViewAll={() => onViewAll("__colors__")}
          >
            {groups.colors.length === 0 ? (
              <EmptyPanel message="No colors saved yet." />
            ) : (
              <>
                <div className="grid grid-cols-5 grid-rows-2 gap-2.5">
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
        </div>

        {/* Row 2: SVGs | Typography | Videos & Lottie */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <PanelCard
            title="SVGs"
            count={groups.svgs.length}
            onViewAll={() => onViewAll("__svgs__")}
          >
            {groups.svgs.length === 0 ? (
              <EmptyPanel message="No SVGs saved yet." />
            ) : (
              <div className="grid grid-cols-4 grid-rows-2 gap-2.5">
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

          <PanelCard
            title="Typography"
            count={fontFamilies.length || groups.typography.length}
            onViewAll={() => onViewAll("__typography__")}
          >
            {groups.typography.length === 0 ? (
              <EmptyPanel message="No typography saved yet." />
            ) : (
              <div className="grid grid-rows-2 gap-4">
                {groups.typography.slice(0, 2).map((asset) => {
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

          <PanelCard
            title="Videos & Lottie"
            count={mediaAssets.length}
            onViewAll={() => onViewAll("__media__")}
          >
            {mediaAssets.length === 0 ? (
              <EmptyPanel message="No videos or Lottie animations saved yet." />
            ) : (
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                {mediaAssets.slice(0, 6).map((asset) => (
                  <div key={asset.id} className="min-w-0">
                    <MediaPreview asset={asset} />
                    <p className="mt-1.5 truncate text-[11px] font-medium text-neutral-800">
                      {assetFilename(asset)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </PanelCard>
        </div>

        {/* Row 3: Code (full width) */}
        <div className="mt-5">
          <PanelCard
            title="Code"
            count={groups.code.length}
            onViewAll={() => onViewAll("__code__")}
          >
            {groups.code.length === 0 ? (
              <EmptyPanel message="No code snippets saved yet." />
            ) : (
              <div className="grid grid-cols-3 grid-rows-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
                {groups.code.slice(0, 12).map((asset) => (
                  <div
                    key={asset.id}
                    className="flex min-h-[88px] flex-col overflow-hidden rounded-lg bg-neutral-900 p-2.5 ring-1 ring-neutral-200/80"
                  >
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <Code2 className="h-3 w-3 shrink-0 text-neutral-400" />
                      <p className="truncate text-[10px] font-medium text-neutral-300">
                        {assetFilename(asset)}
                      </p>
                    </div>
                    <pre className="line-clamp-3 flex-1 font-mono text-[9px] leading-relaxed text-neutral-500">
                      {truncateText(asset.content ?? "", 80)}
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </PanelCard>
        </div>

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
            <Download className="h-8 w-8" />
            Export All Assets
          </button>
        </div>
      </div>
    </main>
  );
}

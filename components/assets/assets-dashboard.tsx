"use client";

import { useMemo, useState, type ReactNode } from "react";
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

function uniqueTypographyByFamily(typography: AssetRow[]): AssetRow[] {
  const seen = new Set<string>();
  const result: AssetRow[] = [];
  for (const asset of typography) {
    const { fontFamily } = typographyMeta(asset);
    if (seen.has(fontFamily)) continue;
    seen.add(fontFamily);
    result.push(asset);
  }
  return result;
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
}: {
  icon: ReactNode;
  iconClass: string;
  label: string;
  count: number;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-neutral-200/80 bg-white px-3 py-2.5 shadow-sm transition-shadow hover:shadow-md">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-medium text-neutral-500">{label}</p>
        <p className="text-xl font-bold tabular-nums leading-tight tracking-tight text-neutral-900">
          {count}
        </p>
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

function ColorsPanelContent({
  colors,
  colorGradient,
}: {
  colors: AssetRow[];
  colorGradient: string | null;
}) {
  const [hoveredHex, setHoveredHex] = useState<string | null>(null);

  return (
    <div className="flex min-h-[240px] flex-col">
      <div className="grid flex-1 grid-cols-5 grid-rows-2 gap-3.5">
        {colors.slice(0, 10).map((asset) => {
          const hex = parseHexFromContent(asset.content);
          return (
            <button
              key={asset.id}
              type="button"
              className="aspect-square w-full rounded-2xl ring-1 ring-black/5 transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              style={{ backgroundColor: hex ?? "#e5e5e5" }}
              onMouseEnter={() => setHoveredHex(hex)}
              onMouseLeave={() => setHoveredHex(null)}
              onFocus={() => setHoveredHex(hex)}
              onBlur={() => setHoveredHex(null)}
              aria-label={hex ?? "Color swatch"}
            />
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-5">
        <p className="min-h-[22px] text-center font-mono text-sm font-semibold tracking-wide text-neutral-800">
          {hoveredHex ?? ""}
        </p>
        {colorGradient ? (
          <div
            className="h-2.5 w-full shrink-0 rounded-full"
            style={{ background: colorGradient }}
          />
        ) : null}
      </div>
    </div>
  );
}

function VideoPreview({ asset }: { asset: AssetRow }) {
  return (
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
  );
}

function LottiePreview() {
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
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          <SummaryCard
            icon={<ImageIcon className="h-4 w-4 text-violet-600" />}
            iconClass="bg-violet-100"
            label="Images"
            count={groups.images.length}
          />
          <SummaryCard
            icon={<Layers className="h-4 w-4 text-emerald-600" />}
            iconClass="bg-emerald-100"
            label="SVGs"
            count={groups.svgs.length}
          />
          <SummaryCard
            icon={<Video className="h-4 w-4 text-rose-600" />}
            iconClass="bg-rose-100"
            label="Videos"
            count={groups.videos.length}
          />
          <SummaryCard
            icon={<Clapperboard className="h-4 w-4 text-violet-600" />}
            iconClass="bg-violet-100"
            label="Lottie"
            count={groups.lotties.length}
          />
          <SummaryCard
            icon={<Palette className="h-4 w-4 text-amber-600" />}
            iconClass="bg-gradient-to-br from-violet-100 via-rose-100 to-amber-100"
            label="Colors"
            count={groups.colors.length}
          />
          <SummaryCard
            icon={<Type className="h-4 w-4 text-sky-600" />}
            iconClass="bg-sky-100"
            label="Typography"
            count={fontFamilies.length || groups.typography.length}
          />
          <SummaryCard
            icon={<Code2 className="h-4 w-4 text-slate-600" />}
            iconClass="bg-slate-100"
            label="Code"
            count={groups.code.length}
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
                  <div
                    key={asset.id}
                    className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-neutral-200/80"
                  >
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
              <ColorsPanelContent
                colors={groups.colors}
                colorGradient={colorGradient}
              />
            )}
          </PanelCard>
        </div>

        {/* Row 2: SVGs | Typography */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PanelCard
            title="SVGs"
            count={groups.svgs.length}
            onViewAll={() => onViewAll("__svgs__")}
          >
            {groups.svgs.length === 0 ? (
              <EmptyPanel message="No SVGs saved yet." />
            ) : (
              <div className="grid grid-cols-4 grid-rows-2 gap-3">
                {groups.svgs.slice(0, 8).map((asset) => (
                  <div key={asset.id} className="min-w-0 text-center">
                    <div className="flex aspect-square items-center justify-center rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200/80">
                      {asset.content ? (
                        <img
                          src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(asset.content)}`}
                          alt={asset.title ?? "SVG"}
                          className="h-full w-full max-h-[56px] max-w-[56px] object-contain"
                        />
                      ) : asset.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={asset.url}
                          alt={asset.title ?? "SVG"}
                          className="h-full w-full max-h-[56px] max-w-[56px] object-contain"
                        />
                      ) : (
                        <Layers className="h-10 w-10 text-neutral-300" />
                      )}
                    </div>
                    <p className="mt-1.5 truncate text-[10px] text-neutral-600">
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
              <div className="flex flex-col gap-5 p-3 border border-neutral-50 shadow-sm">
                {uniqueTypographyByFamily(groups.typography).slice(0, 2).map((asset) => {
                  const { fontFamily, role } = typographyMeta(asset);
                  const isMono = /mono/i.test(role) || /mono/i.test(fontFamily);
                  return (
                    <div
                      key={asset.id}
                      className="flex items-center gap-4 p-3"
                    >
                      <span
                        className="w-12 shrink-0 text-[2rem] font-semibold leading-none text-neutral-900"
                        style={{
                          fontFamily: isMono
                            ? `'${fontFamily}', monospace`
                            : `'${fontFamily}', sans-serif`,
                        }}
                      >
                        Aa
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[15px] font-bold text-neutral-900">
                          {fontFamily}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-neutral-500">
                          {fontWeightsFromContent(asset.content)}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-violet-100 px-3 py-1 text-[11px] font-medium text-violet-700">
                        {role}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </PanelCard>
        </div>

        {/* Row 3: Videos | Lottie */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PanelCard
            title="Videos"
            count={groups.videos.length}
            onViewAll={() => onViewAll("__videos__")}
          >
            {groups.videos.length === 0 ? (
              <EmptyPanel message="No videos saved yet." />
            ) : (
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                {groups.videos.slice(0, 6).map((asset) => (
                  <div key={asset.id} className="min-w-0">
                    <VideoPreview asset={asset} />
                    <p className="mt-1.5 truncate text-[11px] font-medium text-neutral-800">
                      {assetFilename(asset)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </PanelCard>

          <PanelCard
            title="Lottie Animations"
            count={groups.lotties.length}
            onViewAll={() => onViewAll("__lottie__")}
          >
            {groups.lotties.length === 0 ? (
              <EmptyPanel message="No Lottie animations saved yet." />
            ) : (
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                {groups.lotties.slice(0, 6).map((asset) => (
                  <div key={asset.id} className="min-w-0">
                    <LottiePreview />
                    <p className="mt-1.5 truncate text-[11px] font-medium text-neutral-800">
                      {assetFilename(asset)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </PanelCard>
        </div>

        {/* Row 4: Code (full width) */}
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

"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import {
  Clapperboard,
  Code2,
  Image as ImageIcon,
  Layers,
  Loader2,
  PackageOpen,
  Palette,
  Play,
  Type,
  Video,
} from "lucide-react";
import {
  isColorAsset,
  isImageLikeAsset,
  isLottieAsset,
  isVideoAsset,
  parseHexFromContent,
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

const PANEL_CONTENT_CLASS =
  "aspect-[8/3] w-full min-h-0 [&_.empty-panel]:h-full";

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
      <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3.5">
        <h3 className="text-sm font-semibold text-neutral-900">
          {title}{" "}
          <span className="font-normal text-neutral-400">({count})</span>
        </h3>
        {count > 0 && onViewAll ? (
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-medium text-neutral-900 transition-colors hover:text-black"
          >
            View all →
          </button>
        ) : null}
      </div>
      <div className="flex flex-1 px-5 py-5">
        <div className={PANEL_CONTENT_CLASS}>{children}</div>
      </div>
    </div>
  );
}

function EmptyPanel({ message }: { message: string }) {
  return (
    <div className="empty-panel flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center">
      <PackageOpen className="mb-3 size-10 text-neutral-300" aria-hidden />
      <p className="text-sm font-medium text-neutral-500">{message}</p>
      <p className="mt-1 max-w-xs text-xs text-neutral-400">
        Save items from the browser extension to see them here.
      </p>
    </div>
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
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          {colors.slice(0, 10).map((asset) => {
            const hex = parseHexFromContent(asset.content);
            return (
              <button
                key={asset.id}
                type="button"
                className="size-11 rounded-xl ring-1 ring-black/5 transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
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
      </div>

      <div className="mt-2 flex shrink-0 flex-col gap-1.5">
        <p className="min-h-[18px] text-center font-mono text-xs font-semibold tracking-wide text-neutral-800">
          {hoveredHex ?? ""}
        </p>
        {colorGradient ? (
          <div
            className="h-2 w-full shrink-0 rounded-full"
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
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-1.5 rounded-lg bg-neutral-100 ring-1 ring-neutral-200">
      <Clapperboard className="h-5 w-5 text-neutral-700" />
      <span className="text-[9px] font-medium uppercase tracking-wide text-neutral-800">
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
  const fontFamilies = uniqueFontFamilies(groups.typography);
  const colorGradient = useMemo(() => {
    const hexes = groups.colors
      .map((c) => parseHexFromContent(c.content))
      .filter((h): h is string => Boolean(h))
      .slice(0, 8);
    if (hexes.length < 2) return null;
    return `linear-gradient(90deg, ${hexes.join(", ")})`;
  }, [groups.colors]);

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
            icon={<ImageIcon className="h-4 w-4 text-neutral-800" />}
            iconClass="bg-neutral-100"
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
            icon={<Clapperboard className="h-4 w-4 text-neutral-800" />}
            iconClass="bg-neutral-100"
            label="Lottie"
            count={groups.lotties.length}
          />
          <SummaryCard
            icon={<Palette className="h-4 w-4 text-amber-600" />}
            iconClass="bg-gradient-to-br from-neutral-100 via-rose-100 to-amber-100"
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
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          <PanelCard
            title="Images"
            count={groups.images.length}
            onViewAll={() => onViewAll("__images__")}
          >
            {groups.images.length === 0 ? (
              <EmptyPanel message="No images saved yet." />
            ) : (
              <div className="grid h-full grid-cols-4 grid-rows-2 gap-2.5">
                {groups.images.slice(0, 8).map((asset) => (
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
        <div className="mt-5 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          <PanelCard
            title="SVGs"
            count={groups.svgs.length}
            onViewAll={() => onViewAll("__svgs__")}
          >
            {groups.svgs.length === 0 ? (
              <EmptyPanel message="No SVGs saved yet." />
            ) : (
              <div className="grid h-full grid-cols-4 grid-rows-2 gap-2.5">
                {groups.svgs.slice(0, 8).map((asset) => (
                  <div
                    key={asset.id}
                    className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-50 p-2 ring-1 ring-neutral-200/80"
                  >
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
                ))}
              </div>
            )}
          </PanelCard>

          <PanelCard
            title="Typography"
            count={groups.typography.length}
            onViewAll={() => onViewAll("__typography__")}
          >
            {groups.typography.length === 0 ? (
              <EmptyPanel message="No typography saved yet." />
            ) : (
              <div className="flex h-full min-h-0 flex-col justify-between gap-2">
                {groups.typography.slice(0, 4).map((asset) => {
                  const { fontFamily, role } = typographyMeta(asset);
                  const isMono = /mono/i.test(role) || /mono/i.test(fontFamily);
                  return (
                    <div
                      key={asset.id}
                      className="flex min-h-0 flex-1 items-center gap-3 px-2 border border-neutral-100 py-2"
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
                      <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-800">
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
        <div className="mt-5 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          <PanelCard
            title="Videos"
            count={groups.videos.length}
            onViewAll={() => onViewAll("__videos__")}
          >
            {groups.videos.length === 0 ? (
              <EmptyPanel message="No videos saved yet." />
            ) : (
              <div className="grid h-full grid-cols-4 grid-rows-2 gap-2.5">
                {groups.videos.slice(0, 6).map((asset) => (
                  <div key={asset.id} className="relative min-h-0 min-w-0">
                    <VideoPreview asset={asset} />
                    <p className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-12px)] truncate rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] font-medium text-neutral-800 shadow-sm">
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
              <div className="grid h-full grid-cols-4 grid-rows-2 gap-2.5">
                {groups.lotties.slice(0, 6).map((asset) => (
                  <div key={asset.id} className="relative min-h-0 min-w-0">
                    <LottiePreview />
                    <p className="absolute bottom-1.5 left-1.5 max-w-[calc(100%-12px)] truncate rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] font-medium text-neutral-800 shadow-sm">
                      {assetFilename(asset)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </PanelCard>
        </div>
      </div>
    </main>
  );
}

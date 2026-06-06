import type { AssetRow } from "@/app/service/supabase/assets/types";

/** Normalized type label for UI (extension + app may use lowercase). */
export function formatAssetTypeLabel(type: string): string {
  const t = String(type || "").trim();
  if (!t) return "Unknown";
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}

export function formatAssetDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/** Short preview line for text-based assets (not full content). */
export function truncateText(text: string, max = 160): string {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + "…";
}

export function isImageLikeAsset(a: AssetRow): boolean {
  const t = a.type?.toLowerCase() ?? "";
  return t === "image" || t === "icon" || t === "background";
}

export function isVideoAsset(a: AssetRow): boolean {
  return a.type?.toLowerCase() === "video";
}

export function isLottieAsset(a: AssetRow): boolean {
  return a.type?.toLowerCase() === "lottie";
}

/** Dashboard "View all" section keys → tab filter values. */
export type AssetSectionFilter =
  | "__images__"
  | "__colors__"
  | "__svgs__"
  | "__typography__"
  | "__videos__"
  | "__lottie__"
  | "__code__";

export const ASSET_SECTION_TABS: { key: AssetSectionFilter; label: string }[] = [
  { key: "__images__", label: "Images" },
  { key: "__colors__", label: "Colors" },
  { key: "__svgs__", label: "SVGs" },
  { key: "__typography__", label: "Typography" },
  { key: "__videos__", label: "Videos" },
  { key: "__lottie__", label: "Lottie" },
  { key: "__code__", label: "Code" },
];

export function assetSectionTabLabel(typeFilter: string): string | null {
  if (typeFilter === "all") return "All";
  const tab = ASSET_SECTION_TABS.find((t) => t.key === typeFilter);
  return tab?.label ?? null;
}

export function assetMatchesTypeFilter(
  asset: AssetRow,
  typeFilter: string,
): boolean {
  if (typeFilter === "all") return true;
  const t = asset.type?.toLowerCase() ?? "";
  if (typeFilter === "__images__") {
    return t === "image" || t === "icon" || t === "background";
  }
  if (typeFilter === "__colors__") return t === "color";
  if (typeFilter === "__svgs__") return t === "svg";
  if (typeFilter === "__typography__") return t === "typography";
  if (typeFilter === "__videos__") return t === "video";
  if (typeFilter === "__lottie__") return t === "lottie";
  if (typeFilter === "__code__") return t === "code";
  return t === typeFilter;
}

export function isColorAsset(a: AssetRow): boolean {
  return a.type?.toLowerCase() === "color";
}

export function parseHexFromContent(content: string | null): string | null {
  if (!content) return null;
  const m = String(content).trim().match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  return m ? m[0] : null;
}

/** Hostname from `source_url` (http/https only), lowercased — used as filter key. */
export function getHostnameFromSourceUrl(
  url: string | null | undefined
): string | null {
  if (!url || typeof url !== "string") return null;
  const t = url.trim();
  if (!t) return null;
  try {
    const u = new URL(t);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    const h = u.hostname.trim().toLowerCase();
    return h || null;
  } catch {
    return null;
  }
}

/**
 * Short label for filter UI: hostname without leading `www.`
 * (e.g. www.example.com → example.com, app.vercel.app → app.vercel.app).
 */
export function formatDomainFilterLabel(hostname: string): string {
  const h = String(hostname || "").toLowerCase();
  if (h.startsWith("www.")) return h.slice(4);
  return h;
}

export function assetFilenameFromRow(asset: AssetRow): string {
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

export function mediaFileTypeLabel(asset: AssetRow): string {
  const url = asset.url?.trim() ?? "";
  try {
    const pathname = new URL(url, "https://placeholder.local").pathname;
    const m = pathname.match(/\.([a-z0-9]+)$/i);
    if (m) return m[1].toUpperCase();
  } catch {
    /* ignore */
  }
  if (/\.(jpe?g)(\?|$)/i.test(url)) return "JPG";
  if (/\.png(\?|$)/i.test(url)) return "PNG";
  if (/\.webp(\?|$)/i.test(url)) return "WEBP";
  if (/\.avif(\?|$)/i.test(url)) return "AVIF";
  if (/\.gif(\?|$)/i.test(url)) return "GIF";
  if (/\.svg(\?|$)/i.test(url)) return "SVG";
  if (/\.mp4(\?|$)/i.test(url)) return "MP4";
  if (/\.webm(\?|$)/i.test(url)) return "WEBM";
  if (/\.mov(\?|$)/i.test(url)) return "MOV";
  const t = asset.type?.toLowerCase() ?? "";
  if (t === "video") return "MP4";
  if (isImageLikeAsset(asset)) return "PNG";
  return formatAssetTypeLabel(asset.type).toUpperCase();
}

export function typographyFontName(asset: AssetRow): string {
  const meta = asset.meta as Record<string, unknown> | null;
  if (typeof meta?.fontFamily === "string" && meta.fontFamily.trim()) {
    return meta.fontFamily.trim();
  }
  const title = asset.title?.trim();
  if (title) {
    const part = title.split("·").pop()?.trim();
    if (part) return part;
    return title;
  }
  return "Font";
}

export function assetPreviewOverlayLabel(asset: AssetRow): string {
  const t = asset.type?.toLowerCase() ?? "";
  if (t === "color") {
    return parseHexFromContent(asset.content) ?? "—";
  }
  if (t === "svg" || t === "lottie" || t === "code") {
    return truncateText(assetFilenameFromRow(asset), 28);
  }
  if (t === "typography") {
    return truncateText(typographyFontName(asset), 28);
  }
  if (isVideoAsset(asset) || isImageLikeAsset(asset)) {
    return mediaFileTypeLabel(asset);
  }
  return truncateText(assetFilenameFromRow(asset), 28);
}

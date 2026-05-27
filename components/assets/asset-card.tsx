"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import {
  formatAssetDate,
  formatAssetTypeLabel,
  formatDomainFilterLabel,
  getHostnameFromSourceUrl,
  isColorAsset,
  parseHexFromContent,
  truncateText,
} from "./asset-format";
import { categoryBadgeReferenceClass, getCategoryBadgeDisplay } from "./asset-category";
import { AssetTypePill } from "./asset-type-pill";
import { AssetPreview } from "./asset-preview";
import { Copy, ExternalLink, Globe } from "lucide-react";

type Props = {
  asset: AssetRow;
  variant?: "grid" | "list";
  index?: number;
};

export function AssetCard({ asset, variant = "grid", index = 0 }: Props) {
  const [copied, setCopied] = useState(false);
  const title = asset.title?.trim() || formatAssetTypeLabel(asset.type);
  const hex = isColorAsset(asset) ? parseHexFromContent(asset.content) : null;
  const categoryBadge = getCategoryBadgeDisplay(asset.category);
  const host = getHostnameFromSourceUrl(asset.source_url);
  const domainLabel = host ? formatDomainFilterLabel(host) : null;

  const t = asset.type?.toLowerCase() ?? "";
  const hasDedicatedPreview =
    !!hex ||
    ["image", "video", "svg", "icon", "background", "typography", "code", "report"].includes(t);
  const hasTextBody = Boolean(asset.content && !hasDedicatedPreview);

  const copyPayload = (): string => {
    if (hex) return hex;
    if (t === "code" && asset.content) return asset.content;
    if (t === "report" && asset.content) return asset.content;
    return asset.url?.trim() || asset.content?.trim() || "";
  };

  const copyContent = async () => {
    const text = copyPayload();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  };

  const openSource = () => {
    if (asset.source_url) window.open(asset.source_url, "_blank", "noopener,noreferrer");
  };

  // ─── LIST VARIANT ──────────────────────────────────────────
  if (variant === "list") {
    return (
      <article className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
          <AssetPreview asset={asset} hex={hex} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-1.5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <AssetTypePill type={asset.type} />
              <h3 className="mt-1.5 truncate text-sm font-semibold text-neutral-900">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => void copyContent()}
              className="shrink-0 inline-flex h-7 items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 text-[11px] font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              <Copy className="size-3" aria-hidden />
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-neutral-400">
              {formatAssetDate(asset.created_at)}
            </span>
            {domainLabel && asset.source_url ? (
              <button
                type="button"
                onClick={openSource}
                className="flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-neutral-900"
              >
                <Globe className="size-3.5" aria-hidden />
                {domainLabel}
                <ExternalLink className="size-3" aria-hidden />
              </button>
            ) : (
              <span className={categoryBadgeReferenceClass}>{categoryBadge}</span>
            )}
          </div>
        </div>
      </article>
    );
  }

  // ─── GRID VARIANT ──────────────────────────────────────────
  return (
    <motion.article
      role="article"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:border-neutral-300 hover:shadow-lg"
    >
      <div className="flex flex-col p-4">
        {/* Header: type pill + copy button */}
        <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
          <AssetTypePill type={asset.type} />
          <button
            type="button"
            onClick={() => void copyContent()}
            className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 text-[11px] font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
          >
            <Copy className="size-3" aria-hidden />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Preview */}
        <div className="h-44 w-full overflow-hidden rounded-xl ring-1 ring-neutral-200/80">
          <AssetPreview asset={asset} hex={hex} />
        </div>

        {/* Body */}
        <div className="mt-4 flex flex-1 flex-col">
          <h3 className="truncate text-sm font-semibold text-neutral-900">{title}</h3>
          <div className="mt-1 flex shrink-0 items-center justify-between gap-2">
            <p className="text-xs text-neutral-400">
              {formatAssetDate(asset.created_at)}
            </p>
            <span className={categoryBadgeReferenceClass}>{categoryBadge}</span>
          </div>

          {hasTextBody ? (
            <div className="mt-3 max-h-12 overflow-hidden rounded-lg bg-neutral-50 p-2">
              <pre className="font-mono text-[10px] leading-relaxed text-neutral-600">
                {truncateText(asset.content ?? "", 120)}
              </pre>
            </div>
          ) : null}

          {domainLabel && asset.source_url ? (
            <button
              type="button"
              onClick={openSource}
              className="group/link mt-3 flex w-full shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-100"
            >
              <Globe className="size-3.5 shrink-0 text-neutral-500" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-xs text-neutral-600">
                {domainLabel}
              </span>
              <ExternalLink className="size-3 shrink-0 text-neutral-400 opacity-0 transition-opacity group-hover/link:opacity-100" aria-hidden />
            </button>
          ) : (
            <div className="mt-auto" />
          )}
        </div>
      </div>
    </motion.article>
  );
}

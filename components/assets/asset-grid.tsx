"use client";

import type { AssetRow } from "@/app/service/supabase/assets/types";
import { AssetCard } from "./asset-card";
import { PackageOpen } from "lucide-react";

export type AssetViewMode = "grid" | "list";

type Props = {
  assets: AssetRow[];
  viewMode?: AssetViewMode;
};

export function AssetGrid({ assets, viewMode = "grid" }: Props) {
  if (assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-24 text-center">
        <PackageOpen className="mb-3 size-12 text-neutral-300" aria-hidden />
        <p className="text-sm font-medium text-neutral-500">
          No assets match your filters.
        </p>
        <p className="mt-1 max-w-sm text-xs text-neutral-400">
          Save items from the browser extension to see them here.
        </p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <ul className="flex flex-col gap-3">
        {assets.map((asset, index) => (
          <li key={asset.id}>
            <AssetCard asset={asset} variant="list" index={index} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {assets.map((asset, index) => (
        <li key={asset.id} className="flex min-h-0 min-w-0">
          <AssetCard asset={asset} variant="grid" index={index} />
        </li>
      ))}
    </ul>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AssetRow } from "@/app/service/supabase/assets/types";
import type { ApiResponse } from "@/types/ApiResponse";

type ListResult = ApiResponse<AssetRow[]>;

function isMissingAppUser(res: Response, json: ListResult): boolean {
  if (res.status === 404) return true;
  const err = typeof json.error === "string" ? json.error.toLowerCase() : "";
  return err === "user_not_found" || err === "user not found";
}

export function useAssets() {
  const router = useRouter();
  const [assets, setAssets] = useState<AssetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/assets/list", { credentials: "same-origin" });
      const json = (await res.json()) as ListResult;
      if (isMissingAppUser(res, json)) {
        router.replace("/sign-out?reason=account_not_found");
        return;
      }
      if (!res.ok || !json.success) {
        const msg =
          typeof json.message === "string"
            ? json.message
            : typeof json.error === "string"
              ? json.error
              : "Failed to load assets";
        throw new Error(msg);
      }
      const list = json.result;
      setAssets(Array.isArray(list) ? list : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load assets");
      setAssets([]);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return { assets, loading, error, refetch };
}

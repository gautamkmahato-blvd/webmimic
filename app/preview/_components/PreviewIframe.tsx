"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  buildPreviewDocument,
  PreviewTemplateOptions,
} from "@/lib/design-editor/preview-template";

interface PreviewIframeProps extends Omit<PreviewTemplateOptions, "body"> {
  html: string;
  className?: string;
  title?: string;
  autoResize?: boolean;
  minHeight?: number;
  /** Show inline error banner if the iframe reports a load failure. Default: true. */
  showErrors?: boolean;
}

type Status =
  | { kind: "loading" }
  | { kind: "ready" }
  | { kind: "error"; message: string };

export function PreviewIframe({
  html,
  className,
  title = "Preview",
  fonts,
  extraCss,
  tailwindConfig,
  tailwindScriptUrl,
  autoResize = true,
  minHeight = 400,
  showErrors = true,
}: PreviewIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(minHeight);
  const [status, setStatus] = useState<Status>({ kind: "loading" });

  const srcDoc = useMemo(
    () =>
      buildPreviewDocument({
        body: html,
        fonts,
        extraCss,
        tailwindConfig,
        tailwindScriptUrl,
      }),
    [html, fonts, extraCss, tailwindConfig, tailwindScriptUrl]
  );

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.source !== iframeRef.current?.contentWindow) return;
      const data = event.data;
      if (!data || typeof data !== "object") return;

      if (data.type === "preview:height" && typeof data.height === "number") {
        if (autoResize) setContentHeight(Math.max(minHeight, data.height));
      } else if (data.type === "preview:status") {
        if (data.status === "ready") setStatus({ kind: "ready" });
        else if (data.status === "tailwind-missing")
          setStatus({ kind: "error", message: data.detail || "Tailwind script did not load." });
        else if (data.status === "error")
          setStatus({ kind: "error", message: data.detail || "Unknown iframe error." });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [autoResize, minHeight]);

  // Reset status when the source doc changes (new generation).
  useEffect(() => {
    setStatus({ kind: "loading" });
  }, [srcDoc]);

  return (
    <div className={className} style={{ position: "relative" }}>
      {showErrors && status.kind === "error" && (
        <div
          role="alert"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            background: "#fee2e2",
            color: "#991b1b",
            borderBottom: "1px solid #fca5a5",
            padding: "8px 12px",
            fontSize: 12,
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          <strong>Preview error:</strong> {status.message}
        </div>
      )}
      <iframe
        ref={iframeRef}
        srcDoc={srcDoc}
        title={title}
        style={{
          width: "100%",
          height: autoResize ? `${contentHeight}px` : undefined,
          border: 0,
          display: "block",
        }}
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
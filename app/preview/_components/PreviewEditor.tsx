"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  buildPreviewDocument,
  PreviewTemplateOptions,
} from "@/lib/design-editor/preview-template";
import type {
  IframeToParent,
  InspectableElement,
  ParentToIframe,
  ElementId,
} from "@/lib/design-editor/preview-protocol";
import { InspectorPanel } from "./Inspector";

interface PreviewEditorProps extends Omit<PreviewTemplateOptions, "body"> {
  html: string;
  onHtmlChange?: (html: string) => void;
  className?: string;
  minHeight?: number;
}

type Mode = "view" | "inspect";

export function PreviewEditor({
  html,
  onHtmlChange,
  className,
  fonts,
  extraCss,
  tailwindConfig,
  tailwindScriptUrl,
  minHeight = 600,
}: PreviewEditorProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Tracks the latest HTML synced from the iframe so parent prop echoes don't reload srcDoc.
  const syncedHtmlRef = useRef(html);
  const [bootHtml, setBootHtml] = useState(html);
  const [mode, setMode] = useState<Mode>("view");
  const [selected, setSelected] = useState<InspectableElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(minHeight);
  const [ready, setReady] = useState(false);

  // Only rebuild the iframe when html changes from outside (initial load, paste, reset).
  useEffect(() => {
    if (html !== syncedHtmlRef.current) {
      syncedHtmlRef.current = html;
      setBootHtml(html);
    }
  }, [html]);

  const srcDoc = useMemo(
    () =>
      buildPreviewDocument({
        body: bootHtml,
        fonts,
        extraCss,
        tailwindConfig,
        tailwindScriptUrl,
      }),
    [bootHtml, fonts, extraCss, tailwindConfig, tailwindScriptUrl]
  );

  useEffect(() => {
    setReady(false);
    setSelected(null);
  }, [srcDoc]);

  const send = useCallback((msg: ParentToIframe) => {
    const w = iframeRef.current?.contentWindow;
    if (w) w.postMessage(msg, "*");
  }, []);

  useEffect(() => {
    if (ready) send({ type: "editor:set-mode", mode });
  }, [mode, ready, send]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.source !== iframeRef.current?.contentWindow) return;
      const data = event.data as IframeToParent;
      if (!data || typeof data !== "object") return;

      switch (data.type) {
        case "preview:ready":
          setReady(true);
          break;
        case "preview:height":
          setIframeHeight(Math.max(minHeight, data.height));
          break;
        case "preview:select":
          setSelected(data.element);
          break;
        case "preview:html-changed":
          syncedHtmlRef.current = data.html;
          onHtmlChange?.(data.html);
          break;
        case "preview:error":
          console.error("[Preview]", data.message);
          break;
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [minHeight, onHtmlChange]);

  // Edit handlers
  const onSetClasses = useCallback((classes: string[]) => {
    if (!selected) return;
    send({ type: "editor:set-classes", id: selected.id, classes });
  }, [selected, send]);

  const onReplaceClass = useCallback((from: string, to: string) => {
    if (!selected) return;
    send({ type: "editor:replace-class", id: selected.id, from, to });
  }, [selected, send]);

  const onSetAttribute = useCallback((name: string, value: string | null) => {
    if (!selected) return;
    send({ type: "editor:set-attribute", id: selected.id, name, value });
  }, [selected, send]);

  const onRenameAttribute = useCallback((oldName: string, newName: string) => {
    if (!selected) return;
    send({ type: "editor:rename-attribute", id: selected.id, oldName, newName });
  }, [selected, send]);

  const onSetStyle = useCallback((property: string, value: string | null) => {
    if (!selected) return;
    send({ type: "editor:set-style", id: selected.id, property, value });
  }, [selected, send]);

  const onRenameStyle = useCallback((oldProperty: string, newProperty: string) => {
    if (!selected) return;
    send({ type: "editor:rename-style", id: selected.id, oldProperty, newProperty });
  }, [selected, send]);

  const onSetText = useCallback((text: string) => {
    if (!selected) return;
    send({ type: "editor:set-text", id: selected.id, text });
  }, [selected, send]);

  const onRenameTag = useCallback((newTag: string) => {
    if (!selected) return;
    send({ type: "editor:rename-tag", id: selected.id, newTag });
  }, [selected, send]);

  const onSelectBreadcrumb = useCallback((id: ElementId) => {
    send({ type: "editor:select", id });
  }, [send]);

  const onClearSelection = useCallback(() => {
    send({ type: "editor:select", id: null });
    setSelected(null);
  }, [send]);

  return (
    <div
      className={`flex bg-white border border-zinc-200 rounded-lg overflow-hidden ${className || ""}`}
      style={{ height: Math.max(iframeHeight + 48, minHeight) }}
    >
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-12 shrink-0 px-3 border-b border-zinc-200 bg-zinc-50/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 rounded-md border border-zinc-200 bg-white p-0.5">
            <ToolbarButton
              active={mode === "view"}
              onClick={() => setMode("view")}
              label="View"
              icon={<EyeIcon />}
            />
            <ToolbarButton
              active={mode === "inspect"}
              onClick={() => setMode("inspect")}
              label="Inspect"
              icon={<CursorIcon />}
            />
          </div>
          <div className="text-[11px] text-zinc-500 font-mono">
            {mode === "inspect"
              ? "Click any element to edit"
              : "Toggle Inspect to start editing"}
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-zinc-100">
          <iframe
            ref={iframeRef}
            srcDoc={srcDoc}
            title="Preview"
            sandbox="allow-scripts"
            referrerPolicy="no-referrer"
            style={{
              width: "100%",
              height: `${iframeHeight}px`,
              border: 0,
              display: "block",
              background: "white",
            }}
          />
        </div>
      </div>

      <div className="w-[340px] shrink-0 border-l border-zinc-200 bg-white">
        <InspectorPanel
          selected={selected}
          onSetClasses={onSetClasses}
          onReplaceClass={onReplaceClass}
          onSetAttribute={onSetAttribute}
          onRenameAttribute={onRenameAttribute}
          onSetStyle={onSetStyle}
          onRenameStyle={onRenameStyle}
          onSetText={onSetText}
          onRenameTag={onRenameTag}
          onSelectBreadcrumb={onSelectBreadcrumb}
          onClearSelection={onClearSelection}
        />
      </div>
    </div>
  );
}

function ToolbarButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[12px] font-medium ${
        active
          ? "bg-zinc-900 text-white"
          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3l7 18 3-8 8-3z" />
    </svg>
  );
}
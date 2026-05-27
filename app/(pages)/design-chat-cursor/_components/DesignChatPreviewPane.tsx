"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Hand, Minus, Plus } from "lucide-react";
import { buildDesignChatDocument } from "../buildDesignChatDocument";
import type { DesignChatPreviewPayload } from "../extractPreviewHtml";
import type {
  ElementId,
  IframeToParent,
  InspectableElement,
  ParentToIframe,
} from "@/lib/design-editor/preview-protocol";
import { InspectorPanel } from "@/app/preview/_components/Inspector";

type Tab = "view" | "code";
type InspectMode = "view" | "inspect";

const ARTBOARD_WIDTH = 1440;
const MIN_IFRAME_HEIGHT = 120;
const HEIGHT_POLL_MS = 400;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
const CANVAS_PADDING = 48;

interface DesignChatPreviewPaneProps {
  preview: DesignChatPreviewPayload;
  onPreviewChange?: (payload: DesignChatPreviewPayload) => void;
}

function getCodeDisplay(payload: DesignChatPreviewPayload): string {
  if (payload.kind === "html") return payload.body;
  const marker = "const __previewRoot = ReactDOM.createRoot";
  const idx = payload.source.indexOf(marker);
  return idx === -1 ? payload.source : payload.source.slice(0, idx).trim();
}

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

function measureIframeContentHeight(iframe: HTMLIFrameElement | null): number {
  const doc = iframe?.contentDocument;
  if (!doc) return MIN_IFRAME_HEIGHT;
  const html = doc.documentElement;
  const body = doc.body;
  return Math.max(
    html?.scrollHeight ?? 0,
    body?.scrollHeight ?? 0,
    html?.offsetHeight ?? 0,
    body?.offsetHeight ?? 0,
    MIN_IFRAME_HEIGHT
  );
}

export function DesignChatPreviewPane({
  preview,
  onPreviewChange,
}: DesignChatPreviewPaneProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const syncedPreviewRef = useRef(preview);
  const isPanningRef = useRef(false);
  const isFrameDraggingRef = useRef(false);
  const spaceHeldRef = useRef(false);
  const dragRef = useRef({ startX: 0, startY: 0, frameX: 0, frameY: 0 });
  const userAdjustedViewRef = useRef(false);

  const [bootPreview, setBootPreview] = useState(preview);
  const [tab, setTab] = useState<Tab>("view");
  const [inspectMode, setInspectMode] = useState<InspectMode>("view");
  const [selected, setSelected] = useState<InspectableElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(MIN_IFRAME_HEIGHT);
  const [ready, setReady] = useState(false);
  const [zoom, setZoom] = useState(0.75);
  const [framePos, setFramePos] = useState({ x: CANVAS_PADDING, y: CANVAS_PADDING });
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [handTool, setHandTool] = useState(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [isFrameDragging, setIsFrameDragging] = useState(false);

  useEffect(() => {
    if (preview === syncedPreviewRef.current) return;
    syncedPreviewRef.current = preview;
    setBootPreview(preview);
  }, [preview]);

  const srcDoc = useMemo(
    () => buildDesignChatDocument(bootPreview),
    [bootPreview]
  );

  const codeDisplay = useMemo(() => getCodeDisplay(bootPreview), [bootPreview]);

  const fitWidthZoom = useCallback((canvasW: number) => {
    if (!canvasW) return 0.75;
    return clampZoom(Math.min(1, (canvasW - CANVAS_PADDING * 2) / ARTBOARD_WIDTH));
  }, []);

  const resetFrameView = useCallback(
    (canvasW: number) => {
      const nextZoom = fitWidthZoom(canvasW);
      setZoom(nextZoom);
      setFramePos({
        x: Math.max(CANVAS_PADDING, (canvasW - ARTBOARD_WIDTH * nextZoom) / 2),
        y: CANVAS_PADDING,
      });
      userAdjustedViewRef.current = false;
    },
    [fitWidthZoom]
  );

  const applyFitWidth = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width } = canvas.getBoundingClientRect();
    resetFrameView(width);
  }, [resetFrameView]);

  useEffect(() => {
    setReady(false);
    setSelected(null);
    setInspectMode("view");
    setHandTool(false);
    setIframeHeight(MIN_IFRAME_HEIGHT);
    userAdjustedViewRef.current = false;
  }, [srcDoc]);

  const syncIframeHeight = useCallback(() => {
    const next = measureIframeContentHeight(iframeRef.current);
    setIframeHeight((current) => (current === next ? current : next));
  }, []);

  useEffect(() => {
    if (!ready || tab !== "view") return;

    syncIframeHeight();

    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    if (!doc?.body) return;

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => syncIframeHeight())
        : null;

    observer?.observe(doc.body);
    if (doc.documentElement) observer?.observe(doc.documentElement);

    const interval = window.setInterval(syncIframeHeight, HEIGHT_POLL_MS);
    const timeouts = [50, 150, 400, 800, 1500, 3000, 6000].map((ms) =>
      window.setTimeout(syncIframeHeight, ms)
    );

    return () => {
      observer?.disconnect();
      window.clearInterval(interval);
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [ready, tab, srcDoc, syncIframeHeight]);

  useEffect(() => {
    if (!ready || tab !== "view" || userAdjustedViewRef.current) return;
    if (canvasSize.width > 0) resetFrameView(canvasSize.width);
  }, [ready, tab, canvasSize.width, resetFrameView, srcDoc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || tab !== "view") return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setCanvasSize({ width, height });
    });

    observer.observe(canvas);
    return () => observer.disconnect();
  }, [tab]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.code !== "Space" || e.repeat) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
      spaceHeldRef.current = true;
      setSpaceHeld(true);
    }

    function onKeyUp(e: KeyboardEvent) {
      if (e.code !== "Space") return;
      spaceHeldRef.current = false;
      setSpaceHeld(false);
      isPanningRef.current = false;
      setIsPanning(false);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  const send = useCallback((msg: ParentToIframe) => {
    const w = iframeRef.current?.contentWindow;
    if (w) w.postMessage(msg, "*");
  }, []);

  useEffect(() => {
    if (ready && tab === "view") {
      send({ type: "editor:set-mode", mode: inspectMode });
    }
  }, [inspectMode, ready, send, tab]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.source !== iframeRef.current?.contentWindow) return;
      const data = event.data as IframeToParent;
      if (!data || typeof data !== "object") return;

      switch (data.type) {
        case "preview:ready":
          setReady(true);
          break;
        case "preview:height": {
          const reported = Math.max(MIN_IFRAME_HEIGHT, data.height);
          setIframeHeight((current) => Math.max(current, reported));
          break;
        }
        case "preview:select":
          setSelected(data.element);
          break;
        case "preview:html-changed": {
          const next: DesignChatPreviewPayload = { kind: "html", body: data.html };
          syncedPreviewRef.current = next;
          onPreviewChange?.(next);
          window.requestAnimationFrame(() => {
            const nextHeight = measureIframeContentHeight(iframeRef.current);
            setIframeHeight((current) => Math.max(current, nextHeight));
          });
          break;
        }
        case "preview:error":
          console.error("[DesignChatPreview]", data.message);
          break;
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onPreviewChange]);

  const adjustZoom = useCallback((delta: number) => {
    userAdjustedViewRef.current = true;
    setZoom((current) => clampZoom(current + delta));
  }, []);

  const handleCanvasWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    userAdjustedViewRef.current = true;
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setZoom((current) => clampZoom(current + delta));
  }, []);

  const startCanvasPan = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const canPan = spaceHeldRef.current || handTool;
      if (!canPan || e.button !== 0) return;
      isPanningRef.current = true;
      setIsPanning(true);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        frameX: framePos.x,
        frameY: framePos.y,
      };
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [framePos.x, framePos.y, handTool]
  );

  const startFrameDrag = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (spaceHeldRef.current || e.button !== 0) return;
      e.stopPropagation();
      isFrameDraggingRef.current = true;
      setIsFrameDragging(true);
      userAdjustedViewRef.current = true;
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        frameX: framePos.x,
        frameY: framePos.y,
      };
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [framePos.x, framePos.y]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isPanningRef.current && !isFrameDraggingRef.current) return;
      userAdjustedViewRef.current = true;
      const drag = dragRef.current;
      setFramePos({
        x: drag.frameX + (e.clientX - drag.startX),
        y: drag.frameY + (e.clientY - drag.startY),
      });
    },
    []
  );

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanningRef.current && !isFrameDraggingRef.current) return;
    isPanningRef.current = false;
    isFrameDraggingRef.current = false;
    setIsPanning(false);
    setIsFrameDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

  const onSetClasses = useCallback(
    (classes: string[]) => {
      if (!selected) return;
      send({ type: "editor:set-classes", id: selected.id, classes });
    },
    [selected, send]
  );

  const onReplaceClass = useCallback(
    (from: string, to: string) => {
      if (!selected) return;
      send({ type: "editor:replace-class", id: selected.id, from, to });
    },
    [selected, send]
  );

  const onSetAttribute = useCallback(
    (name: string, value: string | null) => {
      if (!selected) return;
      send({ type: "editor:set-attribute", id: selected.id, name, value });
    },
    [selected, send]
  );

  const onRenameAttribute = useCallback(
    (oldName: string, newName: string) => {
      if (!selected) return;
      send({ type: "editor:rename-attribute", id: selected.id, oldName, newName });
    },
    [selected, send]
  );

  const onSetStyle = useCallback(
    (property: string, value: string | null) => {
      if (!selected) return;
      send({ type: "editor:set-style", id: selected.id, property, value });
    },
    [selected, send]
  );

  const onRenameStyle = useCallback(
    (oldProperty: string, newProperty: string) => {
      if (!selected) return;
      send({ type: "editor:rename-style", id: selected.id, oldProperty, newProperty });
    },
    [selected, send]
  );

  const onSetText = useCallback(
    (text: string) => {
      if (!selected) return;
      send({ type: "editor:set-text", id: selected.id, text });
    },
    [selected, send]
  );

  const onRenameTag = useCallback(
    (newTag: string) => {
      if (!selected) return;
      send({ type: "editor:rename-tag", id: selected.id, newTag });
    },
    [selected, send]
  );

  const onSelectBreadcrumb = useCallback(
    (id: ElementId) => {
      send({ type: "editor:select", id });
    },
    [send]
  );

  const onClearSelection = useCallback(() => {
    send({ type: "editor:select", id: null });
    setSelected(null);
  }, [send]);

  const blockIframePointer = spaceHeld || isPanning || isFrameDragging || handTool;

  return (
    <div className="flex flex-1 min-w-0 min-h-0">
      <div className="flex flex-1 min-w-0 flex-col bg-white">
        <div className="h-11 shrink-0 px-3 border-b border-zinc-200 bg-zinc-50/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 rounded-md border border-zinc-200 bg-white p-0.5">
            <ToolbarButton
              active={tab === "view"}
              onClick={() => setTab("view")}
              label="View"
            />
            <ToolbarButton
              active={tab === "code"}
              onClick={() => {
                setTab("code");
                setInspectMode("view");
                setSelected(null);
              }}
              label="Code"
            />
          </div>

          {tab === "code" && (
            <div className="text-[11px] text-zinc-500 font-mono truncate">
              Generated source
            </div>
          )}
        </div>

        <div className="relative flex-1 min-h-0 overflow-hidden">
          {tab === "view" ? (
            <>
              <div
                ref={canvasRef}
                className={`absolute inset-0 ${
                  handTool || spaceHeld || isPanning ? "cursor-grab" : ""
                } ${isPanning || isFrameDragging ? "cursor-grabbing" : ""}`}
                style={{
                  backgroundColor: "#f4f4f5",
                  backgroundImage:
                    "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
                onWheel={handleCanvasWheel}
                onPointerDown={startCanvasPan}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                <div
                  className="absolute left-0 top-0 will-change-transform"
                  style={{
                    transform: `translate(${framePos.x}px, ${framePos.y}px) scale(${zoom})`,
                    transformOrigin: "top left",
                  }}
                >
                  <div
                    className="rounded-xl bg-white shadow-lg ring-1 ring-zinc-200/80"
                    style={{ width: ARTBOARD_WIDTH }}
                  >
                    <div
                      className="flex h-8 cursor-grab items-center justify-between rounded-t-xl border-b border-zinc-200 bg-zinc-50 px-3 active:cursor-grabbing"
                      onPointerDown={startFrameDrag}
                    >
                      <span className="text-[11px] font-medium text-zinc-600">
                        Preview
                      </span>
                      <span className="text-[10px] tabular-nums text-zinc-400">
                        {ARTBOARD_WIDTH} × {iframeHeight}px
                      </span>
                    </div>
                    <iframe
                      ref={iframeRef}
                      srcDoc={srcDoc}
                      title="Generated design preview"
                      sandbox="allow-scripts"
                      referrerPolicy="no-referrer"
                      style={{
                        width: ARTBOARD_WIDTH,
                        height: iframeHeight,
                        border: 0,
                        display: "block",
                        background: "white",
                        pointerEvents: blockIframePointer ? "none" : "auto",
                      }}
                    />
                  </div>
                </div>
              </div>

            </>
          ) : (
            <div className="absolute inset-0 overflow-auto bg-zinc-100">
              <div className="flex min-h-full items-start justify-center p-6">
                <pre className="w-full max-w-3xl overflow-x-auto rounded-lg border border-zinc-200 bg-white p-4 text-[12px] leading-relaxed text-zinc-800 shadow-sm">
                  <code className="font-mono whitespace-pre-wrap break-words">
                    {codeDisplay}
                  </code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {tab === "view" && (
          <div className="shrink-0 h-11 border-t border-zinc-200 bg-white px-3 flex items-center justify-between gap-3">
            <p className="text-[11px] text-zinc-500 truncate hidden sm:block">
              {inspectMode === "inspect"
                ? "Click any element to edit properties"
                : handTool
                  ? "Drag to move the frame"
                  : "Hand tool or Space + drag to move"}
            </p>
            <div className="ml-auto flex items-center gap-2">
              <ToolbarButton
                active={handTool}
                onClick={() => {
                  setHandTool((on) => !on);
                  if (!handTool) {
                    setInspectMode("view");
                    setSelected(null);
                  }
                }}
                label="Hand"
                icon={<Hand className="h-3.5 w-3.5" />}
              />
              <ToolbarButton
                active={inspectMode === "inspect"}
                onClick={() => {
                  setHandTool(false);
                  setInspectMode((current) =>
                    current === "inspect" ? "view" : "inspect"
                  );
                }}
                label="Inspect"
              />
              <div className="flex items-center gap-0.5 rounded-lg border border-zinc-200 bg-zinc-50 px-1 py-0.5">
                <button
                  type="button"
                  onClick={() => adjustZoom(-ZOOM_STEP)}
                  className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100"
                  aria-label="Zoom out"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={applyFitWidth}
                  className="min-w-[52px] px-1 text-center text-[11px] font-medium tabular-nums text-zinc-700 hover:bg-zinc-100 rounded-md py-1"
                  title="Fit width to canvas"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  onClick={() => adjustZoom(ZOOM_STEP)}
                  className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100"
                  aria-label="Zoom in"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {tab === "view" && inspectMode === "inspect" && (
        <div className="w-[340px] shrink-0 border-l border-zinc-200 bg-white overflow-hidden flex flex-col min-h-0">
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
      )}
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
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[12px] font-medium ${
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

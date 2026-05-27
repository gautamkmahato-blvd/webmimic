"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import {
  Sparkles,
  Layers,
  SlidersHorizontal,
  Undo2,
  Redo2,
  Code2,
  Copy,
  Check,
  RefreshCw,
  Trash2,
  X,
  Loader2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { buildSrcdoc } from "@/lib/design-editor/buildSrcdoc";
import { DUMMY_HTML } from "@/lib/design-editor/dummyHtml";
import {
  MESSAGE_NAMESPACE,
  type AgentToHost,
  type DistributiveOmit,
  type HostToAgent,
  type SelectionPayload,
  type TreeNode,
} from "@/lib/design-editor/types";

const HISTORY_LIMIT = 50;
const MAX_HTML_BYTES = 2 * 1024 * 1024; // 2 MB sanity cap on saved HTML

type Entitlement =
  | { state: "loading" }
  | { state: "signed-out" }
  | { state: "ok" }
  | { state: "denied"; message: string }
  | { state: "error"; message: string };

export default function DesignEditorPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const [entitlement, setEntitlement] = useState<Entitlement>({ state: "loading" });

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [selection, setSelection] = useState<SelectionPayload | null>(null);
  const [tree, setTree] = useState<TreeNode | null>(null);

  // History of full-document HTML snapshots from the agent (initial = DUMMY_HTML).
  const [history, setHistory] = useState<{ stack: string[]; index: number }>({
    stack: [DUMMY_HTML],
    index: 0,
  });
  const pendingSnapshot = useRef<string | null>(null);

  const [sourceOpen, setSourceOpen] = useState(false);
  const [sourceText, setSourceText] = useState("");
  const [copiedSource, setCopiedSource] = useState(false);

  // ─── Premium gate ───────────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) { setEntitlement({ state: "signed-out" }); return; }
    let cancelled = false;
    fetch("/api/design-editor/entitlement")
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (cancelled) return;
        if (r.ok && data.success) setEntitlement({ state: "ok" });
        else if (r.status === 403) setEntitlement({ state: "denied", message: data.error || "Premium subscription required." });
        else if (r.status === 401) setEntitlement({ state: "signed-out" });
        else setEntitlement({ state: "error", message: data.error || "Failed to load editor." });
      })
      .catch(() => {
        if (!cancelled) setEntitlement({ state: "error", message: "Failed to reach the server." });
      });
    return () => { cancelled = true; };
  }, [isLoaded, isSignedIn]);

  // ─── srcdoc — stable for the lifetime of the iframe ──────────────
  const initialSrcdoc = useMemo(() => buildSrcdoc(DUMMY_HTML), []);

  // ─── postMessage helpers ─────────────────────────────────────────
  const send = useCallback((msg: DistributiveOmit<HostToAgent, "ns">) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage({ ...msg, ns: MESSAGE_NAMESPACE } as HostToAgent, "*");
  }, []);

  // Inbound messages from the agent.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      // The iframe is null-origin (sandbox without allow-same-origin), so the
      // event origin is the string "null". Also require namespace match.
      if (e.origin !== "null" && e.origin !== window.location.origin) return;
      const msg = e.data as AgentToHost;
      if (!msg || typeof msg !== "object" || msg.ns !== MESSAGE_NAMESPACE) return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      switch (msg.type) {
        case "agent:ready":
          setIframeReady(true);
          break;
        case "agent:selected":
          setSelection(msg.payload);
          break;
        case "agent:tree":
          setTree(msg.tree);
          break;
        case "agent:html":
          handleHtmlReceived(msg.html);
          break;
        case "agent:mutated":
          // Request a fresh tree + html snapshot for undo.
          send({ type: "host:getHTML" });
          break;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);

  // What to do with HTML coming back from the agent depends on the reason it
  // was requested: history snapshot (default) or "view source" modal.
  const handleHtmlReceived = useCallback((html: string) => {
    if (pendingSnapshot.current === "source") {
      pendingSnapshot.current = null;
      setSourceText(html);
      setSourceOpen(true);
      return;
    }
    if (html.length > MAX_HTML_BYTES) return; // ignore oversized payloads
    setHistory((prev) => {
      // If we already had an undo position, drop the redo tail.
      const trimmed = prev.stack.slice(0, prev.index + 1);
      // Skip identical consecutive snapshots.
      if (trimmed[trimmed.length - 1] === html) return prev;
      const next = [...trimmed, html];
      const overflow = Math.max(0, next.length - HISTORY_LIMIT);
      const stack = overflow > 0 ? next.slice(overflow) : next;
      return { stack, index: stack.length - 1 };
    });
  }, []);

  const canUndo = history.index > 0;
  const canRedo = history.index < history.stack.length - 1;

  const doUndo = () => {
    if (!canUndo) return;
    const next = history.index - 1;
    setHistory((h) => ({ ...h, index: next }));
    send({ type: "host:setHTML", html: history.stack[next] });
  };
  const doRedo = () => {
    if (!canRedo) return;
    const next = history.index + 1;
    setHistory((h) => ({ ...h, index: next }));
    send({ type: "host:setHTML", html: history.stack[next] });
  };
  const doReset = () => {
    if (!confirm("Reset all edits and reload the original preview?")) return;
    setHistory({ stack: [DUMMY_HTML], index: 0 });
    setSelection(null);
    send({ type: "host:setHTML", html: DUMMY_HTML });
  };
  const doViewSource = () => {
    pendingSnapshot.current = "source";
    send({ type: "host:getHTML" });
  };
  const doCopySource = async () => {
    try {
      await navigator.clipboard.writeText(sourceText);
      setCopiedSource(true);
      setTimeout(() => setCopiedSource(false), 1200);
    } catch {}
  };

  // ─── Property edit helpers ───────────────────────────────────────
  const setSelClass = (value: string) => {
    if (!selection) return;
    send({ type: "host:setClass", id: selection.id, value });
  };
  const setSelText = (value: string) => {
    if (!selection) return;
    send({ type: "host:setText", id: selection.id, value });
  };
  const setSelStyle = (prop: string, value: string) => {
    if (!selection) return;
    send({ type: "host:setStyle", id: selection.id, prop, value });
  };
  const deleteSelected = () => {
    if (!selection) return;
    if (!confirm(`Delete <${selection.tag}>? This can be undone.`)) return;
    send({ type: "host:delete", id: selection.id });
    setSelection(null);
  };

  const headerRight = !isLoaded ? (
    <span className="h-9 w-20 animate-pulse rounded-lg bg-neutral-200" />
  ) : isSignedIn ? (
    <UserButton />
  ) : (
    <SignInButton mode="modal">
      <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
        Sign in
      </button>
    </SignInButton>
  );

  // ─── Gate states ─────────────────────────────────────────────────
  if (entitlement.state === "loading" || !isLoaded) {
    return (
      <Shell headerRight={headerRight}>
        <FullState icon={<Loader2 className="h-6 w-6 animate-spin text-neutral-400" />} text="Loading editor…" />
      </Shell>
    );
  }
  if (entitlement.state === "signed-out") {
    return (
      <Shell headerRight={headerRight}>
        <FullState
          icon={<Sparkles className="h-6 w-6 text-neutral-400" />}
          text="Sign in to use the Design Editor — premium feature."
          action={
            <SignInButton mode="modal">
              <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">Sign in</button>
            </SignInButton>
          }
        />
      </Shell>
    );
  }
  if (entitlement.state === "denied") {
    return (
      <Shell headerRight={headerRight}>
        <FullState
          icon={<Sparkles className="h-6 w-6 text-amber-500" />}
          text={entitlement.message}
        />
      </Shell>
    );
  }
  if (entitlement.state === "error") {
    return (
      <Shell headerRight={headerRight}>
        <FullState icon={<X className="h-6 w-6 text-red-500" />} text={entitlement.message} />
      </Shell>
    );
  }

  // ─── Editor ──────────────────────────────────────────────────────
  return (
    <Shell headerRight={headerRight}>
      {/* Toolbar */}
      <div className="flex h-12 shrink-0 items-center gap-1 border-b border-neutral-200 bg-white px-3">
        <ToolbarButton onClick={doUndo} disabled={!canUndo} title="Undo"><Undo2 className="h-4 w-4" /></ToolbarButton>
        <ToolbarButton onClick={doRedo} disabled={!canRedo} title="Redo"><Redo2 className="h-4 w-4" /></ToolbarButton>
        <div className="mx-1 h-5 w-px bg-neutral-200" />
        <ToolbarButton onClick={doViewSource} title="View source"><Code2 className="h-4 w-4" /></ToolbarButton>
        <ToolbarButton onClick={doReset} title="Reset"><RefreshCw className="h-4 w-4" /></ToolbarButton>
        <div className="ml-auto flex items-center gap-2 px-1 text-xs text-neutral-500">
          {iframeReady ? (
            <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ready</span>
          ) : (
            <span className="inline-flex items-center gap-1"><Loader2 className="h-3 w-3 animate-spin" /> Booting preview…</span>
          )}
        </div>
      </div>

      {/* Body — 3 columns */}
      <div className="flex flex-1 overflow-hidden">
        {/* Layers */}
        <aside className="flex w-64 shrink-0 flex-col border-r border-neutral-200 bg-neutral-50">
          <div className="flex h-10 items-center gap-2 border-b border-neutral-200 bg-white px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <Layers className="h-3.5 w-3.5" /> Layers
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-2 text-xs">
            {tree ? (
              <LayerNode
                node={tree}
                depth={0}
                selectedId={selection?.id ?? null}
                onSelect={(id) => send({ type: "host:select", id })}
                isRoot
              />
            ) : (
              <div className="px-2 py-2 text-neutral-400">Loading tree…</div>
            )}
          </div>
        </aside>

        {/* Canvas */}
        <section className="relative flex-1 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.06)_1px,_transparent_0)] [background-size:18px_18px]">
          <iframe
            ref={iframeRef}
            title="Design preview"
            sandbox="allow-scripts"
            srcDoc={initialSrcdoc}
            className="absolute inset-0 h-full w-full border-0 bg-white"
          />
        </section>

        {/* Properties */}
        <aside className="flex w-80 shrink-0 flex-col border-l border-neutral-200 bg-neutral-50">
          <div className="flex h-10 items-center gap-2 border-b border-neutral-200 bg-white px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Properties
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-3 text-xs">
            {!selection ? (
              <p className="px-1 py-2 text-neutral-400">
                Click an element in the canvas to edit it.
              </p>
            ) : (
              <PropertyPanel
                key={selection.id}
                selection={selection}
                onSetClass={setSelClass}
                onSetText={setSelText}
                onSetStyle={setSelStyle}
                onDelete={deleteSelected}
              />
            )}
          </div>
        </aside>
      </div>

      {/* Source modal */}
      {sourceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onClick={() => setSourceOpen(false)}>
          <div
            className="flex h-[min(80vh,720px)] w-[min(90vw,960px)] flex-col overflow-hidden rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
              <span className="text-sm font-semibold">HTML source</span>
              <div className="flex items-center gap-2">
                <button onClick={doCopySource} className="flex h-7 items-center gap-1 rounded-full border border-neutral-200 px-3 text-xs hover:border-neutral-300">
                  {copiedSource ? <><Check className="h-3 w-3 text-emerald-600" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
                </button>
                <button onClick={() => setSourceOpen(false)} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-neutral-100">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <pre className="min-h-0 flex-1 overflow-auto bg-neutral-50 p-4 font-mono text-[11px] leading-5 text-neutral-700">
              {sourceText}
            </pre>
          </div>
        </div>
      )}
    </Shell>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Shell with sticky header
// ─────────────────────────────────────────────────────────────────────
function Shell({ children, headerRight }: { children: React.ReactNode; headerRight: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-neutral-100 text-neutral-900">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-base font-semibold tracking-tight">design.editor</span>
          <span className="ml-2 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800">
            Premium
          </span>
        </div>
        <div>{headerRight}</div>
      </header>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Small components
// ─────────────────────────────────────────────────────────────────────
function FullState({ icon, text, action }: { icon: React.ReactNode; text: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
      {icon}
      <p className="max-w-sm text-sm text-neutral-600">{text}</p>
      {action}
    </div>
  );
}

function ToolbarButton({
  children, onClick, disabled, title,
}: {
  children: React.ReactNode; onClick?: () => void; disabled?: boolean; title?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function LayerNode({
  node, depth, selectedId, onSelect, isRoot,
}: {
  node: TreeNode;
  depth: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
  isRoot?: boolean;
}) {
  const [open, setOpen] = useState(depth < 2);
  const hasChildren = node.children.length > 0;
  if (isRoot) {
    return (
      <ul className="space-y-0.5">
        {node.children.map((c) => (
          <LayerNode key={c.id} node={c} depth={0} selectedId={selectedId} onSelect={onSelect} />
        ))}
      </ul>
    );
  }
  return (
    <li>
      <div
        className={`group flex cursor-pointer items-center gap-1 rounded-md py-0.5 pr-1 hover:bg-white ${
          selectedId === node.id ? "bg-emerald-50 text-emerald-900" : ""
        }`}
        style={{ paddingLeft: 4 + depth * 12 }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
          className={`flex h-4 w-4 items-center justify-center text-neutral-400 ${hasChildren ? "" : "invisible"}`}
        >
          {open ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        </button>
        <button onClick={() => onSelect(node.id)} className="flex min-w-0 flex-1 items-center gap-1.5 truncate text-left">
          <span className="font-mono text-[10px] text-neutral-500">{node.tag}</span>
          {node.preview && <span className="truncate text-neutral-700">{node.preview}</span>}
        </button>
      </div>
      {open && hasChildren && (
        <ul className="space-y-0.5">
          {node.children.map((c) => (
            <LayerNode key={c.id} node={c} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
}

function PropertyPanel({
  selection, onSetClass, onSetText, onSetStyle, onDelete,
}: {
  selection: SelectionPayload;
  onSetClass: (v: string) => void;
  onSetText: (v: string) => void;
  onSetStyle: (prop: string, v: string) => void;
  onDelete: () => void;
}) {
  const [classDraft, setClassDraft] = useState(selection.className);
  const [textDraft, setTextDraft] = useState(selection.text);

  // Keep drafts in sync when a new element is selected (key={id} resets state).
  useEffect(() => { setClassDraft(selection.className); }, [selection.className]);
  useEffect(() => { setTextDraft(selection.text); }, [selection.text]);

  const commitClass = () => { if (classDraft !== selection.className) onSetClass(classDraft); };
  const commitText  = () => { if (textDraft  !== selection.text)      onSetText(textDraft); };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-neutral-900 px-1.5 py-0.5 font-mono text-[10px] text-white">{selection.tag}</span>
          <span className="font-mono text-[10px] text-neutral-500">#{selection.id}</span>
        </div>
        <button
          onClick={onDelete}
          className="flex h-7 w-7 items-center justify-center rounded-md text-red-500 hover:bg-red-50"
          title="Delete element"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <Field label="Classes (Tailwind)">
        <textarea
          value={classDraft}
          onChange={(e) => setClassDraft(e.target.value)}
          onBlur={commitClass}
          rows={3}
          className="w-full resize-none rounded-md border border-neutral-200 bg-white px-2 py-1.5 font-mono text-[11px] leading-5 focus:border-neutral-400 focus:outline-none"
          spellCheck={false}
        />
      </Field>

      <Field label="Text content">
        <textarea
          value={textDraft}
          onChange={(e) => setTextDraft(e.target.value)}
          onBlur={commitText}
          rows={2}
          className="w-full resize-none rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-[11px] leading-5 focus:border-neutral-400 focus:outline-none"
        />
      </Field>

      <SectionHeader>Color</SectionHeader>
      <ColorRow label="Text"       computed={selection.computed.color}           onChange={(v) => onSetStyle("color", v)} />
      <ColorRow label="Background" computed={selection.computed.backgroundColor} onChange={(v) => onSetStyle("background-color", v)} />

      <SectionHeader>Typography</SectionHeader>
      <TextStyleRow label="Font size"   value={selection.computed.fontSize}   onChange={(v) => onSetStyle("font-size", v)}   suggestions={["12px","14px","16px","18px","20px","24px","30px","36px","48px"]} />
      <TextStyleRow label="Font weight" value={selection.computed.fontWeight} onChange={(v) => onSetStyle("font-weight", v)} suggestions={["300","400","500","600","700","800"]} />

      <SectionHeader>Layout</SectionHeader>
      <TextStyleRow label="Display"      value={selection.computed.display}      onChange={(v) => onSetStyle("display", v)}      suggestions={["block","inline","inline-block","flex","inline-flex","grid","none"]} />
      <TextStyleRow label="Padding"      value={selection.computed.padding}      onChange={(v) => onSetStyle("padding", v)} />
      <TextStyleRow label="Margin"       value={selection.computed.margin}       onChange={(v) => onSetStyle("margin", v)} />
      <TextStyleRow label="Width"        value={selection.computed.width}        onChange={(v) => onSetStyle("width", v)} />
      <TextStyleRow label="Height"       value={selection.computed.height}       onChange={(v) => onSetStyle("height", v)} />
      <TextStyleRow label="Border radius" value={selection.computed.borderRadius} onChange={(v) => onSetStyle("border-radius", v)} />

      {selection.attrs.length > 0 && (
        <>
          <SectionHeader>Attributes</SectionHeader>
          <ul className="space-y-1">
            {selection.attrs.map((a) => (
              <li key={a.name} className="flex items-center gap-2 truncate text-[11px] text-neutral-600">
                <span className="font-mono text-neutral-400">{a.name}</span>
                <span className="truncate">{a.value}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 px-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">{label}</div>
      {children}
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-neutral-200 pt-3 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">{children}</div>;
}

function ColorRow({ label, computed, onChange }: { label: string; computed: string; onChange: (v: string) => void }) {
  const hex = useMemo(() => rgbToHex(computed), [computed]);
  const [draft, setDraft] = useState(hex);
  useEffect(() => { setDraft(hex); }, [hex]);
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11px] text-neutral-600">{label}</span>
      <div className="flex items-center gap-1.5">
        <input
          type="color"
          value={isValidHex(draft) ? draft : "#000000"}
          onChange={(e) => { setDraft(e.target.value); onChange(e.target.value); }}
          className="h-6 w-6 cursor-pointer rounded border border-neutral-200 bg-white p-0"
        />
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => { if (isValidHex(draft)) onChange(draft); }}
          className="h-7 w-24 rounded-md border border-neutral-200 bg-white px-2 font-mono text-[11px] focus:border-neutral-400 focus:outline-none"
        />
      </div>
    </div>
  );
}

function TextStyleRow({
  label, value, onChange, suggestions,
}: {
  label: string; value: string; onChange: (v: string) => void; suggestions?: string[];
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => { setDraft(value); }, [value]);
  const listId = useMemo(() => `dl-${label.replace(/\s+/g, "-").toLowerCase()}`, [label]);
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11px] text-neutral-600">{label}</span>
      <input
        type="text"
        value={draft}
        list={suggestions ? listId : undefined}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => { if (draft !== value) onChange(draft); }}
        onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }}
        className="h-7 w-36 rounded-md border border-neutral-200 bg-white px-2 font-mono text-[11px] focus:border-neutral-400 focus:outline-none"
      />
      {suggestions && (
        <datalist id={listId}>
          {suggestions.map((s) => <option key={s} value={s} />)}
        </datalist>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Color helpers — convert computed style strings to/from #rrggbb.
// ─────────────────────────────────────────────────────────────────────
function rgbToHex(input: string): string {
  if (!input) return "#000000";
  if (input.startsWith("#")) return input.length === 7 ? input : "#000000";
  const m = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!m) return "#000000";
  const r = Math.max(0, Math.min(255, parseInt(m[1], 10)));
  const g = Math.max(0, Math.min(255, parseInt(m[2], 10)));
  const b = Math.max(0, Math.min(255, parseInt(m[3], 10)));
  return "#" + [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("");
}

function isValidHex(s: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(s);
}

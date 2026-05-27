"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import {
  X,
  RefreshCw,
  Copy,
  Share2,
  ExternalLink,
  Heart,
  Eye,
  Code2,
  Play,
  Check,
  Loader2,
} from "lucide-react";
import { Component } from "@/data/motion/options";
import { getVideoSrc, getPosterSrc } from "@/lib/motion/components";

// ─── Client-side cache (persists for the session) ─────────────
// Cleared on sign-out so previously-fetched pro code isn't served after logout.
const codeCache = new Map<string, { html: string; raw: string }>();

type View = "preview" | "code";
type CodeState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; html: string; raw: string }
  | { status: "error"; message: string };

type Props = {
  component: Component | null;
  onClose: () => void;
};

export function ComponentModal({ component, onClose }: Props) {
  const { isSignedIn } = useAuth();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [view, setView] = useState<View>("preview");
  const [codeState, setCodeState] = useState<CodeState>({ status: "idle" });
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const videoSrc = component ? getVideoSrc(component) : "";
  const posterSrc = component ? getPosterSrc(component) : undefined;

  const playPreviewVideo = useCallback(() => {
    const v = videoRef.current;
    if (!v || !videoSrc) return;
    v.play().catch(() => {});
  }, [videoSrc]);

  // Drop the in-memory code cache the moment the user is signed out so a previously
  // fetched pro response can't be re-displayed without going through the server gate.
  useEffect(() => {
    if (isSignedIn === false) codeCache.clear();
  }, [isSignedIn]);

  // reset when a new component opens
  useEffect(() => {
    if (!component) return;
    setView("preview");
    setVideoReady(false);
    setCodeState({ status: "idle" });
  }, [component?.id]);

  // play/pause video on view toggle
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (view === "preview") playPreviewVideo();
    else v.pause();
  }, [view, playPreviewVideo]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // scroll lock
  useEffect(() => {
    document.body.style.overflow = component ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [component]);

  // fetch code from API when switching to code view
  const fetchCode = useCallback(async (id: string) => {
    const cached = codeCache.get(id);
    if (cached) { setCodeState({ status: "ready", ...cached }); return; }

    setCodeState({ status: "loading" });
    try {
      // `cache: 'no-store'` bypasses the browser HTTP cache so the server's
      // auth/premium gate runs on every request. Without it, a response
      // fetched while signed-in (Cache-Control: private, max-age=...) is
      // replayed from disk cache after logout without contacting the server.
      const res = await fetch(`/api/motion/code/${id}`, { cache: "no-store" });
      if (res.status === 401) {
        setCodeState({ status: "error", message: "Sign in to view code." });
        return;
      }
      if (res.status === 403) {
        setCodeState({ status: "error", message: "PRO subscription required to view this component's code." });
        return;
      }
      if (res.status === 404) {
        setCodeState({ status: "error", message: "Code hasn't been uploaded yet." });
        return;
      }
      if (!res.ok) throw new Error("Request failed");

      const data: { html: string; raw: string } = await res.json();
      codeCache.set(id, data);
      setCodeState({ status: "ready", ...data });
    } catch {
      setCodeState({ status: "error", message: "Failed to load code. Try again." });
    }
  }, []);

  const handleViewCode = () => {
    setView("code");
    if (component && codeState.status === "idle") {
      fetchCode(component.id);
    }
  };

  const handleCopy = () => { setCopied(true); setTimeout(() => setCopied(false), 1500); };

  const handleCodeCopy = () => {
    if (codeState.status !== "ready") return;
    navigator.clipboard.writeText(codeState.raw).catch(() => {});
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 1500);
  };

  return (
    <AnimatePresence>
      {component && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <motion.div
              className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl pointer-events-auto"
              style={{ maxHeight: "calc(100vh - 48px)", minHeight: "82vh" }}
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
            >
              {/* ── Title bar ──────────────────────────────────── */}
              <div className="flex shrink-0 items-center gap-2.5 border-b border-neutral-100 bg-white px-4 py-3">
                <div
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                  style={{ backgroundColor: component.avatarBg }}
                >
                  {component.avatar}
                </div>

                <span className="flex-1 truncate text-[13px] font-semibold text-neutral-900">
                  {component.title}
                </span>

                <span className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500">
                  {component.category}
                </span>

                {/* Preview / Code toggle */}
                <div className="flex items-center rounded-lg border border-neutral-200 p-0.5">
                  <button
                    onClick={() => setView("preview")}
                    className={`flex h-6 items-center gap-1.5 rounded-md px-2.5 text-[11px] font-medium transition-colors ${
                      view === "preview"
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    <Play className="h-2.5 w-2.5" />
                    Preview
                  </button>
                  <button
                    onClick={handleViewCode}
                    className={`flex h-6 items-center gap-1.5 rounded-md px-2.5 text-[11px] font-medium transition-colors ${
                      view === "code"
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    <Code2 className="h-2.5 w-2.5" />
                    Code
                  </button>
                </div>

                {/* Icon actions */}
                <div className="flex items-center gap-0.5">
                  <button className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
                  >
                    {copied
                      ? <span className="text-[10px] font-semibold text-green-500">✓</span>
                      : <Copy className="h-3.5 w-3.5" />}
                  </button>
                  <button className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700">
                    <Share2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <button className="flex h-7 items-center gap-1.5 rounded-lg bg-neutral-900 px-3 text-[12px] font-medium text-white transition-colors hover:bg-neutral-700">
                  <ExternalLink className="h-3 w-3" />
                  Open
                </button>

                <button
                  onClick={onClose}
                  className="ml-0.5 flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* ── Body ───────────────────────────────────────── */}
              <div className="relative flex flex-1 overflow-hidden bg-[#0d0d0d]">
                <AnimatePresence mode="wait" initial={false}>
                  {view === "preview" ? (
                    <motion.div
                      key="preview"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="relative inline-block max-h-[70vh] max-w-[min(55vw,960px)]">
                        {posterSrc && (
                          <img
                            src={posterSrc}
                            alt={component.title}
                            className={`block max-h-[70vh] max-w-[min(55vw,960px)] rounded-xl object-contain transition-opacity duration-300 ${
                              videoReady ? "pointer-events-none opacity-0" : "opacity-100"
                            }`}
                          />
                        )}
                        <video
                          ref={videoRef}
                          key={component.id}
                          src={videoSrc}
                          poster={posterSrc}
                          muted
                          loop
                          playsInline
                          autoPlay
                          preload="auto"
                          onLoadedData={() => {
                            setVideoReady(true);
                            playPreviewVideo();
                          }}
                          onCanPlay={playPreviewVideo}
                          className={`absolute inset-0 h-full w-full rounded-xl object-contain transition-opacity duration-300 ${
                            videoReady ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                      {component.isPro && (
                        <span className="absolute left-4 top-4 rounded-md bg-white/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white backdrop-blur-sm">
                          PRO
                        </span>
                      )}
                      <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-white/10 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm">
                        <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{component.likes}</span>
                        <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{component.views}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code"
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {codeState.status === "loading" && (
                        <div className="flex h-full items-center justify-center">
                          <Loader2 className="h-6 w-6 animate-spin text-white/30" />
                        </div>
                      )}

                      {codeState.status === "error" && (
                        <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center">
                          <p className="text-sm text-white/50">{codeState.message}</p>
                        </div>
                      )}

                      {codeState.status === "ready" && (
                        <div className="relative h-full w-full overflow-auto">
                          {/* Copy button */}
                          <button
                            onClick={handleCodeCopy}
                            className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                          >
                            {codeCopied
                              ? <><Check className="h-3 w-3 text-green-400" /> Copied!</>
                              : <><Copy className="h-3 w-3" /> Copy</>}
                          </button>

                          {/* Shiki highlighted HTML */}
                          <div
                            className="shiki-wrapper h-full overflow-auto px-2 py-5 text-xs leading-6"
                            dangerouslySetInnerHTML={{ __html: codeState.html }}
                          />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import {
  ArrowUp,
  ChevronDown,
  ImagePlus,
  Loader2,
  Search,
  Sparkles,
  X,
  Settings2,
  FileText,
  Copy,
  Check,
} from "lucide-react";

const MAX_IMAGES = 6;
const MAX_IMAGE_BYTES = 4 * 1024 * 1024; // 4 MB per image

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  designSystem?: string | null;
  images?: string[];
};

type UploadedImage = {
  name: string;
  dataUrl: string;
  size: number;
};

export default function DesignChatPage() {
  const { isLoaded, isSignedIn } = useAuth();

  const [files, setFiles] = useState<string[]>([]);
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [filesError, setFilesError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [input, setInput] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [responseStyle, setResponseStyle] = useState<"concise" | "detailed" | "code-only">("detailed");
  const [optionsOpen, setOptionsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const responseAnchorRef = useRef<HTMLDivElement>(null);

  // ─── Load list of design-system markdown files ────────────────────
  useEffect(() => {
    if (!isSignedIn) return;
    let cancelled = false;
    fetch("/api/design-chat/files")
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (cancelled) return;
        if (r.ok && data.success && Array.isArray(data.files)) {
          setFiles(data.files);
          setFilesError(null);
        } else if (r.status === 401) {
          setFilesError("Please sign in to use Design Chat.");
        } else {
          setFilesError(data?.error || "Failed to load design systems.");
        }
      })
      .catch(() => {
        if (!cancelled) setFilesError("Failed to load design systems.");
      })
      .finally(() => {
        if (!cancelled) setFilesLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [isSignedIn]);

  // ─── Close popovers when clicking outside ─────────────────────────
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
        setOptionsOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  // ─── Autosize textarea ────────────────────────────────────────────
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 360)}px`;
  }, [input]);

  // ─── Filtered dropdown list ───────────────────────────────────────
  const filteredFiles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return files;
    return files.filter((f) => f.toLowerCase().includes(q));
  }, [files, searchQuery]);

  // ─── Select a design system → load its markdown into the input ───
  const handleSelectFile = useCallback(async (slug: string) => {
    setSelectedFile(slug);
    setDropdownOpen(false);
    setSearchQuery("");
    try {
      const res = await fetch(`/files/${encodeURIComponent(slug)}.md`);
      if (res.ok) {
        const text = await res.text();
        setInput(text);
      }
    } catch {
      // Non-fatal — the server can still read the file by slug.
    }
  }, []);

  const handleClearSelected = () => {
    setSelectedFile(null);
  };

  // ─── Image upload (base64 data URLs) ──────────────────────────────
  const handleImagePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files;
    if (!list) return;
    const remaining = MAX_IMAGES - images.length;
    const picked = Array.from(list).slice(0, Math.max(0, remaining));
    for (const file of picked) {
      if (!file.type.startsWith("image/")) continue;
      if (file.size > MAX_IMAGE_BYTES) continue;
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = String(reader.result || "");
        if (!dataUrl) return;
        setImages((prev) => [...prev, { name: file.name, dataUrl, size: file.size }]);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  };

  // ─── Send ────────────────────────────────────────────────────────
  const handleSend = async () => {
    if (loading) return;
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `m-${Date.now()}-u`,
      role: "user",
      text: trimmed,
      designSystem: selectedFile,
      images: images.map((i) => i.dataUrl),
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // Clear composer
    const sentImages = images.map((i) => i.dataUrl);
    const sentSlug = selectedFile;
    const styleHint =
      responseStyle === "concise"
        ? "\n\n(Respond concisely — short, focused answer.)"
        : responseStyle === "code-only"
          ? "\n\n(Return only code, no explanation.)"
          : "";

    setInput("");
    setImages([]);

    try {
      const res = await fetch("/api/design-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          designSystemSlug: sentSlug,
          userInput: trimmed + styleHint,
          imageUrls: sentImages,
        }),
      });

      const data = await res.json().catch(() => ({}));

      let replyText: string;
      if (res.ok && data.success && typeof data.result === "string") {
        replyText = data.result;
      } else if (res.status === 401) {
        replyText = "You need to be signed in to use Design Chat.";
      } else if (res.status === 402) {
        replyText =
          data?.error ||
          "Not enough credits. Purchase credits to continue using Design Chat.";
      } else {
        replyText = `Error: ${data?.error || "request failed"}`;
      }

      setMessages((prev) => [
        ...prev,
        { id: `m-${Date.now()}-a`, role: "assistant", text: replyText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `m-${Date.now()}-a`,
          role: "assistant",
          text: "Failed to reach the server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      // Scroll the freshly added response into view
      requestAnimationFrame(() => {
        responseAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const onTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ─── Render ──────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">design.chat</span>
            <span className="ml-2 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
              2 credits / message
            </span>
          </div>

          <div className="flex shrink-0 items-center">
            {!isLoaded ? (
              <span className="h-9 w-20 animate-pulse rounded-lg bg-neutral-200" />
            ) : isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
                  Sign in
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[860px] px-6 pb-24 pt-10">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Chat with a design system.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">
            Pick a saved design system, drop in screenshots, and ask anything —
            from token usage to full component code.
          </p>
        </section>

        {/* ── Auth states ─────────────────────────────────────── */}
        {isLoaded && !isSignedIn && (
          <div className="mb-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
            <p className="mb-3 text-sm text-neutral-700">
              Sign in to use Design Chat. Each message uses credits from your balance.
            </p>
            <SignInButton mode="modal">
              <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
                Sign in
              </button>
            </SignInButton>
          </div>
        )}

        {isLoaded && isSignedIn && filesError && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center text-sm text-amber-900">
            {filesError}
          </div>
        )}

        {/* ── Composer ─────────────────────────────────────────── */}
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
          {/* Top action row */}
          <div className="flex flex-wrap items-center gap-2 border-b border-neutral-100 px-3 py-2.5">
            {/* Design system dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                disabled={!isSignedIn || !!filesError}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-neutral-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FileText className="h-3.5 w-3.5 text-neutral-500" />
                {selectedFile ? (
                  <span className="max-w-[180px] truncate">{selectedFile}</span>
                ) : (
                  <span className="text-neutral-500">Design system</span>
                )}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full z-30 mt-2 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
                  <div className="relative border-b border-neutral-100">
                    <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search design systems…"
                      className="w-full bg-transparent px-9 py-2.5 text-xs placeholder:text-neutral-400 focus:outline-none"
                    />
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1">
                    {!filesLoaded && (
                      <div className="px-3 py-4 text-center text-xs text-neutral-400">Loading…</div>
                    )}
                    {filesLoaded && filteredFiles.length === 0 && (
                      <div className="px-3 py-4 text-center text-xs text-neutral-400">
                        No matches.
                      </div>
                    )}
                    {filteredFiles.map((slug) => (
                      <button
                        key={slug}
                        onClick={() => handleSelectFile(slug)}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-neutral-50 ${
                          selectedFile === slug ? "bg-neutral-50 font-medium" : ""
                        }`}
                      >
                        <span className="truncate">{slug}</span>
                        {selectedFile === slug && <Check className="h-3.5 w-3.5 text-neutral-500" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Selected chip with clear */}
            {selectedFile && (
              <button
                onClick={handleClearSelected}
                title="Clear loaded design system"
                className="group flex items-center gap-1 rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-700"
              >
                <span className="max-w-[140px] truncate">{selectedFile}</span>
                <X className="h-3 w-3 opacity-70 group-hover:opacity-100" />
              </button>
            )}

            <div className="ml-auto flex items-center gap-1.5">
              {/* Image upload */}
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={!isSignedIn || images.length >= MAX_IMAGES}
                title={`Attach image (up to ${MAX_IMAGES})`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ImagePlus className="h-4 w-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImagePick}
                className="hidden"
              />

              {/* Options popover */}
              <div className="relative" ref={optionsRef}>
                <button
                  onClick={() => setOptionsOpen((v) => !v)}
                  disabled={!isSignedIn}
                  title="Response options"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Settings2 className="h-4 w-4" />
                </button>
                {optionsOpen && (
                  <div className="absolute right-0 top-full z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
                    <div className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Response style
                    </div>
                    {([
                      { id: "concise", label: "Concise" },
                      { id: "detailed", label: "Detailed (default)" },
                      { id: "code-only", label: "Code only" },
                    ] as const).map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setResponseStyle(opt.id);
                          setOptionsOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-neutral-50 ${
                          responseStyle === opt.id ? "bg-neutral-50 font-medium" : ""
                        }`}
                      >
                        {opt.label}
                        {responseStyle === opt.id && <Check className="h-3.5 w-3.5 text-neutral-500" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image previews */}
          {images.length > 0 && (
            <div className="flex flex-wrap gap-2 border-b border-neutral-100 px-3 py-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="group relative h-16 w-16 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50"
                >
                  <img
                    src={img.dataUrl}
                    alt={img.name}
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-2.5 w-2.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Textarea */}
          <div className="px-4 py-3">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onTextareaKeyDown}
              placeholder={
                isSignedIn
                  ? "Ask anything about a design system, paste tokens, attach a screenshot…"
                  : "Sign in to start a Design Chat conversation."
              }
              disabled={!isSignedIn || !!filesError}
              rows={3}
              className="block w-full resize-none bg-transparent text-sm leading-6 placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {/* Bottom row: hint + send */}
          <div className="flex items-center justify-between border-t border-neutral-100 px-3 py-2">
            <span className="px-1 text-[11px] text-neutral-400">
              Enter to send · Shift+Enter for newline
            </span>
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading || !isSignedIn || !!filesError}
              className="flex h-9 items-center gap-1.5 rounded-full bg-neutral-900 px-4 text-xs font-medium text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking…
                </>
              ) : (
                <>
                  Send
                  <ArrowUp className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Response area ───────────────────────────────────── */}
        <div ref={responseAnchorRef} className="mt-10 flex flex-col gap-6">
          {messages.length === 0 && (
            <div className="rounded-2xl border border-dashed border-neutral-200 px-6 py-10 text-center text-sm text-neutral-400">
              Responses will appear here.
            </div>
          )}

          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Message bubble
// ─────────────────────────────────────────────────────────────────────
function MessageBubble({ message }: { message: ChatMessage }) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const onCopy = () => {
    navigator.clipboard.writeText(message.text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-neutral-900 text-white"
            : "border border-neutral-200 bg-neutral-50 text-neutral-900"
        }`}
      >
        {message.designSystem && (
          <div
            className={`mb-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${
              isUser ? "bg-white/15 text-white/80" : "bg-neutral-900 text-white"
            }`}
          >
            <FileText className="h-2.5 w-2.5" />
            {message.designSystem}
          </div>
        )}

        {message.images && message.images.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {message.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-20 w-20 rounded-md border border-white/20 object-cover"
              />
            ))}
          </div>
        )}

        <pre className={`whitespace-pre-wrap break-words font-sans text-sm leading-6`}>
          {message.text}
        </pre>

        {!isUser && (
          <div className="mt-2 flex justify-end">
            <button
              onClick={onCopy}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-[10px] text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-green-600" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  Copy
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

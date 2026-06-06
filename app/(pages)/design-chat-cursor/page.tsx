"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import {
  ArrowUp,
  Check,
  ChevronDown,
  Code2,
  FileText,
  ImagePlus,
  Loader2,
  Paperclip,
  Search,
  X,
} from "lucide-react";
import { DesignChatPreviewPane } from "./_components/DesignChatPreviewPane";
import {
  DESIGN_CHAT_SYSTEM_PREFIX,
  extractPreviewPayload,
  PREVIEW_HTML_FALLBACK,
  PREVIEW_LOADING_HTML,
  type DesignChatPreviewPayload,
} from "./extractPreviewHtml";

const CHAT_WIDTH_CLASS = "w-full max-w-[860px]";
const SIDEBAR_WIDTH_CLASS = "w-[320px]";

const MAX_IMAGES = 5;
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

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
  mimeType: string;
  size: number;
};

function toBase64Payload(image: UploadedImage) {
  const [, base64 = ""] = image.dataUrl.split(",");
  return {
    data: base64,
    mimeType: image.mimeType,
  };
}

export default function DesignChatCursorPage() {
  const { isLoaded, isSignedIn } = useAuth();

  const [images, setImages] = useState<UploadedImage[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [prompt, setPrompt] = useState("");
  const [agentId, setAgentId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [preview, setPreview] = useState<DesignChatPreviewPayload | null>(null);

  const [files, setFiles] = useState<string[]>([]);
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [filesError, setFilesError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  const filteredFiles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return files;
    return files.filter((f) => f.toLowerCase().includes(q));
  }, [files, searchQuery]);

  const handleSelectFile = useCallback((slug: string) => {
    setSelectedFile(slug);
    setDropdownOpen(false);
    setSearchQuery("");
  }, []);

  const handleClearSelected = () => {
    setSelectedFile(null);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageSelect = async (filesList: FileList | null) => {
    if (!filesList?.length) return;

    const remaining = MAX_IMAGES - images.length;
    if (remaining <= 0) {
      setError(`You can attach up to ${MAX_IMAGES} images.`);
      return;
    }

    const next: UploadedImage[] = [];

    for (const file of Array.from(filesList).slice(0, remaining)) {
      if (!file.type.startsWith("image/")) continue;
      if (file.size > MAX_IMAGE_BYTES) {
        setError(`"${file.name}" exceeds 4 MB.`);
        continue;
      }

      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result ?? ""));
        reader.onerror = () => reject(new Error("Failed to read image"));
        reader.readAsDataURL(file);
      });

      next.push({
        name: file.name,
        dataUrl,
        mimeType: file.type,
        size: file.size,
      });
    }

    if (next.length) {
      setImages((prev) => [...prev, ...next].slice(0, MAX_IMAGES));
      setError(null);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    const message = prompt.trim();
    if (!message || loading) return;

    const userImages = images.map((img) => img.dataUrl);
    const sentSlug = selectedFile;
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: message,
      designSystem: sentSlug,
      ...(userImages.length ? { images: userImages } : {}),
    };

    setHasStarted(true);
    if (!preview) {
      setPreview(PREVIEW_LOADING_HTML);
    }
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setImages([]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/design-chat-cursor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          agentId: agentId ?? undefined,
          images: images.map(toBase64Payload),
          systemPrefix: DESIGN_CHAT_SYSTEM_PREFIX,
          designSystemSlug: sentSlug ?? undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        if (res.status === 402) {
          throw new Error(
            data.error ||
              "Not enough credits. Purchase credits to continue using Design Chat."
          );
        }
        throw new Error(data.error || "Request failed");
      }

      if (typeof data.agentId === "string") {
        setAgentId(data.agentId);
      }

      const assistantText = data.result || "(No response text)";
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: assistantText,
        },
      ]);

      setPreview(extractPreviewPayload(assistantText) ?? PREVIEW_HTML_FALLBACK);
    } catch (err) {
      const messageText = err instanceof Error ? err.message : "Something went wrong";
      setError(messageText);
    } finally {
      setLoading(false);
      setTimeout(scrollToBottom, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  };

  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };

  const composerDisabled = !isLoaded || !isSignedIn || !!filesError;

  const composerProps = {
    images,
    loading,
    fileInputRef,
    onInputChange: handlePromptChange,
    onKeyDown: handleKeyDown,
    onSend: () => void handleSend(),
    onImageSelect: (filesList: FileList | null) => void handleImageSelect(filesList),
    onRemoveImage: removeImage,
    disabled: composerDisabled,
    files,
    filesLoaded,
    filesError,
    selectedFile,
    dropdownOpen,
    searchQuery,
    filteredFiles,
    dropdownRef,
    onToggleDropdown: () => setDropdownOpen((v) => !v),
    onSearchQueryChange: setSearchQuery,
    onSelectFile: handleSelectFile,
    onClearSelected: handleClearSelected,
    prompt,
  };

  if (!hasStarted) {
    return (
      <div className="flex h-screen items-center justify-center px-6 py-8">
        <div className={CHAT_WIDTH_CLASS}>
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              Design Chat (Cursor)
            </h1>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Describe a UI component to generate and preview it with Tailwind.
            </p>
          </div>

          {isLoaded && !isSignedIn && (
            <p className="mb-3 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Sign in to pick a design system and attach images.
            </p>
          )}

          {isLoaded && isSignedIn && filesError && (
            <p className="mb-3 text-center text-sm text-amber-800 dark:text-amber-200">
              {filesError}
            </p>
          )}

          {error && (
            <p className="mb-3 text-center text-sm text-red-600 dark:text-red-400">{error}</p>
          )}

          <ChatComposer {...composerProps} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-neutral-950">
      {/* Left — chat */}
      <aside
        className={`flex ${SIDEBAR_WIDTH_CLASS} shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-neutral-800 dark:bg-neutral-950`}
      >
        <div className="shrink-0 border-b border-zinc-200 px-4 py-3 dark:border-neutral-800">
          <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Design Chat
          </h1>
          <p className="mt-0.5 text-[11px] text-neutral-500 dark:text-neutral-400">
            Cursor Composer 2.5
          </p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 min-h-0">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`rounded-lg px-3 py-2 text-xs ${
                msg.role === "user"
                  ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                  : "bg-blue-50 text-neutral-900 dark:bg-blue-950/40 dark:text-neutral-100"
              }`}
            >
              {msg.designSystem ? (
                <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white dark:bg-neutral-100 dark:text-neutral-900">
                  <FileText className="h-2.5 w-2.5" />
                  {msg.designSystem}
                </div>
              ) : null}
              {msg.images?.length ? (
                <div className="mb-2 flex flex-wrap gap-2">
                  {msg.images.map((src, i) => (
                    <img
                      key={`${msg.id}-img-${i}`}
                      src={src}
                      alt=""
                      className="h-12 w-12 rounded-md border border-neutral-200 object-cover dark:border-neutral-700"
                    />
                  ))}
                </div>
              ) : null}
              <pre className="max-h-40 overflow-y-auto whitespace-pre-wrap font-sans leading-relaxed">
                {msg.text}
              </pre>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Generating…
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {error && (
          <p className="shrink-0 px-4 pb-1 text-xs text-red-600 dark:text-red-400">{error}</p>
        )}

        <div className="shrink-0 border-t border-zinc-200 p-4 dark:border-neutral-800">
          <ChatComposer {...composerProps} compact />
        </div>
      </aside>

      {/* Center + right — preview & inspector (inspect opens right panel) */}
      <main className="flex flex-1 min-w-0 min-h-0">
        <DesignChatPreviewPane
          preview={preview ?? PREVIEW_LOADING_HTML}
          onPreviewChange={setPreview}
        />
      </main>
    </div>
  );
}

function ChatComposer({
  images,
  loading,
  fileInputRef,
  onInputChange,
  onKeyDown,
  onSend,
  onImageSelect,
  onRemoveImage,
  compact,
  disabled,
  filesLoaded,
  selectedFile,
  dropdownOpen,
  searchQuery,
  filteredFiles,
  dropdownRef,
  onToggleDropdown,
  onSearchQueryChange,
  onSelectFile,
  onClearSelected,
  prompt,
}: {
  images: UploadedImage[];
  loading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onInputChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  onImageSelect: (files: FileList | null) => void;
  onRemoveImage: (index: number) => void;
  compact?: boolean;
  disabled?: boolean;
  files: string[];
  filesLoaded: boolean;
  filesError: string | null;
  selectedFile: string | null;
  dropdownOpen: boolean;
  searchQuery: string;
  filteredFiles: string[];
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onToggleDropdown: () => void;
  onSearchQueryChange: (q: string) => void;
  onSelectFile: (slug: string) => void;
  onClearSelected: () => void;
  prompt: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, compact ? 120 : 280)}px`;
  }, [prompt, compact]);

  const placeholder = disabled
    ? "Sign in to start a Design Chat conversation."
    : "Describe the component you want…";

  const imageInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      multiple
      onChange={(e) => {
        onImageSelect(e.target.files);
        e.target.value = "";
      }}
      className="hidden"
    />
  );

  const imagePreviews =
    images.length > 0 ? (
      <div className={`flex flex-wrap gap-2 ${compact ? "mb-2" : "mb-3"}`}>
        {images.map((img, index) => (
          <div
            key={`${img.name}-${index}`}
            className="group relative h-14 w-14 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-700"
          >
            <img src={img.dataUrl} alt={img.name} className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => onRemoveImage(index)}
              className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100"
              aria-label={`Remove ${img.name}`}
            >
              <X className="h-2.5 w-2.5" />
            </button>
          </div>
        ))}
      </div>
    ) : null;

  const designSystemDropdown = (
    <DesignSystemPicker
      compact={compact}
      disabled={disabled}
      selectedFile={selectedFile}
      dropdownOpen={dropdownOpen}
      searchQuery={searchQuery}
      filteredFiles={filteredFiles}
      filesLoaded={filesLoaded}
      dropdownRef={dropdownRef}
      onToggleDropdown={onToggleDropdown}
      onSearchQueryChange={onSearchQueryChange}
      onSelectFile={onSelectFile}
      onClearSelected={onClearSelected}
    />
  );

  const sendButton = (
    <button
      type="button"
      onClick={onSend}
      disabled={!prompt.trim() || loading || disabled}
      title="Send"
      className={`flex shrink-0 items-center justify-center rounded-full bg-zinc-900 font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 ${
        compact ? "h-8 w-8" : "h-9 gap-1.5 px-4 text-xs"
      }`}
    >
      {loading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : compact ? (
        <ArrowUp className="h-3.5 w-3.5" />
      ) : (
        <>
          Send
          <ArrowUp className="h-3.5 w-3.5" />
        </>
      )}
    </button>
  );

  if (compact) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        {imagePreviews}
        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled || loading}
          rows={2}
          className="block w-full resize-none bg-transparent px-1 py-1 text-sm leading-6 text-neutral-900 placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:text-neutral-100"
        />
        <div className="mt-2 flex items-center justify-between gap-1">
          <div className="flex items-center gap-0.5">
            <ComposerIconButton
              icon={Paperclip}
              label="Attach"
              disabled={disabled || loading}
              onClick={() => fileInputRef.current?.click()}
            />
            <ComposerIconButton
              icon={ImagePlus}
              label="Image"
              disabled={disabled || loading || images.length >= MAX_IMAGES}
              onClick={() => fileInputRef.current?.click()}
            />
            <ComposerIconButton icon={Code2} label="Code" disabled={disabled} />
            {designSystemDropdown}
          </div>
          {sendButton}
        </div>
        {imageInput}
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-zinc-200 bg-white p-4 shadow-lg shadow-zinc-200/60 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none">
      {imagePreviews}
      <div className="rounded-2xl border border-zinc-100 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950">
        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled || loading}
          rows={4}
          className="block min-h-[120px] w-full resize-none bg-transparent text-sm leading-7 text-neutral-900 placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 dark:text-neutral-100"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5">
          <ComposerIconButton
            icon={Paperclip}
            label="Attach"
            disabled={disabled || loading}
            onClick={() => fileInputRef.current?.click()}
          />
          <ComposerIconButton
            icon={ImagePlus}
            label="Image"
            disabled={disabled || loading || images.length >= MAX_IMAGES}
            onClick={() => fileInputRef.current?.click()}
          />
          <ComposerIconButton icon={Code2} label="Code" disabled={disabled} />
        </div>
        {designSystemDropdown}
        <div className="hidden h-4 w-px bg-zinc-200 sm:block" />
        <p className="hidden flex-1 text-[11px] text-zinc-400 sm:block">
          Enter to send · Shift + Enter for newline
        </p>
        {sendButton}
      </div>
      {imageInput}
    </div>
  );
}

function ComposerIconButton({
  icon: Icon,
  label,
  disabled,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-900"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function DesignSystemPicker({
  compact,
  disabled,
  selectedFile,
  dropdownOpen,
  searchQuery,
  filteredFiles,
  filesLoaded,
  dropdownRef,
  onToggleDropdown,
  onSearchQueryChange,
  onSelectFile,
  onClearSelected,
}: {
  compact?: boolean;
  disabled?: boolean;
  selectedFile: string | null;
  dropdownOpen: boolean;
  searchQuery: string;
  filteredFiles: string[];
  filesLoaded: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onToggleDropdown: () => void;
  onSearchQueryChange: (q: string) => void;
  onSelectFile: (slug: string) => void;
  onClearSelected: () => void;
}) {
  return (
    <div className="relative flex items-center gap-1" ref={dropdownRef}>
      <button
        type="button"
        onClick={onToggleDropdown}
        disabled={disabled}
        title={selectedFile ? `Design system: ${selectedFile}` : "Design system"}
        className={`flex items-center border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900 ${
          compact
            ? `h-9 w-9 justify-center rounded-xl ${selectedFile ? "border-violet-300 bg-violet-50 text-violet-700" : ""}`
            : "gap-2 rounded-xl px-3 py-2 text-xs font-medium"
        }`}
      >
        <FileText className="h-4 w-4 shrink-0 text-zinc-500" />
        {!compact && (
          <>
            <span className="max-w-[140px] truncate">
              {selectedFile ?? "Design system"}
            </span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </>
        )}
      </button>
      {selectedFile && !compact && (
        <button
          type="button"
          onClick={onClearSelected}
          title="Clear design system"
          className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
      {dropdownOpen && (
        <div
          className={`absolute z-30 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-950 ${
            compact ? "bottom-full left-0 mb-2 w-64" : "left-0 top-full mt-2 w-72"
          }`}
        >
          <div className="relative border-b border-neutral-100 dark:border-neutral-800">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              placeholder="Search design systems…"
              className="w-full bg-transparent px-9 py-2.5 text-xs placeholder:text-neutral-400 focus:outline-none dark:text-neutral-100"
            />
          </div>
          <div className="max-h-56 overflow-y-auto py-1">
            {!filesLoaded && (
              <div className="px-3 py-4 text-center text-xs text-neutral-400">Loading…</div>
            )}
            {filesLoaded && filteredFiles.length === 0 && (
              <div className="px-3 py-4 text-center text-xs text-neutral-400">No matches.</div>
            )}
            {filteredFiles.map((slug) => (
              <button
                key={slug}
                type="button"
                onClick={() => onSelectFile(slug)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-neutral-50 dark:hover:bg-neutral-900 ${
                  selectedFile === slug ? "bg-neutral-50 font-medium dark:bg-neutral-900" : ""
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
  );
}

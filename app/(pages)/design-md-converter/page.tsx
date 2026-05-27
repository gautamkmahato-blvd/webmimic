"use client";

import { useCallback, useRef, useState } from "react";
import { Copy, Check, Download, FileUp, Loader2, Sparkles } from "lucide-react";

type ConvertMeta = {
  name: string;
  source?: string;
  colorCount: number;
  typographyCount: number;
  spacingCount: number;
  roundedCount: number;
};

export default function DesignMdConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [meta, setMeta] = useState<ConvertMeta | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const convert = useCallback(async (markdown: string) => {
    setLoading(true);
    setError(null);
    setCopied(false);

    try {
      const res = await fetch("/api/convert-design-md", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markdown }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.error || `Conversion failed (${res.status})`);
      }
      setOutput(data.designMd);
      setMeta(data.meta ?? null);
    } catch (err) {
      setOutput("");
      setMeta(null);
      setError(err instanceof Error ? err.message : "Conversion failed");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.name.toLowerCase().endsWith(".md")) {
        setError("Please upload a .md file");
        return;
      }
      const text = await file.text();
      setInput(text);
      setFileName(file.name);
      await convert(text);
    },
    [convert],
  );

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) void handleFile(file);
    e.target.value = "";
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) void handleFile(file);
  };

  const downloadOutput = () => {
    if (!output) return;
    const base = (meta?.name || fileName || "design-system")
      .replace(/[^a-z0-9-_]+/gi, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();
    const blob = new Blob([output], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${base || "design"}.DESIGN.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            Google DESIGN.md converter
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            UI Inspector → DESIGN.md
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
            Upload a design token export (like{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-zinc-300">supabase.md</code>)
            and convert it to{" "}
            <a
              className="text-emerald-400 underline-offset-2 hover:underline"
              href="https://github.com/google-labs-code/design.md"
              rel="noreferrer"
              target="_blank"
            >
              Google&apos;s DESIGN.md
            </a>{" "}
            format — YAML tokens plus agent-readable prose.
          </p>
        </header>

        <div
          className="mb-6 rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/60 p-8 text-center transition hover:border-emerald-500/40"
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
        >
          <input
            ref={fileInputRef}
            accept=".md,text/markdown"
            className="hidden"
            onChange={onFileChange}
            type="file"
          />
          <FileUp className="mx-auto mb-3 h-8 w-8 text-zinc-500" />
          <p className="text-sm text-zinc-300">
            Drop a <strong>.md</strong> file here, or{" "}
            <button
              className="text-emerald-400 underline-offset-2 hover:underline"
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              browse
            </button>
          </p>
          {fileName ? (
            <p className="mt-2 text-xs text-zinc-500">Loaded: {fileName}</p>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/80">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <h2 className="text-sm font-medium text-zinc-200">Input (UI Inspector export)</h2>
              <button
                className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-zinc-200 transition hover:bg-zinc-700 disabled:opacity-50"
                disabled={loading || !input.trim()}
                onClick={() => void convert(input)}
                type="button"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Converting…
                  </span>
                ) : (
                  "Convert"
                )}
              </button>
            </div>
            <textarea
              className="min-h-[420px] flex-1 resize-y bg-transparent px-4 py-3 font-mono text-xs leading-5 text-zinc-300 outline-none placeholder:text-zinc-600"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste markdown here, or upload a file above…"
              spellCheck={false}
              value={input}
            />
          </section>

          <section className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/80">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div>
                <h2 className="text-sm font-medium text-zinc-200">Output (Google DESIGN.md)</h2>
                {meta ? (
                  <p className="mt-0.5 text-xs text-zinc-500">
                    {meta.name} · {meta.colorCount} colors · {meta.typographyCount} type tokens ·{" "}
                    {meta.spacingCount} spacing · {meta.roundedCount} radii
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center gap-1 rounded-lg border border-zinc-700 px-2.5 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-900 disabled:opacity-40"
                  disabled={!output}
                  onClick={() => void copyOutput()}
                  type="button"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs text-white transition hover:bg-emerald-500 disabled:opacity-40"
                  disabled={!output}
                  onClick={downloadOutput}
                  type="button"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </button>
              </div>
            </div>
            <pre className="min-h-[420px] flex-1 overflow-auto whitespace-pre-wrap px-4 py-3 font-mono text-xs leading-5 text-emerald-100/90">
              {output || (error ? "" : "Converted DESIGN.md will appear here…")}
            </pre>
          </section>
        </div>

        {error ? (
          <p className="mt-4 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <footer className="mt-8 text-xs text-zinc-600">
          Spec reference:{" "}
          <a
            className="text-zinc-400 hover:text-zinc-300"
            href="https://stitch.withgoogle.com/docs/design-md/overview"
            rel="noreferrer"
            target="_blank"
          >
            Stitch DESIGN.md overview
          </a>
          {" · "}
          <a
            className="text-zinc-400 hover:text-zinc-300"
            href="https://github.com/google-labs-code/design.md"
            rel="noreferrer"
            target="_blank"
          >
            google-labs-code/design.md
          </a>
        </footer>
      </div>
    </div>
  );
}

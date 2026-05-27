"use client";

import { useState } from "react";
import { PreviewEditor } from "./_components/PreviewEditor";

const SAMPLE_HTML = `<div class="min-h-screen bg-[#0e0d0b] flex items-center justify-center p-12">
  <div class="max-w-3xl">
    <p class="text-[#c97b3c] text-xs uppercase tracking-[0.3em] font-mono mb-6">
      Click me to inspect
    </p>
    <h1 class="text-white text-6xl font-bold leading-[0.95] tracking-tight">
      It <span class="italic text-[#c97b3c]">works</span> end-to-end.
    </h1>
    <p class="text-white/60 mt-6 text-lg max-w-xl leading-relaxed">
      Toggle Inspect mode above, hover over anything to see a blue outline,
      click to select. The right panel shows every Tailwind class grouped
      by category — click any chip to remove it, or type new ones at the bottom.
    </p>
    <div class="mt-10 flex gap-4">
      <button class="bg-[#c97b3c] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90">
        Primary action
      </button>
      <button class="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10">
        Secondary
      </button>
    </div>
  </div>
</div>`;

export default function PreviewEditorDemo() {
  const [html, setHtml] = useState(SAMPLE_HTML);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Visual Editor — Demo</h1>
            <p className="text-sm text-zinc-600 mt-1">
              Click <span className="font-mono bg-zinc-200 px-1 rounded">Inspect</span> in the toolbar,
              then click any element in the preview to edit it.
            </p>
          </div>
          <button
            onClick={() => setShowCode(!showCode)}
            className="bg-zinc-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-zinc-700"
          >
            {showCode ? "Hide" : "Show"} HTML output
          </button>
        </header>

        <PreviewEditor
          html={html}
          onHtmlChange={setHtml}
          minHeight={700}
          fonts={[
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          ]}
        />

        {showCode && (
          <div className="mt-4 bg-zinc-900 text-zinc-100 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-zinc-700 text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
              <span>Current HTML (synced from iframe)</span>
              <button
                onClick={() => navigator.clipboard.writeText(html)}
                className="text-zinc-400 hover:text-white"
              >
                Copy
              </button>
            </div>
            <pre className="p-4 text-[11px] overflow-auto max-h-[400px] font-mono leading-relaxed">
              {html}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
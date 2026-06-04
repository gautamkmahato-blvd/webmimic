'use client';

import { useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

type ModelKey = 'qwen' | 'kimi' | 'gemini' | 'zlm' | 'grok' | 'grok4' | 'minimax';

type ModelResult = {
  status: boolean;
  model: string;
  content?: string;
  message?: string;
};

type StoredModelResponse = {
  model: ModelKey;
  result?: ModelResult;
  error?: string;
  ranAt: number;
};

const MODEL_BUTTONS: { key: ModelKey; label: string }[] = [
  { key: 'qwen', label: 'Run Qwen' },
  { key: 'kimi', label: 'Run Kimi' },
  { key: 'gemini', label: 'Run Gemini' },
  { key: 'zlm', label: 'Run GLM' },
  { key: 'grok', label: 'Run Grok' },
  { key: 'grok4', label: 'Run Grok 4' },
  { key: 'minimax', label: 'Run MiniMax' },
];

async function readTextFile(file: File | null): Promise<string> {
  if (!file) return '';
  return file.text();
}

async function readImageDataUrl(file: File | null): Promise<string> {
  if (!file) return '';
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read image file'));
    reader.readAsDataURL(file);
  });
}

export default function TestQwenReasoningPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loadingModel, setLoadingModel] = useState<ModelKey | null>(null);
  const [resultsByModel, setResultsByModel] = useState<Partial<Record<ModelKey, StoredModelResponse>>>({});

  async function runTest(model: ModelKey) {
    const form = formRef.current;
    if (!form) return;

    setLoadingModel(model);
    const formData = new FormData(form);

    try {
      const [designMd, rawTokens, evidenceToken, image1, image2] = await Promise.all([
        readTextFile(formData.get('designMd') as File | null),
        readTextFile(formData.get('rawTokens') as File | null),
        readTextFile(formData.get('evidenceToken') as File | null),
        readImageDataUrl(formData.get('image1') as File | null),
        readImageDataUrl(formData.get('image2') as File | null),
      ]);

      const imageUrls = [image1, image2].filter(Boolean);

      if (!designMd || !rawTokens || !evidenceToken || imageUrls.length < 2) {
        setResultsByModel((prev) => ({
          ...prev,
          [model]: {
            model,
            error:
              'All 5 inputs are required: design.md, rawTokens, evidenceToken, image 1, and image 2.',
            ranAt: Date.now(),
          },
        }));
        return;
      }

      const res = await fetch('/api/test-qwen-reasoning', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, designMd, rawTokens, evidenceToken, imageUrls }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        model?: ModelKey;
        result?: ModelResult;
        error?: string;
      };

      if (!res.ok || !data.success || !data.result) {
        setResultsByModel((prev) => ({
          ...prev,
          [model]: {
            model,
            error: data.error || `Request failed (${res.status})`,
            ranAt: Date.now(),
          },
        }));
        return;
      }

      setResultsByModel((prev) => ({
        ...prev,
        [model]: {
          model,
          result: data.result,
          ranAt: Date.now(),
        },
      }));
    } catch (err) {
      setResultsByModel((prev) => ({
        ...prev,
        [model]: {
          model,
          error: err instanceof Error ? err.message : 'Test failed',
          ranAt: Date.now(),
        },
      }));
    } finally {
      setLoadingModel(null);
    }
  }

  const hasAnyResult = Object.keys(resultsByModel).length > 0;

  return (
    <main className="mx-auto min-h-screen max-w-4xl p-8 font-sans">
      <h1 className="text-2xl font-semibold text-neutral-900">Vision model reasoning test</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Upload all 5 inputs (2 images, design.md, rawTokens, evidenceToken), then run one model
        at a time. Each model keeps its own result below.
      </p>

      <form ref={formRef} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="font-medium text-neutral-800">Image 1</span>
            <input
              name="image1"
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-neutral-800">Image 2</span>
            <input
              name="image2"
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium"
            />
          </label>
        </div>

        <label className="block text-sm">
          <span className="font-medium text-neutral-800">design.md</span>
          <input
            name="designMd"
            type="file"
            accept=".md,.txt,text/markdown,text/plain,application/json"
            className="mt-2 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-neutral-800">rawTokens</span>
          <input
            name="rawTokens"
            type="file"
            accept=".json,.txt,application/json,text/plain"
            className="mt-2 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-neutral-800">evidenceToken</span>
          <input
            name="evidenceToken"
            type="file"
            accept=".json,.txt,application/json,text/plain"
            className="mt-2 block w-full text-sm text-neutral-700 file:mr-3 file:rounded-md file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-medium"
          />
        </label>

        <div className="flex flex-wrap gap-3">
          {MODEL_BUTTONS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => void runTest(key)}
              disabled={loadingModel !== null}
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
            >
              {loadingModel === key ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {loadingModel === key ? 'Running…' : label}
            </button>
          ))}
        </div>
      </form>

      {hasAnyResult ? (
        <div className="mt-8 space-y-6">
          {MODEL_BUTTONS.map(({ key, label }) => {
            const entry = resultsByModel[key];
            if (!entry) return null;

            return (
              <section key={key} className="rounded-lg border border-neutral-200 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-medium text-neutral-800">{label}</h2>
                  <span className="text-xs text-neutral-500">
                    {entry.result?.model ?? key}
                  </span>
                </div>

                {entry.error ? (
                  <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    {entry.error}
                  </div>
                ) : entry.result?.status ? (
                  <pre className="mt-3 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm whitespace-pre-wrap">
                    {entry.result.content || '(empty)'}
                  </pre>
                ) : (
                  <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    {entry.result?.message || 'Request failed'}
                  </div>
                )}
              </section>
            );
          })}

          <section>
            <h2 className="text-sm font-medium text-neutral-500">Full JSON response</h2>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-950 p-4 text-xs text-neutral-100">
              {JSON.stringify(resultsByModel, null, 2)}
            </pre>
          </section>
        </div>
      ) : null}
    </main>
  );
}

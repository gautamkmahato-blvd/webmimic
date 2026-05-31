'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type TestResponse = {
  success: boolean;
  model?: string;
  firstCall?: {
    content: string;
    reasoning_details: unknown;
  };
  secondCall?: {
    content: string;
    reasoning_details: unknown;
  };
  error?: string;
};

export default function TestQwenReasoningPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TestResponse | null>(null);

  async function runTest() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/test-qwen-reasoning', { method: 'POST' });
      const data = (await res.json().catch(() => ({}))) as TestResponse;

      if (!res.ok || !data.success) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Test failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl p-8 font-sans">
      <h1 className="text-2xl font-semibold text-neutral-900">Qwen 3.6 Flash — reasoning test</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Calls <code className="rounded bg-neutral-100 px-1.5 py-0.5">/api/test-qwen-reasoning</code>{' '}
        with a two-step OpenRouter conversation (strawberry → follow-up).
      </p>

      <button
        type="button"
        onClick={() => void runTest()}
        disabled={loading}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {loading ? 'Running…' : 'Run test'}
      </button>

      {error ? (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      ) : null}

      {result ? (
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-sm font-medium text-neutral-500">First call</h2>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm whitespace-pre-wrap">
              {result.firstCall?.content || '(empty)'}
            </pre>
          </section>

          <section>
            <h2 className="text-sm font-medium text-neutral-500">Second call</h2>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm whitespace-pre-wrap">
              {result.secondCall?.content || '(empty)'}
            </pre>
          </section>

          <section>
            <h2 className="text-sm font-medium text-neutral-500">Full JSON response</h2>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-950 p-4 text-xs text-neutral-100">
              {JSON.stringify(result, null, 2)}
            </pre>
          </section>
        </div>
      ) : null}
    </main>
  );
}

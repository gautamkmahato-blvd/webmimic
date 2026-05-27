const CURSOR_API_BASE = 'https://api.cursor.com';

export type CursorImageInput = {
  data: string;
  mimeType: string;
};

export type CursorPromptImage = {
  data: string;
  mimeType: string;
};

export type CursorPrompt = {
  text: string;
  images?: CursorPromptImage[];
};

function formatCursorApiError(data: unknown, status: number): string {
  if (!data || typeof data !== 'object') {
    return `Cursor API error (${status})`;
  }

  const record = data as Record<string, unknown>;

  if (typeof record.message === 'string' && record.message.trim()) {
    return record.message;
  }

  const error = record.error;
  if (typeof error === 'string' && error.trim()) {
    return error;
  }

  if (error && typeof error === 'object') {
    const errObj = error as Record<string, unknown>;
    if (typeof errObj.message === 'string' && errObj.message.trim()) {
      const code = typeof errObj.code === 'string' ? `[${errObj.code}] ` : '';
      return `${code}${errObj.message}`;
    }
  }

  return `Cursor API error (${status})`;
}

type CreateAgentResponse = {
  agent: { id: string };
  run: { id: string; status: string };
};

type CreateRunResponse = {
  run: { id: string; status: string };
};

export class CursorApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly retryable = false
  ) {
    super(message);
    this.name = 'CursorApiError';
  }
}

export function getCursorApiKey(): string | undefined {
  return process.env.CURSOR_API_KEY?.trim();
}

function authHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`;
}

export function parseCursorImages(raw: unknown, maxImages = 5): CursorImageInput[] {
  if (!Array.isArray(raw)) return [];

  return raw
    .filter(
      (img): img is CursorImageInput =>
        !!img &&
        typeof img === 'object' &&
        typeof (img as CursorImageInput).data === 'string' &&
        typeof (img as CursorImageInput).mimeType === 'string'
    )
    .slice(0, maxImages)
    .map((img) => ({
      data: img.data.replace(/^data:[^;]+;base64,/, ''),
      mimeType: img.mimeType,
    }));
}

export function toCursorPromptImages(images: CursorImageInput[]): CursorPromptImage[] {
  return images.map((img) => ({
    data: img.data,
    mimeType: img.mimeType || 'image/png',
  }));
}

async function cursorRequest<T>(
  apiKey: string,
  path: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(`${CURSOR_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: authHeader(apiKey),
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = formatCursorApiError(data, response.status);
    const retryable = response.status === 429 || response.status >= 500;
    throw new CursorApiError(message, response.status, retryable);
  }

  return data as T;
}

export async function createCursorAgentRun(
  apiKey: string,
  prompt: CursorPrompt,
  modelId: string
): Promise<{ agentId: string; runId: string }> {
  const data = await cursorRequest<CreateAgentResponse>(apiKey, '/v1/agents', {
    method: 'POST',
    body: JSON.stringify({
      prompt,
      model: { id: modelId },
    }),
  });

  return {
    agentId: data.agent.id,
    runId: data.run.id,
  };
}

export async function createCursorFollowUpRun(
  apiKey: string,
  agentId: string,
  prompt: CursorPrompt
): Promise<{ agentId: string; runId: string }> {
  const data = await cursorRequest<CreateRunResponse>(
    apiKey,
    `/v1/agents/${encodeURIComponent(agentId)}/runs`,
    {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    }
  );

  return {
    agentId,
    runId: data.run.id,
  };
}

export async function streamCursorRunResult(
  apiKey: string,
  agentId: string,
  runId: string
): Promise<{ status: string; result: string }> {
  const response = await fetch(
    `${CURSOR_API_BASE}/v1/agents/${encodeURIComponent(agentId)}/runs/${encodeURIComponent(runId)}/stream`,
    {
      headers: {
        Authorization: authHeader(apiKey),
        Accept: 'text/event-stream',
      },
    }
  );

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new CursorApiError(
      text || `Failed to stream run (${response.status})`,
      response.status,
      response.status >= 500
    );
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new CursorApiError('Cursor stream returned no body', 502);
  }

  const decoder = new TextDecoder();
  let buffer = '';
  let assistantText = '';
  let finalStatus = 'RUNNING';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split('\n\n');
    buffer = chunks.pop() ?? '';

    for (const chunk of chunks) {
      const lines = chunk.split('\n');
      let eventType = '';
      let dataLine = '';

      for (const line of lines) {
        if (line.startsWith('event:')) eventType = line.slice(6).trim();
        if (line.startsWith('data:')) dataLine = line.slice(5).trim();
      }

      if (!dataLine) continue;

      let parsed: Record<string, unknown>;
      try {
        parsed = JSON.parse(dataLine) as Record<string, unknown>;
      } catch {
        continue;
      }

      if (eventType === 'assistant' && typeof parsed.text === 'string') {
        assistantText += parsed.text;
      }

      if (eventType === 'result' && typeof parsed.status === 'string') {
        finalStatus = parsed.status;
      }

      if (eventType === 'error') {
        const message =
          typeof parsed.message === 'string' ? parsed.message : 'Cursor stream error';
        throw new CursorApiError(message, 502);
      }
    }
  }

  return { status: finalStatus, result: assistantText };
}

const TERMINAL_RUN_STATUSES = new Set(['FINISHED', 'ERROR', 'CANCELLED', 'EXPIRED']);

async function waitForCursorRunResult(
  apiKey: string,
  agentId: string,
  runId: string,
  options?: { pollIntervalMs?: number; maxWaitMs?: number }
): Promise<{ status: string; result: string }> {
  const pollIntervalMs = options?.pollIntervalMs ?? 3000;
  const maxWaitMs = options?.maxWaitMs ?? 280_000;
  const startedAt = Date.now();

  while (Date.now() - startedAt < maxWaitMs) {
    const run = await cursorRequest<{
      status: string;
      result?: string;
    }>(
      apiKey,
      `/v1/agents/${encodeURIComponent(agentId)}/runs/${encodeURIComponent(runId)}`
    );

    if (TERMINAL_RUN_STATUSES.has(run.status)) {
      return {
        status: run.status,
        result: run.result ?? '',
      };
    }

    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }

  throw new CursorApiError('Cursor run timed out while waiting for completion', 504, true);
}

/**
 * One-shot Cursor completion: create a no-repo run, poll until finished,
 * and return the run result directly (no streaming or tool-call handling).
 */
export async function runCursorCompletion(
  apiKey: string,
  prompt: CursorPrompt,
  options?: {
    modelId?: string;
    pollIntervalMs?: number;
    maxWaitMs?: number;
  }
): Promise<{ status: string; result: string }> {
  const modelId = options?.modelId ?? 'composer-2.5';
  const { agentId, runId } = await createCursorAgentRun(apiKey, prompt, modelId);
  return waitForCursorRunResult(apiKey, agentId, runId, options);
}

export async function runCursorPrompt(
  apiKey: string,
  prompt: CursorPrompt,
  options?: {
    agentId?: string;
    modelId?: string;
  }
): Promise<{ agentId: string; status: string; result: string }> {
  const modelId = options?.modelId ?? 'composer-2.5';
  const { agentId: resolvedAgentId, runId } = options?.agentId
    ? await createCursorFollowUpRun(apiKey, options.agentId, prompt)
    : await createCursorAgentRun(apiKey, prompt, modelId);

  const { status, result } = await streamCursorRunResult(
    apiKey,
    resolvedAgentId,
    runId
  );

  return { agentId: resolvedAgentId, status, result };
}

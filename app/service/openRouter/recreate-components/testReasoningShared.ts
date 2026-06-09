import type OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';

export type ORChatMessage = {
  role: string;
  content: string | null;
  reasoning_details?: unknown;
};

export type TestReasoningInput = {
  designMd: string;
  rawTokens: string;
  evidenceToken: string;
  imageUrls: string[];
};

export type TestReasoningResult = {
  status: boolean;
  model: string;
  content?: string;
  message?: string;
};

/** Normalize pasted text or JSON into a stable string for the model. */
export function normalizeTextInput(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return '';
    try {
      const parsed = JSON.parse(trimmed) as unknown;
      if (parsed !== null && typeof parsed === 'object') {
        return JSON.stringify(parsed);
      }
    } catch {
      // plain text
    }
    return trimmed;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value).trim();
}

export function normalizeImageUrls(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => normalizeTextInput(item))
    .filter(Boolean)
    .slice(0, 2);
}

export function parseTestReasoningBody(body: unknown): TestReasoningInput {
  const record =
    body && typeof body === 'object' && !Array.isArray(body)
      ? (body as Record<string, unknown>)
      : {};

  const imageUrls = normalizeImageUrls(
    Array.isArray(record.imageUrls)
      ? record.imageUrls
      : [record.image1, record.image2],
  );

  return {
    designMd: normalizeTextInput(record.designMd),
    rawTokens: normalizeTextInput(record.rawTokens),
    evidenceToken: normalizeTextInput(record.evidenceToken),
    imageUrls,
  };
}

export function buildUserContent(input: TestReasoningInput): OpenAI.ChatCompletionContentPart[] {
  const parts: OpenAI.ChatCompletionContentPart[] = [];

  if (input.designMd) {
    parts.push({ type: 'text', text: input.designMd });
  }
  if (input.rawTokens) {
    parts.push({ type: 'text', text: input.rawTokens });
  }
  if (input.evidenceToken) {
    parts.push({ type: 'text', text: input.evidenceToken });
  }
  for (const url of input.imageUrls) {
    parts.push({ type: 'image_url', image_url: { url } });
  }

  return parts;
}

export type TestReasoningInputPresence = {
  designMd: boolean;
  rawTokens: boolean;
  evidenceToken: boolean;
  image1: boolean;
  image2: boolean;
  allPresent: boolean;
};

export function getTestReasoningInputPresence(input: TestReasoningInput): TestReasoningInputPresence {
  const designMd = input.designMd.length > 0;
  const rawTokens = input.rawTokens.length > 0;
  const evidenceToken = input.evidenceToken.length > 0;
  const image1 = Boolean(input.imageUrls[0]?.trim());
  const image2 = Boolean(input.imageUrls[1]?.trim());

  return {
    designMd,
    rawTokens,
    evidenceToken,
    image1,
    image2,
    allPresent: designMd && rawTokens && evidenceToken && image1 && image2,
  };
}

export function validateRequiredInputs(
  input: TestReasoningInput,
): { ok: true } | { ok: false; message: string } {
  const presence = getTestReasoningInputPresence(input);
  const missing: string[] = [];
  if (!presence.designMd) missing.push('designMd');
  if (!presence.rawTokens) missing.push('rawTokens');
  if (!presence.evidenceToken) missing.push('evidenceToken');
  if (!presence.image1) missing.push('image1');
  if (!presence.image2) missing.push('image2');

  if (missing.length > 0) {
    return {
      ok: false,
      message: `Missing required inputs: ${missing.join(', ')}`,
    };
  }

  return { ok: true };
}

function describeTextField(present: boolean, length: number): string {
  return present ? `present (${length} chars)` : 'missing';
}

function describeImageField(present: boolean, url: string | undefined): string {
  if (!present || !url) return 'missing';
  const kind = url.startsWith('data:') ? 'data-url' : 'url';
  return `present (${url.length} chars, ${kind})`;
}

/** Debug logging without printing full payloads. */
export function logTestReasoningCall(
  serviceName: string,
  model: string,
  input: TestReasoningInput,
): void {
  const presence = getTestReasoningInputPresence(input);

  console.log(`[${serviceName}] inputs summary`, {
    model,
    designMd: describeTextField(presence.designMd, input.designMd.length),
    rawTokens: describeTextField(presence.rawTokens, input.rawTokens.length),
    evidenceToken: describeTextField(presence.evidenceToken, input.evidenceToken.length),
    image1: describeImageField(presence.image1, input.imageUrls[0]),
    image2: describeImageField(presence.image2, input.imageUrls[1]),
    allFiveInputsPresent: presence.allPresent,
  });

  if (presence.allPresent) {
    console.log(`[${serviceName}] all 5 inputs are present`);
  }
}

export async function runTestReasoningService(
  serviceName: string,
  model: string,
  input: TestReasoningInput,
): Promise<TestReasoningResult> {
  logTestReasoningCall(serviceName, model, input);

  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    return { status: false, model, message: 'OPENROUTER_API_KEY is not configured or is empty.' };
  }

  const validation = validateRequiredInputs(input);
  if (!validation.ok) {
    console.warn(`[${serviceName}] validation failed:`, validation.message);
    return { status: false, model, message: validation.message };
  }

  try {
    const content = buildUserContent(input);
    console.log(`[${serviceName}] calling OpenRouter`, {
      model,
      contentParts: content.length,
      textParts: content.filter((part) => part.type === 'text').length,
      imageParts: content.filter((part) => part.type === 'image_url').length,
    });

    const apiResponse = await openRouterClient.chat.completions.create({
      model,
      stream: false,
      messages: [{ role: 'user', content }],
    });

    const response = apiResponse.choices[0].message as ORChatMessage;
    const contentLength = response.content?.length ?? 0;

    console.log(`[${serviceName}] OpenRouter response received`, {
      model,
      hasContent: contentLength > 0,
      contentLength,
      hasReasoningDetails: Boolean(response.reasoning_details),
    });

    return { status: true, model, content: response.content ?? '' };
  } catch (err) {
    console.error(
      `[${serviceName}] OpenRouter error:`,
      err instanceof Error ? err.message : err,
    );
    return {
      status: false,
      model,
      message: err instanceof Error ? err.message : 'Test request failed',
    };
  }
}

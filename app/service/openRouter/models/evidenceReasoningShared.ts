import type OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';
import { normalizeTextInput } from '@/app/service/openRouter/models/testReasoningShared';

export type ORChatMessage = {
  role: string;
  content: string | null;
  reasoning_details?: unknown;
};

export type EvidenceReasoningInput = {
  designMd: string;
  interactiveJson: string;
  elementSamplesJson: string;
  imageUrl: string;
};

export type EvidenceReasoningResult = {
  status: boolean;
  model: string;
  content?: string;
  message?: string;
};

export function normalizeImageUrl(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  return normalizeTextInput(value);
}

export function parseEvidenceReasoningBody(body: unknown): EvidenceReasoningInput {
  const record =
    body && typeof body === 'object' && !Array.isArray(body)
      ? (body as Record<string, unknown>)
      : {};

  const imageUrl = normalizeImageUrl(
    record.imageUrl ?? record.screenshotUrl ?? record.screenshot ?? record.image1,
  );

  return {
    designMd: normalizeTextInput(record.designMd),
    interactiveJson: normalizeTextInput(record.interactiveJson ?? record.interactive),
    elementSamplesJson: normalizeTextInput(
      record.elementSamplesJson ?? record.elementSamples,
    ),
    imageUrl,
  };
}

export function buildEvidenceUserContent(
  input: EvidenceReasoningInput,
): OpenAI.ChatCompletionContentPart[] {
  const parts: OpenAI.ChatCompletionContentPart[] = [];

  if (input.designMd) {
    parts.push({ type: 'text', text: input.designMd });
  }
  if (input.interactiveJson) {
    parts.push({ type: 'text', text: input.interactiveJson });
  }
  if (input.elementSamplesJson) {
    parts.push({ type: 'text', text: input.elementSamplesJson });
  }
  if (input.imageUrl) {
    parts.push({ type: 'image_url', image_url: { url: input.imageUrl } });
  }

  return parts;
}

export type EvidenceReasoningInputPresence = {
  designMd: boolean;
  interactiveJson: boolean;
  elementSamplesJson: boolean;
  screenshot: boolean;
  allPresent: boolean;
};

export function getEvidenceReasoningInputPresence(
  input: EvidenceReasoningInput,
): EvidenceReasoningInputPresence {
  const designMd = input.designMd.length > 0;
  const interactiveJson = input.interactiveJson.length > 0;
  const elementSamplesJson = input.elementSamplesJson.length > 0;
  const screenshot = input.imageUrl.length > 0;

  return {
    designMd,
    interactiveJson,
    elementSamplesJson,
    screenshot,
    allPresent: designMd && interactiveJson && elementSamplesJson && screenshot,
  };
}

export function validateEvidenceRequiredInputs(
  input: EvidenceReasoningInput,
): { ok: true } | { ok: false; message: string } {
  const presence = getEvidenceReasoningInputPresence(input);
  const missing: string[] = [];
  if (!presence.designMd) missing.push('designMd');
  if (!presence.interactiveJson) missing.push('interactiveJson');
  if (!presence.elementSamplesJson) missing.push('elementSamplesJson');
  if (!presence.screenshot) missing.push('screenshot');

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

function describeImageField(present: boolean, url: string): string {
  if (!present || !url) return 'missing';
  const kind = url.startsWith('data:') ? 'data-url' : 'url';
  return `present (${url.length} chars, ${kind})`;
}

export function logEvidenceReasoningCall(
  serviceName: string,
  model: string,
  input: EvidenceReasoningInput,
): void {
  const presence = getEvidenceReasoningInputPresence(input);

  console.log(`[${serviceName}] inputs summary`, {
    model,
    designMd: describeTextField(presence.designMd, input.designMd.length),
    interactiveJson: describeTextField(
      presence.interactiveJson,
      input.interactiveJson.length,
    ),
    elementSamplesJson: describeTextField(
      presence.elementSamplesJson,
      input.elementSamplesJson.length,
    ),
    screenshot: describeImageField(presence.screenshot, input.imageUrl),
    allFourInputsPresent: presence.allPresent,
  });

  if (presence.allPresent) {
    console.log(`[${serviceName}] all 4 inputs are present`);
  }
}

export async function runEvidenceReasoningService(
  serviceName: string,
  model: string,
  input: EvidenceReasoningInput,
): Promise<EvidenceReasoningResult> {
  logEvidenceReasoningCall(serviceName, model, input);

  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    return { status: false, model, message: 'OPENROUTER_API_KEY is not configured or is empty.' };
  }

  const validation = validateEvidenceRequiredInputs(input);
  if (!validation.ok) {
    console.warn(`[${serviceName}] validation failed:`, validation.message);
    return { status: false, model, message: validation.message };
  }

  try {
    const content = buildEvidenceUserContent(input);
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
      message: err instanceof Error ? err.message : 'Evidence reasoning request failed',
    };
  }
}

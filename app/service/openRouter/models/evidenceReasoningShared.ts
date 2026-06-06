import type OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';
import cloudinaryService from '@/app/service/cloudinaryService';
import { DESIGN_EVIDENCE_PROMPT } from '@/lib/prompts/design_evidence';

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

/** Max decoded screenshot size when sent as a data URL (bytes). */
export const MAX_EVIDENCE_SCREENSHOT_BYTES = 12 * 1024 * 1024;

/** Max characters per text field in the evidence payload. */
export const MAX_EVIDENCE_TEXT_FIELD_CHARS = 2_000_000;

export type EvidenceReasoningResult = {
  status: boolean;
  model: string;
  content?: string;
  message?: string;
  /** Set when the incoming screenshot was a data URL and was uploaded to Cloudinary. */
  screenshotCloudinaryUrl?: string;
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

export function validateEvidencePayloadLimits(
  input: EvidenceReasoningInput,
): { ok: true } | { ok: false; message: string } {
  const textFields: Array<{ name: string; value: string; max: number }> = [
    { name: 'designMd', value: input.designMd, max: MAX_EVIDENCE_TEXT_FIELD_CHARS },
    { name: 'interactive', value: input.interactiveJson, max: MAX_EVIDENCE_TEXT_FIELD_CHARS },
    { name: 'elementSamples', value: input.elementSamplesJson, max: MAX_EVIDENCE_TEXT_FIELD_CHARS },
  ];

  for (const field of textFields) {
    if (field.value.length > field.max) {
      return {
        ok: false,
        message: `${field.name} exceeds maximum size (${field.max} characters)`,
      };
    }
  }

  const imageUrl = input.imageUrl.trim();
  if (imageUrl.startsWith('data:image/')) {
    const buffer = parseScreenshotDataUrl(imageUrl);
    if (!buffer) {
      return { ok: false, message: 'Invalid or empty screenshot data URL' };
    }
    if (buffer.length > MAX_EVIDENCE_SCREENSHOT_BYTES) {
      return {
        ok: false,
        message: `screenshot exceeds maximum size (${MAX_EVIDENCE_SCREENSHOT_BYTES} bytes)`,
      };
    }
  } else if (imageUrl.length > 8_192) {
    return { ok: false, message: 'screenshot URL exceeds maximum length' };
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

function parseScreenshotDataUrl(imageUrl: string): Buffer | null {
  const trimmed = imageUrl.trim();
  const match = trimmed.match(/^data:image\/[\w+.+-]+;base64,(.+)$/i);
  if (!match) return null;
  try {
    const buffer = Buffer.from(match[1], 'base64');
    return buffer.length > 0 ? buffer : null;
  } catch {
    return null;
  }
}

/**
 * Extension sends a full-page capture as a data URL. Upload to Cloudinary so the
 * model receives a stable HTTPS URL (and uploads appear in the Cloudinary console).
 */
export async function resolveEvidenceScreenshotUrl(
  imageUrl: string,
  serviceName: string,
): Promise<{ url: string; cloudinaryUrl?: string }> {
  const trimmed = imageUrl.trim();
  if (!trimmed.startsWith('data:image/')) {
    return { url: trimmed };
  }

  const buffer = parseScreenshotDataUrl(trimmed);
  if (!buffer) {
    throw new Error('Invalid or empty screenshot data URL');
  }

  const cloudName = process.env.CLOUDINARY_NAME?.trim();
  const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY?.trim();
  const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET?.trim();
  if (!cloudName || !cloudinaryApiKey || !cloudinaryApiSecret) {
    throw new Error(
      'Cloudinary is not configured (CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET required)',
    );
  }

  const cloudinaryUrl = await cloudinaryService(buffer, 'image');
  console.log(`[${serviceName}] screenshot uploaded to Cloudinary`, {
    bytes: buffer.length,
    cloudinaryUrl,
  });

  return { url: cloudinaryUrl, cloudinaryUrl };
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
    const { url: imageUrlForModel, cloudinaryUrl } = await resolveEvidenceScreenshotUrl(
      input.imageUrl,
      serviceName,
    );

    const content = buildEvidenceUserContent({
      ...input,
      imageUrl: imageUrlForModel,
    });
    console.log(`[${serviceName}] calling OpenRouter`, {
      model,
      contentParts: content.length,
      textParts: content.filter((part) => part.type === 'text').length,
      imageParts: content.filter((part) => part.type === 'image_url').length,
      screenshotSource: cloudinaryUrl ? 'cloudinary' : 'url',
      screenshotCloudinaryUrl: cloudinaryUrl,
    });

    const apiResponse = await openRouterClient.chat.completions.create({
      model,
      stream: false,
      messages: [
        { role: 'system', content: DESIGN_EVIDENCE_PROMPT },
        { role: 'user', content },
      ],
    });

    const response = apiResponse.choices[0].message as ORChatMessage;
    const contentLength = response.content?.length ?? 0;

    console.log(`[${serviceName}] OpenRouter response received`, {
      model,
      hasContent: contentLength > 0,
      contentLength,
      hasReasoningDetails: Boolean(response.reasoning_details),
    });

    return {
      status: true,
      model,
      content: response.content ?? '',
      ...(cloudinaryUrl ? { screenshotCloudinaryUrl: cloudinaryUrl } : {}),
    };
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

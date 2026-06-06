import { z } from 'zod';
import { getAllowedMediaUrlError } from '@/lib/security/allowedMediaUrl';
import { getBase64MediaSizeError, MAX_UPLOAD_BASE64_CHARS } from '@/lib/security/base64MediaSize';

// ─── Reusable field definitions ────────────────────────────────────────────────

const optionalString = (max: number) =>
  z.string().max(max).optional().nullable();

const requiredString = (max: number) =>
  z.string().min(1).max(max);

const allowedCloudinaryMediaUrl = (max = 2048) =>
  z
    .string()
    .min(1)
    .max(max)
    .superRefine((value, ctx) => {
      const error = getAllowedMediaUrlError(value, { allowDataUrl: true });
      if (error) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: error });
      }
    });

// ─── Route schemas ─────────────────────────────────────────────────────────────

export const UserCreateSchema = z.object({
  name: optionalString(200),
  username: optionalString(100),
  email: z.string().email().max(320).optional().nullable(),
  img_url: z.string().url().max(2048).optional().nullable(),
});

export const AssetCreateSchema = z.object({
  type: requiredString(50),
  category: optionalString(100),
  url: z.string().url().max(2048).optional().nullable(),
  content: optionalString(100_000),
  title: optionalString(500),
  description: optionalString(2000),
  meta: z.record(z.string(), z.unknown()).optional().nullable(),
  source_url: z.string().url().max(2048).optional().nullable(),
});

export const RecreateComponentSchema = z.object({
  html: requiredString(500_000),
  css: requiredString(200_000),
  screenshot: requiredString(10_000_000), // base64 encoded image
  elementWidth: z.number().positive().optional(),
  elementHeight: z.number().positive().optional(),
  maxIterations: z.number().int().min(1).max(10).optional(),
});

export const RecreateFromScreenshotSchema = z.object({
  html: requiredString(500_000),
  css: requiredString(200_000),
  screenshotUrl: allowedCloudinaryMediaUrl(2048),
  idempotencyKey: z.string().max(128).optional(),
});

export const AnalyzeVideoSchema = z.object({
  videoUrl: allowedCloudinaryMediaUrl(2048),
  imageUrl: allowedCloudinaryMediaUrl(2048),
  code: requiredString(500_000),
  operationType: z.enum(['lottie-animations', 'ai-recreate']),
  idempotencyKey: z.string().max(128).optional(),
});

export const CreateCheckoutSchema = z.object({
  productId: requiredString(200),
  successUrl: z.string().url().max(2048),
  cancelUrl: z.string().url().max(2048).optional().nullable(),
});

export const CustomCheckoutSchema = z.object({
  productId: z.string().max(200).optional(),
  amount: z.number().positive().max(10_000).optional(),
  isCustom: z.boolean().optional(),
  successUrl: z.string().url().max(2048),
  cancelUrl: z.string().url().max(2048).optional().nullable(),
});

export const PlanSubscribeSchema = z.object({
  planId: requiredString(200),
});

const uploadVideoDataUrl = z
  .string()
  .min(1)
  .max(MAX_UPLOAD_BASE64_CHARS)
  .superRefine((value, ctx) => {
    const trimmed = value.trim();
    if (!trimmed.startsWith('data:image/') && !trimmed.startsWith('data:video/')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'videoData must be a data:image/* or data:video/* URL',
      });
      return;
    }
    const base64 = trimmed.replace(/^data:(?:image|video)\/[^;]+;base64,/, '');
    const sizeError = getBase64MediaSizeError(base64);
    if (sizeError) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: sizeError });
    }
  });

export const UploadVideoSchema = z.object({
  videoData: uploadVideoDataUrl,
});

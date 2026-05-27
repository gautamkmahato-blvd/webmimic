import { z } from 'zod';

// ─── Reusable field definitions ────────────────────────────────────────────────

const optionalString = (max: number) =>
  z.string().max(max).optional().nullable();

const requiredString = (max: number) =>
  z.string().min(1).max(max);

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
  screenshotUrl: z.string().url().max(2048),
  idempotencyKey: requiredString(128),
});

export const AnalyzeVideoSchema = z.object({
  videoUrl: requiredString(2048),
  imageUrl: requiredString(2048),
  code: requiredString(500_000),
  operationType: z.enum(['lottie-animations', 'ai-recreate']),
  idempotencyKey: requiredString(128),
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

export const UploadVideoSchema = z.object({
  videoData: requiredString(10_000_000), // base64 data URL
});

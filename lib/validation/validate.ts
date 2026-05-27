import { z } from 'zod';
import { NextResponse } from 'next/server';

type ParseResult<T> =
  | { ok: true; data: T }
  | { ok: false; response: NextResponse };

/**
 * Parse and validate a request body against a Zod schema.
 * Returns `{ ok: true, data }` on success or `{ ok: false, response }` with a 400
 * containing the first validation error message.
 */
export async function parseBody<T extends z.ZodTypeAny>(
  req: Request,
  schema: T,
  extraHeaders?: HeadersInit,
): Promise<ParseResult<z.infer<T>>> {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'invalid_body', message: 'Invalid JSON body' },
        { status: 400, headers: extraHeaders },
      ),
    };
  }

  const result = schema.safeParse(raw);
  if (!result.success) {
    const issues = result.error.issues ?? (result.error as unknown as { errors: typeof result.error.issues }).errors ?? [];
    const message = issues[0]?.message ?? 'Invalid request body';
    const field = issues[0]?.path?.join('.') || 'unknown';
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'validation_error', message: `${field}: ${message}` },
        { status: 400, headers: extraHeaders },
      ),
    };
  }

  return { ok: true, data: result.data };
}

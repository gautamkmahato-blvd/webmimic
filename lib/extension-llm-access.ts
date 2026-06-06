import { NextResponse } from 'next/server';
import {
  getClerkIdFromExtensionBearer,
  getExtensionCorsHeaders,
} from '@/lib/extension-route-helpers';
import { ratelimit } from '@/lib/upstash/rateLimiter';

/** Extension auth + rate limit. Credit charging is handled per route after validation. */
export async function requireExtensionLlmAccess(req: Request): Promise<
  { ok: true; clerkId: string; cors: Record<string, string> } | { ok: false; response: NextResponse }
> {
  const cors = getExtensionCorsHeaders(req);

  const clerkId = await getClerkIdFromExtensionBearer(req);
  if (!clerkId) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors },
      ),
    };
  }

  const { success: rateLimitOk } = await ratelimit.limit(clerkId);
  if (!rateLimitOk) {
    return {
      ok: false,
      response: NextResponse.json(
        { success: false, error: 'Too many requests. Please slow down.', code: 'RATE_LIMITED' },
        { status: 429, headers: cors },
      ),
    };
  }

  return { ok: true, clerkId, cors };
}

import { NextResponse } from 'next/server';
import {
  getClerkIdFromExtensionBearer,
  getExtensionCorsHeaders,
} from '@/lib/extension-route-helpers';
import { enforceRateLimit } from '@/lib/upstash/rateLimiter';

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

  const rateLimited = await enforceRateLimit('extension-llm', clerkId, cors);
  if (rateLimited) {
    return { ok: false, response: rateLimited };
  }

  return { ok: true, clerkId, cors };
}

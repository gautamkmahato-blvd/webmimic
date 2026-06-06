import { NextResponse } from 'next/server';
import { checkAndIncrementQuota } from '@/app/service/supabase/extension/operationQuotaService';
import { decrementQuota } from '@/app/service/supabase/extension/operationQuotaService';
import { OPERATIONS } from '@/lib/credits/config';

export const MEDIA_UPLOAD_OPERATION = OPERATIONS.MEDIA_UPLOAD;

export async function reserveMediaUploadQuota(
  clerkId: string,
  cors: Record<string, string>,
): Promise<{ ok: true } | { ok: false; response: NextResponse }> {
  const result = await checkAndIncrementQuota(clerkId, MEDIA_UPLOAD_OPERATION);
  if (result.allowed) {
    return { ok: true };
  }

  switch (result.code) {
    case 'PLAN_BLOCKED':
      return {
        ok: false,
        response: NextResponse.json(
          {
            error: 'This feature requires a paid plan. Upgrade to access it.',
            code: 'PLAN_BLOCKED',
          },
          { status: 403, headers: cors },
        ),
      };
    case 'QUOTA_EXHAUSTED':
      return {
        ok: false,
        response: NextResponse.json(
          {
            error: 'Monthly upload quota exhausted. Upgrade your plan or wait until next month.',
            code: 'QUOTA_EXHAUSTED',
          },
          { status: 402, headers: cors },
        ),
      };
    case 'USER_NOT_FOUND':
      return {
        ok: false,
        response: NextResponse.json(
          { error: 'User not found', code: 'USER_NOT_FOUND' },
          { status: 401, headers: cors },
        ),
      };
    case 'CONCURRENT_MODIFICATION':
      return {
        ok: false,
        response: NextResponse.json(
          { error: 'Request conflict, please retry', code: 'CONCURRENT_MODIFICATION' },
          { status: 409, headers: cors },
        ),
      };
    default:
      return {
        ok: false,
        response: NextResponse.json(
          { error: 'Upload quota check failed', code: 'DB_ERROR' },
          { status: 503, headers: cors },
        ),
      };
  }
}

export async function refundMediaUploadQuota(clerkId: string): Promise<void> {
  await decrementQuota(clerkId, MEDIA_UPLOAD_OPERATION);
}

import { NextResponse } from 'next/server';
import { fetchAllAssets } from '@/app/service/supabase/assets/fetchAllAssets';
import { findUserByClerkId } from '@/app/service/supabase/user/findUserByClerkId';
import type { ApiResponse } from '@/types/ApiResponse';
import { resolveClerkId, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';

export async function OPTIONS(req: Request): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

export async function GET(req: Request) {
  const cors = getExtensionCorsHeaders(req);
  try {
    const clerkId = (await resolveClerkId(req)) ?? undefined;

    if (!clerkId) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: 'unauthorized',
          message: 'Not authenticated',
        },
        { status: 401, headers: cors }
      );
    }

    const userResp = await findUserByClerkId(clerkId);

    if (
      !userResp.success ||
      !userResp.result ||
      typeof userResp.result !== 'object' ||
      !('id' in userResp.result)
    ) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: userResp.error ?? 'user_not_found',
          message: userResp.message ?? 'User not found',
        },
        { status: 404, headers: cors }
      );
    }

    const userId = (userResp.result as { id: string }).id;

    const serviceResp = await fetchAllAssets(userId);

    const response: ApiResponse = {
      success: serviceResp.success,
      result: serviceResp.result,
      error: serviceResp.error,
      message: serviceResp.message,
    };

    const status = serviceResp.success ? 200 : 500;
    return NextResponse.json(response, { status, headers: cors });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'api_error',
        message: err instanceof Error ? err.message : 'Failed to fetch assets',
      },
      { status: 500, headers: cors }
    );
  }
}

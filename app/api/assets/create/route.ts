import { NextRequest, NextResponse } from 'next/server';
import { insertAsset } from '@/app/service/supabase/assets/insertAsset';
import { findUserByClerkId } from '@/app/service/supabase/user/findUserByClerkId';
import type { ApiResponse } from '@/types/ApiResponse';
import { resolveClerkId, getBearerRouteCorsHeaders } from '@/lib/extension-route-helpers';
import { parseBody } from '@/lib/validation/validate';
import { AssetCreateSchema } from '@/lib/validation/schemas';

export async function OPTIONS(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: getBearerRouteCorsHeaders(req) });
}

export async function POST(req: NextRequest) {
  const corsHeaders = getBearerRouteCorsHeaders(req);
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
        { status: 401, headers: corsHeaders }
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
        { status: 404, headers: corsHeaders }
      );
    }

    const userId = (userResp.result as { id: string }).id;

    const parsed = await parseBody(req, AssetCreateSchema, corsHeaders);
    if (!parsed.ok) return parsed.response;
    const body = parsed.data;

    const serviceResp = await insertAsset({
      user_id: userId,
      type: body.type,
      category: body.category ?? null,
      url: body.url ?? null,
      content: body.content ?? null,
      title: body.title ?? null,
      description: body.description ?? null,
      meta: body.meta ?? null,
      source_url: body.source_url ?? null,
    });

    const response: ApiResponse = {
      success: serviceResp.success,
      result: serviceResp.result,
      error: serviceResp.error,
      message: serviceResp.message,
    };

    const status = serviceResp.success ? 201 : 400;
    return NextResponse.json(response, { status, headers: corsHeaders });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'api_error',
        message: err instanceof Error ? err.message : 'Failed to create asset',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

// app/api/user/details/route.ts
import { NextResponse } from 'next/server';
import { getUser } from '@/app/service/supabase/user/getUser';
import { ApiResponse } from '@/types/ApiResponse';
import { resolveClerkId, getExtensionCorsHeaders } from '@/lib/extension-route-helpers';
import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';
import { hasPremiumAccessForClerkId } from '@/app/service/supabase/extension/hasPremiumAccess';
import { syncUserFromClerkIfMissing } from '@/lib/auth/sync-user-from-clerk';

const corsHeadersFor = (req: Request) => getExtensionCorsHeaders(req);

export async function OPTIONS(req: Request): Promise<NextResponse> {
  return new NextResponse(null, { status: 204, headers: corsHeadersFor(req) });
}

export async function GET(req: Request): Promise<NextResponse<ApiResponse>> {
  const corsHeaders = corsHeadersFor(req);
  try {
    const clerkId = (await resolveClerkId(req)) ?? undefined;

    if (!clerkId) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: 'Unauthorized',
        },
        { status: 401, headers: corsHeaders }
      );
    }

    let res = await getUser(clerkId);

    if (!res.success) {
      const errStr = typeof res.error === 'string' ? res.error : String(res.error ?? 'Database error');
      if (errStr === 'User not found') {
        const synced = await syncUserFromClerkIfMissing(clerkId);
        if (synced) {
          res = await getUser(clerkId);
        }
      }
    }

    if (!res.success) {
      // map 'User not found' to 404, otherwise 500
      const errStr = typeof res.error === 'string' ? res.error : String(res.error ?? 'Database error');
      if (errStr === 'User not found') {
        return NextResponse.json(
          { success: false, result: {}, error: errStr },
          { status: 404, headers: corsHeaders }
        );
      }
      return NextResponse.json(
        { success: false, result: {}, error: errStr },
        { status: 500, headers: corsHeaders }
      );
    }

    const userRow = res.result as Record<string, unknown> & { id: string };
    await hasPremiumAccessForClerkId(clerkId);

    let planLabel = 'Free plan';
    const { data: latestPay } = await supabaseAdmin
      .from('payments')
      .select('plan_id')
      .eq('user_id', userRow.id)
      .eq('payment_provider', 'polar')
      .eq('status', 'succeeded')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (latestPay?.plan_id) {
      const { data: plan } = await supabaseAdmin
        .from('plans')
        .select('name')
        .eq('id', latestPay.plan_id as string)
        .maybeSingle();
      if (plan?.name && typeof plan.name === 'string' && plan.name.trim()) {
        planLabel = plan.name.trim();
      }
    }

    return NextResponse.json(
      {
        success: true,
        result: {
          ...userRow,
          plan_label: planLabel,
        },
        message: 'User fetched successfully',
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error('Unexpected error in GET /api/user:', err);
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: err?.message ? String(err.message) : 'Internal Server Error',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

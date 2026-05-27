import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import createOrUpdateUser from '@/app/service/supabase/user/createOrUpdateUser';
import { grantFreeSignupCredits } from '@/app/service/supabase/user/grantFreeSignupCredits';
import { parseBody } from '@/lib/validation/validate';
import { UserCreateSchema } from '@/lib/validation/schemas';


export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, result: {}, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const parsed = await parseBody(req, UserCreateSchema);
    if (!parsed.ok) return parsed.response;
    const body = parsed.data;

    const res = await createOrUpdateUser({
      clerk_id: userId,
      name: body.name ?? undefined,
      username: body.username ?? undefined,
      email: body.email ?? undefined,
      image: body.img_url ?? undefined,
    });

    if (!res.success) {
      return NextResponse.json(
        {
          success: false,
          result: {},
          error: res.error,
        },
        { status: 400 }
      );
    }

    // Grant free credits for new users (idempotent — ignoreDuplicates means safe on updates too)
    if (res.result?.id) {
      await grantFreeSignupCredits(String(res.result.id));
    }

    return NextResponse.json(
      {
        success: true,
        result: res.result,
        message: 'User created/updated successfully',
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Route error:', err);
    return NextResponse.json(
      {
        success: false,
        result: {},
        error: 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

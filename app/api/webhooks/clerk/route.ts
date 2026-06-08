import { Webhook } from 'svix'
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
import type { WebhookEvent } from '@clerk/nextjs/server'
import createOrUpdateUser from '@/app/service/supabase/user/createOrUpdateUser'
import { deleteUser } from '@/app/service/supabase/user/deleteUser'
import { grantFreeSignupCredits } from '@/app/service/supabase/user/grantFreeSignupCredits'


export async function POST(req: NextRequest) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET

  if (!SIGNING_SECRET) {
    return new Response('Missing Clerk signing secret', { status: 500 })
  }

  const payload = await req.text()
  const headerPayload = await headers()

  const svix_id = headerPayload.get('svix-id') ?? ''
  const svix_timestamp = headerPayload.get('svix-timestamp') ?? ''
  const svix_signature = headerPayload.get('svix-signature') ?? ''

  const wh = new Webhook(SIGNING_SECRET)

  let evt: WebhookEvent
  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err)
    return new Response('Invalid webhook signature', { status: 400 })
  }

  const eventType = evt.type

  if (eventType === 'user.created') {
    const data = evt.data
    const body = {
      clerk_id: data.id,
      name: `${data.first_name ?? ''} ${data.last_name ?? ''}`.trim(),
      username: data.username || 'user123',
      email: data.email_addresses?.[0]?.email_address || 'example@gmail.com',
      img_url: data.image_url,
    }

    console.log('✅ Creating user:', body)

    const res = await createOrUpdateUser({
      clerk_id: body.clerk_id,
      name: body.name,
      username: body.username,
      email: body.email,
      image: body.img_url,
    })
    console.log('Result: ', res)
    if (!res?.success) {
      console.error('❌ Failed to create user in DB')
      return new Response('Error saving user', { status: 500 })
    }
    console.log('✅ User created:', res?.message)

    // Grant free signup credits (idempotent — safe on webhook retries)
    const userId = res.result?.id as string | undefined
    if (userId) {
      await grantFreeSignupCredits(userId)
    }
  }

  if (eventType === 'user.deleted') {
    const data = evt.data
    const clerkId = data.id
    // Clerk's UserDeletedJSON type is minimal; some deliveries still include email fields.
    const deletedPayload = data as {
      email_addresses?: Array<{ email_address?: string | null }>
    }
    const email = deletedPayload.email_addresses?.[0]?.email_address ?? null

    if (!clerkId || typeof clerkId !== 'string' || clerkId.trim() === '') {
      console.error('❌ user.deleted missing clerk id')
      return new Response('Missing user id', { status: 400 })
    }

    console.log('✅ Deleting user:', { clerkId, email })

    const res = await deleteUser({ clerkId, email })
    console.log('Delete result:', res)

    if (!res?.success) {
      console.error('❌ Failed to delete user in DB:', res?.message)
      return new Response('Error deleting user', { status: 500 })
    }

    const deleteResult = res.result as {
      deleted?: boolean
      alreadyDeleted?: boolean
      warnings?: string[]
    }

    if (deleteResult?.alreadyDeleted) {
      console.warn('⚠️ user.deleted: no matching Supabase row — user was not removed:', {
        clerkId,
        email,
      })
    } else if (deleteResult?.deleted) {
      console.log('✅ User deleted:', res?.message)
      if (deleteResult.warnings?.length) {
        console.warn('⚠️ User delete warnings:', deleteResult.warnings)
      }
    }
  }

  return new Response('Webhook processed', { status: 200 })
}

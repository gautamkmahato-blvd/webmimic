import { Webhook } from 'svix'
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
import type { WebhookEvent } from '@clerk/nextjs/server'
import createOrUpdateUser from '@/app/service/supabase/user/createOrUpdateUser'
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

  return new Response('Webhook processed', { status: 200 })
}

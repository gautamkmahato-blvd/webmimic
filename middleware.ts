import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { applySecurityHeaders } from '@/lib/security/headers';

const isProtectedRoute = createRouteMatcher([
  '/auth(.*)',
  '/session/:path*',
  '/payment(.*)',
  '/polar(.*)',
  '/dashboard(.*)',
  '/assets(.*)',
  '/motion(.*)',
  '/design-systems(.*)',
  '/billing(.*)',
  '/credits(.*)',
  '/design-md-converter(.*)',
  '/test-qwen-reasoning(.*)',
  '/design-chat(.*)',
  '/design-chat-cursor(.*)',
  '/design-editor(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  const res = NextResponse.next();
  applySecurityHeaders(res, req.nextUrl.pathname);
  return res;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


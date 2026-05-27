import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

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
  '/convert(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  const res = NextResponse.next();

  // Prevent clickjacking
  res.headers.set('X-Frame-Options', 'DENY');
  // Prevent MIME-type sniffing
  res.headers.set('X-Content-Type-Options', 'nosniff');
  // Enforce HTTPS for 1 year (only meaningful in production over HTTPS)
  res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  // Restrict powerful browser features
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  // Tighten referrer leakage
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Prevent cross-origin window opener attacks
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  // Basic CSP: blocks framing, restricts sources; unsafe-inline/eval kept for Next.js compatibility
  // Clerk loads its JS bundle from *.clerk.accounts.dev so that host must be in script-src
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clerk.accounts.dev",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "media-src 'self' https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-src https://*.clerk.accounts.dev",
      "frame-ancestors 'none'",
    ].join('; ')
  );

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
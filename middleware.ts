import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { supabaseUserExistsByClerkId } from '@/lib/auth/supabase-user-exists';

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
  if (isProtectedRoute(req)) {
    await auth.protect();

    const { userId } = await auth();
    if (userId) {
      const hasAppUser = await supabaseUserExistsByClerkId(userId);
      if (!hasAppUser) {
        const signOutUrl = new URL('/sign-out', req.url);
        signOutUrl.searchParams.set('reason', 'account_not_found');
        return NextResponse.redirect(signOutUrl);
      }
    }
  }

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
  // CSP — Clerk prod uses https://clerk.webmimic.com (FAPI); dev uses *.clerk.accounts.dev
  // https://clerk.com/docs/guides/secure/best-practices/csp-headers
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.webmimic.com https://*.clerk.accounts.dev https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https: https://img.clerk.com",
      "media-src 'self' https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-src 'self' https://clerk.webmimic.com https://*.clerk.accounts.dev https://challenges.cloudflare.com",
      "worker-src 'self' blob:",
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
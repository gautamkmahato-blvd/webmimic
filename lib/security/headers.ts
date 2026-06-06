/**
 * Security response headers for the web app.
 *
 * Design constraints (do not break):
 * - Extension auth: content script on /extension-auth-callback POSTs same-origin
 *   /api/extension/issue-token with cookies (connect-src 'self').
 * - Extension API calls use fetch() + CORS from chrome-extension:// — CSP on HTML
 *   pages does not apply to extension panel; API routes skip CSP entirely.
 * - Clerk: prod FAPI is https://clerk.webmimic.com; dev uses *.clerk.accounts.dev.
 *   script-src + connect-src + frame-src must include the FAPI host or Clerk never loads.
 * - OAuth needs Cross-Origin-Opener-Policy: same-origin-allow-popups.
 * - Design editor preview: srcdoc iframes are same-origin children (frame-src 'self').
 * - Polar checkout: redirects to polar.sh; frame-src allows polar checkout embeds.
 * - Media/images: Cloudinary, framerusercontent, user asset URLs (img-src https:).
 *
 * @see https://clerk.com/docs/guides/secure/best-practices/csp-headers
 */

const isDev = process.env.NODE_ENV !== 'production';

/** Clerk Frontend API origins required in script-src, connect-src, and frame-src. */
function getClerkFapiOrigins(): string[] {
  const origins = new Set<string>();

  const explicit = process.env.CLERK_FAPI_HOST?.trim();
  if (explicit) {
    origins.add(explicit.startsWith('https://') ? explicit : `https://${explicit}`);
  }

  const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim();
  if (pk) {
    const encoded = pk.replace(/^pk_(?:test|live)_/, '');
    try {
      // atob — Edge middleware safe (Buffer is not available on Edge)
      const host = atob(encoded).replace(/\$$/, '').trim();
      if (host) origins.add(`https://${host}`);
    } catch {
      /* ignore invalid key */
    }
  }

  // Production custom Clerk domain (webmimic.com)
  if (!isDev) {
    origins.add('https://clerk.webmimic.com');
  }

  origins.add('https://*.clerk.accounts.dev');

  return Array.from(origins);
}

/** Baseline headers safe for all responses (pages, API, webhooks). */
export function getBaselineSecurityHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-DNS-Prefetch-Control': 'off',
    /**
     * same-origin-allow-popups: keeps Clerk OAuth / third-party sign-in popups working
     * (stricter "same-origin" can break window.opener handoff).
     */
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Permissions-Policy':
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  };

  if (!isDev) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';
  }

  return headers;
}

/** Extra headers for HTML document routes only (not API / webhooks). */
export function getDocumentSecurityHeaders(): Record<string, string> {
  return {
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': buildContentSecurityPolicy(),
  };
}

function buildContentSecurityPolicy(): string {
  const clerkFapi = getClerkFapiOrigins();

  const devConnect =
    isDev
      ? ' ws://localhost:* ws://127.0.0.1:* http://localhost:* http://127.0.0.1:* https://localhost:*'
      : '';

  const devScript = isDev ? " 'unsafe-eval'" : '';

  const directives = [
    "default-src 'self'",
    [
      "script-src 'self' 'unsafe-inline'",
      devScript,
      ...clerkFapi.map((o) => ` ${o}`),
      ' https://challenges.cloudflare.com',
    ]
      .join('')
      .replace(/\s+/g, ' ')
      .trim(),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https: http: https://img.clerk.com",
    "media-src 'self' blob: https://res.cloudinary.com https://*.cloudinary.com",
    "font-src 'self' data:",
    [
      "connect-src 'self'",
      devConnect,
      ...clerkFapi.map((o) => ` ${o}`),
      ' https://clerk-telemetry.com',
      ' https://*.clerk-telemetry.com',
      ' https://api.clerk.com',
      ' https://clerk.com',
      ' https://*.clerk.com',
      ' https://api.polar.sh',
      ' https://sandbox-api.polar.sh',
    ]
      .join('')
      .replace(/\s+/g, ' ')
      .trim(),
    [
      "frame-src 'self'",
      ...clerkFapi.map((o) => ` ${o}`),
      ' https://challenges.cloudflare.com',
      ' https://buy.polar.sh',
      ' https://sandbox-buy.polar.sh',
    ].join(' '),
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    [
      "form-action 'self'",
      ...clerkFapi.map((o) => ` ${o}`),
    ].join(' '),
    "worker-src 'self' blob:",
    "manifest-src 'self'",
  ];

  return directives.join('; ');
}

export function applySecurityHeaders(
  res: Response,
  pathname: string
): void {
  const baseline = getBaselineSecurityHeaders();
  for (const [key, value] of Object.entries(baseline)) {
    res.headers.set(key, value);
  }

  // API + webhooks: skip CSP / X-Frame-Options so extension CORS and JSON clients are unaffected.
  if (pathname.startsWith('/api/')) {
    return;
  }

  const documentHeaders = getDocumentSecurityHeaders();
  for (const [key, value] of Object.entries(documentHeaders)) {
    res.headers.set(key, value);
  }
}

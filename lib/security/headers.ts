/**
 * Security response headers for the web app.
 *
 * Design constraints (do not break):
 * - Extension auth: content script on /extension-auth-callback POSTs same-origin
 *   /api/extension/issue-token with cookies (connect-src 'self').
 * - Extension API calls use fetch() + CORS from chrome-extension:// — CSP on HTML
 *   pages does not apply to extension panel; API routes skip CSP entirely.
 * - Clerk: scripts/frames/connect to *.clerk.accounts.dev; OAuth needs
 *   Cross-Origin-Opener-Policy: same-origin-allow-popups.
 * - Design editor preview: srcdoc iframes are same-origin children (frame-src 'self').
 * - Polar checkout: redirects to polar.sh; frame-src allows polar checkout embeds.
 * - Media/images: Cloudinary, framerusercontent, user asset URLs (img-src https:).
 */

const isDev = process.env.NODE_ENV !== 'production';

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
      ' https://*.clerk.accounts.dev',
      ' https://challenges.cloudflare.com',
    ]
      .join('')
      .replace(/\s+/g, ' ')
      .trim(),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https: http:",
    "media-src 'self' blob: https://res.cloudinary.com https://*.cloudinary.com",
    "font-src 'self' data:",
    [
      "connect-src 'self'",
      devConnect,
      ' https://*.clerk.accounts.dev',
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
      ' https://*.clerk.accounts.dev',
      ' https://challenges.cloudflare.com',
      ' https://buy.polar.sh',
      ' https://sandbox-buy.polar.sh',
    ].join(' '),
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://*.clerk.accounts.dev",
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

/** Max decoded bytes for an allowed `data:` media URL. */
export const MAX_DATA_URL_BYTES = 12 * 1024 * 1024;

const CLOUDINARY_HOST = 'res.cloudinary.com';

const BLOCKED_HOSTNAMES = new Set([
  'localhost',
  '127.0.0.1',
  '0.0.0.0',
  '::1',
  'metadata.google.internal',
  'metadata.google',
]);

function isPrivateIpv4(hostname: string): boolean {
  const parts = hostname.split('.').map((p) => Number.parseInt(p, 10));
  if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n) || n < 0 || n > 255)) {
    return false;
  }
  const [a, b] = parts;
  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  return false;
}

function isBlockedHostname(hostname: string): boolean {
  const normalized = hostname.trim().toLowerCase().replace(/\.$/, '');
  if (!normalized) return true;
  if (BLOCKED_HOSTNAMES.has(normalized)) return true;
  if (normalized.endsWith('.localhost')) return true;
  if (normalized.endsWith('.local')) return true;
  if (isPrivateIpv4(normalized)) return true;
  if (normalized.startsWith('fe80:') || normalized.startsWith('fc') || normalized.startsWith('fd')) {
    return true;
  }
  return false;
}

function parseDataUrl(url: string): { mimeType: string; data: string } | null {
  const match = url.match(/^data:([^;,]+)?(?:;[^,]*)?;base64,(.+)$/i);
  if (!match?.[2]) return null;
  const mimeType = (match[1] || 'application/octet-stream').trim().toLowerCase();
  if (!mimeType.startsWith('image/') && !mimeType.startsWith('video/')) {
    return null;
  }
  const data = match[2];
  const approxBytes = Math.floor((data.length * 3) / 4);
  if (approxBytes > MAX_DATA_URL_BYTES) {
    return null;
  }
  return { mimeType, data };
}

function isAllowedHttpsHost(hostname: string): boolean {
  const normalized = hostname.trim().toLowerCase();
  if (normalized === CLOUDINARY_HOST) return true;
  if (normalized.endsWith('.cloudinary.com')) return true;
  return false;
}

/**
 * Returns an error message when the URL is not permitted, or null when allowed.
 * Permitted remote URLs: HTTPS on Cloudinary hosts only. Optional `data:` image/video URLs.
 */
export function getAllowedMediaUrlError(
  url: string,
  options: { allowDataUrl?: boolean } = {},
): string | null {
  const trimmed = typeof url === 'string' ? url.trim() : '';
  if (!trimmed) return 'URL is required';

  if (trimmed.startsWith('data:')) {
    if (!options.allowDataUrl) return 'Data URLs are not allowed';
    return parseDataUrl(trimmed) ? null : 'Invalid or oversized data URL';
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return 'Invalid URL';
  }

  if (parsed.protocol !== 'https:') {
    return 'Only HTTPS URLs are allowed';
  }

  if (parsed.username || parsed.password) {
    return 'URLs with credentials are not allowed';
  }

  if (isBlockedHostname(parsed.hostname)) {
    return 'URL host is not allowed';
  }

  if (!isAllowedHttpsHost(parsed.hostname)) {
    return 'URL must be hosted on Cloudinary';
  }

  return null;
}

export function assertAllowedMediaUrl(
  url: string,
  options: { allowDataUrl?: boolean } = {},
): void {
  const error = getAllowedMediaUrlError(url, options);
  if (error) {
    throw new Error(error);
  }
}

export async function fetchAllowedMediaUrl(
  url: string,
  options: { allowDataUrl?: boolean } = {},
): Promise<{ data: string; mimeType: string }> {
  assertAllowedMediaUrl(url, options);

  if (url.trim().startsWith('data:')) {
    const parsed = parseDataUrl(url.trim());
    if (!parsed) throw new Error('Invalid data URL for media attachment');
    return parsed;
  }

  const response = await fetch(url.trim(), { redirect: 'error' });
  if (!response.ok) {
    throw new Error(`Failed to download media from URL (${response.status})`);
  }

  const mimeType =
    response.headers.get('content-type')?.split(';')[0]?.trim() || 'application/octet-stream';
  const buffer = Buffer.from(await response.arrayBuffer());

  if (buffer.byteLength > MAX_DATA_URL_BYTES) {
    throw new Error('Downloaded media exceeds maximum size');
  }

  return {
    data: buffer.toString('base64'),
    mimeType,
  };
}

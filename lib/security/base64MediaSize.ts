/** Max decoded media size for extension Cloudinary uploads (bytes). */
export const MAX_UPLOAD_MEDIA_BYTES = 12 * 1024 * 1024;

/** Approximate max base64 payload length for {@link MAX_UPLOAD_MEDIA_BYTES}. */
export const MAX_UPLOAD_BASE64_CHARS = Math.ceil((MAX_UPLOAD_MEDIA_BYTES * 4) / 3) + 256;

export function estimateBase64DecodedBytes(base64: string): number {
  const trimmed = base64.trim();
  if (!trimmed) return 0;
  const padding = trimmed.endsWith('==') ? 2 : trimmed.endsWith('=') ? 1 : 0;
  return Math.max(0, Math.floor((trimmed.length * 3) / 4) - padding);
}

export function getBase64MediaSizeError(base64: string, maxBytes = MAX_UPLOAD_MEDIA_BYTES): string | null {
  const estimated = estimateBase64DecodedBytes(base64);
  if (estimated <= 0) return 'Invalid or empty base64 payload';
  if (estimated > maxBytes) {
    return `Media exceeds maximum size (${maxBytes} bytes decoded)`;
  }
  return null;
}

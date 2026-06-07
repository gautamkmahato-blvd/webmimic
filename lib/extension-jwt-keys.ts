import { createPublicKey } from 'node:crypto';

/** Primary signing key id — included in JWT header `kid`. */
export const EXTENSION_JWT_KID_PRIMARY = 'webmimic-ext-1';

/** Optional previous key id during rotation overlap. */
export const EXTENSION_JWT_KID_PREVIOUS = 'webmimic-ext-0';

export type ExtensionJwksKey = {
  kid: string;
  alg: 'RS256';
  kty: 'RSA';
  use: 'sig';
  /** PEM-encoded SPKI public key (extension imports via jose importSPKI). */
  pem: string;
};

function readPem(envName: string): string | null {
  const pem = process.env[envName]?.trim();
  if (!pem || (!pem.includes('BEGIN PUBLIC KEY') && !pem.includes('BEGIN PRIVATE KEY'))) {
    return null;
  }
  return pem;
}

export function getExtensionJwtPrivateKeyPem(): string | null {
  return readPem('EXTENSION_JWT_PRIVATE_KEY');
}

export function getExtensionJwtPublicKeyPem(): string | null {
  return readPem('EXTENSION_JWT_PUBLIC_KEY');
}

/** Previous public key kept during rotation so old tokens still verify. */
export function getExtensionJwtPreviousPublicKeyPem(): string | null {
  return readPem('EXTENSION_JWT_PUBLIC_KEY_PREVIOUS');
}

export function getPrimarySigningKid(): string {
  return EXTENSION_JWT_KID_PRIMARY;
}

export function buildExtensionJwks(): { keys: ExtensionJwksKey[] } {
  const keys: ExtensionJwksKey[] = [];

  const primary = getExtensionJwtPublicKeyPem();
  if (primary) {
    keys.push({
      kid: EXTENSION_JWT_KID_PRIMARY,
      alg: 'RS256',
      kty: 'RSA',
      use: 'sig',
      pem: primary,
    });
  }

  const previous = getExtensionJwtPreviousPublicKeyPem();
  if (previous) {
    keys.push({
      kid: EXTENSION_JWT_KID_PREVIOUS,
      alg: 'RS256',
      kty: 'RSA',
      use: 'sig',
      pem: previous,
    });
  }

  return { keys };
}

/** Validates that configured keys are parseable (startup / route guard). */
export function assertExtensionJwtKeysConfigured(): void {
  const priv = getExtensionJwtPrivateKeyPem();
  const pub = getExtensionJwtPublicKeyPem();
  if (!priv || !pub) {
    throw new Error(
      '[extension-jwt-keys] EXTENSION_JWT_PRIVATE_KEY and EXTENSION_JWT_PUBLIC_KEY must be set',
    );
  }
  createPublicKey(pub);
  const prev = getExtensionJwtPreviousPublicKeyPem();
  if (prev) createPublicKey(prev);
}

'use client';

import { useClerk } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';

function notifyExtensionAuthClear() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('webmimic:extension-auth-clear'));
}

/**
 * When the user signs out on webmimic.com, revoke extension JWTs server-side
 * and signal the extension to clear its local session. Extension-only sign-out
 * is unchanged (extension opens /sign-out separately).
 */
export function ExtensionWebSignOutSync() {
  const clerk = useClerk();
  const patchedRef = useRef(false);

  useEffect(() => {
    if (!clerk.loaded || patchedRef.current) return;

    type ClerkSignOut = typeof clerk.signOut;
    const originalSignOut = clerk.signOut.bind(clerk) as ClerkSignOut;

    (clerk as { signOut: ClerkSignOut }).signOut = (async (
      ...args: Parameters<ClerkSignOut>
    ) => {
      try {
        await fetch('/api/extension/revoke-token', {
          method: 'POST',
          credentials: 'include',
        });
      } catch {
        // Clerk sign-out still proceeds.
      }
      notifyExtensionAuthClear();
      await originalSignOut(...args);
    }) as ClerkSignOut;

    patchedRef.current = true;

    return () => {
      (clerk as { signOut: ClerkSignOut }).signOut = originalSignOut;
      patchedRef.current = false;
    };
  }, [clerk, clerk.loaded]);

  return null;
}

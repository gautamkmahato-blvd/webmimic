'use client';

/**
 * Landing page after Clerk sign-in when using the browser extension.
 * extension-auth-bridge.js (content script) POSTs /api/extension/issue-token and delivers the token to the extension.
 */
export default function ExtensionAuthCallbackPage() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-base font-semibold text-zinc-800">Signed in successfully</p>
      <p className="max-w-sm text-sm text-zinc-600">
        Click below to finish connecting the extension. This tab should close right after.
      </p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        Continue
      </button>
    </div>
  );
}

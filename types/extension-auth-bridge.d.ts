export {};

declare global {
  interface Window {
    /** Injected by webmimic-extension/extension-auth-bridge.js on the callback page. */
    extensionAuthBridgeRetry?: () => void;
  }
}

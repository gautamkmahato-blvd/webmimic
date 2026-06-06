import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function ChromeWebStorePage() {
  return (
    <FooterPageShell
      title="Chrome Web Store"
      description="Install the Webmimic browser extension to capture design assets and code directly from any website."
    >
      <FooterSection heading="What the extension does">
        <p>Scan pages for images, SVGs, videos, colors, typography, and animations in one pass.</p>
        <p>Inspect any element’s HTML, CSS, and box model without leaving the page.</p>
        <p>Send captured assets to your Webmimic dashboard for organization and export.</p>
      </FooterSection>
      <FooterSection heading="Getting started">
        <p>Search for “Webmimic” in the Chrome Web Store or use the install link from our homepage.</p>
        <p>Sign in with your Webmimic account to sync saves across devices.</p>
        <p>Pin the extension for quick access while browsing inspiration and competitor sites.</p>
      </FooterSection>
      <FooterSection heading="Requirements">
        <p>Google Chrome 120 or later on desktop. Mobile browser support is on the roadmap.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

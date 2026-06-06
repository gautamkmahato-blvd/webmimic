import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function DocumentationPage() {
  return (
    <FooterPageShell
      title="Documentation"
      description="Guides and references for using Webmimic — from your first capture to exporting a full design system."
    >
      <FooterSection heading="Quick start">
        <p>Install the extension, sign in, and run your first page scan to populate the assets dashboard.</p>
        <p>Learn how to filter by asset type, export JSON bundles, and open items in the design editor.</p>
      </FooterSection>
      <FooterSection heading="Core workflows">
        <p><strong>Asset capture:</strong> save images, icons, colors, fonts, SVGs, videos, and Lottie files from live sites.</p>
        <p><strong>Code extraction:</strong> copy HTML/CSS for any element or clone full sections with AI.</p>
        <p><strong>Design systems:</strong> export Tailwind configs, design.md files, and token sets for your stack.</p>
      </FooterSection>
      <FooterSection heading="API & integrations">
        <p>Documentation for webhooks, billing, and extension auth will expand as public API endpoints ship.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function DesignTokensGuidePage() {
  return (
    <FooterPageShell
      title="Design Tokens Guide"
      description="Learn how Webmimic extracts colors, typography, spacing, and radii — and how to export them for your projects."
    >
      <FooterSection heading="What are design tokens?">
        <p>Design tokens are named values — colors, font sizes, spacing units — that keep design and code in sync.</p>
        <p>Webmimic reads them from live CSS so you capture what users actually see, not static mockups.</p>
      </FooterSection>
      <FooterSection heading="Extraction workflow">
        <p>Run a design-system scan on any URL to collect palette swatches with hex values and usage context.</p>
        <p>Typography tokens include font family, weight, size, line height, and letter spacing per role.</p>
        <p>Export as Tailwind theme extensions, JSON token files, or a design.md summary for AI tooling.</p>
      </FooterSection>
      <FooterSection heading="Best practices">
        <p>Capture multiple pages from the same brand to build a complete token set.</p>
        <p>Name and group tokens in the dashboard before exporting to your repo or Figma library.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

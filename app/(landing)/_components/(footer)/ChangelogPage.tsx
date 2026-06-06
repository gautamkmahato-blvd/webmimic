import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function ChangelogPage() {
  return (
    <FooterPageShell
      title="Changelog"
      description="Track what’s new in Webmimic — extension updates, dashboard improvements, and API changes."
    >
      <FooterSection heading="March 2026">
        <p>Launched the redesigned assets dashboard with grouped previews for images, colors, typography, SVGs, videos, and Lottie animations.</p>
        <p>Added credits-based access for motion component code and improved design-system export flows.</p>
      </FooterSection>
      <FooterSection heading="February 2026">
        <p>Introduced AI component cloning from any selected page section with React, Next.js, Vue, and HTML output.</p>
        <p>Shipped WCAG 2.1 accessibility scanning with prioritized fix recommendations.</p>
      </FooterSection>
      <FooterSection heading="January 2026">
        <p>Released the Chrome extension for asset extraction, color palettes, typography capture, and element code inspection.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

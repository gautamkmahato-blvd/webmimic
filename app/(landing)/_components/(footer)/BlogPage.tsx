import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function BlogPage() {
  return (
    <FooterPageShell
      title="Blog"
      description="Product updates, design-engineering tips, and stories from teams building faster with Webmimic."
    >
      <FooterSection heading="Featured topics">
        <p>How to turn any landing page into a reusable design-system starter in under ten minutes.</p>
        <p>Why capturing live typography beats screenshots for handoff to engineering.</p>
        <p>Building accessible UIs: using Webmimic’s WCAG scan before you ship.</p>
      </FooterSection>
      <FooterSection heading="Coming soon">
        <p>We’re preparing launch posts on motion extraction, AI component cloning, and team workflows.</p>
        <p>Subscribe from the homepage CTA to get new articles when they publish.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

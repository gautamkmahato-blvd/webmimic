import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function PrivacyTermsPage() {
  return (
    <FooterPageShell
      title="Privacy Policy & Terms of Service"
      description="How Webmimic handles your data and the terms that govern use of our product at launch."
    >
      <FooterSection heading="Privacy Policy">
        <p>We collect account information you provide at sign-up (such as email via our auth provider), usage data to improve the product, and assets you explicitly save through the extension.</p>
        <p>Captured page content is stored to power your dashboard and exports. We do not sell personal data to third parties.</p>
        <p>Payment processing is handled by our billing partners; we do not store full card numbers on our servers.</p>
        <p>You may request account deletion by contacting <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">privacy@webmimic.com</a>. We will remove associated data within a reasonable period, subject to legal retention requirements.</p>
      </FooterSection>
      <FooterSection heading="Terms of Service">
        <p>By using Webmimic you agree to use the service lawfully and only on sites you have permission to analyze or from which you may extract assets.</p>
        <p>You are responsible for how exported code, assets, and design tokens are used in your projects, including third-party licenses on source websites.</p>
        <p>Paid plans, credits, and subscriptions are billed according to the pricing shown at checkout. Fees are non-refundable except where required by law.</p>
        <p>We may update these terms as the product evolves. Continued use after changes constitutes acceptance of the revised terms.</p>
      </FooterSection>
      <FooterSection heading="Contact">
        <p>Questions about privacy or terms: <a href="mailto:legal@webmimic.com" className="text-[#1463ff] hover:underline">legal@webmimic.com</a></p>
        <p>Last updated: March 2026</p>
      </FooterSection>
    </FooterPageShell>
  );
}

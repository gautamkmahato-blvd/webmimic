import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function SupportPage() {
  return (
    <FooterPageShell
      title="Support"
      description="Get help with the Webmimic extension, dashboard, billing, and exports."
    >
      <FooterSection heading="Common questions">
        <p><strong>Extension not saving assets?</strong> Confirm you’re signed in and the page has finished loading before scanning.</p>
        <p><strong>Missing fonts or colors?</strong> Some sites load styles dynamically — scroll the page and scan again.</p>
        <p><strong>Export issues?</strong> Large asset sets may take a moment; try filtering by type before downloading.</p>
      </FooterSection>
      <FooterSection heading="Contact support">
        <p>Email <a href="mailto:support@webmimic.com" className="text-[#1463ff] hover:underline">support@webmimic.com</a> with your account email, browser version, and a link to the page you were capturing.</p>
        <p>We typically respond within one business day during launch.</p>
      </FooterSection>
      <FooterSection heading="Status">
        <p>Check the footer status indicator on our site for platform uptime, or visit this page during incidents for updates.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

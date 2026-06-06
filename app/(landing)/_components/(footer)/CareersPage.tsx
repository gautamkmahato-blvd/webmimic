import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function CareersPage() {
  return (
    <FooterPageShell
      title="Careers"
      description="Join us in building the fastest way to capture and reuse design from the web."
    >
      <FooterSection heading="How we work">
        <p>We’re a remote-friendly team focused on shipping useful tools quickly, with high ownership and direct user feedback loops.</p>
        <p>You’ll work across the Chrome extension, Next.js dashboard, AI pipelines, and design-system exports.</p>
      </FooterSection>
      <FooterSection heading="Open roles">
        <p>We’re hiring founding engineers and design partners around launch. Roles will be posted here as they open.</p>
        <p>Interested before listings go live? Email <a href="mailto:careers@webmimic.com" className="text-[#1463ff] hover:underline">careers@webmimic.com</a> with your portfolio or GitHub.</p>
      </FooterSection>
      <FooterSection heading="Benefits">
        <p>Competitive equity, flexible hours, and a product you’ll use daily if you care about design and frontend craft.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

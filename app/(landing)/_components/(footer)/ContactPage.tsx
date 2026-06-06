import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function ContactPage() {
  return (
    <FooterPageShell
      title="Contact"
      description="Reach the Webmimic team for support, partnerships, press, or general inquiries."
    >
      <FooterSection heading="General">
        <p>Email <a href="mailto:hello@webmimic.com" className="text-[#1463ff] hover:underline">hello@webmimic.com</a> for product questions and feedback.</p>
      </FooterSection>
      <FooterSection heading="Support">
        <p>Existing customers: <a href="mailto:support@webmimic.com" className="text-[#1463ff] hover:underline">support@webmimic.com</a> — include your account email and browser version.</p>
      </FooterSection>
      <FooterSection heading="Partnerships & press">
        <p>Collaborations and media: <a href="mailto:partners@webmimic.com" className="text-[#1463ff] hover:underline">partners@webmimic.com</a></p>
      </FooterSection>
      <FooterSection heading="Office">
        <p>Webmimic is a distributed team. No public walk-in office at launch — we’ll list locations here if that changes.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function CommunityPage() {
  return (
    <FooterPageShell
      title="Community"
      description="Connect with designers and developers using Webmimic to speed up research, handoff, and prototyping."
    >
      <FooterSection heading="Where to find us">
        <p>Share workflows, ask questions, and showcase what you’ve built with Webmimic on our community channels.</p>
        <p>Follow product announcements on X and LinkedIn for release notes and tips.</p>
      </FooterSection>
      <FooterSection heading="Community guidelines">
        <p>Be respectful, credit original sites when sharing captures, and avoid posting proprietary assets without permission.</p>
        <p>Report bugs and feature ideas — we prioritize feedback from active builders.</p>
      </FooterSection>
      <FooterSection heading="Launch status">
        <p>Official Discord and forum spaces are opening alongside our public launch. Check back here for invite links.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

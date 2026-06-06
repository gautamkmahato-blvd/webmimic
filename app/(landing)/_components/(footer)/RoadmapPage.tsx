import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function RoadmapPage() {
  return (
    <FooterPageShell
      title="Roadmap"
      description="A look at what we’re building next to help you capture, inspect, and reuse design from any website."
    >
      <FooterSection heading="Now">
        <p>Polish the assets library, motion catalog, and design-system export experience for launch.</p>
        <p>Improve extension performance on large pages and SPAs.</p>
      </FooterSection>
      <FooterSection heading="Next">
        <p>Team workspaces with shared asset libraries and project folders.</p>
        <p>One-click Figma push for tokens, components, and captured screenshots.</p>
        <p>Deeper animation extraction for GSAP timelines and Framer Motion variants.</p>
      </FooterSection>
      <FooterSection heading="Later">
        <p>Browser support beyond Chrome, starting with Edge and Arc.</p>
        <p>API access for programmatic asset ingestion and design-token sync.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

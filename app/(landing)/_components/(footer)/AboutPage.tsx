import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function AboutPage() {
  return (
    <FooterPageShell
      title="About"
      description="Webmimic helps designers and developers capture, inspect, and reuse design from any website — faster."
    >
      <FooterSection heading="Our mission">
        <p>Great interfaces are everywhere on the web, but recreating them is slow. Webmimic bridges inspiration and production code.</p>
        <p>We build tools that respect how teams actually work: browsing live sites, extracting real assets, and shipping with AI-assisted workflows.</p>
      </FooterSection>
      <FooterSection heading="What we believe">
        <p>Live CSS beats screenshots. Tokens should travel between design and code. Accessibility checks belong in every capture flow.</p>
        <p>We’re launching with a focused Chrome extension and dashboard, and expanding based on how builders use them.</p>
      </FooterSection>
      <FooterSection heading="The team">
        <p>Webmimic is built by a small team of product engineers and designers obsessed with design tooling and developer experience.</p>
      </FooterSection>
    </FooterPageShell>
  );
}

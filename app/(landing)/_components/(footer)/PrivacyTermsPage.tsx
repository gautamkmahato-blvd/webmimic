import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function PrivacyTermsPage() {
  return (
    <FooterPageShell
      title="Privacy Policy & Terms of Service"
      description="How Webmimic handles your data and the terms that govern use of our product."
    >
      <FooterSection heading="Privacy Policy">
        <p>
          We collect account information you provide at sign-up (such as email via our authentication
          provider), usage data to improve the product, and content you explicitly save or export through
          the Webmimic web app or Chrome extension.
        </p>
        <p>
          Captured page content is stored to power your dashboard, exports, and AI-assisted workflows. We
          do not sell personal data to third parties.
        </p>
        <p>
          Payment processing is handled by Polar (our billing provider); we do not store full card
          numbers on our servers.
        </p>
        <p>
          You may request account deletion by contacting{" "}
          <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">
            privacy@webmimic.com
          </a>
          . We will remove associated data within a reasonable period, subject to legal retention
          requirements.
        </p>
      </FooterSection>

      <FooterSection heading="Chrome extension">
        <p>
          The Webmimic Chrome extension analyzes pages you open while the side panel is in use. Some
          features run entirely in your browser; others upload data to Webmimic when you explicitly
          start them (for example Save, export, AI recreate, or design-system capture).
        </p>
        <p>
          <strong>What the extension may collect or process</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Page inspection data</strong> — HTML snippets, computed CSS, design tokens, color
            and typography samples, asset URLs, and accessibility audit results derived from the active
            tab.
          </li>
          <li>
            <strong>Screenshots</strong> — visible viewport captures and full-page stitched screenshots
            (desktop and mobile viewport widths) when you run design-system export, evidence packages, or
            AI analysis flows.
          </li>
          <li>
            <strong>Uploads to Webmimic</strong> — saved assets, audit reports, code snippets, screenshot
            tiles, and evidence packages sent to our servers when you save or run cloud-backed features.
          </li>
          <li>
            <strong>Account and session data</strong> — a short-lived extension auth token stored in
            browser session storage while signed in; cleared on sign-out.
          </li>
          <li>
            <strong>Lottie animation scan</strong> — when you run Scan animations, the extension
            temporarily installs page-local detectors (only after you start the scan) to identify Lottie
            JSON from network responses; results stay in your browser until you export or save.
          </li>
        </ul>
        <p>
          <strong>Sign-in, credits, and paid features</strong>
        </p>
        <p>
          Saving to your dashboard, running accessibility audits that sync to your account, AI code
          recreation, design-system analysis, and similar cloud features require a Webmimic account.
          Some actions consume credits or require a paid plan as shown in the extension and on
          webmimic.com.
        </p>
        <p>
          <strong>Local-only features</strong>
        </p>
        <p>
          Overview page counts, local asset extraction previews, and downloads you trigger without
          saving do not upload page content until you choose a cloud save or AI upload action.
        </p>
        <p>
          <strong>AI and third-party processing</strong>
        </p>
        <p>
          When you use AI features, screenshots and structured page data may be sent to Webmimic servers
          and processed with third-party AI providers (such as Google Gemini) to generate analysis or
          code. We use Clerk for authentication, Polar for payments and subscriptions, and infrastructure
          providers to host and secure the service.
        </p>
        <p>
          <strong>Retention</strong>
        </p>
        <p>
          Saved assets and reports remain in your account until you delete them or close your account.
          Extension session tokens expire automatically (typically within a few hours). Server-side
          revocation applies when you sign out.
        </p>
        <p>
          <strong>Your responsibility</strong>
        </p>
        <p>
          Only analyze websites you have permission to inspect. Do not use the extension to capture or
          upload sensitive personal data from third-party sites without appropriate authority.
        </p>
      </FooterSection>

      <FooterSection heading="Terms of Service">
        <p>
          By using Webmimic you agree to use the service lawfully and only on sites you have permission
          to analyze or from which you may extract assets.
        </p>
        <p>
          You are responsible for how exported code, assets, and design tokens are used in your projects,
          including third-party licenses on source websites.
        </p>
        <p>
          Paid plans, credits, and subscriptions are billed according to the pricing shown at checkout.
          Fees are non-refundable except where required by law.
        </p>
        <p>
          We may update these terms as the product evolves. Continued use after changes constitutes
          acceptance of the revised terms.
        </p>
      </FooterSection>

      <FooterSection heading="Contact">
        <p>
          Questions about privacy or terms:{" "}
          <a href="mailto:legal@webmimic.com" className="text-[#1463ff] hover:underline">
            legal@webmimic.com
          </a>
        </p>
        <p>Last updated: May 2026</p>
      </FooterSection>
    </FooterPageShell>
  );
}

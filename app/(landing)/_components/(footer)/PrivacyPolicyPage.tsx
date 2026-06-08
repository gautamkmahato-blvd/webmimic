import type { ReactNode } from "react";
import { FooterPageShell, FooterSection } from "./FooterPageShell";

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-[#090b12]">
      {children}
    </h3>
  );
}

export function PrivacyPolicyPage() {
  return (
    <FooterPageShell
      title="Privacy Policy"
      description="How Webmimic handles your information—with transparency, user control, and no selling of personal data."
    >
      <p className="text-[14px] text-[#657185]">
        <strong>Last updated: May 20, 2026</strong>
      </p>

      <FooterSection heading="Overview">
        <p>
          At Webmimic, privacy is a core part of how we build products.
        </p>
        <p>
          Our mission is to help designers and developers inspect, analyze, and learn from websites
          faster. We believe that powerful tools should also be transparent about how they handle
          information.
        </p>
        <p>
          Webmimic (&quot;Webmimic&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the
          webmimic.com website, related APIs, and the Webmimic Chrome Extension (collectively, the
          &quot;Service&quot;).
        </p>
        <p>This Privacy Policy explains:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>What information we collect</li>
          <li>How we use it</li>
          <li>When information is shared</li>
          <li>How long it is retained</li>
          <li>The choices and controls available to you</li>
        </ul>
        <p>
          By using the Service, you agree to this Privacy Policy and our{" "}
          <a href="/terms" className="text-[#1463ff] hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </FooterSection>

      <FooterSection heading="Privacy at a Glance">
        <p>
          We designed Webmimic with a simple philosophy: collect only what is needed to provide the
          features you choose to use.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>We do not sell your personal information.</li>
          <li>Most inspection and extraction features run directly in your browser.</li>
          <li>
            Website data is only uploaded when you explicitly save, sync, export, or use cloud-powered
            features.
          </li>
          <li>You control what is stored in your account.</li>
          <li>You can request deletion of your account and associated data at any time.</li>
        </ul>
      </FooterSection>

      <FooterSection heading="Information We Collect">
        <Subheading>Account Information</Subheading>
        <p>
          When you create a Webmimic account, we receive basic account information through our
          authentication provider, Clerk, such as your name, email address, and a secure account
          identifier.
        </p>
        <p>This information allows us to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Create and manage your account</li>
          <li>Associate saved assets and reports with you</li>
          <li>Track subscription status and credits</li>
          <li>Secure access to the Service</li>
        </ul>

        <Subheading>Usage Information</Subheading>
        <p>
          To keep Webmimic reliable and improve the product, we collect limited technical information
          about how the Service is used.
        </p>
        <p>This may include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Feature usage</li>
          <li>Credit consumption</li>
          <li>Browser or extension version</li>
          <li>Error logs</li>
          <li>API request timestamps</li>
          <li>Performance metrics</li>
        </ul>
        <p>
          This information helps us improve functionality, diagnose issues, and maintain security.
        </p>

        <Subheading>Content You Choose to Save</Subheading>
        <p>Webmimic allows you to save and export content generated through the platform.</p>
        <p>Depending on the features you use, this may include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Design assets</li>
          <li>Design system exports</li>
          <li>Accessibility reports</li>
          <li>Screenshots</li>
          <li>Video captures</li>
          <li>HTML and CSS snippets</li>
          <li>Design tokens</li>
          <li>AI-generated outputs</li>
        </ul>
        <p>
          We only store content that you explicitly save, upload, export, or sync to your account.
        </p>

        <Subheading>Payment Information</Subheading>
        <p>Payments, subscriptions, and credit purchases are securely processed through Polar.</p>
        <p>Webmimic does not store full payment card details on its servers.</p>
        <p>We may receive billing-related information such as:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Subscription status</li>
          <li>Transaction references</li>
          <li>Purchase metadata</li>
        </ul>
        <p>This information is used solely to manage billing and account access.</p>

        <Subheading>Communications</Subheading>
        <p>
          If you contact us for support, feedback, or legal inquiries, we may retain copies of those
          communications so we can respond appropriately and maintain support records.
        </p>
      </FooterSection>

      <FooterSection heading="How the Chrome Extension Works">
        <p>
          The Webmimic Chrome Extension is designed to work only when you actively choose to use it.
        </p>
        <p>The extension does not automatically collect information from websites you browse.</p>
        <p>
          Analysis begins only when you open Webmimic and use one of its tools, such as inspection,
          extraction, accessibility auditing, design-system analysis, or AI-assisted recreation.
        </p>

        <Subheading>Information Processed During Inspection</Subheading>
        <p>When you choose to inspect or analyze a page, Webmimic may process information such as:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>HTML structure</li>
          <li>CSS styles</li>
          <li>Design tokens</li>
          <li>Typography and color information</li>
          <li>Asset references</li>
          <li>Accessibility audit results</li>
          <li>Animation metadata</li>
        </ul>
        <p>This information is used exclusively to generate the outputs you request.</p>

        <Subheading>Screenshots and Visual Captures</Subheading>
        <p>Some features allow you to capture visual representations of a webpage.</p>
        <p>Depending on the feature used, this may include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Element screenshots</li>
          <li>Visible viewport captures</li>
          <li>Full-page screenshots</li>
          <li>Mobile viewport captures</li>
          <li>Evidence packages</li>
        </ul>
        <p>These captures are created only when you initiate the action.</p>

        <Subheading>Animation Analysis</Subheading>
        <p>
          When you run animation analysis tools, Webmimic may temporarily inspect page animations to
          identify technologies such as:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Lottie</li>
          <li>GSAP</li>
          <li>Framer Motion</li>
        </ul>
        <p>Results remain local to your browser unless you choose to save or export them.</p>

        <Subheading>Accessibility Audits</Subheading>
        <p>When you run accessibility scans, Webmimic analyzes the active page for WCAG-related issues, including:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Color contrast</li>
          <li>Heading structure</li>
          <li>Form accessibility</li>
          <li>ARIA usage</li>
          <li>Keyboard navigation issues</li>
        </ul>
        <p>Reports remain local unless you choose to save or sync them to your account.</p>
      </FooterSection>

      <FooterSection heading="When Information Is Shared With Webmimic">
        <p>Most Webmimic functionality operates directly in your browser.</p>
        <p>Information is not automatically uploaded from every page you visit.</p>
        <p>Information is shared with Webmimic only when you take an explicit action such as:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Saving content to your dashboard</li>
          <li>Running a cloud-powered AI feature</li>
          <li>Syncing an accessibility report</li>
          <li>Exporting content using cloud-backed workflows</li>
          <li>Uploading files for analysis</li>
        </ul>
        <p>
          In other words, Webmimic works because you choose to use it—not because it continuously
          monitors your browsing activity.
        </p>
      </FooterSection>

      <FooterSection heading="Local-Only Features">
        <p>Several Webmimic features work entirely on your device.</p>
        <p>Examples include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Local previews</li>
          <li>Asset extraction previews</li>
          <li>Overview statistics</li>
          <li>Downloads that are not synced to your account</li>
        </ul>
        <p>These actions remain local unless you explicitly choose to save or upload the results.</p>
      </FooterSection>

      <FooterSection heading="Extension Permissions">
        <p>The extension requests only the permissions required to provide its features.</p>
        <p>These permissions may include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Active tab access</li>
          <li>Scripting capabilities</li>
          <li>Local storage</li>
          <li>Download permissions</li>
          <li>Side panel functionality</li>
          <li>Debugger access for full-page screenshots</li>
        </ul>
        <p>These permissions are used solely to perform the actions you initiate through Webmimic.</p>
        <p>
          We do not use extension permissions to monitor websites that you are not actively inspecting
          with the product.
        </p>
      </FooterSection>

      <FooterSection heading="How We Use Information">
        <p>We use information to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide and maintain the Service</li>
          <li>Authenticate users</li>
          <li>Store saved assets and reports</li>
          <li>Deliver AI-powered features</li>
          <li>Manage subscriptions and credits</li>
          <li>Improve performance and reliability</li>
          <li>Prevent abuse and misuse</li>
          <li>Comply with legal obligations</li>
          <li>Communicate important updates</li>
        </ul>
      </FooterSection>

      <FooterSection heading="How AI Features Work">
        <p>
          Some Webmimic features use artificial intelligence to generate insights, code, audits,
          design-system analysis, or recreation workflows.
        </p>
        <p>
          When you use these features, the content required to fulfill your request may be securely
          processed through Webmimic and trusted AI providers.
        </p>
        <p>Only the information necessary to generate the requested result is shared.</p>
        <p>
          AI-generated outputs should be reviewed before production use, as results may not always be
          perfect or complete.
        </p>
      </FooterSection>

      <FooterSection heading="Third-Party Services">
        <p>We rely on trusted providers to operate portions of the Service.</p>
        <p>These providers include:</p>

        <Subheading>Clerk</Subheading>
        <p>Authentication, sign-in, and account management.</p>

        <Subheading>Polar</Subheading>
        <p>Billing, subscriptions, and payment processing.</p>

        <Subheading>Google Gemini</Subheading>
        <p>AI-powered analysis and generation features.</p>

        <Subheading>Infrastructure Providers</Subheading>
        <p>Hosting, storage, databases, security, and content delivery.</p>

        <p>
          These providers process information only for the purpose of delivering Webmimic functionality.
        </p>
        <p>
          We do not authorize them to use your information for unrelated advertising or marketing
          purposes.
        </p>
      </FooterSection>

      <FooterSection heading="How We Share Information">
        <p>We share information only in limited circumstances:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>With service providers required to operate the Service</li>
          <li>When required by law or legal process</li>
          <li>To protect users, Webmimic, or the public</li>
          <li>As part of a merger, acquisition, or business transfer</li>
        </ul>
        <p>We do not sell personal information or share it with data brokers.</p>
      </FooterSection>

      <FooterSection heading="Data Retention">
        <p>Information stored in your account remains available until:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>You delete it</li>
          <li>You close your account</li>
          <li>Retention is required for legal, security, billing, or compliance reasons</li>
        </ul>
        <p>
          Aggregated and anonymized analytics may be retained longer because they no longer identify
          individuals.
        </p>
      </FooterSection>

      <FooterSection heading="Data Security">
        <p>We use industry-standard security measures, including:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>HTTPS encryption</li>
          <li>Secure authentication</li>
          <li>Access controls</li>
          <li>Protected APIs</li>
          <li>Short-lived session tokens</li>
        </ul>
        <p>
          While we work hard to protect your information, no online system can guarantee absolute
          security.
        </p>
      </FooterSection>

      <FooterSection heading="Your Choices and Control">
        <p>You remain in control of your information.</p>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access your information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion</li>
          <li>Export your data</li>
          <li>Restrict certain processing activities</li>
        </ul>
        <p>You may request account deletion or data export by contacting:</p>
        <p>
          <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">
            privacy@webmimic.com
          </a>
        </p>
      </FooterSection>

      <FooterSection heading="Responsible Use">
        <p>Please only analyze websites that you are authorized to inspect.</p>
        <p>
          Do not use Webmimic to collect or upload sensitive personal information from third-party
          websites without proper authorization.
        </p>
        <p>
          You are responsible for complying with applicable laws and the terms governing the websites
          you inspect.
        </p>
      </FooterSection>

      <FooterSection heading="Children">
        <p>
          Webmimic is not intended for children under 13 years of age (or the minimum age required in
          your jurisdiction).
        </p>
        <p>We do not knowingly collect personal information from children.</p>
      </FooterSection>

      <FooterSection heading="International Users">
        <p>
          Webmimic operates globally through infrastructure providers located in multiple regions,
          including the United States.
        </p>
        <p>
          By using the Service, you understand that information may be processed in countries whose
          privacy laws may differ from those in your jurisdiction.
        </p>
      </FooterSection>

      <FooterSection heading="Cookies and Similar Technologies">
        <p>Webmimic uses cookies and similar technologies for:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Authentication</li>
          <li>Session management</li>
          <li>Security</li>
          <li>Basic analytics</li>
        </ul>
        <p>
          Disabling certain cookies may affect account functionality and sign-in capabilities.
        </p>
      </FooterSection>

      <FooterSection heading="Chrome Web Store Compliance">
        <p>
          Webmimic&apos;s use of information obtained through Chrome APIs complies with the Chrome Web
          Store User Data Policy, including Limited Use requirements.
        </p>
        <p>
          Information accessed through Chrome APIs is used solely to provide and improve
          Webmimic&apos;s user-facing features and is never sold or used for unrelated advertising
          purposes.
        </p>
      </FooterSection>

      <FooterSection heading="Changes to This Policy">
        <p>As Webmimic evolves, we may update this Privacy Policy from time to time.</p>
        <p>
          When significant changes are made, we will update this page and revise the &quot;Last
          Updated&quot; date above.
        </p>
        <p>
          Continued use of the Service after changes become effective constitutes acceptance of the
          updated policy.
        </p>
      </FooterSection>

      <FooterSection heading="Contact Us">
        <p>Questions about privacy or data handling:</p>
        <p>
          <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">
            privacy@webmimic.com
          </a>
        </p>
        <p>Legal inquiries:</p>
        <p>
          <a href="mailto:legal@webmimic.com" className="text-[#1463ff] hover:underline">
            legal@webmimic.com
          </a>
        </p>
      </FooterSection>
    </FooterPageShell>
  );
}

import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function PrivacyPolicyPage() {
  return (
    <FooterPageShell
      title="Privacy Policy"
      description="How Webmimic collects, uses, stores, and shares information when you use webmimic.com and the Webmimic Chrome extension."
    >
      <FooterSection heading="Overview">
        <p>
          Webmimic (&quot;Webmimic,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
          webmimic.com website, related APIs, and the Webmimic Chrome extension (together, the
          &quot;Service&quot;). This Privacy Policy explains what information we collect, how we use it,
          who we share it with, how long we keep it, and the choices you have.
        </p>
        <p>
          By using the Service, you agree to this Privacy Policy. Our{" "}
          <a href="/terms" className="text-[#1463ff] hover:underline">
            Terms of Service
          </a>{" "}
          govern your use of the product.
        </p>
        <p>
          <strong>We do not sell your personal information.</strong> We collect data only to operate,
          secure, and improve the Service, process payments, and deliver features you request.
        </p>
      </FooterSection>

      <FooterSection heading="Information we collect">
        <p>
          <strong>Account information.</strong> When you create an account, we collect information you
          provide (such as name and email) through our authentication provider, Clerk. We receive a
          stable account identifier (Clerk user ID) used to associate your saved assets, audits, credits,
          and subscription status with your account.
        </p>
        <p>
          <strong>Usage and technical data.</strong> We collect information about how you use the web
          app and extension, such as feature usage, credit consumption, error logs, and basic device or
          browser metadata (for example extension version and API request timestamps). This helps us
          operate, debug, and improve the Service.
        </p>
        <p>
          <strong>Content you save or export.</strong> We collect and store content you explicitly save,
          upload, or export through the web app or Chrome extension, including design assets, CSS and
          HTML snippets, design tokens, accessibility audit reports, screenshots, video captures,
          evidence packages, and AI-generated outputs linked to your account.
        </p>
        <p>
          <strong>Payment information.</strong> Paid plans and credit purchases are processed by Polar,
          our billing provider. We receive subscription status, transaction references, and billing
          metadata from Polar. We do not store full payment card numbers on our servers.
        </p>
        <p>
          <strong>Communications.</strong> If you contact us (for example at privacy@webmimic.com or
          legal@webmimic.com), we keep the content of your message and our replies as needed to support
          you and maintain records.
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
            and typography samples, asset URLs, DOM structure samples, and accessibility audit results
            derived from the active tab when you run inspection, extraction, or audit features.
          </li>
          <li>
            <strong>Screenshots and captures</strong> — visible viewport captures, element screenshots,
            stitched full-page screenshots (desktop and mobile viewport widths), and related image tiles
            when you run design-system export, evidence packages, recreation flows, or AI analysis.
            Full-page capture may use Chrome&apos;s debugger API to stitch tall pages accurately.
          </li>
          <li>
            <strong>Uploads to Webmimic</strong> — saved assets, audit reports, code snippets,
            screenshot tiles, evidence packages, and structured page data sent to our servers when you
            save or run cloud-backed features.
          </li>
          <li>
            <strong>Account and session data</strong> — a short-lived extension authentication token
            (JWT) stored in <code>chrome.storage.session</code> while signed in; cleared on sign-out.
            Tokens are validated server-side and can be revoked when you sign out or when your web
            session ends.
          </li>
          <li>
            <strong>Animation and Lottie scan</strong> — when you run Scan animations, the extension
            temporarily installs page-local detectors (only after you start the scan) to identify Lottie
            JSON from network responses and in-page players. Results stay in your browser until you
            export or save.
          </li>
          <li>
            <strong>Accessibility audits</strong> — when you run an audit, the extension inspects the
            page for WCAG-related issues. Reports may be stored locally in the panel and synced to your
            Webmimic account when you save them.
          </li>
        </ul>
        <p>
          <strong>When data leaves your browser</strong>
        </p>
        <p>
          Page content is <em>not</em> uploaded automatically on every site you visit. Uploads occur when
          you take an explicit action such as Save to dashboard, run a cloud-backed AI feature, export an
          evidence package with server upload enabled, or sync an accessibility report to your account.
          Overview counts, local previews, and downloads you trigger without saving generally remain on
          your device until you choose a cloud action.
        </p>
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
          <strong>Extension permissions</strong>
        </p>
        <p>
          The extension requests permissions needed for its features, including access to the active tab
          and scripting on pages you inspect, storage for session and preferences, downloads for exports,
          the side panel UI, and (for full-page screenshots) the debugger permission. Host access to web
          pages is used only to run inspection, capture, and audit tools on tabs you use with Webmimic.
          We do not use the extension to browse or collect data from pages you are not actively
          inspecting through the product.
        </p>
      </FooterSection>

      <FooterSection heading="How we use your information">
        <p>We use the information described above to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide, maintain, and secure the Service and your account</li>
          <li>Store and display your saved assets, audits, and exports in your dashboard</li>
          <li>Process AI-assisted analysis and code generation you request</li>
          <li>Manage credits, subscriptions, and billing through Polar</li>
          <li>Authenticate you via Clerk and issue extension session tokens</li>
          <li>Monitor performance, prevent abuse, and fix errors</li>
          <li>Comply with law and enforce our Terms of Service</li>
          <li>Communicate with you about the Service, security, or policy updates</li>
        </ul>
      </FooterSection>

      <FooterSection heading="AI and third-party processing">
        <p>
          When you use AI features, screenshots and structured page data may be sent to Webmimic servers
          and processed with third-party AI providers (such as Google Gemini) to generate analysis,
          design evidence, or code. AI outputs are provided for your workflow; you are responsible for
          reviewing accuracy and suitability before use in production (see our Terms of Service).
        </p>
        <p>
          We use the following categories of service providers to operate the Service:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Clerk</strong> — account sign-up, sign-in, and session management
          </li>
          <li>
            <strong>Polar</strong> — payments, subscriptions, and credit purchases
          </li>
          <li>
            <strong>Google (Gemini)</strong> — AI inference for features you explicitly trigger
          </li>
          <li>
            <strong>Cloud infrastructure providers</strong> — hosting, storage, databases, and security for
            webmimic.com and our APIs
          </li>
        </ul>
        <p>
          These providers process data on our behalf under contractual obligations appropriate to their
          role. We do not authorize them to use your personal information for their own unrelated
          marketing.
        </p>
      </FooterSection>

      <FooterSection heading="How we share information">
        <p>
          We share information only in these circumstances:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Service providers</strong> — with Clerk, Polar, AI providers, and infrastructure
            vendors as needed to run the Service
          </li>
          <li>
            <strong>Legal requirements</strong> — when required by law, regulation, legal process, or
            governmental request
          </li>
          <li>
            <strong>Protection</strong> — to protect the rights, safety, and security of Webmimic, our
            users, or the public
          </li>
          <li>
            <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of
            assets, subject to this policy
          </li>
        </ul>
        <p>
          <strong>We do not sell personal data</strong> to third parties for their advertising or data
          brokerage purposes.
        </p>
      </FooterSection>

      <FooterSection heading="Data retention">
        <p>
          Saved assets, audit reports, and other content you store in your account remain until you delete
          them or close your account, unless we must retain certain records longer for legal, security, or
          billing purposes.
        </p>
        <p>
          Extension session tokens expire automatically (typically within a few hours). Server-side
          revocation applies when you sign out.
        </p>
        <p>
          Billing and transaction records may be retained as required for accounting, tax, and dispute
          resolution.
        </p>
        <p>
          Aggregated or de-identified analytics may be kept longer because it no longer identifies you.
        </p>
      </FooterSection>

      <FooterSection heading="Data security">
        <p>
          We use technical and organizational measures designed to protect your information, including
          encryption in transit (HTTPS), access controls, authenticated APIs, and short-lived extension
          tokens. No method of transmission or storage is completely secure; we cannot guarantee absolute
          security.
        </p>
      </FooterSection>

      <FooterSection heading="Your rights and choices">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or export personal
          information we hold about you, or to object to or restrict certain processing.
        </p>
        <p>
          You can delete individual saved items from your dashboard where the product provides delete
          controls. To request account deletion or a copy of your data, contact{" "}
          <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">
            privacy@webmimic.com
          </a>
          . We will remove associated data within a reasonable period, subject to legal retention
          requirements.
        </p>
        <p>
          You may stop the extension from uploading new data by signing out of the extension and
          avoiding cloud save or AI actions. Uninstalling the extension removes locally stored extension
          data from your browser profile.
        </p>
      </FooterSection>

      <FooterSection heading="Your responsibility">
        <p>
          Only analyze websites you have permission to inspect. Do not use the extension to capture or
          upload sensitive personal data from third-party sites without appropriate authority. You are
          responsible for complying with applicable laws and the terms of sites you inspect.
        </p>
      </FooterSection>

      <FooterSection heading="Children">
        <p>
          The Service is not directed to children under 13 (or the minimum age required in your
          jurisdiction), and we do not knowingly collect personal information from children. If you
          believe a child has provided us personal information, contact{" "}
          <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">
            privacy@webmimic.com
          </a>{" "}
          and we will take appropriate steps to delete it.
        </p>
      </FooterSection>

      <FooterSection heading="International users">
        <p>
          Webmimic is operated from the United States. If you access the Service from other regions, your
          information may be processed in the United States and other countries where our providers
          operate. Those countries may have different data protection laws than your own.
        </p>
      </FooterSection>

      <FooterSection heading="Cookies and similar technologies (website)">
        <p>
          The webmimic.com site uses cookies and similar technologies for authentication (via Clerk),
          session management, security, and basic analytics. You can control cookies through your browser
          settings; disabling certain cookies may limit sign-in or account features.
        </p>
      </FooterSection>

      <FooterSection heading="Chrome Web Store and limited use">
        <p>
          If you install the extension from the Chrome Web Store, Google&apos;s terms and policies also
          apply to that distribution. Webmimic&apos;s use of information received from Chrome APIs
          adheres to the{" "}
          <a
            href="https://developer.chrome.com/docs/webstore/program-policies/limited-use"
            className="text-[#1463ff] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chrome Web Store User Data Policy
          </a>
          , including the Limited Use requirements: we use extension-related user data only to provide
          or improve the user-facing features of Webmimic, as described in this policy, and we do not
          sell or transfer it for unrelated purposes.
        </p>
      </FooterSection>

      <FooterSection heading="Changes to this policy">
        <p>
          We may update this Privacy Policy as the product evolves. We will post the revised policy on
          this page and update the &quot;Last updated&quot; date below. Material changes may also be
          communicated through the website or extension where appropriate. Continued use after changes
          constitutes acceptance of the updated policy.
        </p>
      </FooterSection>

      <FooterSection heading="Contact">
        <p>
          Questions about this Privacy Policy or our data practices:{" "}
          <a href="mailto:privacy@webmimic.com" className="text-[#1463ff] hover:underline">
            privacy@webmimic.com
          </a>
        </p>
        <p>
          Legal inquiries:{" "}
          <a href="mailto:legal@webmimic.com" className="text-[#1463ff] hover:underline">
            legal@webmimic.com
          </a>
        </p>
        <p>Last updated: May 20, 2026</p>
      </FooterSection>
    </FooterPageShell>
  );
}

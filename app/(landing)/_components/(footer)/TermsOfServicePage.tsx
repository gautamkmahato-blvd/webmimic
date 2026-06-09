import { FooterPageShell, FooterSection } from "./FooterPageShell";

export function TermsOfServicePage() {
  return (
    <FooterPageShell
      title="Terms of Service"
      description="The terms that govern your use of webmimic.com and the Webmimic Chrome extension."
    >
      <FooterSection heading="Agreement to terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) are a binding agreement between you and Webmimic
          (&quot;Webmimic,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your
          access to and use of the webmimic.com website, related APIs, and the Webmimic Chrome extension
          (together, the &quot;Service&quot;).
        </p>
        <p>
          By creating an account, installing the extension, or otherwise using the Service, you agree to
          these Terms and our{" "}
          <a href="/privacy" className="text-[#1463ff] hover:underline">
            Privacy Policy
          </a>
          , which describes how we collect and use information. If you do not agree, do not use the
          Service.
        </p>
      </FooterSection>

      <FooterSection heading="Description of the Service">
        <p>
          Webmimic is a web design inspection and capture platform. The Service lets you inspect live
          webpages, extract design assets and tokens, run accessibility audits, capture screenshots and
          recordings, and use AI-assisted workflows to analyze or recreate UI—primarily through the
          Chrome extension side panel and your Webmimic dashboard.
        </p>
        <p>
          Some features work locally in your browser without an account. Cloud save, dashboard sync, AI
          features, credit-based tools, and subscription benefits require a Webmimic account and, where
          applicable, sufficient credits or an active paid plan.
        </p>
      </FooterSection>

      <FooterSection heading="Eligibility">
        <p>
          You must be at least 13 years old (or the minimum age required in your jurisdiction) and able
          to form a binding contract to use the Service. If you use the Service on behalf of an
          organization, you represent that you have authority to bind that organization to these Terms.
        </p>
      </FooterSection>

      <FooterSection heading="Accounts and security">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for
          all activity under your account. Notify us promptly at{" "}
          <a href="mailto:gkmbusiness74@gmail.com" className="text-[#1463ff] hover:underline">
            gkmbusiness74@gmail.com
          </a>{" "}
          if you suspect unauthorized access.
        </p>
        <p>
          Extension sign-in links your browser session to your Webmimic account via short-lived tokens.
          Sign out of the extension when using shared devices.
        </p>
      </FooterSection>

      <FooterSection heading="Chrome extension">
        <p>
          The Webmimic Chrome extension is part of the Service. By installing it, you also agree to
          Google Chrome&apos;s and the Chrome Web Store&apos;s applicable terms and policies for extension
          distribution and updates.
        </p>
        <p>
          The extension requests permissions required for inspection, capture, audits, exports, and
          account features described in our Privacy Policy—including, where needed, access to the active
          tab, scripting on pages you inspect, local storage, downloads, the side panel, and debugger
          access for full-page screenshot stitching.
        </p>
        <p>
          We may update the extension automatically through the Chrome Web Store. Continued use after an
          update constitutes acceptance of the then-current Terms and Privacy Policy.
        </p>
      </FooterSection>

      <FooterSection heading="Acceptable use">
        <p>
          By using Webmimic you agree to use the service lawfully and only on sites you have permission
          to analyze or from which you may extract assets.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Inspect, scrape, copy, or upload content from websites without proper rights or authorization
          </li>
          <li>
            Use the Service to collect, store, or process sensitive personal data (such as health,
            financial, or government ID data) without lawful basis and appropriate safeguards
          </li>
          <li>Violate applicable laws, third-party terms, or intellectual property rights</li>
          <li>Attempt to bypass credit limits, authentication, rate limits, or security controls</li>
          <li>Reverse engineer, abuse, or disrupt the Service or its infrastructure</li>
          <li>Use the Service to build or train a competing product using unauthorized bulk extraction</li>
        </ul>
        <p>
          We may suspend or terminate access if we reasonably believe you have violated these Terms or
          pose a risk to the Service or other users.
        </p>
      </FooterSection>

      <FooterSection heading="Intellectual property">
        <p>
          Webmimic and its logos, software, documentation, and branding are owned by Webmimic or its
          licensors and are protected by intellectual property laws. Except for the limited rights
          expressly granted in these Terms, we reserve all rights in the Service.
        </p>
        <p>
          You are responsible for how exported code, assets, and design tokens are used in your projects,
          including third-party licenses on source websites. Webmimic does not grant you any rights in
          third-party website content; you must obtain any permissions needed from rights holders.
        </p>
      </FooterSection>

      <FooterSection heading="Your content">
        <p>
          You retain ownership of content you submit, save, or upload through the Service (&quot;Your
          Content&quot;), subject to third-party rights in underlying source material. You grant Webmimic
          a worldwide, non-exclusive license to host, store, process, display, and transmit Your Content
          solely to operate and improve the Service and provide features you request (including AI
          processing described in our Privacy Policy).
        </p>
        <p>
          You represent that you have the rights necessary to submit Your Content and that doing so does
          not violate law or third-party rights.
        </p>
      </FooterSection>

      <FooterSection heading="AI-generated output">
        <p>
          AI features may produce analysis, suggestions, or code based on page data and prompts you
          provide. AI output may be inaccurate, incomplete, or unsuitable for production. You are solely
          responsible for reviewing, testing, and validating any AI output before use. Webmimic does not
          warrant that AI output will be error-free or fit for a particular purpose.
        </p>
      </FooterSection>

      <FooterSection heading="Credits, subscriptions, and billing">
        <p>
          Paid plans, credits, and subscriptions are billed according to the pricing shown at checkout on
          webmimic.com. Payments are processed by Polar; your purchase may also be subject to
          Polar&apos;s terms.
        </p>
        <p>
          Credits and subscription entitlements are consumed when you use metered features, as displayed
          in the product. Unless stated otherwise at purchase or required by law, fees are non-refundable.
          We may change pricing or credit costs with notice; changes apply prospectively.
        </p>
        <p>
          You are responsible for applicable taxes. If a payment fails, we may suspend paid features until
          resolved.
        </p>
      </FooterSection>

      <FooterSection heading="Free and beta features">
        <p>
          We may offer free tiers, trials, or beta features. We may modify, limit, or discontinue them at
          any time. Beta features are provided as-is and may be less reliable than generally available
          functionality.
        </p>
      </FooterSection>

      <FooterSection heading="Privacy">
        <p>
          Our{" "}
          <a href="/privacy" className="text-[#1463ff] hover:underline">
            Privacy Policy
          </a>{" "}
          explains what data we collect through the website and extension, including page inspection data,
          screenshots, uploads, authentication via Clerk, billing via Polar, and AI processing. By using
          the Service, you consent to those practices.
        </p>
      </FooterSection>

      <FooterSection heading="Disclaimers">
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
          SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT INSPECTION, AUDIT, OR AI RESULTS
          WILL BE ACCURATE OR COMPLETE.
        </p>
      </FooterSection>

      <FooterSection heading="Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WEBMIMIC AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND
          SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, ARISING FROM OR
          RELATED TO THE SERVICE OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR
          RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID
          WEBMIMIC FOR THE SERVICE IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM,
          OR (B) USD $100.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations; in those cases, our liability is limited
          to the fullest extent permitted by law.
        </p>
      </FooterSection>

      <FooterSection heading="Indemnification">
        <p>
          You will defend, indemnify, and hold harmless Webmimic and its affiliates from claims, damages,
          losses, and expenses (including reasonable legal fees) arising from Your Content, your use of
          the Service, or your violation of these Terms or applicable law.
        </p>
      </FooterSection>

      <FooterSection heading="Termination">
        <p>
          You may stop using the Service at any time by closing your account (where available) or
          uninstalling the extension. We may suspend or terminate your access if you breach these Terms,
          if required by law, or if we discontinue the Service.
        </p>
        <p>
          Sections that by their nature should survive termination (including intellectual property,
          disclaimers, limitation of liability, indemnification, and governing law) will survive.
        </p>
      </FooterSection>

      <FooterSection heading="Governing law and disputes">
        <p>
          These Terms are governed by the laws of the State of Delaware, United States, without regard to
          conflict-of-law principles, except where mandatory consumer protection laws in your country of
          residence apply.
        </p>
        <p>
          Before filing a claim, you agree to contact us at{" "}
          <a href="mailto:gkmbusiness74@gmail.com" className="text-[#1463ff] hover:underline">
            gkmbusiness74@gmail.com
          </a>{" "}
          and attempt to resolve the dispute informally. If we cannot resolve a dispute within thirty
          (30) days, either party may pursue remedies in the courts located in Delaware, except where
          prohibited by applicable law.
        </p>
      </FooterSection>

      <FooterSection heading="Changes to these Terms">
        <p>
          We may update these Terms as the product evolves. We will post the revised Terms on this page
          and update the &quot;Last updated&quot; date below. Material changes may be communicated
          through the website or extension. Continued use after changes constitutes acceptance of the
          revised Terms.
        </p>
      </FooterSection>

      <FooterSection heading="Miscellaneous">
        <p>
          If any provision of these Terms is held unenforceable, the remaining provisions remain in
          effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms
          without our consent; we may assign them in connection with a merger or sale of assets.
        </p>
      </FooterSection>

      <FooterSection heading="Contact">
        <p>
          Questions about these Terms:{" "}
          <a href="mailto:gkmbusiness74@gmail.com" className="text-[#1463ff] hover:underline">
            gkmbusiness74@gmail.com
          </a>
        </p>
        <p>
          Privacy-related requests:{" "}
          <a href="mailto:gkmbusiness74@gmail.com" className="text-[#1463ff] hover:underline">
            gkmbusiness74@gmail.com
          </a>
        </p>
        <p>Last updated: May 20, 2026</p>
      </FooterSection>
    </FooterPageShell>
  );
}

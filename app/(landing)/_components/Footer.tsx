'use client';

import Image from "next/image";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const nav = [
  {
    heading: "PRODUCT",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/credits" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Chrome Web Store", href: "/chrome-extension" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Feedback", href: "/feedback" },
      { label: "Blog", href: "/blog" },
      { label: "Design Tokens Guide", href: "/design-tokens-guide" },
      { label: "Community", href: "/community" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer className={`border-t mt-16 ${dark ? "border-[rgba(255,255,255,0.08)] bg-[#080d14]" : "border-[#edf1f7] bg-white"}`}>
      <div className={`mx-auto py-[56px] ${sectionWidth}`}>

        {/* Main row */}
        <div className="grid grid-cols-[38%_62%] gap-[48px]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <Image src="/landing-page/logo.jpg" alt="webmimic" width={28} height={28} className="rounded-[6px]" />
              <span className={`font-extrabold text-[18px] tracking-tight ${dark ? "text-white" : "text-[#090b12]"}`}>webmimic</span>
            </div>
            <p className={`text-[13px] leading-[1.65] max-w-[280px] mb-[24px] ${dark ? "text-[#8b9ab0]" : "text-[#667489]"}`}>
              The fastest way to capture, inspect, and reuse design assets from any website.
            </p>
            <div className="flex gap-[8px]">
              {[
                { label: "X", icon: <XIcon /> },
                { label: "GitHub", icon: <GitHubIcon /> },
                { label: "LinkedIn", icon: <LinkedInIcon /> },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`w-[34px] h-[34px] rounded-[8px] border flex items-center justify-center transition-colors ${
                    dark
                      ? "border-[rgba(255,255,255,0.12)] bg-[#111827] text-[#8b9ab0] hover:text-white hover:border-[rgba(255,255,255,0.2)]"
                      : "border-[#e5e7eb] bg-white text-[#536174] hover:text-[#090b12] hover:border-[#c5ccd7]"
                  }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-3 gap-[32px]">
            {nav.map(({ heading, links }) => (
              <div key={heading}>
                <p className={`text-[10px] font-extrabold tracking-[.16em] mb-[18px] ${dark ? "text-[#667489]" : "text-[#9aa3b2]"}`}>
                  {heading}
                </p>
                <ul className="flex flex-col gap-[13px]">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-[13px] transition-colors ${
                          dark ? "text-[#8b9ab0] hover:text-white" : "text-[#536174] hover:text-[#090b12]"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className={`mx-auto border-t ${sectionWidth} ${dark ? "border-[rgba(255,255,255,0.08)]" : "border-[#edf1f7]"}`}>
        <div className="py-[20px] flex items-center justify-center">
          <p className={`text-[12px] text-center ${dark ? "text-[#667489]" : "text-[#9aa3b2]"}`}>
            © 2026 webmimic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

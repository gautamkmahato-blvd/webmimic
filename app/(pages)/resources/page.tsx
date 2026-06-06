"use client";

import { Navbar } from "../../(landing)/_components/Navbar";
import Footer from "../../(landing)/_components/Footer";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-[#090b12]">
      <Navbar />
      <main className="pt-[66px]">
        <section className={`mx-auto py-16 sm:py-20 ${sectionWidth}`}>
          <div className="max-w-[760px]">
            <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#090b12]">
              Resources
            </h1>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#657185]">
              Guides, documentation, and learning material to get the most out of Webmimic.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Documentation",
                  description: "Step-by-step guides for the extension, dashboard, and exports.",
                  href: "/documentation",
                },
                {
                  title: "Design Tokens Guide",
                  description: "Learn how to extract and export colors, type, and spacing tokens.",
                  href: "/design-tokens-guide",
                },
                {
                  title: "Blog",
                  description: "Product updates and design-engineering best practices.",
                  href: "/blog",
                },
                {
                  title: "Changelog",
                  description: "See what shipped recently and what changed in each release.",
                  href: "/changelog",
                },
                {
                  title: "Community",
                  description: "Connect with other builders using Webmimic.",
                  href: "/community",
                },
                {
                  title: "Support",
                  description: "Get help with captures, billing, and troubleshooting.",
                  href: "/support",
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-[#e8edf5] bg-[#f9fafb] p-5 transition-colors hover:border-[#c5d0e0] hover:bg-white"
                >
                  <h2 className="text-[16px] font-bold text-[#090b12]">{item.title}</h2>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#657185]">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

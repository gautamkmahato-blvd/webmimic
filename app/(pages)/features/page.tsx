"use client";

import Image from "next/image";
import {
  Palette,
  Code2,
  Wand2,
  ShieldCheck,
  Clapperboard,
  Layers,
  Play,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../../(landing)/landing/_components/Navbar";
import Footer from "../../(landing)/landing/_components/Footer";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const features = [
  {
    id: "01",
    title: "Assets, Colors & Typography",
    bullets: [
      "Pull every visual asset from a page — images, SVGs, icons, and videos — in one scan.",
      "Build a complete color palette with hex values, gradients, and usage context.",
      "Extract font families, sizes, weights, line heights, and letter spacing automatically.",
      "Download assets individually or export the full typography spec for your design system.",
    ],
    tags: ["Images", "SVGs", "Videos", "Colors", "Typography"],
    icon: Palette,
    image: "/landing-page/1.png",
    duration: "0:56",
  },
  {
    id: "02",
    title: "Element Code Extraction",
    bullets: [
      "Hover any element to inspect its live CSS — computed styles, not just static rules.",
      "Copy clean HTML markup with classes and structure preserved.",
      "See box model dimensions, spacing, borders, and positioning at a glance.",
      "Grab inline styles and inherited properties without digging through DevTools.",
    ],
    tags: ["CSS", "HTML", "Inline Styles", "Box Model"],
    icon: Code2,
    image: "/landing-page/2.png",
    duration: "1:12",
  },
  {
    id: "03",
    title: "AI Component Cloner",
    bullets: [
      "Select any section on a page and let AI rebuild it as production-ready code.",
      "Output clean React, Next.js, Vue, or plain HTML based on your stack.",
      "Preserves layout, spacing, typography, and responsive behavior from the source.",
      "Drop the generated component straight into your project — no manual cleanup.",
    ],
    tags: ["React", "Next.js", "Vue", "HTML"],
    icon: Wand2,
    image: "/landing-page/3.png",
    duration: "1:34",
  },
  {
    id: "04",
    title: "WCAG 2.1 Accessibility Scan",
    bullets: [
      "Run a full-page audit against WCAG 2.1 guidelines in seconds.",
      "Catch contrast failures, missing alt text, and improper heading hierarchy.",
      "Check form labels, ARIA roles, keyboard navigation, and skip links.",
      "Get a prioritized report with actionable fixes for each issue found.",
    ],
    tags: ["Contrast", "Alt Text", "Labels", "ARIA"],
    icon: ShieldCheck,
    image: "/landing-page/4.png",
    duration: "0:48",
  },
  {
    id: "05",
    title: "Animation Extractor & AI Cloner",
    bullets: [
      "Detect Lottie, GSAP, and Framer Motion animations running on any page.",
      "Preview animations in-panel before exporting or cloning.",
      "Extract animation JSON, keyframes, and timing data for reuse.",
      "Use AI to recreate the animated component with matching motion in your codebase.",
    ],
    tags: ["Lottie", "GSAP", "Framer Motion", "JSON"],
    icon: Clapperboard,
    image: "/landing-page/5.png",
    duration: "1:08",
  },
  {
    id: "06",
    title: "Design System Export",
    bullets: [
      "Extract the complete design language — colors, type, spacing, and radii — in one pass.",
      "Export as a Tailwind config ready to drop into your project.",
      "Generate a Claude skills file or design.md for AI-assisted development.",
      "Push tokens directly to Figma as a structured design system.",
    ],
    tags: ["Tailwind", "Claude Skills", "Figma", "Tokens"],
    icon: Layers,
    image: "/landing-page/6.png",
    duration: "1:22",
  },
];

function ChromeDot() {
  return (
    <span
      className="w-[18px] h-[18px] rounded-full relative inline-flex shrink-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,.12)]"
      style={{
        background:
          "conic-gradient(#f7d44a 0 33%, #2fb660 0 66%, #ef4335 0 84%, #f7d44a 0)",
      }}
    >
      <span className="absolute w-[6px] h-[6px] rounded-full bg-[#2c8dff] inset-[6px]" />
    </span>
  );
}

function VideoPreview({
  image,
  title,
  duration,
}: {
  image: string;
  title: string;
  duration: string;
}) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden border border-[#dfe7f1] shadow-[0_20px_50px_rgba(15,23,42,.12)] bg-[#f3f5f9]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 560px"
      />
      <div className="absolute inset-0 bg-[rgba(9,11,18,.08)]" />
      <button
        type="button"
        aria-label={`Play demo for ${title}`}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-neutral-900 border border-neutral-800 shadow-[0_12px_32px_rgba(15,23,42,.18)] flex items-center justify-center text-white hover:bg-neutral-700 hover:scale-105 transition-all"
      >
        <Play size={22} fill="currentColor" className="ml-[3px]" />
      </button>
      <span className="absolute bottom-4 right-4 px-[10px] py-[5px] rounded-[6px] bg-[rgba(9,11,18,.72)] text-white text-[11px] font-semibold">
        {duration}
      </span>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-[#090b12]">
      <Navbar />

      <main className="pt-[66px]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/features/bg-image.jpg')] bg-cover bg-center bg-no-repeat"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                "radial-gradient(ellipse 52% 42% at 4% 6%, #ffffff 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.55) 52%, transparent 78%)",
                "radial-gradient(ellipse 52% 42% at 96% 6%, #ffffff 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.55) 52%, transparent 78%)",
                "linear-gradient(to top right, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.32) 28%, rgba(255,255,255,0.12) 48%, transparent 62%)",
              ].join(", "),
            }}
          />
          <div className={`relative mx-auto py-16 sm:py-20 text-center ${sectionWidth}`}>
            <div className="inline-flex items-center gap-2 h-[32px] px-4 rounded-full bg-[#f3f8ff] border border-[#e8f1ff] text-[12px] font-semibold text-[#1463ff] mb-6">
              <Sparkles size={14} />
              All the tools you need to build faster with AI
            </div>

            <h1 className="max-w-[860px] mx-auto text-[clamp(36px,5.5vw,56px)] leading-[1.02] tracking-[-0.045em] font-bold text-[#090b12] mb-5">
              Powerful Features for
              <br />
              Designers &amp; Developers
            </h1>

            <p className="max-w-[620px] mx-auto text-[#657185] text-[15px] sm:text-[16px] leading-[1.65] mb-8">
              Extract, inspect, clone and export anything from any website. Save
              hours of manual work and build better products, faster.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg bg-neutral-900 text-white text-[13px] font-bold shadow-[0_10px_20px_rgba(0,0,0,.18)] whitespace-nowrap hover:bg-neutral-700 transition-colors"
              >
                <Play size={14} fill="currentColor" />
                Watch Full Demo
              </a>
              <a
                href="#"
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg text-[#171b24] text-[13px] font-bold whitespace-nowrap border border-[#dce3ee] bg-white shadow-[0_8px_18px_rgba(15,23,42,.05)] hover:border-[#c5d0e0] transition-colors"
              >
                <ChromeDot />
                Add to Chrome
              </a>
            </div>
          </div>
        </section>

        {/* Feature rows */}
        <section className={`mx-auto mt-30 pb-30 ${sectionWidth}`}>
          <div className="flex flex-col gap-16 sm:gap-30">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.id}
                  className="grid grid-cols-1 lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-10 lg:items-stretch"
                >
                  {/* Timeline */}
                  <div className="hidden lg:flex flex-col items-center h-full min-h-full">
                    <div className="w-[52px] h-[52px] rounded-[12px] bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 font-extrabold text-[13px] shadow-md shrink-0">
                      {feature.id}
                    </div>
                    <div className="w-[2px] flex-1 mt-4 bg-[linear-gradient(to_bottom,#1463ff_0%,#dce8ff_100%)]" />
                  </div>

                  {/* Copy */}
                  <div className="pt-1">
                    <div className="lg:hidden mb-3">
                      <span className="w-[40px] h-[40px] rounded-[10px] bg-[#f3f8ff] border border-[#e8f1ff] inline-flex items-center justify-center text-[#1463ff] text-[12px] font-bold">
                        {feature.id}
                      </span>
                    </div>

                    <h2 className="flex items-center gap-3 text-[clamp(24px,3vw,30px)] leading-[1.08] tracking-[-0.035em] font-bold text-[#090b12] mb-3">
                      <span className="w-[40px] h-[40px] rounded-[10px] bg-neutral-900 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,.15)] shrink-0">
                        <Icon size={18} className="text-white" strokeWidth={2.2} />
                      </span>
                      {feature.title}
                    </h2>
                    <ul className="max-w-[520px] mb-5 space-y-2.5">
                      {feature.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-[#657185] text-[15px] leading-[1.65]"
                        >
                          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#1463ff] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-[12px] py-[6px] rounded-full bg-[#f6f8fc] border border-[#e8edf5] text-[#536174] text-[12px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Preview */}
                  <VideoPreview
                    image={feature.image}
                    title={feature.title}
                    duration={feature.duration}
                  />
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={`mx-auto pb-16 ${sectionWidth}`}>
          <div className="rounded-[20px] bg-[linear-gradient(135deg,#f3f8ff_0%,#eef4ff_45%,#f8fbff_100%)] border border-[#e8f1ff] px-6 py-8 sm:px-10 sm:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-4">
              <Image
                src="/landing-page/logo.jpg"
                alt="webmimic"
                width={40}
                height={40}
                className="rounded-[8px] shrink-0"
              />
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.03em] text-[#090b12] mb-1">
                  Ship better products, faster
                </h3>
                <p className="text-[#657185] text-[14px] leading-[1.6] max-w-[480px]">
                  Join 50,000+ designers and developers who are building faster
                  with AI.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#"
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg bg-neutral-900 text-white text-[13px] font-bold shadow-[0_10px_20px_rgba(0,0,0,.18)] whitespace-nowrap hover:bg-neutral-700 transition-colors"
              >
                <ChromeDot />
                Add to Chrome
              </a>
              <a
                href="#"
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg text-[#171b24] text-[13px] font-bold whitespace-nowrap border border-[#dce3ee] bg-white shadow-[0_8px_18px_rgba(15,23,42,.05)] hover:border-[#c5d0e0] transition-colors"
              >
                <Play size={14} fill="currentColor" className="text-neutral-900" />
                Watch Full Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

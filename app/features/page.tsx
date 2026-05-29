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
import { Navbar } from "../(landing)/landing/_components/Navbar";
import Footer from "../(landing)/landing/_components/Footer";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const features = [
  {
    id: "01",
    title: "Assets, Colors & Typography",
    description:
      "Extract images, SVGs, videos, color palettes, and full typography from any website in one click.",
    tags: ["Images", "SVGs", "Videos", "Colors", "Typography"],
    icon: Palette,
    image: "/landing-page/1.png",
    duration: "0:56",
  },
  {
    id: "02",
    title: "Element Code Extraction",
    description:
      "Hover any element to instantly grab its CSS properties and clean HTML markup.",
    tags: ["CSS", "HTML", "Inline Styles", "Box Model"],
    icon: Code2,
    image: "/landing-page/2.png",
    duration: "1:12",
  },
  {
    id: "03",
    title: "AI Component Cloner",
    description:
      "Pick any section and let AI recreate it as production-ready code you can drop straight into your project.",
    tags: ["React", "Next.js", "Vue", "HTML"],
    icon: Wand2,
    image: "/landing-page/3.png",
    duration: "1:34",
  },
  {
    id: "04",
    title: "WCAG 2.1 Accessibility Scan",
    description:
      "Scan the full page for alt text, contrast, labels, headings, landmarks, ARIA roles, keyboard access, skip links, and more.",
    tags: ["Contrast", "Alt Text", "Labels", "ARIA"],
    icon: ShieldCheck,
    image: "/landing-page/4.png",
    duration: "0:48",
  },
  {
    id: "05",
    title: "Animation Extractor & AI Cloner",
    description:
      "Detect Lottie animations on any page, preview them, and let AI recreate the component with its full animation.",
    tags: ["Lottie", "GSAP", "Framer Motion", "JSON"],
    icon: Clapperboard,
    image: "/landing-page/5.png",
    duration: "1:08",
  },
  {
    id: "06",
    title: "Design System Export",
    description:
      "Extract the complete design style as a Tailwind config, Claude skills file, or Figma design system in one shot.",
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
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-white/95 border border-[rgba(255,255,255,.8)] shadow-[0_12px_32px_rgba(15,23,42,.18)] flex items-center justify-center text-[#1463ff] hover:scale-105 transition-transform"
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
        <section className={`mx-auto py-16 sm:py-20 text-center ${sectionWidth}`}>
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
              className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg bg-[#1463ff] text-white text-[13px] font-bold shadow-[0_10px_24px_rgba(20,99,255,.28)] whitespace-nowrap hover:bg-[#1258e6] transition-colors"
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
        </section>

        {/* Feature rows */}
        <section className={`mx-auto pb-20 ${sectionWidth}`}>
          <div className="flex flex-col gap-16 sm:gap-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLast = index === features.length - 1;

              return (
                <article
                  key={feature.id}
                  className="grid grid-cols-1 lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-10 items-start"
                >
                  {/* Timeline */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-[52px] h-[52px] rounded-[12px] bg-[#f3f8ff] border border-[#e8f1ff] flex items-center justify-center text-[#1463ff] font-extrabold text-[13px]">
                      {feature.id}
                    </div>
                    <div className="mt-3 w-[40px] h-[40px] rounded-[10px] bg-[#1463ff] flex items-center justify-center shadow-[0_8px_20px_rgba(20,99,255,.24)]">
                      <Icon size={18} className="text-white" strokeWidth={2.2} />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 min-h-[120px] mt-4 bg-[linear-gradient(to_bottom,#1463ff_0%,#dce8ff_100%)]" />
                    )}
                  </div>

                  {/* Copy */}
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                      <span className="w-[40px] h-[40px] rounded-[10px] bg-[#1463ff] flex items-center justify-center text-white text-[12px] font-bold">
                        {feature.id}
                      </span>
                      <div className="w-[36px] h-[36px] rounded-[9px] bg-[#f3f8ff] border border-[#e8f1ff] flex items-center justify-center text-[#1463ff]">
                        <Icon size={16} strokeWidth={2.2} />
                      </div>
                    </div>

                    <h2 className="text-[clamp(24px,3vw,30px)] leading-[1.08] tracking-[-0.035em] font-bold text-[#090b12] mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-[#657185] text-[15px] leading-[1.65] max-w-[520px] mb-5">
                      {feature.description}
                    </p>
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
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg bg-[#1463ff] text-white text-[13px] font-bold shadow-[0_10px_24px_rgba(20,99,255,.24)] whitespace-nowrap hover:bg-[#1258e6] transition-colors"
              >
                <ChromeDot />
                Add to Chrome
              </a>
              <a
                href="#"
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg text-[#171b24] text-[13px] font-bold whitespace-nowrap border border-[#dce3ee] bg-white shadow-[0_8px_18px_rgba(15,23,42,.05)] hover:border-[#c5d0e0] transition-colors"
              >
                <Play size={14} fill="currentColor" className="text-[#1463ff]" />
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

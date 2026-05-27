"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "◉", label: "Colors" },
  { icon: "Tt", label: "Typography" },
  { icon: "+", label: "Icons" },
  { icon: "≈", label: "SVGs" },
  { icon: "◫", label: "Gradients" },
  { icon: "⊟", label: "Spacing" },
  { icon: "▣", label: "Images" },
  { icon: "✦", label: "Animations" },
];

const colorSwatches = [
  "bg-[#111827]", "bg-[#f04438]", "bg-[#f97316]", "bg-[#f59e0b]",
  "bg-[#22c55e]", "bg-[#06b6d4]", "bg-[#3b82f6]", "bg-[#8b5cf6]", "bg-[#ec4899]",
];

const spacingTokens = [4, 8, 12, 16, 24, 32, 48];

export function ExtractSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-[88px] bg-white">
      <div
        ref={ref}
        className="mx-auto w-[min(1260px,calc(100%_-_64px))] grid grid-cols-[33%_40%_27%] gap-8 items-center"
      >

        {/* ── Left: Copy + Feature Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="flex items-center gap-[7px] text-[#1463ff] text-[10px] font-extrabold tracking-[.22em] mb-5">
            <span className="inline-block w-[18px] h-px bg-[#1463ff]" />
            EXTRACT ANY WEBSITE
          </p>

          <h2 className="text-[34px] leading-[1.12] tracking-[-0.04em] font-bold text-[#090b12] mb-4">
            Turn any website into<br />your design system.
          </h2>

          <p className="text-[14px] leading-[1.65] text-[#657185] mb-9 max-w-[330px]">
            Our AI scans every pixel and extracts the complete design system in seconds.
            Colors, typography, icons, spacing, gradients, animations — everything.
          </p>

          <div className="grid grid-cols-4 gap-x-3 gap-y-6">
            {features.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="w-10 h-10 rounded-[10px] bg-[#f6f8fc] border border-[#eaeff7] flex items-center justify-center text-[#374151] text-[15px] font-bold select-none">
                  {icon}
                </span>
                <span className="text-[11px] text-[#6b7280] font-medium text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Center: Browser Mockup ── */}
        <motion.div
          className="rounded-[16px] overflow-hidden border border-[#e2e8f2] shadow-[0_20px_60px_rgba(15,23,42,.13)]"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
        >
          {/* Browser chrome */}
          <div className="h-[42px] bg-[#f3f5f9] flex items-center gap-[7px] px-4 border-b border-[#dde3ee]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57] inline-block shrink-0" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e] inline-block shrink-0" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#28c840] inline-block shrink-0" />
            <span className="text-[#9aa3b2] text-[14px] ml-[6px]">‹</span>
            <span className="text-[#9aa3b2] text-[14px]">›</span>
            <div className="mx-auto w-[148px] h-[22px] bg-white border border-[#dde4ef] rounded-[5px] flex items-center justify-center text-[#4d586b] text-[11px] font-semibold">
              nike.com
            </div>
            <span className="text-[#9aa3b2] text-[14px]">↻</span>
          </div>

          {/* Nike page */}
          <div className="h-[330px] relative overflow-hidden bg-[linear-gradient(150deg,#f0ece3_0%,#e8e3d8_100%)]">

            {/* Bold headline */}
            <div className="absolute left-7 top-1/2 -translate-y-1/2 z-10">
              <p className="text-[clamp(40px,5.5vw,56px)] leading-[.86] font-black text-[#111827] tracking-[-0.04em] select-none">
                YOU<br />CAN&apos;T<br />STOP<br />US
              </p>
            </div>

            {/* Sneaker silhouette */}
            <div className="absolute right-[-30px] top-[10px] w-[310px] h-[240px] rounded-[18px] z-20 bg-[linear-gradient(135deg,#0d1117_0%,#1a1f2e_45%,#0a0e16_100%)] shadow-[0_24px_48px_rgba(0,0,0,.35)] [transform:rotate(-16deg)_translateY(10px)]">
              {/* Sole stripe */}
              <div className="absolute bottom-[18px] left-0 right-0 h-[28px] rounded-b-[14px] bg-[rgba(255,255,255,.07)]" />
              {/* Highlight */}
              <div className="absolute top-[22px] left-[22px] w-[80px] h-[30px] rounded-full bg-[rgba(255,255,255,.09)] blur-[8px]" />
            </div>

            {/* Subtle top arc */}
            <div className="absolute top-0 left-0 right-0 h-[90px] bg-[radial-gradient(ellipse_at_25%_0%,rgba(255,255,255,.45),transparent_55%)]" />
          </div>
        </motion.div>

        {/* ── Right: Extraction Panel ── */}
        <motion.div
          className="rounded-[14px] bg-white border border-[#e4eaf4] shadow-[0_12px_40px_rgba(15,23,42,.1)] p-[14px]"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between mb-[3px]">
            <div className="flex items-center gap-[6px] font-extrabold text-[#090b12] text-[13px]">
              <span className="text-[16px] leading-none">×</span>
              webmimic
            </div>
            <span className="text-[#b0b9c8] text-[14px] cursor-pointer hover:text-[#6b7280] transition-colors">×</span>
          </div>

          <p className="text-[#22c55e] text-[11px] font-semibold">Extraction Complete</p>
          <p className="text-[#9aa3b2] text-[10px] mt-[2px] mb-[14px]">nike.com</p>

          {/* Colors */}
          <div className="flex flex-wrap gap-[5px] mb-[14px]">
            {colorSwatches.map((bg) => (
              <span
                key={bg}
                className={`w-[18px] h-[18px] rounded-full border border-[rgba(0,0,0,.07)] inline-block shrink-0 ${bg}`}
              />
            ))}
          </div>

          {/* Typography */}
          <p className="text-[10px] text-[#9aa3b2] font-semibold mb-2">Typography</p>
          <div className="flex items-baseline gap-[14px] mb-[14px]">
            <span className="text-[20px] font-black text-[#111827]">Aa</span>
            <span className="text-[15px] font-semibold text-[#374151]">Aa</span>
            <span className="text-[18px] font-light text-[#374151]">§</span>
            <span className="text-[12px] italic font-bold text-[#374151]">Aa</span>
          </div>

          {/* Icons */}
          <p className="text-[10px] text-[#9aa3b2] font-semibold mb-2">Icons</p>
          <div className="flex items-center gap-[10px] mb-[14px] text-[#4b5563] text-[16px]">
            <span>○</span>
            <span>⊕</span>
            <span className="text-[13px]">■</span>
            <span>+</span>
            <span>◎</span>
          </div>

          {/* Spacing */}
          <p className="text-[10px] text-[#9aa3b2] font-semibold mb-2">Spacing</p>
          <div className="flex items-center gap-[8px] flex-wrap">
            {spacingTokens.map((n) => (
              <span key={n} className="text-[11px] text-[#374151] font-medium">{n}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

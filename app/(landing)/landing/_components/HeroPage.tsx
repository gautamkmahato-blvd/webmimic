"use client";

import { motion, type Variants } from "framer-motion";

type Easing = [number, number, number, number];
const ease: Easing = [0.16, 1, 0.3, 1];

function ChromeDot() {
  return (
    <span
      className="w-[19px] h-[19px] rounded-full relative inline-flex shrink-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,.12)]"
      style={{ background: "conic-gradient(#f7d44a 0 33%, #2fb660 0 66%, #ef4335 0 84%, #f7d44a 0)" }}
    >
      <span className="absolute w-[7px] h-[7px] rounded-full bg-[#2c8dff] inset-[6px]" />
    </span>
  );
}

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function HeroPage() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white flex flex-col items-center justify-center">
      {/* SVG gradient background with all-edge fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right,  transparent 0%, black 14%, black 86%, transparent 100%)," +
            "linear-gradient(to bottom, transparent 0%, black 26%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right,  transparent 0%, black 14%, black 86%, transparent 100%)," +
            "linear-gradient(to bottom, transparent 0%, black 26%, black 82%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Subtle grid */}
            <pattern id="hp-grid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d="M 46 0 L 0 0 0 46" fill="none" stroke="#dce8f5" strokeWidth="0.7" />
            </pattern>
            {/* Central glow */}
            <radialGradient id="hp-glow1" cx="50%" cy="44%" r="48%">
              <stop offset="0%"   stopColor="#b8d4ff" stopOpacity="0.38" />
              <stop offset="55%"  stopColor="#cce0ff" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#e8f2ff" stopOpacity="0"    />
            </radialGradient>
            {/* Accent glow — upper-left */}
            <radialGradient id="hp-glow2" cx="28%" cy="32%" r="36%">
              <stop offset="0%"   stopColor="#d4e8ff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#d4e8ff" stopOpacity="0"    />
            </radialGradient>
            {/* Accent glow — lower-right */}
            <radialGradient id="hp-glow3" cx="74%" cy="68%" r="34%">
              <stop offset="0%"   stopColor="#c4d8ff" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#c4d8ff" stopOpacity="0"    />
            </radialGradient>
          </defs>
          {/* Grid layer */}
          <rect width="100%" height="100%" fill="url(#hp-grid)" />
          {/* Glow layers */}
          <rect width="100%" height="100%" fill="url(#hp-glow1)" />
          <rect width="100%" height="100%" fill="url(#hp-glow2)" />
          <rect width="100%" height="100%" fill="url(#hp-glow3)" />
        </svg>
      </div>

      <div className="mx-auto relative w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center text-center pt-[80px] pb-16">
        <motion.div
          className="flex flex-col items-center"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          {/* Version badge */}
          <motion.div
            variants={textItem}
            className="h-[30px] px-[10px] flex items-center gap-3 rounded-[20px] text-[12px] text-[#637083] bg-[#f3f8ff] border border-[#e8f1ff]"
          >
            <b className="text-[#1463ff]">v2.0</b>
            <span>Now with AI + Motion Cloning</span>
            <i className="not-italic text-[#1463ff]">→</i>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={textItem}
            className="mt-[16px] mb-[20px] leading-[.955] tracking-[-0.055em] font-bold text-[#090b12] text-[clamp(56px,6.8vw,88px)]"
          >
            Extract. Clone.<br />Build Beautiful<br />Websites{" "}
            <span className="text-[#778091]">10x Faster.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={textItem}
            className="max-w-[520px] mb-8 text-md text-[#657185] mx-auto"
          >
            Copy animations. Extract design systems. Generate design.md. Ship
            production-ready websites with AI + webmimic.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={textItem}
            className="flex items-center gap-[14px] flex-wrap justify-center"
          >
            <a
              href="#"
              className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg bg-[#05070a] text-white text-[13px] font-bold shadow-[0_10px_20px_rgba(0,0,0,.18)] whitespace-nowrap"
            >
              <ChromeDot />Add to Chrome <span>→</span>
            </a>
            <a
              href="#"
              className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg text-[#171b24] text-[13px] font-bold whitespace-nowrap border border-[#dce3ee] bg-[rgba(255,255,255,.82)] shadow-[0_8px_18px_rgba(15,23,42,.05)]"
            >
              <span className="text-[11px]">▶</span>Explore Dashboard
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={textItem}
            className="flex items-center gap-[18px] mt-8 justify-center"
          >
            <div className="flex pl-[3px]">
              {[
                "linear-gradient(135deg,#f5c38a,#34506d 55%,#111827)",
                "linear-gradient(135deg,#e0a36f,#ece1cf 45%,#1f2937)",
                "linear-gradient(135deg,#9dc7e8,#ffe1a4 50%,#3e5065)",
                "linear-gradient(135deg,#f4b7b7,#5163ac 58%,#101827)",
                "linear-gradient(135deg,#dec4a4,#13283d)",
              ].map((bg, i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full -ml-[5px] border-2 border-white inline-block"
                  style={{ background: bg }}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="mb-[5px] text-[12px] text-[#6b7587]">
                Loved by 24,000+ designers &amp; developers
              </p>
              <div className="text-[#ffb11b] tracking-[4px] text-[13px]">
                ★★★★★{" "}
                <b className="tracking-normal ml-[10px] font-semibold text-[#111827]">4.9/5</b>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

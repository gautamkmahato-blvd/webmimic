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

const bounceLeft = {
  y: [0, -10, 0],
  transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" as const },
};

const bounceRight = {
  y: [0, -10, 0],
  transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const, delay: 0.4 },
};

function DecorSphere({
  tone = "light",
  size = "sm",
  className = "",
}: {
  tone?: "light" | "dark" | "silver";
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const sizeClass =
    size === "md" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-2.5 h-2.5";
  const toneClass =
    tone === "dark"
      ? "bg-gradient-to-br from-[#2f2f2f] to-[#0a0a0a] shadow-[0_8px_18px_rgba(0,0,0,.28)]"
      : tone === "silver"
        ? "bg-gradient-to-br from-[#ffffff] via-[#d8dee8] to-[#9aa6b8] shadow-[0_8px_18px_rgba(0,0,0,.16)]"
        : "bg-gradient-to-br from-white to-[#e7edf5] shadow-[0_8px_16px_rgba(0,0,0,.12),inset_0_-1px_2px_rgba(0,0,0,.05)]";

  return (
    <span
      aria-hidden
      className={`absolute rounded-full ${sizeClass} ${toneClass} ${className}`}
    />
  );
}

function DecorRing({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute w-5 h-5 rounded-full border-[5px] border-[#141414] bg-transparent shadow-[0_10px_22px_rgba(0,0,0,.22)] ${className}`}
    />
  );
}

function DecorOctagon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute w-4 h-4 bg-gradient-to-br from-[#434343] to-[#101010] shadow-[0_10px_20px_rgba(0,0,0,.24)] ${className}`}
      style={{
        clipPath:
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      }}
    />
  );
}

function HeroIconCluster({
  side,
  src,
  bounce,
}: {
  side: "left" | "right";
  src: string;
  bounce: typeof bounceLeft;
}) {
  const positionClass =
    side === "left"
      ? "left-4 sm:left-8 lg:left-12 xl:left-16"
      : "right-4 sm:right-8 lg:right-12 xl:right-16";

  return (
    <div
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 hidden md:block z-[2] pointer-events-none select-none`}
    >
      <div className="relative">
        <motion.img
          src={src}
          alt=""
          className="relative z-[2] w-[88px] sm:w-[120px] lg:w-[150px] xl:w-[180px] h-auto"
          animate={bounce}
        />

        {side === "left" ? (
          <>
            <DecorRing className="-bottom-3 -left-5 z-[1]" />
            <DecorSphere tone="dark" size="xs" className="-top-2 right-0 z-[3]" />
            <DecorSphere tone="light" size="sm" className="top-4 -right-8 lg:-right-10 z-[1]" />
            <DecorOctagon className="top-10 -left-7 opacity-80 z-[1]" />
          </>
        ) : (
          <>
            <DecorSphere tone="silver" size="sm" className="-top-4 -left-6 z-[3]" />
            <DecorOctagon className="-bottom-4 -right-5 z-[1]" />
            <DecorSphere tone="dark" size="xs" className="bottom-2 -left-3 z-[1]" />
            <DecorSphere tone="light" size="xs" className="-top-1 right-0 z-[1]" />
          </>
        )}
      </div>
    </div>
  );
}

export function HeroPage() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white flex flex-col items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[url('/features/bg-image.jpg')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 52% 42% at 96% 6%, #ffffff 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.55) 52%, transparent 78%)",
            "radial-gradient(ellipse 52% 42% at 4% 94%, #ffffff 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.55) 52%, transparent 78%)",
            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.92) 8%, transparent 24%, transparent 76%, rgba(255,255,255,0.92) 92%, #ffffff 100%)",
          ].join(", "),
        }}
      />

      <HeroIconCluster side="left" src="/features/left-icon.png" bounce={bounceLeft} />
      <HeroIconCluster side="right" src="/features/right-icon.png" bounce={bounceRight} />

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

      <div className="mx-auto relative z-10 w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center text-center pt-[80px] pb-16">
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
            className="mt-[16px] mb-[20px] leading-[.955] tracking-[-0.055em] font-bold text-[#090b12] text-[clamp(46px,6.2vw,78px)]"
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
              <span className="text-[11px]">▶</span>View Demo
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

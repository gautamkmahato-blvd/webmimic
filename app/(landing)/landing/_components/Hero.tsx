"use client";

import { motion, type Variants, useMotionValue, useTransform, animate, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type Easing = [number, number, number, number];
const ease: Easing = [0.16, 1, 0.3, 1];

// ── One-shot animated counter (used in FloatCards) ──
function AnimatedNumber({ to, delay = 0, duration = 1.6 }: { to: number; delay?: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const controls = animate(count, to, { duration, delay, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [to, delay, duration]);
  return <motion.span>{rounded}</motion.span>;
}

// ── Live counter — counts up then keeps fluctuating ──
function LiveNumber({ base, startDelay = 0 }: { base: number; startDelay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const ctrl = animate(count, base, {
      duration: 1.2,
      delay: startDelay,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        const tick = () => {
          const spread = Math.max(2, Math.round(base * 0.18));
          const next = base + Math.floor(Math.random() * spread * 2) - spread;
          animate(count, Math.max(1, next), { duration: 0.65, ease: "easeOut" });
          timeout = setTimeout(tick, 1400 + Math.random() * 1000);
        };
        timeout = setTimeout(tick, 800 + Math.random() * 600);
      },
    });

    return () => {
      ctrl.stop();
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.span>{rounded}</motion.span>;
}

// ── Animated progress bar (one-shot, for FloatCards area) ──
function AnimatedBar({ to, color, delay = 0 }: { to: number; color: string; delay?: number }) {
  const width = useMotionValue(0);
  useEffect(() => {
    const controls = animate(width, to, { duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [to, delay]);
  return (
    <div className="h-1 bg-[#1b2532] rounded-lg overflow-hidden">
      <motion.span
        className="block h-full rounded-lg"
        style={{ width: useTransform(width, (v) => `${v}%`), background: color }}
      />
    </div>
  );
}

// ── Live progress bar — cycles 0 → 100 → 0 on repeat ──
function LiveProgressBar() {
  const width = useMotionValue(0);
  const displayPct = useTransform(width, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    let cancelled = false;

    const cycle = async () => {
      if (cancelled) return;
      await animate(width, 74, { duration: 1.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] });
      if (cancelled) return;
      await new Promise<void>((r) => setTimeout(r, 2800));
      if (cancelled) return;
      await animate(width, 100, { duration: 1.0, ease: "easeOut" });
      if (cancelled) return;
      await new Promise<void>((r) => setTimeout(r, 500));
      if (cancelled) return;
      await animate(width, 0, { duration: 0.25, ease: "easeIn" });
      if (cancelled) return;
      await new Promise<void>((r) => setTimeout(r, 300));
      cycle();
    };

    cycle();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="h-1 bg-[#1b2532] rounded-lg overflow-hidden">
        <motion.span
          className="block h-full rounded-lg bg-[#e2e8f0]"
          style={{ width: useTransform(width, (v) => `${v}%`) }}
        />
      </div>
      <motion.span className="block text-right mt-[3px] text-[#a9b6c8] text-[11px]">
        {displayPct}
      </motion.span>
    </>
  );
}

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

function Wave() {
  return (
    <div
      className="h-[35px] mt-[13px]"
      style={{
        background: "repeating-linear-gradient(90deg, rgba(42,129,255,.8) 0 2px, transparent 2px 8px)",
        clipPath: "polygon(0 56%,7% 30%,12% 68%,17% 22%,22% 72%,28% 38%,34% 66%,40% 26%,46% 78%,52% 36%,58% 66%,64% 20%,70% 76%,76% 42%,82% 62%,88% 32%,94% 74%,100% 52%,100% 100%,0 100%)",
      }}
    />
  );
}

function WindowBar({ url }: { url: string }) {
  return (
    <div className="h-[42px] flex items-center gap-3 px-[18px] border-b border-[rgba(215,224,238,.7)]">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57] inline-block" />
      <span className="w-2 h-2 rounded-full bg-[#ffbd2e] inline-block" />
      <span className="w-2 h-2 rounded-full bg-[#28c840] inline-block" />
      <span className="text-[#a0aaba] text-[19px]">‹</span>
      <span className="text-[#a0aaba] text-[19px]">›</span>
      <div className="ml-auto w-[180px] h-[23px] bg-[rgba(255,255,255,.8)] border border-[#e8edf5] rounded-[6px] flex items-center justify-center text-[#4d586b] text-[11px] font-bold">
        {url}
      </div>
      <span className="text-[#a0aaba] text-[19px]">↻</span>
    </div>
  );
}

const glassCard =
  "bg-[rgba(255,255,255,.82)] border border-[#dce5f2] rounded-[14px] shadow-[0_22px_55px_rgba(46,73,116,.22),inset_0_1px_0_rgba(255,255,255,.8)] backdrop-blur-[18px]";

function FloatCard({
  floatDelay = 0,
  enterDelay = 0,
  className = "",
  title,
  value,
  label,
  children,
}: {
  floatDelay?: number;
  enterDelay?: number;
  className?: string;
  title: string;
  value: number;
  label: string;
  children?: React.ReactNode;
}) {
  const controls = useAnimation();

  useEffect(() => {
    // Phase 1: entrance (runs once)
    controls
      .start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, delay: enterDelay, ease: [0.16, 1, 0.3, 1] },
      })
      .then(() => {
        // Phase 2: smooth float loop from current position — no jump
        controls.start({
          y: [0, -8, 0],
          transition: {
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          },
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={`absolute w-[160px] min-h-[138px] p-[18px] ${glassCard} ${className}`}
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={controls}
    >
      <div className="flex justify-between text-[#222b39] text-[12px] font-bold">
        <span>{title}</span>
        <span>⌄</span>
      </div>
      <strong className="block mt-4 text-[27px] text-[#0d1220]">
        <AnimatedNumber to={value} delay={enterDelay + 0.2} />
      </strong>
      <small className="block text-[#6a7587] text-[10px]">{label}</small>
      {children}
    </motion.div>
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

// ── Color pools — each item cycles through 4 shades ──
const colorPools: Record<string, string[]> = {
  Colors:     ["#f04438", "#fb7185", "#f43f5e", "#e11d48"],
  Typography: ["#35c26b", "#4ade80", "#22c55e", "#15803d"],
  Images:     ["#60a5fa", "#93c5fd", "#3b82f6", "#1d4ed8"],
  Icons:      ["#94a3b8", "#cbd5e1", "#64748b", "#334155"],
  SVGs:       ["#c084fc", "#d8b4fe", "#a855f7", "#7c3aed"],
  Gradients:  ["#38bdf8", "#7dd3fc", "#06b6d4", "#0284c7"],
  Spacing:    ["#fb923c", "#fdba74", "#f97316", "#c2410c"],
  Animations: ["#f472b6", "#f9a8d4", "#ec4899", "#be185d"],
};

const baseExtractionItems = [
  { label: "Colors",     count: 18 },
  { label: "Typography", count: 9  },
  { label: "Images",     count: 42 },
  { label: "Icons",      count: 86 },
  { label: "SVGs",       count: 24 },
  { label: "Gradients",  count: 11 },
  { label: "Spacing",    count: 20 },
  { label: "Animations", count: 14 },
];

export function Hero() {
  // Cycle colors one item at a time in sequence
  const [colorIdxs, setColorIdxs] = useState<number[]>(baseExtractionItems.map(() => 0));

  useEffect(() => {
    let cursor = 0;
    const id = setInterval(() => {
      const i = cursor % baseExtractionItems.length;
      setColorIdxs((prev) => {
        const next = [...prev];
        next[i] = (next[i] + 1) % 4;
        return next;
      });
      cursor++;
    }, 380);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen bg-white">
      {/* Blue gradient — right side, anchored to bottom of heading */}
      <div
        className="absolute right-0 top-[220px] w-[61%] h-[340px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 80%, rgba(201,226,255,.82), transparent 30%)," +
            "radial-gradient(circle at 45% 90%, rgba(180,215,255,.55), transparent 38%)," +
            "radial-gradient(circle at 88% 70%, rgba(72,151,255,.18), transparent 28%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%), linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%), linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="mx-auto grid items-center relative w-[min(1360px,calc(100%_-_64px))] min-h-screen grid-cols-[39%_61%] pt-[60px] pb-10">

        {/* ── Left: Copy ── */}
        <motion.div variants={textContainer} initial="hidden" animate="show">
          <motion.div
            variants={textItem}
            className="w-max h-[30px] px-[10px] flex items-center gap-3 rounded-[20px] text-[12px] text-[#637083] bg-[#f3f8ff] border border-[#e8f1ff]"
          >
            <b className="text-[#1463ff]">v2.0</b>
            <span>Now with AI + Motion Cloning</span>
            <i className="not-italic text-[#1463ff]">→</i>
          </motion.div>

          <motion.h1
            variants={textItem}
            className="mt-[12px] mb-[17px] leading-[.955] tracking-[-0.055em] font-bold text-[#090b12] text-[clamp(52px,6.1vw,75px)]"
          >
            Extract. Clone.<br />Build Beautiful<br />Websites{" "}
            <span className="text-[#778091]">10x<br />Faster.</span>
          </motion.h1>

          <motion.p variants={textItem} className="max-w-[490px] mb-6 text-md text-[#657185]">
            Copy animations. Extract design systems. Generate design.md. Ship
            production-ready websites with AI + webmimic.
          </motion.p>

          <motion.div variants={textItem} className="flex items-center gap-[14px] flex-wrap">
            <a href="#" className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg bg-[#05070a] text-white text-[13px] font-bold shadow-[0_10px_20px_rgba(0,0,0,.18)] whitespace-nowrap">
              <ChromeDot />Add to Chrome — It&apos;s Free <span>→</span>
            </a>
            <a href="#" className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg text-[#171b24] text-[13px] font-bold whitespace-nowrap border border-[#dce3ee] bg-[rgba(255,255,255,.82)] shadow-[0_8px_18px_rgba(15,23,42,.05)]">
              <span className="text-[11px]">▶</span>Explore Dashboard
            </a>
          </motion.div>

          <motion.div variants={textItem} className="flex items-center gap-[18px] mt-8">
            <div className="flex pl-[3px]">
              {[
                "linear-gradient(135deg,#f5c38a,#34506d 55%,#111827)",
                "linear-gradient(135deg,#e0a36f,#ece1cf 45%,#1f2937)",
                "linear-gradient(135deg,#9dc7e8,#ffe1a4 50%,#3e5065)",
                "linear-gradient(135deg,#f4b7b7,#5163ac 58%,#101827)",
                "linear-gradient(135deg,#dec4a4,#13283d)",
              ].map((bg, i) => (
                <span key={i} className="w-7 h-7 rounded-full -ml-[5px] border-2 border-white inline-block" style={{ background: bg }} />
              ))}
            </div>
            <div>
              <p className="mb-[5px] text-[12px] text-[#6b7587]">Loved by 24,000+ designers &amp; developers</p>
              <div className="text-[#ffb11b] tracking-[4px] text-[13px]">
                ★★★★★{" "}
                <b className="tracking-normal ml-[10px] font-semibold text-[#111827]">4.9/5</b>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Art ── */}
        <motion.div
          className="h-[520px] relative"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
        >
          {/* Orb */}
          <div
            className="absolute w-[630px] h-[430px] right-[52px] top-[68px] blur-md"
            style={{
              background:
                "radial-gradient(circle at 30% 28%,rgba(119,186,255,.5),transparent 28%)," +
                "radial-gradient(circle at 70% 20%,rgba(201,225,255,.9),transparent 24%)," +
                "radial-gradient(circle at 48% 54%,rgba(226,244,255,.92),transparent 38%)",
            }}
          />

          {/* Browser window */}
          <div className={`absolute overflow-hidden right-[22px] top-[23px] w-[610px] h-[418px] ${glassCard}`}>
            <WindowBar url="vercel.com" />
            <div
              className="relative h-[calc(100%-42px)] pt-[92px] pl-[168px]"
              style={{
                background:
                  "linear-gradient(115deg,transparent 0 32%,rgba(244,250,255,.75) 33% 100%)," +
                  "radial-gradient(circle at 55% 50%,rgba(255,255,255,.7),transparent 32%)," +
                  "#eef7ff",
              }}
            >
              <div
                className="absolute inset-x-[42px] inset-y-[28px] blur-[7px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 62% 30%,rgba(51,124,221,.75),transparent 22%)," +
                    "radial-gradient(ellipse at 36% 42%,rgba(194,226,255,.9),transparent 27%)," +
                    "radial-gradient(ellipse at 66% 64%,rgba(160,207,255,.86),transparent 30%)," +
                    "linear-gradient(135deg,rgba(255,255,255,.8),rgba(210,234,255,.54))",
                  clipPath: "polygon(0 30%,23% 15%,44% 24%,70% 9%,100% 24%,87% 72%,62% 63%,40% 82%,10% 69%)",
                }}
              />
              <h2 className="relative m-0 max-w-[285px] text-[36px] leading-[.95] tracking-[-0.055em] font-bold">
                Build better<br />products faster
              </h2>
              <p className="relative w-[270px] mt-[13px] mb-[19px] text-[#59667a] text-[12px]">
                Acme is the AI copilot that helps teams move faster
              </p>
              <div className="relative flex gap-[10px]">
                <b className="rounded-[18px] px-[15px] py-[9px] text-[10px] bg-[#07090d] text-white not-italic font-bold">Get started</b>
                <span className="rounded-[18px] px-[15px] py-[9px] text-[10px] bg-white text-[#111827] font-bold">Book a demo</span>
              </div>
            </div>
          </div>

          {/* Float card: Animations */}
          <FloatCard className="left-4 top-[72px]" title="Animations" value={14} label="GSAP / Framer Motion" floatDelay={0.8} enterDelay={0.7}>
            <Wave />
          </FloatCard>

          {/* Float card: Design Tokens */}
          <FloatCard className="left-6 top-[303px]" title="Design Tokens" value={124} label="Extracted" floatDelay={2.2} enterDelay={0.9}>
            <div className="flex gap-2 mt-[15px] items-center">
              {["#111827","#e8f0fa","#abc3df","#6382a9","#d8e4f3"].map((c, i) => (
                <span key={i} className="w-[22px] h-[22px] rounded-full border border-[#dfe7f1] inline-block" style={{ background: c }} />
              ))}
              <em className="w-[22px] h-[22px] rounded-full border border-[#dfe7f1] grid place-items-center text-[12px] text-[#8d98aa] not-italic bg-white">+</em>
            </div>
          </FloatCard>

          {/* Float card: Assets */}
          <FloatCard className="left-[285px] top-[369px]" title="Assets" value={312} label="Total Files" floatDelay={1.4} enterDelay={1.1}>
            <div className="flex mt-4 pl-[5px]">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-7 h-7 rounded-[8px] -ml-[5px] border-2 border-white inline-block bg-[linear-gradient(135deg,#f5c38a,#34506d_55%,#111827)]" />
              ))}
            </div>
          </FloatCard>

          {/* Dark panel: webmimic Live Extraction */}
          <motion.div
            className="absolute text-white right-[7px] top-[56px] w-[216px] min-h-[390px] rounded-[10px] bg-[#080d14] py-[14px] px-4 shadow-[0_24px_48px_rgba(8,13,20,.35)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 },
              x:       { duration: 0.6, delay: 0.6, ease: [0.16,1,0.3,1] },
              y:       { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
          >
            <div className="flex items-center gap-[9px] text-[12px]">
              <b className="text-[19px]">×</b>
              <span className="flex-1 font-extrabold">webmimic</span>
              <i className="not-italic text-[#7e8898]">‹</i>
              <i className="not-italic text-[#7e8898]">×</i>
            </div>
            <p className="mt-5 mb-3 font-bold text-[12px]">Live Extraction</p>
            <small className="text-[#c6cfdb] block mb-2">vercel.com</small>

            <LiveProgressBar />

            <ul className="list-none mt-5 mb-[18px] p-0">
              {baseExtractionItems.map(({ label, count }, idx) => {
                const color = colorPools[label][colorIdxs[idx]];
                return (
                  <li key={label} className="flex items-center gap-2 my-[9px] text-[12px] text-[#dce4ef]">
                    <motion.span
                      className="w-[10px] h-[10px] rounded-[2px] shrink-0 inline-block"
                      animate={{ backgroundColor: color }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                    {label}
                    <span className="ml-auto text-[#8793a5]">
                      <LiveNumber base={count} startDelay={1.0 + idx * 0.08} />
                    </span>
                  </li>
                );
              })}
            </ul>
            <button className="w-full border-0 text-white bg-[#151b25] rounded-lg h-9 font-bold text-[11px] cursor-pointer hover:bg-[#1e2838] transition-colors">
              View Full Report
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

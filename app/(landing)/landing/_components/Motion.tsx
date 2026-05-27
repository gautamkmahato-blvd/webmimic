'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ghostBtn = "min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg border border-[#dce3ee] bg-white/80 text-[#171b24] text-[13px] font-bold shadow-[0_8px_18px_rgba(15,23,42,.05)] whitespace-nowrap";
const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[380px] mb-6 text-[#667489] text-md leading-[1.6]";

const CARD = "h-[146px] w-[210px] shrink-0 border border-[#dfe7f1] rounded-lg bg-white overflow-hidden shadow-[0_10px_24px_rgba(30,50,86,.06)]";

const cards = [
  /* 1 — Glowing Orb */
  <article key="orb" className={CARD}>
    <div className="h-full bg-[#080d14] grid place-items-center">
      <div className="w-[100px] h-[100px] rounded-full border border-[rgba(255,255,255,.22)] shadow-[inset_0_0_28px_rgba(32,130,255,.28)] bg-[radial-gradient(circle_at_50%_70%,rgba(36,130,255,.48),transparent_40%)]" />
    </div>
  </article>,

  /* 2 — Cursor Follower */
  <article key="cursor" className={CARD}>
    <div className="h-full bg-[#080d14] grid place-items-center relative overflow-hidden">
      <div className="absolute w-6 h-6 rounded-full bg-[#20d4c7] left-[48px] top-[38px] shadow-[0_0_0_10px_rgba(32,212,199,.13)]" />
      <button className="relative text-white bg-transparent border border-[rgba(255,255,255,.28)] rounded-lg px-8 py-3 text-xs">
        Hover me
      </button>
    </div>
  </article>,

  /* 3 — Scroll Layers */
  <article key="scroll" className={CARD}>
    <div className="h-full bg-[#080d14] relative overflow-hidden">
      {["top-[22px]", "top-[52px]", "top-[82px]"].map((t) => (
        <div key={t} className={`absolute w-[88px] h-[54px] bg-white/20 [transform:rotate(-20deg)_skewX(25deg)] shadow-[0_16px_24px_rgba(255,255,255,.08)] ${t}`} />
      ))}
    </div>
  </article>,

  /* 4 — Text Split */
  <article key="text" className={CARD}>
    <div className="h-full text-white grid place-items-center text-[40px] font-black tracking-[-0.05em] bg-[radial-gradient(circle_at_79%_50%,#1e76ff,transparent_32%),#0b1020] [text-shadow:7px_0_0_rgba(255,255,255,.18),-7px_0_0_rgba(255,255,255,.12)]">
      HELLO
    </div>
  </article>,

  /* 5 — Magnetic Rings */
  <article key="rings" className={CARD}>
    <div className="h-full bg-[#080d14] grid place-items-center relative">
      <div className="w-[60px] h-[60px] rounded-full border border-[rgba(255,255,255,.5)] bg-white/10 z-10" />
      <div className="absolute w-[90px] h-[90px] rounded-full border border-[rgba(255,255,255,.18)]" />
      <div className="absolute w-[120px] h-[120px] rounded-full border border-[rgba(255,255,255,.08)]" />
      <div className="absolute w-2 h-2 rounded-full bg-[#ff6b6b] top-[28px] right-[42px]" />
      <div className="absolute w-[5px] h-[5px] rounded-full bg-[#4ecdc4] bottom-[30px] left-[44px]" />
    </div>
  </article>,

  /* 6 — Gradient Flow */
  <article key="gradient" className={CARD}>
    <div className="h-full bg-[radial-gradient(ellipse_at_20%_50%,#7c3aed,transparent_52%),radial-gradient(ellipse_at_80%_50%,#0ea5e9,transparent_52%),#0b0b14] flex flex-col justify-end p-4">
      <div className="h-[5px] w-full rounded-full bg-white/10 mb-2">
        <div className="h-full w-[68%] rounded-full bg-[linear-gradient(90deg,#7c3aed,#0ea5e9)]" />
      </div>
      <p className="text-white/40 text-[9px] font-mono">easing: cubic-bezier</p>
    </div>
  </article>,

  /* 7 — Spring Bars */
  <article key="spring" className={CARD}>
    <div className="h-full bg-[#080d14] flex items-end justify-center gap-[6px] px-4 pb-4 pt-6">
      {[65, 90, 45, 100, 72, 55, 83].map((h, i) => (
        <div
          key={i}
          className="w-[14px] rounded-t-[4px] bg-[linear-gradient(to_top,rgba(99,102,241,.5),rgba(99,102,241,1))]"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  </article>,

  /* 8 — Stagger List */
  <article key="stagger" className={CARD}>
    <div className="h-full bg-[#080d14] flex flex-col justify-center gap-[7px] px-4">
      {[80, 60, 90, 50, 70].map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full bg-white/30 shrink-0" />
          <div className="h-[6px] rounded-full bg-white/20" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  </article>,
];

const track = [...cards, ...cards];

const TRANSITION = { duration: 28, repeat: Infinity, ease: "linear" } as const;

export default function Motion() {
  const ctrl1 = useAnimation();
  const ctrl2 = useAnimation();

  useEffect(() => {
    ctrl1.start({ x: ["0%", "-50%"], transition: TRANSITION });
    ctrl2.start({ x: ["-50%", "0%"], transition: TRANSITION });
  }, []);

  const pause = () => { ctrl1.stop(); ctrl2.stop(); };
  const play  = () => {
    ctrl1.start({ x: ["0%", "-50%"], transition: TRANSITION });
    ctrl2.start({ x: ["-50%", "0%"], transition: TRANSITION });
  };

  return (
    <>
      {/* ── MOTION ───────────────────────────────────────── */}
      <section className={`mx-auto grid gap-6 items-start py-[23px] pb-[31px] grid-cols-[30%_70%] mt-16 ${sectionWidth}`}>
        <div>
          <span className={sectionCopyEyebrow}>ANIMATED COMPONENTS</span>
          <h2 className={sectionH2}>Clone any animation.<br />Perfectly.</h2>
          <p className={sectionP}>
            Recreate GSAP, Framer Motion and custom interactions with our AI.
            One click to copy, one line to install.
          </p>
          <a className={ghostBtn} href="#">Explore Motion Library <span>→</span></a>
        </div>

        {/* Marquee rows */}
        <div
          className="flex flex-col gap-[18px] overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          {/* Row 1 — scrolls left */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-[18px] w-max" animate={ctrl1}>
              {track.map((card, i) => <div key={i}>{card}</div>)}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-[18px] w-max" animate={ctrl2}>
              {track.map((card, i) => <div key={i}>{card}</div>)}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

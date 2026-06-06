'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ghostBtn = "min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg border border-[#dce3ee] bg-white/80 text-[#171b24] text-[13px] font-bold shadow-[0_8px_18px_rgba(15,23,42,.05)] whitespace-nowrap";
const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[380px] mb-6 text-[#667489] text-md leading-[1.6]";

const CARD = "h-[146px] w-[210px] shrink-0 border border-[#dfe7f1] rounded-lg bg-white overflow-hidden shadow-[0_10px_24px_rgba(30,50,86,.06)]";

const MOTION_VIDEOS_ROW_1 = [
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878511/videos/animation_78.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878588/videos/animation_96.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878568/videos/animation_89.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878543/videos/animation_82.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878539/videos/animation_81.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878511/videos/animation_78.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878475/videos/animation_75.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878456/videos/animation_71.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878453/videos/animation_70.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878431/videos/animation_63.mp4",
];

const MOTION_VIDEOS_ROW_2 = [
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878417/videos/animation_62.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878148/videos/animation_1.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878390/videos/animation_54.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878379/videos/animation_53.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878155/videos/animation_4.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878366/videos/animation_51.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878339/videos/animation_46.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878330/videos/animation_44.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878204/videos/animation_20.mp4",
  "https://res.cloudinary.com/dqryhg3rs/video/upload/v1779878150/videos/animation_2.mp4",
];

const cardsFromVideos = (videos: string[], keyPrefix: string) =>
  videos.map((src, i) => (
    <article key={`${keyPrefix}-${i}`} className={CARD}>
      <div className="h-full bg-[#080d14] p-3">
        <video
          src={src}
          className="h-full w-full rounded object-contain"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </article>
  ));

const trackRow1 = [...cardsFromVideos(MOTION_VIDEOS_ROW_1, "motion-row1"), ...cardsFromVideos(MOTION_VIDEOS_ROW_1, "motion-row1-dup")];
const trackRow2 = [...cardsFromVideos(MOTION_VIDEOS_ROW_2, "motion-row2"), ...cardsFromVideos(MOTION_VIDEOS_ROW_2, "motion-row2-dup")];

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
              {trackRow1.map((card, i) => <div key={i}>{card}</div>)}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-[18px] w-max" animate={ctrl2}>
              {trackRow2.map((card, i) => <div key={i}>{card}</div>)}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

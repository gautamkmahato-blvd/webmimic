'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[380px] mb-3 text-[#667489] text-md";
const ghostBtn = "min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg border border-[#dce3ee] bg-white/80 text-[#171b24] text-[13px] font-bold shadow-[0_8px_18px_rgba(15,23,42,.05)] whitespace-nowrap";

const row1 = [
  "BetterStack", "CalCom", "Clerk", "ClickHouse",
  "Framer", "GitHub", "Linear", "Lovable",
];
const row2 = [
  "Mintlify", "Notion", "Pinterest", "Pitch",
  "Railway", "Stripe", "mistral", "xAI",
];

const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

const TRANSITION = { duration: 30, repeat: Infinity, ease: "linear" } as const;

export default function DesignInspirationGallery() {
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
      {/* ── GALLERY ──────────────────────────────────────── */}
      <section className={`mx-auto grid gap-[38px] py-[43px] pb-[46px] grid-cols-[27%_73%] border-t border-[#edf1f7] mt-16 ${sectionWidth}`}>
        <div>
          <span className={sectionCopyEyebrow}>INSPIRATION GALLERY</span>
          <h2 className={sectionH2}>200+ curated design<br />systems &amp; websites.</h2>
          <p className={sectionP}>
            Explore the best websites, design systems, and UI inspirations
            hand-picked for you.
          </p>
          <a className={ghostBtn} href="#">Explore Gallery <span>→</span></a>
        </div>

        {/* ── Marquee rows ── */}
        <div
          className="flex flex-col gap-[24px] overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          {/* Row 1 — scrolls left */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-[22px] w-max" animate={ctrl1}>
              {track1.map((name, i) => (
                <div key={i} className="w-[210px] h-[132px] rounded-[7px] overflow-hidden border border-[#dfe7f1] shrink-0">
                  <Image
                    src={`/landing-page/design-gallery/${name}.png`}
                    alt={name}
                    width={1440}
                    height={900}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="overflow-hidden">
            <motion.div className="flex gap-[22px] w-max" animate={ctrl2}>
              {track2.map((name, i) => (
                <div key={i} className="w-[210px] h-[132px] rounded-[7px] overflow-hidden border border-[#dfe7f1] shrink-0">
                  <Image
                    src={`/landing-page/design-gallery/${name}.png`}
                    alt={name}
                    width={1440}
                    height={900}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

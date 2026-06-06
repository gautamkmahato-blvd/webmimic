"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  { icon: "▲", name: "Vercel" },
  { icon: "◒", name: "Linear" },
  { icon: "▰", name: "Framer" },
  { icon: null, name: "stripe" },
  { icon: "▣", name: "Notion" },
  { icon: "▰", name: "Adobe" },
  { icon: "▰", name: "Webflow" },
  { icon: "▲", name: "GitHub" },
  { icon: "◎", name: "Figma" },
];

const track = [...logos, ...logos];

export function TrustedMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      className="border-y border-[#e9eef6]"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-center text-xl tracking-[.24em] font-extrabold text-neutral-900 pt-[22px] pb-[36px]">
          TRUSTED BY LEADING TEAMS
        </p>

        {/* mask-image kept as style — vendor prefix (-webkit-) required */}
        <div
          className="overflow-hidden pb-[22px]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex items-center gap-[64px] w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {track.map(({ icon, name }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-[9px] text-[#9aa3b2] text-[20px] font-bold whitespace-nowrap select-none"
              >
                {icon && <span className="text-[18px]">{icon}</span>}
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

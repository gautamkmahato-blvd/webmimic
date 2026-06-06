'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const allTestimonials = [
  { name: "Sarah Chen",    role: "Product Designer",   quote: "webmimic completely changed how I work. I can extract a whole design system in seconds. Game changer!",             avatar: "linear-gradient(135deg,#667eea,#764ba2)" },
  { name: "Alex Morgan",   role: "Frontend Developer",  quote: "The animation cloning is insane. It just works. Saved me dozens of hours already.",                               avatar: "linear-gradient(135deg,#f093fb,#f5576c)" },
  { name: "James Carter",  role: "Design Engineer",     quote: "Finally, a tool that brings designers and developers on the same page. Love the design.md workflow.",             avatar: "linear-gradient(135deg,#4facfe,#00f2fe)" },
  { name: "Maya Patel",    role: "UX Lead",             quote: "The design.md export transformed our Figma handoffs overnight. Our whole team adopted it in a day.",             avatar: "linear-gradient(135deg,#43e97b,#38f9d7)" },
  { name: "Lena Schmidt",  role: "Creative Director",   quote: "I used to spend two days building a moodboard into Figma. Now it takes five minutes. Absolutely unreal.",       avatar: "linear-gradient(135deg,#fa709a,#fee140)" },
  { name: "Dan Okafor",    role: "Full-Stack Engineer",  quote: "Dropped webmimic into our workflow last sprint. Design tokens in CSS in minutes — the team was floored.",         avatar: "linear-gradient(135deg,#a18cd1,#fbc2eb)" },
  { name: "Priya Nair",    role: "Product Manager",     quote: "Bridging design and dev has always been painful. webmimic is the first tool that actually fixes that gap.",       avatar: "linear-gradient(135deg,#fccb90,#d57eeb)" },
  { name: "Tom Erikson",   role: "UI Engineer",         quote: "Cloned a complex hero section in under 2 minutes. The AI understood the spacing and typescale perfectly.",       avatar: "linear-gradient(135deg,#84fab0,#8fd3f4)" },
];

const row1 = allTestimonials.slice(0, 4);
const row2 = allTestimonials.slice(4, 8);
const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

const TRANSITION = { duration: 28, repeat: Infinity, ease: "linear" } as const;


function TestimonialCard({ name, role, quote, avatar }: typeof allTestimonials[0]) {
  return (
    <div className="w-[280px] shrink-0 border border-[#dfe7f1] rounded-[12px] bg-white p-[22px] shadow-[0_8px_24px_rgba(15,23,42,.06)] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-[10px] mb-[14px]">
          <span className="w-9 h-9 rounded-full shrink-0 inline-block" style={{ background: avatar }} />
          <div>
            <p className="text-[13px] font-bold text-[#283346] leading-tight">{name}</p>
            <p className="text-[11px] text-[#667489]">{role}</p>
          </div>
        </div>
        <p className="text-[12px] text-[#536174] leading-[1.65]">{quote}</p>
      </div>
      <div className="text-[#ffb11b] tracking-[3px] text-[13px] mt-[14px]">★★★★★</div>
    </div>
  );
}

export default function SocialProof() {
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
    <section className={`mx-auto py-[34px] pb-[52px] border-t border-[#edf1f7] mt-16 ${sectionWidth}`}>

      {/* Marquee rows */}
      <div
        className="flex flex-col gap-[17px] overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        onMouseEnter={pause}
        onMouseLeave={play}
      >
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden">
          <motion.div className="flex gap-[17px] w-max" animate={ctrl1}>
            {track1.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </motion.div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <motion.div className="flex gap-[17px] w-max" animate={ctrl2}>
            {track2.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

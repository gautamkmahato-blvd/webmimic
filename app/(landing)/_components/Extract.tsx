'use client';

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import NextImage from "next/image";
import {
  Palette, Type, Sparkles, FileCode2, Blend, Move, Image as ImageIcon, WandSparkles,
} from "lucide-react";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-xs tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[380px] mb-6 text-[#667489] text-md";
const glassCard = "bg-white/80 border border-[#dce5f2] rounded-[14px] shadow-[0_22px_55px_rgba(46,73,116,.13),inset_0_1px_0_rgba(255,255,255,.8)] backdrop-blur-[18px]";

const fonts = [
  { t: "Aa", size: "text-[24px]" },
  { t: "Aa", size: "text-[18px]" },
  { t: "§",  size: "text-[21px]" },
  { t: "Aa", size: "text-[14px]" },
];

const sites = [
  {
    name: "Linear",   url: "linear.app",   accent: "#5e6ad2",
    title: "Linear – The system for product development",
    image: "/landing-page/design-gallery/Linear.png",
    colors: ["#5e6ad2","#6e56cf","#1a1a1a","#f5f5f5","#8b8b8b","#2d2d2d","#e5e5e5","#c8c7ff"],
    fonts, spacing: ["4","8","12","16","24","32","48"],
  },
  {
    name: "Stripe",   url: "stripe.com",   accent: "#635bff",
    title: "Stripe – Online payment processing",
    image: "/landing-page/design-gallery/Stripe.png",
    colors: ["#635bff","#0a2540","#00d4ff","#7a73ff","#f6f9fc","#e3e8ee","#00a400","#ff7a59"],
    fonts, spacing: ["4","8","16","24","32","48","64"],
  },
  {
    name: "Notion",   url: "notion.so",    accent: "#37352f",
    title: "Notion – Your connected workspace",
    image: "/landing-page/design-gallery/Notion.png",
    colors: ["#000000","#37352f","#9b9a97","#e9e8e5","#f7f6f3","#2eaadc","#0f7b6c","#6940a5"],
    fonts, spacing: ["4","8","12","16","24","36","48"],
  },
  {
    name: "GitHub",   url: "github.com",   accent: "#24292f",
    title: "GitHub – Where the world builds software",
    image: "/landing-page/design-gallery/GitHub.png",
    colors: ["#24292f","#0969da","#2da44e","#f6f8fa","#d0d7de","#8c959f","#cf222e","#bf8700"],
    fonts, spacing: ["4","8","16","24","32","48","64"],
  },
  {
    name: "Framer",   url: "framer.com",   accent: "#0055ff",
    title: "Framer – Sites that ship themselves",
    image: "/landing-page/design-gallery/Framer.png",
    colors: ["#0055ff","#111111","#ff4545","#00c2ff","#333333","#ffffff","#ff9500","#00ff88"],
    fonts, spacing: ["4","8","12","20","28","40","56"],
  },
  {
    name: "Mintlify", url: "mintlify.com", accent: "#0d9373",
    title: "Mintlify – Beautiful documentation",
    image: "/landing-page/design-gallery/Mintlify.png",
    colors: ["#0d9373","#059669","#ecfdf5","#d1fae5","#111827","#374151","#6ee7b7","#34d399"],
    fonts, spacing: ["4","8","12","16","24","32","48"],
  },
  {
    name: "Clerk",    url: "clerk.com",    accent: "#7c3aed",
    title: "Clerk – Authentication for modern apps",
    image: "/landing-page/design-gallery/Clerk.png",
    colors: ["#7c3aed","#4f46e5","#f5f3ff","#ede9fe","#1f2937","#6b7280","#ddd6fe","#c4b5fd"],
    fonts, spacing: ["4","8","12","16","24","32","48"],
  },
  {
    name: "Railway",  url: "railway.app",  accent: "#b35bff",
    title: "Railway – Infrastructure for everyone",
    image: "/landing-page/design-gallery/Railway.png",
    colors: ["#b35bff","#7c3aed","#0f0f0f","#1a1a2e","#ffffff","#6b7280","#e879f9","#a855f7"],
    fonts, spacing: ["4","8","16","24","32","48","64"],
  },
];

// ── Cursor arrow ──
function CursorArrow() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
      <path
        d="M3 2L17 10.5L10 12.5L7 21L3 2Z"
        fill="white" stroke="#111827"
        strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"
      />
    </svg>
  );
}

// ── Click ripple ──
function ClickRipple({ x, y }: { x: number; y: number }) {
  return (
    <>
      <motion.div
        className="absolute rounded-full pointer-events-none z-30"
        style={{ left: x - 14, top: y - 14, width: 28, height: 28, border: "2px solid rgba(196,124,56,0.8)" }}
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none z-30"
        style={{ left: x - 8, top: y - 8, width: 16, height: 16, background: "rgba(196,124,56,0.25)" }}
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}

// ── Window bar ──
function WindowBar({ url }: { url: string }) {
  return (
    <div className="h-[42px] flex items-center gap-3 px-[18px] border-b border-[rgba(215,224,238,.7)]">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57] inline-block" />
      <span className="w-2 h-2 rounded-full bg-[#ffbd2e] inline-block" />
      <span className="w-2 h-2 rounded-full bg-[#28c840] inline-block" />
      <span className="text-[#a0aaba] text-[19px]">‹</span>
      <span className="text-[#a0aaba] text-[19px]">›</span>
      <div className="ml-auto w-[180px] h-[23px] bg-white/80 border border-[#e8edf5] rounded-[6px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={url}
            className="text-[#4d586b] text-[11px] font-bold"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            {url}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[#a0aaba] text-[19px]">↻</span>
    </div>
  );
}

// ── Scan state — matches the screenshot UI ──
function ScanView({ name, url, accent, title }: { name: string; url: string; accent: string; title: string }) {
  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      {/* Thumbnail preview */}
      <div className="flex-1 min-h-0 rounded-[10px] bg-[#f3f5f8] flex items-center justify-center mb-[10px]">
        <div
          className="w-[54px] h-[54px] rounded-full flex items-center justify-center text-white text-[22px] font-extrabold shadow-[0_8px_24px_rgba(0,0,0,.18)]"
          style={{ background: accent }}
        >
          {name[0]}
        </div>
      </div>

      {/* Site info row */}
      <div className="flex items-center gap-[9px] mb-[11px] px-[10px] py-[9px] rounded-[10px] border border-[#eef2f7] bg-white">
        <div className="w-[20px] h-[20px] rounded-full shrink-0" style={{ background: accent }} />
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-[#111827] leading-tight truncate">{title}</p>
          <p className="text-[9px] text-[#667489] mt-[2px]">https://{url}/</p>
        </div>
      </div>

      {/* SCAN PAGE button */}
      <button
        className="w-full h-[46px] rounded-full text-white text-[12px] font-black tracking-[0.14em] flex items-center justify-center gap-[7px] shadow-[0_4px_16px_rgba(180,100,40,.28)] shrink-0"
        style={{ background: "linear-gradient(135deg,#c4793a 0%,#d4924e 50%,#c4793a 100%)" }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        </svg>
        SCAN PAGE
      </button>
    </motion.div>
  );
}

// ── Result state — extracted design system ──
function ResultView({ site }: { site: typeof sites[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      <strong className="block text-[#19a963] text-[12px] mt-[16px]">{site.url}</strong>
      {/* <small className="block text-[#667489] text-[10px] mt-[5px]">{site.url}</small> */}

      <div className="text-[10px] font-bold text-[#667489] mt-[14px] mb-[8px]">Palette</div>
      <div className="flex items-center gap-2 flex-wrap">
        {site.colors.map((c, i) => (
          <span key={i} className="w-[22px] h-[22px] rounded-[3px] shrink-0 inline-block border border-black/[.06]" style={{ background: c }} />
        ))}
      </div>

      <div className="text-[10px] font-bold text-[#667489] mt-[14px] mb-[8px]">Typography</div>
      <div className="grid gap-2 grid-cols-[60px_1fr_40px_72px]">
        {site.fonts.map(({ t, size }, i) => (
          <div key={i} className={`h-[40px] bg-[#fbfcfe] border border-[#eef2f7] rounded grid place-items-center ${size}`}>{t}</div>
        ))}
      </div>

      <div className="text-[10px] font-bold text-[#667489] mt-[14px] mb-[8px]">Spacing</div>
      <div className="flex justify-between">
        {site.spacing.map((s) => (
          <span key={s} className="bg-[#f7f9fc] px-[8px] py-[6px] rounded-[4px] text-[11px]">{s}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Extract() {
  const [siteIdx, setSiteIdx]           = useState(0);
  const [cardPhase, setCardPhase]       = useState<"scan" | "result">("scan");
  const [ripple, setRipple]             = useState<{ x: number; y: number; id: number } | null>(null);
  const cardCursorControls              = useAnimation();
  const site                            = sites[siteIdx];

  // SCAN PAGE button center relative to the card wrapper (318×328px, p-4)
  // Layout: p-4(16) + header(20) + gap(10) + preview(flex≈148) + mb(10) + info(44) + mb(11) + btn-half(23) ≈ 282
  const BTN_X = 159;
  const BTN_Y = 282;

  useEffect(() => {
    let cancelled = false;

    const runCycle = async () => {
      if (cancelled) return;

      // 1. Show scan UI (phase already set to "scan" by previous cycle's site advance)
      await new Promise<void>((r) => setTimeout(r, 1300));
      if (cancelled) return;

      // 2. Cursor fades in near top of card
      cardCursorControls.set({ x: 80, y: 90, opacity: 0, scale: 1 });
      await cardCursorControls.start({ opacity: 1, transition: { duration: 0.24 } });
      if (cancelled) return;

      await new Promise<void>((r) => setTimeout(r, 220));
      if (cancelled) return;

      // 3. Glide to SCAN PAGE button
      await cardCursorControls.start({
        x: BTN_X, y: BTN_Y,
        transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
      });
      if (cancelled) return;

      await new Promise<void>((r) => setTimeout(r, 160));
      if (cancelled) return;

      // 4. Click — press + release + ripple
      await cardCursorControls.start({ scale: 0.74, transition: { duration: 0.08 } });
      setRipple({ x: BTN_X, y: BTN_Y, id: Date.now() });
      setTimeout(() => { if (!cancelled) setRipple(null); }, 650);
      await cardCursorControls.start({ scale: 1, transition: { duration: 0.18 } });
      if (cancelled) return;

      await new Promise<void>((r) => setTimeout(r, 180));
      if (cancelled) return;

      // 5. Transition card to result
      setCardPhase("result");
      await cardCursorControls.start({ opacity: 0, transition: { duration: 0.32 } });
      if (cancelled) return;

      // 6. Pause showing design system
      await new Promise<void>((r) => setTimeout(r, 2000));
      if (cancelled) return;

      // 7. Advance to next site — reset card to scan in the same render so result never flashes new site data
      setCardPhase("scan");
      setSiteIdx((prev) => (prev + 1) % sites.length);
      await new Promise<void>((r) => setTimeout(r, 420));
      if (cancelled) return;

      runCycle();
    };

    cardCursorControls.set({ opacity: 0 });
    const timer = setTimeout(runCycle, 900);
    return () => { cancelled = true; clearTimeout(timer); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`mx-auto grid items-center gap-7 py-[42px] pb-7 min-h-[390px] grid-cols-[34%_66%] mt-16 ${sectionWidth}`}>

      {/* ── Left: Copy ── */}
      <div>
        <span className={sectionCopyEyebrow}>EXTRACT ANY WEBSITE</span>
        <h2 className={sectionH2}>Turn any website into<br />your design system.</h2>
        <p className={sectionP}>
          Our AI scans every pixel and extracts the complete design system in
          seconds. Colors, typography, icons, spacing, gradients, animations —
          everything.
        </p>
        <div className="grid gap-4 grid-cols-[repeat(4,92px)]">
          {[
            { icon: Palette,      label: "Colors"      },
            { icon: Type,         label: "Typography"  },
            { icon: Sparkles,     label: "Icons"       },
            { icon: FileCode2,    label: "SVGs"        },
            { icon: Blend,        label: "Gradients"   },
            { icon: Move,         label: "Spacing"     },
            { icon: ImageIcon,    label: "Images"      },
            { icon: WandSparkles, label: "Animations"  },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="h-[72px] border border-[#e2e9f3] rounded-lg bg-white flex flex-col items-center justify-center gap-2 text-[#172033] text-[11px] shadow-[0_10px_22px_rgba(35,57,95,.05)]"
            >
              <span className="font-extrabold text-[17px] flex items-center justify-center">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Right: Live demo ── */}
      <div className="h-[360px] flex items-center justify-center gap-4">

        {/* Browser window (image only — no cursor here) */}
        <div className={`overflow-hidden relative flex-1 h-[357px] ${glassCard}`}>
          <WindowBar url={site.url} />
          <div className="relative h-[calc(100%-42px)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={site.image}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                <NextImage src={site.image} alt={site.name} fill className="object-cover object-top" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Card wrapper — position:relative so cursor sits above overflow:hidden */}
        <div className="relative w-[318px] h-[328px]">

          {/* Card content */}
          <div className={`absolute inset-0 p-4 overflow-hidden ${glassCard} flex flex-col`}>
            {/* Always-visible header */}
            <div className="flex items-center gap-[7px] text-[12px] shrink-0">
              <NextImage src="/landing-page/logo.jpg" alt="webmimic" width={18} height={18} className="rounded-[4px] shrink-0" />
              <b className="flex-1 font-extrabold">webmimic</b>
              <i className="not-italic text-[#7e8898]">‹</i>
              <i className="not-italic text-[#7e8898]">×</i>
            </div>

            {/* Animated content area */}
            <div className="flex-1 min-h-0 mt-[10px]">
              <AnimatePresence mode="wait">
                {cardPhase === "scan"
                  ? <ScanView key={`scan-${site.name}`} name={site.name} url={site.url} accent={site.accent} title={site.title} />
                  : <ResultView key={`result-${site.name}`} site={site} />
                }
              </AnimatePresence>
            </div>
          </div>

          {/* Cursor (outside overflow:hidden) */}
          <motion.div
            className="absolute pointer-events-none z-20"
            style={{ left: 0, top: 0 }}
            animate={cardCursorControls}
          >
            <CursorArrow />
          </motion.div>

          {/* Click ripple */}
          <AnimatePresence>
            {ripple && <ClickRipple key={ripple.id} x={ripple.x} y={ripple.y} />}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

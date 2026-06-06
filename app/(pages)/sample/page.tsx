"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

/* ─────────────────────────────────────────────
   Fan animation config
   ─────────────────────────────────────────────
   TIGHT = overlapping resting state (frames 1, 30)
   SPREAD = fanned open, cards apart (frame 20)
   
   Cycle: tight → spread → tight (10s loop)
   ───────────────────────────────────────────── */

const FAN_DURATION = 10;

const fanStates = {
  left: {
    tight:  { rotate: -12, x: -40, y: 15 },
    spread: { rotate: -22, x: -105, y: 5 },
  },
  center: {
    tight:  { rotate: -2, x: 5, y: -20 },
    spread: { rotate: -5, x: 0, y: -35 },
  },
  right: {
    tight:  { rotate: 8, x: 50, y: -5 },
    spread: { rotate: 16, x: 110, y: -15 },
  },
};

/* Keyframe timing:
   0.00 - 0.10  hold tight
   0.10 - 0.45  spread open
   0.45 - 0.55  hold spread
   0.55 - 0.90  close back
   0.90 - 1.00  hold tight (seamless loop) */
const fanTimes = [0, 0.1, 0.45, 0.55, 0.9, 1];

function buildFanKeyframes(position: "left" | "center" | "right") {
  const s = fanStates[position];
  return {
    rotate: [s.tight.rotate, s.tight.rotate, s.spread.rotate, s.spread.rotate, s.tight.rotate, s.tight.rotate],
    x:      [s.tight.x, s.tight.x, s.spread.x, s.spread.x, s.tight.x, s.tight.x],
    y:      [s.tight.y, s.tight.y, s.spread.y, s.spread.y, s.tight.y, s.tight.y],
  };
}

/* ─────────────────────────────────────────────
   Card content — three website mockups
   ───────────────────────────────────────────── */

const cards: {
  id: string;
  position: "left" | "center" | "right";
  zIndex: number;
  enterDelay: number;
  content: React.ReactNode;
}[] = [
  {
    id: "self-love",
    position: "left",
    zIndex: 1,
    enterDelay: 0,
    content: (
      <div className="w-[230px] h-[345px] rounded-[20px] overflow-hidden bg-gradient-to-b from-pink-500 via-rose-400 to-fuchsia-600 text-white relative">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-6 rounded-full bg-white/30" />
            <span className="text-[10px] font-medium opacity-80">STUDIO</span>
          </div>
          <h3 className="text-[22px] font-bold leading-tight mb-2">
            Self-Love<br />That Works
          </h3>
          <p className="text-[10px] opacity-70 mb-4">
            Discover your inner strength through mindful practices and daily rituals
          </p>
          <div className="w-14 h-14 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-purple-900/80 p-3 backdrop-blur-sm">
          <div className="text-[9px] font-semibold mb-1">The best way to</div>
          <div className="text-[9px] opacity-70">better yourself everyday</div>
          <div className="flex gap-1 mt-2">
            <div className="w-12 h-1.5 rounded-full bg-white/40" />
            <div className="w-12 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="absolute top-[130px] left-3 bg-black/60 backdrop-blur-sm rounded-lg p-2 w-[90px]">
          <div className="w-full h-1.5 bg-green-400/60 rounded mb-1" />
          <div className="w-3/4 h-1 bg-white/20 rounded" />
          <div className="w-1/2 h-1 bg-white/20 rounded mt-0.5" />
        </div>
        <div className="absolute top-[195px] right-3 text-[8px] bg-white/10 backdrop-blur-sm rounded-md px-2 py-1">
          <span className="text-yellow-300">✦</span> Checkout with<br />redirects
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    position: "center",
    zIndex: 2,
    enterDelay: 0.15,
    content: (
      <div className="w-[230px] h-[345px] rounded-[20px] overflow-hidden bg-white relative">
        <div className="bg-[#c8ff00] p-3 pb-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-black/20" />
            <span className="text-[9px] font-bold text-black/70">Skye</span>
            <div className="ml-auto flex gap-2">
              {["Shop", "About", "Blog"].map((t) => (
                <span key={t} className="text-[7px] text-black/50">{t}</span>
              ))}
            </div>
          </div>
          <h3 className="text-[15px] font-bold text-black leading-tight">
            Ecommerce<br />infrastructure
          </h3>
          <p className="text-[9px] text-black/60 mt-0.5">for any digital experience</p>
        </div>
        <div className="p-3 space-y-2">
          <div className="flex gap-2">
            <div className="w-1/2 h-14 rounded-lg bg-[#c8ff00]/20 p-2">
              <div className="w-full h-2 bg-gray-200 rounded mb-1" />
              <div className="w-2/3 h-1.5 bg-gray-100 rounded" />
            </div>
            <div className="w-1/2 h-14 rounded-lg bg-gray-100 p-2">
              <div className="w-8 h-8 rounded bg-gray-200 mb-1" />
              <div className="w-full h-1.5 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-[8px] font-semibold text-gray-700 mb-1">Integrations</div>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-[18px] h-[18px] rounded bg-gray-200/80" />
              ))}
            </div>
          </div>
          <div className="bg-black rounded-lg p-2 text-white">
            <div className="text-[7px] opacity-60 mb-1">Terminal</div>
            <div className="text-[7px] font-mono opacity-40">$ npm install @skye/sdk</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-2">
            <div className="text-[8px] text-purple-700 font-medium">Checkout flow</div>
            <div className="flex gap-1 mt-1">
              <div className="w-8 h-1 rounded-full bg-purple-200" />
              <div className="w-8 h-1 rounded-full bg-purple-100" />
            </div>
          </div>
          <div className="bg-amber-50 rounded-lg p-2">
            <div className="text-[8px] text-amber-700 font-medium">Analytics</div>
            <div className="flex items-end gap-0.5 mt-1 h-4">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div key={i} className="w-2 bg-amber-300 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "beauty",
    position: "right",
    zIndex: 3,
    enterDelay: 0.3,
    content: (
      <div className="w-[230px] h-[345px] rounded-[20px] overflow-hidden bg-white relative">
        <div className="h-[110px] bg-gradient-to-br from-gray-600 to-gray-800 relative">
          <div className="absolute top-2 left-3 flex gap-3">
            <span className="text-[7px] text-white/60">About</span>
            <span className="text-[7px] text-white/60">Shop</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-[11px] text-white/90 italic font-light">Unlock your full beauty</p>
          </div>
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-pink-300/60" />
        </div>
        <div className="p-3">
          <div className="text-center mb-2">
            <p className="text-[6px] text-gray-400 uppercase tracking-[2px]">Premium Collection</p>
            <h4 className="text-[13px] font-serif italic text-gray-800">Health skin,<br />happy life</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {[
              { bg: "bg-orange-100", label: "Glow Serum" },
              { bg: "bg-rose-50", label: "Day Cream" },
              { bg: "bg-amber-50", label: "Essence Oil" },
              { bg: "bg-stone-100", label: "Night Mask" },
            ].map((item) => (
              <div key={item.label} className={`${item.bg} rounded-lg p-2 flex flex-col items-center`}>
                <div className="w-7 h-7 rounded-full bg-white/60 mb-1" />
                <span className="text-[6px] text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-2 text-center">
            <div className="text-[7px] text-gray-500">Free shipping on $50+</div>
          </div>
          <div className="mt-2 bg-gray-50 rounded-lg p-2">
            <div className="text-[7px] font-medium text-gray-700 mb-1">Bestsellers</div>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded bg-stone-200/60" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

/* ─────────────────────────────────────────────
   FanCard — synchronized spread/close animation
   ───────────────────────────────────────────── */

function FanCard({
  children,
  position,
  zIndex,
  enterDelay,
}: {
  children: React.ReactNode;
  position: "left" | "center" | "right";
  zIndex: number;
  enterDelay: number;
}) {
  const states = fanStates[position];
  const keyframes = buildFanKeyframes(position);

  return (
    <motion.div
      className="absolute"
      style={{ zIndex }}
      initial={{
        opacity: 0,
        scale: 0.7,
        rotate: states.tight.rotate - 8,
        x: states.tight.x,
        y: states.tight.y + 60,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: states.tight.rotate,
        x: states.tight.x,
        y: states.tight.y,
      }}
      transition={{
        duration: 0.9,
        delay: enterDelay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {/* Primary: fan breathe (spread ↔ close) */}
      <motion.div
        animate={keyframes}
        transition={{
          duration: FAN_DURATION,
          times: fanTimes,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          filter:
            "drop-shadow(0 20px 40px rgba(0,0,0,0.25)) drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
        }}
      >
        {/* Secondary: subtle micro-float layered on top */}
        <motion.div
          animate={{ y: [0, -3, 0, 3, 0] }}
          transition={{
            duration: 5,
            delay: enterDelay * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ScrollingContent — synced with fan spread
   ───────────────────────────────────────────── */

function ScrollingContent({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();

  useEffect(() => {
    let active = true;

    const holdMs = FAN_DURATION * 100;       // 1s hold phases
    const spreadMs = FAN_DURATION * 350;     // 3.5s spread phase
    const closeMs = FAN_DURATION * 350;      // 3.5s close phase

    const run = async () => {
      await new Promise((r) => setTimeout(r, 1500)); // wait for entrance

      while (active) {
        // Hold at top (tight phase)
        await new Promise((r) => setTimeout(r, holdMs));

        // Scroll down during spread
        await controls.start({
          y: -65,
          transition: { duration: spreadMs / 1000, ease: "easeInOut" },
        });

        // Hold at bottom (spread hold)
        await new Promise((r) => setTimeout(r, holdMs));

        // Scroll back up during close
        await controls.start({
          y: 0,
          transition: { duration: closeMs / 1000, ease: "easeInOut" },
        });

        // Brief pause for seamless loop
        await new Promise((r) => setTimeout(r, holdMs));
      }
    };

    run();
    return () => { active = false; };
  }, [controls]);

  return (
    <div className="overflow-hidden rounded-[20px]">
      <motion.div animate={controls}>{children}</motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Animated gradient blob background
   ───────────────────────────────────────────── */

function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[28px]">
      <div className="absolute inset-0 bg-orange-500" />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-blue-600 opacity-80"
        style={{ filter: "blur(60px)", top: "-10%", right: "-22%" }}
        animate={{
          x: [0, 80, -20, 50, 0],
          y: [0, 80, 30, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[380px] h-[380px] rounded-full bg-pink-500 opacity-70"
        style={{ filter: "blur(50px)", top: "-15%", left: "5%" }}
        animate={{
          x: [0, 50, -30, 20, 0],
          y: [0, 40, -30, 10, 0],
          scale: [1, 0.9, 1.15, 1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full bg-indigo-700 opacity-60"
        style={{ filter: "blur(50px)", bottom: "-5%", right: "5%" }}
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -40, 20, -30, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute w-[400px] h-[280px] rounded-full bg-orange-600 opacity-60"
        style={{ filter: "blur(40px)", bottom: "8%", left: "15%" }}
        animate={{
          x: [0, 30, -15, 20, 0],
          y: [0, -20, 30, -10, 0],
          scale: [1, 1.05, 0.95, 1.1, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-red-500 opacity-40"
        style={{ filter: "blur(40px)", top: "30%", left: "-5%" }}
        animate={{
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 20, -10, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page component
   ───────────────────────────────────────────── */

export default function ReceiveSection() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center p-6">
      <div className="w-full max-w-[440px]">
        {/* Card showcase area */}
        <div className="relative rounded-[28px] overflow-hidden h-[530px]">
          <GradientBackground />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] h-[345px]">
              {cards.map((card) => (
                <FanCard
                  key={card.id}
                  position={card.position}
                  zIndex={card.zIndex}
                  enterDelay={card.enterDelay}
                >
                  <ScrollingContent>{card.content}</ScrollingContent>
                </FanCard>
              ))}
            </div>
          </div>
        </div>

        {/* Text section */}
        <motion.div
          className="mt-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-[42px] font-bold text-[#1a1a1a] leading-[1.05] tracking-[-0.02em]">
            Receive
          </h2>
          <p className="text-[18px] text-[#1a1a1a]/60 mt-3 leading-relaxed">
            Receive your design within two business days on average.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
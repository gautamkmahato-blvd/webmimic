// "use client";

// import Lottie from "lottie-react";
// import animationData from "@/public/lottie.json";
// import animationData2 from "@/public/lottie-2.json";

// export default function SamplePage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-neutral-950 p-8">
//       <Lottie
//         animationData={animationData}
//         loop
//         className="max-w-full"
//         style={{ width: 480, height: 480 }}
//       />
//       <Lottie
//         animationData={animationData2}
//         loop
//         className="max-w-full"
//         style={{ width: 480, height: 480 }}
//       />
//     </main>
//   );
// }


"use client";

import React, { useState } from "react";

export default function RunlayerLanding() {
  const [email, setEmail] = useState("");
  const [isCookieVisible, setIsCookieVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col font-sans select-none overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Top Announcement Banner */}
      <div className="w-full bg-[#9d4edd] text-black text-center py-2.5 px-4 text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-1 hover:bg-[#a85cfc] transition-colors duration-200 cursor-pointer">
        <span>Runlayer named to Rising In Cyber 2026 List by Morgan Stanley</span>
        <svg
          className="w-4 h-4 ml-0.5 inline-block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>

      {/* Header Navigation */}
      <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3.5 group cursor-pointer">
          {/* Custom Brand Logo */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="5" y1="19" x2="19" y2="5" />
            </svg>
            <div className="absolute w-1.5 h-1.5 bg-black rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
            Runlayer
          </span>
        </div>

        {/* Navigation Actions */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-neutral-300">
          <button className="flex items-center gap-1 hover:text-white transition-colors">
            Solutions
            <svg
              className="w-3 h-3 text-neutral-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <button className="hover:text-white transition-colors">About</button>
          <button className="hover:text-white transition-colors">Careers</button>
          <button className="hover:text-white transition-colors">Customers</button>
          <button className="hover:text-white transition-colors">Blog</button>
        </div>

        <div>
          <button className="border border-neutral-800 hover:border-neutral-500 active:border-white px-5 py-2 rounded-full text-xs sm:text-sm font-medium bg-black hover:bg-neutral-900 text-white transition-all duration-150">
            Book a Demo
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative py-12 lg:py-0">
        {/* Left Side Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 z-10">
          <div className="space-y-4">
            <h1 className="text-[52px] sm:text-[68px] lg:text-[76px] font-bold tracking-tight leading-[1.05] text-white">
              All in on AI.
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-[460px]">
              Give every employee the golden path to use agents, then watch
              adoption multiply. AI enablement and control in one platform.
            </p>
          </div>

          {/* Email Capture Container */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center bg-[#111111] border border-neutral-800 focus-within:border-neutral-700 rounded-full p-1 max-w-[420px] w-full transition-all duration-200 shadow-2xl"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-white placeholder-neutral-600 px-4 py-3 sm:py-3.5 outline-none text-sm w-full font-medium"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold rounded-full px-5 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-neutral-200 active:scale-95 transition-all whitespace-nowrap"
            >
              Book a Demo
            </button>
          </form>
        </div>

        {/* Right Side Graph Area (Dynamic Isometric Layout) */}
        <div className="lg:col-span-7 relative w-full h-[520px] sm:h-[650px] flex items-center justify-center overflow-visible select-none">
          {/* Deep Purple Glow in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#9d4edd] opacity-10 rounded-full blur-[120px] pointer-events-none" />

          {/* Isometric Transform Container */}
          <div className="relative w-[580px] h-[580px] scale-75 sm:scale-90 lg:scale-[0.95] xl:scale-100 transition-transform duration-300">
            <div
              className="absolute inset-0 origin-center"
              style={{
                transform: "rotateX(58deg) rotateZ(-41deg) scale(1.05)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Isometric Alignment Guidelines */}
              <svg
                className="absolute inset-0 w-full h-full text-neutral-900 pointer-events-none opacity-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 290 H580 M290 0 V580"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="290"
                  cy="290"
                  r="230"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                />
                <circle
                  cx="290"
                  cy="290"
                  r="140"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* CENTER COMPONENT: Stacked Central Core Microchip */}
              <div
                className="absolute top-[210px] left-[210px] w-[160px] h-[160px] transition-all duration-300 pointer-events-auto group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Microchip Base Grid (Layer 1) */}
                <div className="absolute inset-0 border border-neutral-800 bg-neutral-950/40 rounded-2xl [transform:translateZ(0px)]" />

                {/* Layer 2 Trace Plate */}
                <div className="absolute inset-0 border border-neutral-700/60 bg-neutral-900/30 rounded-2xl [transform:translateZ(10px)]" />

                {/* Layer 3 Logic Matrix */}
                <div className="absolute inset-2 border border-neutral-600/40 bg-neutral-950/60 rounded-xl [transform:translateZ(20px)]" />

                {/* Top Active Processor Core (Layer 4 - Glowing Violet Accent) */}
                <div className="absolute inset-4 border-2 border-purple-500 bg-black shadow-[0_0_30px_rgba(157,78,221,0.5)] rounded-lg [transform:translateZ(30px)] flex items-center justify-center group-hover:[transform:translateZ(38px)] transition-transform duration-300">
                  {/* Central Branded Asterisk */}
                  <svg
                    className="w-12 h-12 text-[#9d4edd] animate-pulse"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="6.34" y1="6.34" x2="17.66" y2="17.66" />
                    <line x1="6.34" y1="17.66" x2="17.66" y2="6.34" />
                  </svg>
                </div>
              </div>

              {/* Dynamic Status Purple Ring Indicators */}
              <div
                className="absolute top-[280px] left-[150px] w-6 h-6 [transform:translateZ(15px)] flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute w-4 h-4 border-2 border-purple-500/80 rounded-full animate-ping" />
                <div className="absolute w-2 h-2 bg-purple-500 rounded-full" />
              </div>

              <div
                className="absolute top-[340px] left-[390px] w-6 h-6 [transform:translateZ(15px)] flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute w-4 h-4 border-2 border-purple-500/80 rounded-full animate-ping [animation-delay:0.5s]" />
                <div className="absolute w-2 h-2 bg-purple-500 rounded-full" />
              </div>

              {/* LEFT QUADRANT: Flowing Agent Integrations (Cursor, VSCode, Claude Code) */}

              {/* Integration 1: Cursor */}
              <div
                className="absolute top-[370px] left-[30px] w-[130px] h-[46px] border border-neutral-800 bg-[#070707] rounded-xl flex items-center gap-2.5 px-3.5 shadow-2xl hover:border-neutral-500 transition-all duration-200 cursor-pointer hover:[transform:translateZ(15px)]"
                style={{ transform: "translateZ(8px)" }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 21V3l15 11.23h-8.08s-.35.1-.55.28L4 21z" />
                </svg>
                <span className="text-[14px] font-bold tracking-tight text-white">
                  Cursor
                </span>
              </div>

              {/* Integration 2: VSCode */}
              <div
                className="absolute top-[430px] left-[120px] w-[130px] h-[46px] border border-neutral-800 bg-[#070707] rounded-xl flex items-center gap-2.5 px-3.5 shadow-2xl hover:border-neutral-500 transition-all duration-200 cursor-pointer hover:[transform:translateZ(15px)]"
                style={{ transform: "translateZ(8px)" }}
              >
                <svg
                  className="w-4 h-4 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
                <span className="text-[14px] font-bold tracking-tight text-white">
                  VSCode
                </span>
              </div>

              {/* Integration 3: Claude Code */}
              <div
                className="absolute top-[490px] left-[210px] w-[140px] h-[46px] border border-neutral-800 bg-[#070707] rounded-xl flex items-center gap-2.5 px-3.5 shadow-2xl hover:border-neutral-500 transition-all duration-200 cursor-pointer hover:[transform:translateZ(15px)]"
                style={{ transform: "translateZ(8px)" }}
              >
                <svg
                  className="w-4 h-4 text-orange-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                </svg>
                <span className="text-[14px] font-bold tracking-tight text-white">
                  Claude Code
                </span>
              </div>

              {/* RIGHT QUADRANT: Cylindrical Trust Capsules (Security, Observability, Auditing) */}

              {/* Capsule 1: Security */}
              <div
                className="absolute top-[480px] left-[350px] w-[125px] h-[42px] border border-neutral-800 bg-[#0c0c0c]/40 rounded-full flex items-center justify-center hover:border-purple-500/50 transition-colors duration-200 hover:[transform:translateZ(8px)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-[12px] font-semibold tracking-wider text-neutral-400 uppercase">
                  Security
                </span>
              </div>

              {/* Capsule 2: Observability */}
              <div
                className="absolute top-[400px] left-[430px] w-[140px] h-[42px] border border-neutral-800 bg-[#0c0c0c]/40 rounded-full flex items-center justify-center hover:border-purple-500/50 transition-colors duration-200 hover:[transform:translateZ(8px)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-[12px] font-semibold tracking-wider text-neutral-400 uppercase">
                  Observability
                </span>
              </div>

              {/* Capsule 3: Auditing */}
              <div
                className="absolute top-[320px] left-[490px] w-[125px] h-[42px] border border-neutral-800 bg-[#0c0c0c]/40 rounded-full flex items-center justify-center hover:border-purple-500/50 transition-colors duration-200 hover:[transform:translateZ(8px)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-[12px] font-semibold tracking-wider text-neutral-400 uppercase">
                  Auditing
                </span>
              </div>

              {/* TOP QUADRANT: Extruded Server Stack Containers (GitHub, Atlassian, Sentry) */}

              {/* Server Stack 1: GitHub */}
              <div
                className="absolute top-[30px] left-[340px] w-[110px] h-[75px] group pointer-events-auto cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Bottom Base */}
                <div className="absolute inset-0 border border-neutral-900 bg-neutral-950/20 rounded-xl [transform:translateZ(0px)]" />
                {/* Middle Support */}
                <div className="absolute inset-0 border border-neutral-800 bg-neutral-900/30 rounded-xl [transform:translateZ(10px)]" />
                {/* Active Top Platform */}
                <div className="absolute inset-0 border border-neutral-700 bg-neutral-950 rounded-xl [transform:translateZ(20px)] flex flex-col items-center justify-center gap-1 shadow-2xl group-hover:[transform:translateZ(28px)] transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                  <span className="text-[10px] text-neutral-400 font-bold tracking-wide uppercase">
                    GitHub
                  </span>
                </div>
              </div>

              {/* Server Stack 2: Atlassian */}
              <div
                className="absolute top-[90px] left-[430px] w-[110px] h-[75px] group pointer-events-auto cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 border border-neutral-900 bg-neutral-950/20 rounded-xl [transform:translateZ(0px)]" />
                <div className="absolute inset-0 border border-neutral-800 bg-neutral-900/30 rounded-xl [transform:translateZ(10px)]" />
                <div className="absolute inset-0 border border-neutral-700 bg-neutral-950 rounded-xl [transform:translateZ(20px)] flex flex-col items-center justify-center gap-1 shadow-2xl group-hover:[transform:translateZ(28px)] transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.55 2.23a.75.75 0 0 1 .9 0l8.25 6a.75.75 0 0 1 .28.65v11.5c0 1.25-.75 2.12-1.93 2.12H5c-1.18 0-1.92-.87-1.92-2.12V8.88a.75.75 0 0 1 .28-.65l8.19-6z" />
                  </svg>
                  <span className="text-[10px] text-neutral-400 font-bold tracking-wide uppercase">
                    Atlassian
                  </span>
                </div>
              </div>

              {/* Server Stack 3: Guard Matrix */}
              <div
                className="absolute top-[150px] left-[520px] w-[110px] h-[75px] group pointer-events-auto cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 border border-neutral-900 bg-neutral-950/20 rounded-xl [transform:translateZ(0px)]" />
                <div className="absolute inset-0 border border-neutral-800 bg-neutral-900/30 rounded-xl [transform:translateZ(10px)]" />
                <div className="absolute inset-0 border border-neutral-700 bg-neutral-950 rounded-xl [transform:translateZ(20px)] flex flex-col items-center justify-center gap-1 shadow-2xl group-hover:[transform:translateZ(28px)] transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-[10px] text-neutral-400 font-bold tracking-wide uppercase">
                    SecOps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <footer className="w-full text-center py-6 text-[13px] text-neutral-600 font-medium tracking-wide z-10 pointer-events-none">
        The default for AI-native teams
      </footer>

      {/* Cookie Consent Card Bottom Right */}
      {isCookieVisible && (
        <div className="fixed bottom-6 right-6 max-w-[360px] bg-[#0c0c0c]/90 backdrop-blur-md border border-neutral-800 rounded-xl p-4 flex items-center justify-between gap-4 shadow-2xl z-50 animate-fade-in transition-all duration-300">
          <p className="text-xs text-neutral-300 leading-normal">
            We use cookies to personalize content, run ads, and analyze
            traffic.
          </p>
          <button
            onClick={() => setIsCookieVisible(false)}
            className="border border-neutral-700 hover:border-white text-white text-xs font-semibold px-4 py-1.5 rounded-lg bg-black hover:bg-neutral-900 active:scale-95 transition-all"
          >
            Okay
          </button>
        </div>
      )}
    </div>
  );
}


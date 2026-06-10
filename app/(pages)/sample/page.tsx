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


export default function Page() {
  const rows = [
    ["fedex track", "7.5M"],
    ["ikea", "7.5M"],
    ["ikea", "7.5M"],
    ["store near me", "5M"],
    ["stores near me", "5M"],
    ["store", "2.7M"],
    ["stores", "2.7M"],
    ["at home", "1.8M"],
  ];

  return (
    <main className="relative h-[1778px] w-full overflow-hidden bg-[#050015] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(44,20,118,0.55)_0%,rgba(13,2,45,0.92)_40%,rgba(5,0,21,1)_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.25)_100%)]" />

      <div className="relative z-10 mx-auto w-[1126px] pt-[42px]">
        <div className="mx-auto flex w-[640px] items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11">
              <div className="absolute inset-0 rounded-full border-[5px] border-white/90" />
              <div className="absolute left-[7px] top-[22px] h-[5px] w-[28px] -rotate-[36deg] rounded-full bg-white/90" />
              <div className="absolute left-[8px] top-[15px] h-[5px] w-[20px] rotate-[39deg] rounded-full bg-white/90" />
            </div>
            <span className="text-[52px] font-semibold tracking-[-1px]">wope</span>
          </div>

          <button className="flex h-[62px] items-center gap-5 rounded-full border border-white/15 bg-white/[0.02] px-10 text-[42px] text-white/75 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <span className="leading-none">☰</span>
            <span>Menu</span>
          </button>
        </div>

        <div className="mx-auto mt-9 h-px w-[640px] bg-white/10" />

        <section className="mx-auto mt-[132px] flex w-[760px] flex-col items-center text-center">
          <h1 className="text-[74px] font-semibold leading-[1.08] tracking-[-2px] text-white/95">
            New Era of SEO
            <br />
            Research
          </h1>
          <p className="mt-7 w-[690px] text-[48px] leading-[1.5] text-white/65">
            Let our AI do the heavy lifting. Make your competitor research, find hidden keyword opportunities and get clear &
            actionable insights
          </p>

          <div className="relative mt-11">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(171,124,255,0.24)_0%,rgba(171,124,255,0.05)_55%,transparent_78%)] blur-xl" />
            <div className="relative flex h-[74px] w-[430px] items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] text-[43px] font-medium text-white/70 shadow-[inset_0_0_20px_rgba(255,255,255,0.06)]">
              Unlimited trial for 14 days
            </div>
          </div>
        </section>

        <section className="relative mt-[66px] flex justify-center">
          <div
            className="absolute top-[-95px] h-[620px] w-[1040px] border border-[#9d89ff]/15"
            style={{ clipPath: "polygon(18% 22%,82% 22%,98% 41%,98% 100%,2% 100%,2% 41%)" }}
          />
          <div className="absolute top-[-28px] h-[2px] w-[980px] bg-[#8f7dff]/12" />
          <div className="absolute top-[-164px] h-[220px] w-[780px] bg-[radial-gradient(ellipse_at_center,rgba(255,212,254,0.96)_0%,rgba(219,126,255,0.65)_36%,rgba(108,53,221,0.4)_60%,rgba(108,53,221,0)_82%)] blur-[8px]" />
          <div className="absolute top-[-30px] h-[1px] w-[1px] bg-white/20 shadow-[0_0_220px_120px_rgba(186,110,255,0.65)]" />

          <div className="relative h-[940px] w-[628px] overflow-hidden rounded-t-[22px] border border-[#8370d7]/40 bg-[linear-gradient(180deg,rgba(20,15,57,0.98)_0%,rgba(11,14,45,0.98)_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="h-[86px] border-b border-white/10 bg-[linear-gradient(180deg,rgba(71,44,140,0.42)_0%,rgba(25,18,64,0.7)_100%)] px-6">
              <div className="flex h-full items-center gap-5 text-[41px] text-white/70">
                <span>≡</span>
                <span className="font-semibold">Keyword Finder</span>
                <span className="text-white/35">↗</span>
                <span className="ml-2 text-white/45">＋ New Research</span>
              </div>
            </div>

            <div className="flex h-[70px] items-center gap-5 border-b border-white/10 px-6 text-[36px] text-white/70">
              <span>🇺🇸 ikea.com (US, en)</span>
              <span className="ml-auto">⌄ ⌄</span>
            </div>

            <div className="flex h-[74px] items-center justify-between border-b border-white/10 px-6 text-[38px] text-white/65">
              <span>◧ Keywords</span>
              <span>⌕</span>
            </div>

            <div className="grid grid-cols-[1.9fr_0.7fr_0.8fr] border-b border-white/10 px-6 py-5 text-[35px] text-white/55">
              <span>Keyword</span>
              <span>Volume</span>
              <span>Trend</span>
            </div>

            {rows.map((r, i) => (
              <div
                key={i}
                className="grid h-[70px] grid-cols-[1.9fr_0.7fr_0.8fr] items-center border-b border-white/[0.07] px-6 text-[40px] text-white/75"
              >
                <span>{r[0]}</span>
                <span>{r[1]}</span>
                <div className="flex gap-[5px] opacity-60">
                  {Array.from({ length: 10 }).map((_, bi) => (
                    <span
                      key={bi}
                      className={`w-[8px] rounded-[2px] bg-[#7d87ff] ${bi === 4 || bi === 5 ? "h-[26px] opacity-90" : "h-[18px] opacity-35"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
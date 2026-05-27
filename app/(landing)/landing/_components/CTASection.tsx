'use client';

const sectionWidth =
  "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const extractionStats = [
  { label: "Colors extracted", count: 14 },
  { label: "Fonts detected", count: 3 },
  { label: "Components found", count: 27 },
  { label: "SVGs ready", count: 8 },
];

export default function CTASection() {
  return (
    <section className={`mx-auto mt-16 mb-8 ${sectionWidth}`}>
      <div className="rounded-[24px] bg-[#080d14] px-6 py-10 sm:px-10 sm:py-14 lg:px-[72px] lg:py-[68px] grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 overflow-hidden">

        {/* ── Left: Copy ── */}
        <div>
          <span className="text-xs sm:text-sm tracking-[.22em] font-extrabold text-[#667489] block mb-4 sm:mb-5">
            AVAILABLE NOW
          </span>

          <h2 className="text-[clamp(34px,6vw,56px)] leading-[1] tracking-[-0.048em] font-bold text-white mb-5">
            Your browser just got a <br className="hidden sm:block" />
            design superpower.
          </h2>

          <p className="text-[#8b9ab0] text-[14px] sm:text-[15px] leading-[1.7] mb-8 max-w-[520px]">
            Install webmimic for Chrome and start extracting assets,
            animations, and design tokens from any site in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
            <a
              href="#"
              className="min-h-[48px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg bg-white text-[#080d14] text-[13px] font-bold shadow-[0_10px_24px_rgba(0,0,0,.32)] whitespace-nowrap"
            >
              Add to Chrome it&apos;s free →
            </a>

            <a
              href="#"
              className="min-h-[48px] inline-flex items-center justify-center gap-[10px] px-[22px] rounded-lg border border-[rgba(255,255,255,.18)] bg-white/8 text-white/80 text-[13px] font-bold whitespace-nowrap"
            >
              View on Chrome Web Store
            </a>
          </div>

          <p className="text-[12px] leading-relaxed text-[#3d4f66]">
            Works on Chrome, Brave, Edge, Arc, and all Chromium-based
            browsers.
          </p>
        </div>

        {/* ── Right: Extraction stats panel ── */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[320px] rounded-[16px] bg-[#111827] border border-[rgba(255,255,255,.07)] p-5 shadow-[0_28px_56px_rgba(0,0,0,.45)]">
            
            {/* Mac dots */}
            <div className="flex gap-[6px] mb-5">
              <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57] inline-block" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#28c840] inline-block" />
            </div>

            {/* Stat rows */}
            <div className="flex flex-col gap-[9px]">
              {extractionStats.map(({ label, count }) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-[#1a2234] rounded-[9px] px-4 py-[11px]"
                >
                  <span className="text-[12px] text-[#8b9ab0]">
                    {label}
                  </span>

                  <span className="w-[26px] h-[26px] rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                    {count}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
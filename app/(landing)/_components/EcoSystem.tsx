'use client';

import Image from "next/image";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[480px] mb-3 text-[#667489] text-md";

function SparkIcon({ type }: { type: "orange" | "google" | "figma" }) {
    const base = "absolute left-4 top-[19px] w-6 h-6 inline-block";
    if (type === "orange")
        return (
            <b
                className={`${base} rounded-full bg-[conic-gradient(#f97316,#fff0_10%,#f97316_20%,#fff0_30%,#f97316_40%,#fff0_50%,#f97316_60%,#fff0_70%,#f97316_80%,#fff0_90%)]`}
            />
        );
    if (type === "google")
        return (
            <b
                className={`${base} rounded-[5px] bg-[conic-gradient(#4285f4_0_25%,#34a853_0_50%,#fbbc05_0_75%,#ea4335_0)]`}
            />
        );
    return (
        <b
            className={`${base} rounded-[8px] bg-[linear-gradient(90deg,#f24e1e_0_33%,#a259ff_0_66%,#1abcfe_0)]`}
        />
    );
}

export default function EcoSystem() {
    return (
        <>
            {/* ── ECOSYSTEM ────────────────────────────────────── */}
            <section className={`mx-auto grid items-center py-[34px] pb-[42px] min-h-[340px] grid-cols-[30%_70%] mt-16 ${sectionWidth}`}>
                <div>
                    <span className={sectionCopyEyebrow}>DESIGN.MD ECOSYSTEM</span>
                    <h2 className={sectionH2}>One design system.<br />Infinite possibilities.</h2>
                    <p className={sectionP}>
                        Generate design.md files for your favorite tools and AI platforms.
                        Work everywhere, stay consistent.
                    </p>
                    <ul className="list-none p-0 text-[#263143] text-[14px] leading-[2]">
                        {["Claude Design", "Google Stitch", "Figma", "And more coming soon..."].map((item) => (
                            <li key={item} className="flex items-center gap-[9px]">
                                <span className="text-[#333] text-sm font-medium">◎</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center gap-[38px]">
                    {/* Design System image */}
                    <div className="rounded-[12px] overflow-hidden border border-[#dfe7f1] shadow-[0_14px_30px_rgba(36,58,97,.08)] shrink-0">
                        <Image
                            src="/landing-page/design-system.png"
                            alt="Extracted Design System"
                            width={1536}
                            height={1024}
                            className="w-[380px] h-auto"
                        />
                    </div>

                    <div className="text-[42px] text-[#b7c3d4] shrink-0">→</div>

                    {/* Code card */}
                    <pre className="rounded-[12px] text-[#eaf3ff] text-[12px] leading-[1.55] shrink-0 w-[230px] min-h-[266px] m-0 p-[23px] bg-[#121922] shadow-[0_24px_44px_rgba(16,24,38,.24)] font-[ui-monospace,SFMono-Regular,Menlo,monospace]">{`design.md

colors:
  name: primary
  value: "#0643F7"
  role: background

typography:
  name: Inter
  font: "Inter"
  weight: [400, 500, 600]

spacing:
  4, 8, 12, 16, 24, 32, 48`}</pre>

                    {/* Connectors — tree: vertical stem + 3 horizontal branches */}
                    <div className="grid gap-5 relative shrink-0">
                        {/* Vertical stem from card 1 center to card 3 center */}
                        <div className="absolute w-0 h-[180px] border-l-2 border-dashed border-[#b5c3d8] -left-[48px] top-[35px]" />
                        {/* Branch → Claude Design (card 1) */}
                        <div className="absolute h-0 w-[48px] border-t-2 border-dashed border-[#b5c3d8] -left-[48px] top-[35px]" />
                        {/* Branch → Google Stitch (card 2) */}
                        <div className="absolute h-0 w-[48px] border-t-2 border-dashed border-[#b5c3d8] -left-[48px] top-[125px]" />
                        {/* Branch → Figma (card 3) */}
                        <div className="absolute h-0 w-[48px] border-t-2 border-dashed border-[#b5c3d8] -left-[48px] top-[215px]" />
                        {(["orange", "google", "figma"] as const).map((spark, i) => {
                            const labels = ["Claude Design", "Google Stitch", "Figma"];
                            return (
                                <div
                                    key={spark}
                                    className="relative bg-white border border-[#dfe7f1] rounded-[12px] w-[190px] h-[70px] pt-[14px] pr-4 pb-[14px] pl-[54px]"
                                >
                                    <SparkIcon type={spark} />
                                    <span className="block font-extrabold text-[13px]">{labels[i]}</span>
                                    <small className="text-[#6d788a] text-[10px]">design.md</small>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

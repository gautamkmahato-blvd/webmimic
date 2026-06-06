'use client';

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const stats = [
  { value: "9k+",   serif: true,  desc: "Designers and engineers on the early-access list" },
  { value: "214",   serif: false, desc: "Curated design systems in the public gallery" },
  { value: "1.3s",  serif: true,  desc: "Median extraction time, from URL to design.md" },
  { value: "4.9/5", serif: false, desc: "Average user rating across all reviews" },
  { value: "2k+",   serif: true,  desc: "Animations indexed and ready to clone" },
];

export default function StatsBar() {
  return (
    <div className={`mx-auto mt-16 ${sectionWidth}`}>
      <div className="bg-white rounded-[16px] border border-[#e8edf5] shadow-[0_4px_24px_rgba(15,23,42,.06)] grid grid-cols-5">
        {stats.map(({ value, serif, desc }, i) => (
          <div
            key={value}
            className={`px-[36px] py-[28px] ${i < stats.length - 1 ? "border-r border-[#edf1f7]" : ""}`}
          >
            <p
              className={`leading-none mb-[10px] ${
                serif
                  ? "text-[42px] font-bold italic font-serif text-neutral-900"
                  : "text-[42px] font-bold text-neutral-900 tracking-[-0.03em]"
              }`}
            >
              {value}
            </p>
            <p className="text-[12px] text-[#667489] leading-[1.55] max-w-[180px]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

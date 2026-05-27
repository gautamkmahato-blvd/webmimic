'use client';

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[600px] mb-8 text-[#667489] text-md leading-[1.6]";
const glassCard = "bg-white/90 border border-[#dce5f2] rounded-[14px] shadow-[0_22px_55px_rgba(46,73,116,.13),inset_0_1px_0_rgba(255,255,255,.8)] backdrop-blur-[18px]";

const bullets = [
  {
    title: "Published variables, not local styles.",
    desc: "Tokens land in your team library, mode-aware, ready for handoff.",
  },
  {
    title: "Semantic aliases out of the box.",
    desc: "surface/lowest, text/muted, accent/primary — sane names, every time.",
  },
  {
    title: "Round-trip with your codebase.",
    desc: "Sync token changes back to CSS, Tailwind or Style Dictionary.",
  },
];

const BAR_HEIGHTS = [30, 52, 42, 72, 58, 88, 68];

export default function WhySwitch() {
  return (
    <section className={`mx-auto grid items-center gap-[58px] py-[12px] pb-[52px] grid-cols-[42%_58%] border-t border-[#edf1f7] mt-8 ${sectionWidth}`}>

      {/* ── Left: Copy ── */}
      <div>
        <span className={sectionCopyEyebrow}>WHY TEAMS SWITCH</span>
        <h2 className={sectionH2}>From a screenshot to<br />a library in 90 seconds.</h2>
        <p className={sectionP}>
          Stop hand-rebuilding systems from inspiration boards. webmimic turns any
          reference into a real design file with named tokens, semantic aliases
          and auto-generated documentation pages.
        </p>
        <ol className="list-none p-0 m-0 flex flex-col gap-5">
          {bullets.map(({ title, desc }, i) => (
            <li key={i} className="flex items-start gap-[14px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#f0f4ff] border border-[#dce8ff] flex items-center justify-center text-[10px] font-extrabold text-[#1463ff] mt-[1px]">
                {i + 1}
              </span>
              <div>
                <b className="block text-[13px] font-bold text-[#283346] mb-[2px]">{title}</b>
                <span className="text-[12px] text-[#667489] leading-[1.55]">{desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Right: Design system mockup ── */}
      <div className={`overflow-hidden h-[400px] mt-12 ${glassCard}`}>

        {/* Window chrome */}
        <div className="h-[38px] flex items-center gap-4 px-4 border-b border-[#e2e9f3]">
          <div className="flex gap-[6px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57] inline-block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#28c840] inline-block" />
          </div>
          <div className="flex gap-[22px] text-[11px] font-semibold text-[#9aa3b2] ml-1">
            {["Design", "System", "Components", "Export"].map((tab) => (
              <span
                key={tab}
                className={tab === "System"
                  ? "text-[#090b12] pb-[11px] border-b-2 border-[#1463ff]"
                  : "hover:text-[#536174] cursor-pointer"
                }
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="grid h-[calc(100%-38px)] grid-cols-[130px_1fr_178px]">

          {/* Sidebar */}
          <aside className="p-[14px] border-r border-[#e8edf5] text-[11px] text-[#667489] flex flex-col gap-[4px]">
            <b className="text-[#9aa3b2] text-[9px] uppercase tracking-[.14em] mb-[6px]">Tokens</b>
            {["Color", "Typography", "Spacing", "Radii", "Motion"].map((item) => (
              <span
                key={item}
                className={`rounded-[5px] px-[7px] py-[5px] -mx-[7px] cursor-pointer ${item === "Color" ? "bg-[#eaf3ff] text-[#1463ff] font-semibold" : "hover:text-[#283346]"}`}
              >
                {item}
              </span>
            ))}
            <b className="text-[#9aa3b2] text-[9px] uppercase tracking-[.14em] mt-[12px] mb-[6px]">Components</b>
            {["Button", "Card", "Input", "Badge"].map((item) => (
              <span key={item} className="rounded-[5px] px-[7px] py-[5px] -mx-[7px] hover:text-[#283346] cursor-pointer">{item}</span>
            ))}
          </aside>

          {/* Color tokens + Icons — flex row */}
          <div className="flex h-full">

            {/* Colors */}
            <div className="p-5 flex-1">
              <div className="flex items-center justify-between mb-[14px]">
                <h4 className="text-[12px] font-bold text-[#283346]">COLOR</h4>
                <span className="text-[9px] font-extrabold text-[#1463ff] tracking-[.14em]">BLUE</span>
              </div>
              <p className="text-[9px] text-[#9aa3b2] font-semibold mb-[7px]">Primary</p>
              <div className="flex gap-[5px] mb-[14px]">
                {["bg-[#dbeafe]","bg-[#93c5fd]","bg-[#3b82f6]","bg-[#1463ff]","bg-[#0b40cc]","bg-[#083197]","bg-[#06236e]"].map((c) => (
                  <i key={c} className={`w-[26px] h-[20px] rounded-[4px] not-italic inline-block ${c}`} />
                ))}
              </div>
              <p className="text-[9px] text-[#9aa3b2] font-semibold mb-[7px]">Neutrals</p>
              <div className="flex gap-[5px] mb-[14px]">
                {[
                  "bg-white border border-[#e4e9f2]",
                  "bg-[#f7f9fc]",
                  "bg-[#e7ecf3]",
                  "bg-[#c5ccd7]",
                  "bg-[#111827]",
                ].map((c, i) => (
                  <i key={i} className={`w-[26px] h-[20px] rounded-[4px] not-italic inline-block ${c}`} />
                ))}
              </div>
              <p className="text-[9px] text-[#9aa3b2] font-semibold mb-[7px]">Semantic</p>
              <div className="flex gap-[5px] mb-[18px]">
                {["bg-[#24c178]","bg-[#ffad22]","bg-[#f04438]"].map((c) => (
                  <i key={c} className={`w-[46px] h-[20px] rounded-[4px] not-italic inline-block ${c}`} />
                ))}
              </div>

              <div className="flex items-center gap-8">
                <div>
                  {/* Spacing */}
                  <p className="text-[9px] text-[#9aa3b2] font-semibold mb-[7px]">Spacing</p>
                  <div className="flex items-end gap-[4px] h-[20px] mb-[14px]">
                    {[30, 52, 42, 72, 58, 88, 68].map((h, i) => (
                      <div
                        key={i}
                        className="w-[10px] rounded-t-[2px] bg-[linear-gradient(to_top,rgba(20,99,255,.35),rgba(20,99,255,.9))]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  {/* Shadows */}
                <p className="text-[9px] text-[#9aa3b2] font-semibold mb-[7px]">Shadows</p>
                <div className="flex items-center gap-[8px]">
                  {[
                    "shadow-[0_1px_3px_rgba(15,23,42,.12)]",
                    "shadow-[0_4px_10px_rgba(15,23,42,.14)]",
                    "shadow-[0_8px_20px_rgba(15,23,42,.16)]",
                    "shadow-[0_16px_36px_rgba(15,23,42,.20)]",
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center gap-[3px]">
                      <span className={`w-[18px] h-[18px] rounded-[5px] bg-white border border-[#e4e9f2] inline-block ${s}`} />
                      <span className="text-[8px] text-[#9aa3b2]">{["sm","md","lg","xl"][i]}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              {/* Radii */}
              <p className="text-[9px] text-[#9aa3b2] font-semibold mb-[7px]">Radii</p>
              <div className="flex items-center gap-[6px] mb-[14px]">
                {[
                  { r: "rounded-[2px]",  label: "2" },
                  { r: "rounded-[4px]",  label: "4" },
                  { r: "rounded-[8px]",  label: "8" },
                  { r: "rounded-[12px]", label: "12" },
                  { r: "rounded-[36px]", label: "36" },
                  { r: "rounded-[50px]", label: "50" },
                  { r: "rounded-[74px]", label: "74" },
                  { r: "rounded-full",   label: "∞" },
                ].map(({ r, label }) => (
                  <div key={label} className="flex flex-col items-center gap-[3px]">
                    <span className={`w-[18px] h-[18px] bg-[#e7ecf3] border border-[#c5ccd7] inline-block ${r}`} />
                    <span className="text-[8px] text-[#9aa3b2]">{label}</span>
                  </div>
                ))}
              </div>

              
            </div>

            {/* Icons */}
            <div className="p-5 border-l border-[#e8edf5] w-[130px] shrink-0">
              <h4 className="text-[12px] font-bold text-[#283346] mb-[14px]">ICONS</h4>
              <div className="grid grid-cols-4 gap-[8px]">
                {["○","⊕","■","◎","⌘","⊞","◈","⊟","△","◷","⊗","✦","⟳","⌁","⊘","◉"].map((icon, i) => (
                  <span
                    key={i}
                    className="w-[22px] h-[22px] rounded-[5px] bg-[#f6f8fc] border border-[#eaeff7] flex items-center justify-center text-[11px] text-[#374151] select-none"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Typography + Spacing */}
          <div className="p-5 border-l border-[#e8edf5]">
            <h4 className="text-[11px] font-bold text-[#283346] mb-[10px]">TYPOGRAPHY</h4>
            {[
              ["display / 48", "text-[26px] font-bold leading-none"],
              ["heading / 24", "text-[17px] font-semibold leading-none"],
              ["body / 14",    "text-[13px] font-normal leading-none"],
              ["caption / 12", "text-[10px] font-medium leading-none"],
            ].map(([label, cls]) => (
              <div key={label} className="flex items-center justify-between mb-[8px]">
                <span className="text-[9px] text-[#9aa3b2]">{label}</span>
                <span className={`text-[#283346] ${cls}`}>Aa</span>
              </div>
            ))}
            <h4 className="text-[11px] font-bold text-[#283346] mt-[14px] mb-[8px]">SPACING</h4>
            <div className="flex items-end gap-[5px] h-[44px]">
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="w-[14px] rounded-t-[3px] bg-[linear-gradient(to_top,rgba(20,99,255,.4),rgba(20,99,255,1))]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

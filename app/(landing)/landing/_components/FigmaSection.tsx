'use client';

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[380px] mb-3 text-[#667489] text-md";

const glassCard = "bg-white/80 border border-[#dce5f2] rounded-[14px] shadow-[0_22px_55px_rgba(46,73,116,.13),inset_0_1px_0_rgba(255,255,255,.8)] backdrop-blur-[18px]";
const ghostBtn = "min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg border border-[#dce3ee] bg-white/80 text-[#171b24] text-[13px] font-bold shadow-[0_8px_18px_rgba(15,23,42,.05)] whitespace-nowrap";

export default function FigmaSection() {
    return (
        <>
            {/* ── FIGMA SECTION ────────────────────────────────── */}
          <section className={`mx-auto grid items-center gap-[58px] py-[22px] pb-[50px] min-h-[360px] grid-cols-[58%_42%] mt-16 ${sectionWidth}`}>
            <div className={`overflow-hidden h-[322px] ${glassCard}`}>
              <div className="h-9 flex items-center justify-between px-4 border-b border-[#e2e9f3] text-[#536174] text-[12px] font-bold">
                <span>webmimic for Figma</span><span>×</span>
              </div>
              <div className="grid h-[calc(100%-36px)] grid-cols-[145px_1fr_210px]">
                <aside className="p-[18px] border-r border-[#e8edf5] grid gap-[10px] content-start text-[11px] text-[#667489]">
                  <b className="text-[#283346]">Foundations</b>
                  <span className="bg-[#eaf3ff] text-[#1463ff] rounded px-[7px] py-[7px] -mx-[7px]">Colors</span>
                  <span>Typography</span><span>Spacing</span><span>Radius</span><span>Shadows</span>
                  <b className="text-[#283346]">Components</b>
                  <span>Buttons</span><span>Cards</span><span>Inputs</span>
                </aside>
                <div className="p-6">
                  <h4 className="text-[14px] font-bold mb-[18px]">Colors</h4>
                  <div className="text-[10px] text-[#667489] mb-2">Primary</div>
                  <div className="flex gap-[18px] mb-5">
                    {["bg-[#0a84ff]","bg-[#0571e6]","bg-[#045fc1]","bg-[#084a96]","bg-[#082957]"].map((c) => (
                      <i key={c} className={`w-[42px] h-6 rounded-[5px] not-italic inline-block ${c}`} />
                    ))}
                  </div>
                  <div className="text-[10px] text-[#667489] mb-2">Neutrals</div>
                  <div className="flex gap-[18px] mb-5">
                    {[
                      "bg-white border border-[#e4e9f2]",
                      "bg-[#f7f9fc]",
                      "bg-[#e7ecf3]",
                      "bg-[#c5ccd7]",
                      "bg-[#111827]",
                    ].map((cls, i) => (
                      <i
                        key={i}
                        className={`w-[42px] h-6 rounded-[5px] not-italic inline-block ${cls}`}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] text-[#667489] mb-2">Semantic</div>
                  <div className="flex gap-[18px]">
                    {["bg-[#24c178]","bg-[#ffad22]","bg-[#f04438]"].map((c) => (
                      <i key={c} className={`w-[75px] h-6 rounded-[5px] not-italic inline-block ${c}`} />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[14px] font-bold mb-[18px]">Typography</h4>
                  <span className="float-left text-[45px] mr-[34px] leading-none">Aa</span>
                  <ul className="list-none m-0 mb-[30px] p-0 text-[11px] leading-[2.1]">
                    {[["Label","300"],["Regular","400"],["Medium","500"],["Semibold","600"],["Bold","700"]].map(
                      ([n, w]) => (
                        <li key={n} className="flex justify-between">
                          <span>{n}</span><b>{w}</b>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="text-[10px] text-[#667489] mb-2 clear-both">Spacing Scale</div>
                  <div className="flex justify-between">
                    {["4","8","12","24","32","48"].map((s) => (
                      <span key={s} className="bg-[#f7f9fc] px-[10px] py-2 rounded text-[11px]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className={sectionCopyEyebrow}>FIGMA PLUGIN</span>
              <h2 className={sectionH2}>From a screenshot<br />to a library in 90 seconds</h2>
              <p className={sectionP}>
                Our Figma plugin turns design.md into a beautiful, interactive design
                system. Explore tokens, components, and guidelines — all inside Figma.
              </p>
              <a className={ghostBtn} href="#">Try Figma Plugin <span>→</span></a>
            </div>
          </section>
        </>
    )
}
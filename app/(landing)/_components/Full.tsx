'use client';

// ── Helper components ─────────────────────────────────────────

function ChromeDot() {
  return (
    <span className="w-[19px] h-[19px] rounded-full relative inline-flex shrink-0 bg-[conic-gradient(#f7d44a_0_33%,#2fb660_0_66%,#ef4335_0_84%,#f7d44a_0)] shadow-[inset_0_0_0_1px_rgba(0,0,0,.08)]">
      <span className="absolute inset-[6px] w-[7px] h-[7px] rounded-full bg-[#2c8dff]" />
    </span>
  );
}

function ColorWheel() {
  return (
    <span className="w-4 h-4 rounded-full inline-block bg-[conic-gradient(#1b72ff,#35c26b,#ffbc2e,#f04438,#1b72ff)]" />
  );
}



function Wave() {
  return (
    <div className="h-[35px] mt-[13px] bg-[repeating-linear-gradient(90deg,rgba(42,129,255,.8)_0_2px,transparent_2px_8px)] [clip-path:polygon(0_56%,7%_30%,12%_68%,17%_22%,22%_72%,28%_38%,34%_66%,40%_26%,46%_78%,52%_36%,58%_66%,64%_20%,70%_76%,76%_42%,82%_62%,88%_32%,94%_74%,100%_52%,100%_100%,0_100%)]" />
  );
}

function WindowBar({ url }: { url: string }) {
  return (
    <div className="h-[42px] flex items-center gap-3 px-[18px] border-b border-[rgba(215,224,238,.7)]">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57] inline-block" />
      <span className="w-2 h-2 rounded-full bg-[#ffbd2e] inline-block" />
      <span className="w-2 h-2 rounded-full bg-[#28c840] inline-block" />
      <span className="text-[#a0aaba] text-[19px]">‹</span>
      <span className="text-[#a0aaba] text-[19px]">›</span>
      <div className="ml-auto w-[180px] h-[23px] bg-white/80 border border-[#e8edf5] rounded-[6px] flex items-center justify-center text-[#4d586b] text-[11px] font-bold">
        {url}
      </div>
      <span className="text-[#a0aaba] text-[19px]">↻</span>
    </div>
  );
}

const glassCard =
  "bg-white/80 border border-[#dce5f2] rounded-[14px] shadow-[0_22px_55px_rgba(46,73,116,.13),inset_0_1px_0_rgba(255,255,255,.8)] backdrop-blur-[18px]";

function FloatCard({
  className = "",
  title,
  value,
  label,
  children,
}: {
  className?: string;
  title: string;
  value: string;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`absolute w-[160px] min-h-[138px] p-[18px] ${glassCard} ${className}`}>
      <div className="flex justify-between text-[#222b39] text-[12px] font-bold">
        <span>{title}</span>
        <span>⌄</span>
      </div>
      <strong className="block mt-4 text-[27px]">{value}</strong>
      <small className="block text-[#6a7587] text-[10px]">{label}</small>
      {children}
    </div>
  );
}

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

const ghostBtn =
  "min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg border border-[#dce3ee] bg-white/80 text-[#171b24] text-[13px] font-bold shadow-[0_8px_18px_rgba(15,23,42,.05)] whitespace-nowrap";
const blackBtn =
  "min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg bg-[#05070a] text-white border border-[#05070a] text-[13px] font-bold shadow-[0_10px_20px_rgba(0,0,0,.18)] whitespace-nowrap";
const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-[10px] tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 =
  "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";
const sectionP = "max-w-[380px] mb-6 text-[#667489] text-[14px] leading-[1.6]";

// Avatar gradient palette (used in hero + testimonials)
const avatarGradients = [
  "bg-[linear-gradient(135deg,#f5c38a,#34506d_55%,#111827)]",
  "bg-[linear-gradient(135deg,#e0a36f,#ece1cf_45%,#1f2937)]",
  "bg-[linear-gradient(135deg,#9dc7e8,#ffe1a4_50%,#3e5065)]",
  "bg-[linear-gradient(135deg,#f4b7b7,#5163ac_58%,#101827)]",
  "bg-[linear-gradient(135deg,#dec4a4,#13283d)]",
];

// ── Page ──────────────────────────────────────────────────────

export default function Full() {
  return (
    <div
      className="text-[#090b12] font-[Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] tracking-normal min-h-screen bg-[radial-gradient(circle_at_63%_9%,rgba(72,151,255,.14),transparent_24%),radial-gradient(circle_at_50%_22%,rgba(211,236,255,.7),transparent_18%),linear-gradient(#fff_0%,#fbfdff_46%,#fff_100%)]"
    >
      {/* ── NAV (fixed) ───────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-[16px] border-b border-[rgba(230,235,243,0.7)] shadow-[0_1px_12px_rgba(0,0,0,.05)]">
        <div className={`h-[66px] flex items-center justify-between text-[13px] mx-auto text-[#090b12] ${sectionWidth}`}>
          <a className="inline-flex items-center gap-2 font-extrabold tracking-[-0.02em]" href="#">
            <span className="text-[26px] leading-none -translate-y-px">×</span>webmimic
          </a>
          <nav className="hidden md:flex gap-11 ml-[105px] text-[#111827]">
            <a href="#">Product <span className="text-[#7b8596] ml-1">⌄</span></a>
            <a href="#">Features</a>
            <a href="#">Resources <span className="text-[#7b8596] ml-1">⌄</span></a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
          </nav>
          <div className="flex items-center gap-[30px]">
            <a href="#">Log in</a>
            <a
              className="min-h-[38px] inline-flex items-center justify-center gap-[10px] px-[18px] rounded-lg border border-[#05070a] bg-[#05070a] text-white text-[12px] font-bold whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,.18)]"
              href="#"
            >
              Get webmimic Free <span>→</span>
            </a>
          </div>
        </div>
      </header>

      <div className="w-full max-w-[1440px] mx-auto overflow-hidden pt-[66px]">
        <main>
          {/* ── HERO ─────────────────────────────────────────── */}
          <section className={`mx-auto mt-16 grid items-center relative min-h-[602px] grid-cols-[39%_61%] ${sectionWidth}`}>
            {/* ellipse glow */}
            <div className="absolute pointer-events-none rounded-[50%] left-[42%] -right-[8%] bottom-[19px] h-[118px] border-2 border-[rgba(112,178,255,.19)] shadow-[0_0_18px_rgba(67,154,255,.16),inset_0_0_18px_rgba(67,154,255,.08)] [transform:perspective(420px)_rotateX(66deg)]" />

            {/* Copy */}
            <div>
              <div className="w-max h-[30px] px-[10px] flex items-center gap-3 rounded-[20px] text-[#637083] bg-[#f3f8ff] border border-[#e8f1ff] text-[12px]">
                <b className="text-[#1463ff]">v2.0</b>
                <span>Now with AI + Motion Cloning</span>
                <i className="not-italic text-[#1463ff]">→</i>
              </div>
              <h1 className="mt-[25px] mb-[17px] leading-[.955] tracking-[-0.055em] font-bold text-[clamp(52px,6.1vw,75px)]">
                Extract. Clone.<br />Build Beautiful<br />Websites{" "}
                <span className="text-[#778091]">10x Faster.</span>
              </h1>
              <p className="max-w-[490px] mb-6 text-[#657185] text-[15px] leading-[1.55]">
                Copy animations. Extract design systems. Generate design.md. Ship
                production-ready websites with AI + webmimic.
              </p>
              <div className="flex items-center gap-[14px] flex-wrap">
                <a className={blackBtn} href="#">
                  <ChromeDot />Add to Chrome — It&apos;s Free <span>→</span>
                </a>
                <a className={ghostBtn} href="#">
                  <span className="text-[11px]">▶</span>Explore Dashboard
                </a>
              </div>
              <div className="flex items-center gap-[18px] mt-8">
                <div className="flex pl-[3px]">
                  {avatarGradients.map((bg, i) => (
                    <span
                      key={i}
                      className={`w-7 h-7 rounded-full -ml-[5px] border-2 border-white inline-block ${bg}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="mb-[5px] text-[#6b7587] text-[12px]">
                    Loved by 24,000+ designers &amp; developers
                  </p>
                  <div className="text-[#ffb11b] tracking-[4px] text-[13px]">
                    ★★★★★{" "}
                    <b className="text-[#111827] tracking-normal ml-[10px] font-semibold">
                      4.9/5
                    </b>
                  </div>
                </div>
              </div>
            </div>

            {/* Art */}
            <div className="h-[520px] relative">
              {/* Orb */}
              <div className="absolute w-[630px] h-[430px] right-[52px] top-[68px] blur-[12px] bg-[radial-gradient(circle_at_30%_28%,rgba(119,186,255,.5),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(201,225,255,.9),transparent_24%),radial-gradient(circle_at_48%_54%,rgba(226,244,255,.92),transparent_38%)]" />

              {/* Browser window */}
              <div className={`absolute overflow-hidden right-[22px] top-[23px] w-[610px] h-[418px] ${glassCard}`}>
                <WindowBar url="acme.com" />
                <div className="relative h-[calc(100%-42px)] pt-[92px] pl-[168px] bg-[linear-gradient(115deg,transparent_0_32%,rgba(244,250,255,.75)_33%_100%),radial-gradient(circle_at_55%_50%,rgba(255,255,255,.7),transparent_32%),#eef7ff]">
                  <div className="absolute inset-[28px_42px] blur-[7px] bg-[radial-gradient(ellipse_at_62%_30%,rgba(51,124,221,.75),transparent_22%),radial-gradient(ellipse_at_36%_42%,rgba(194,226,255,.9),transparent_27%),radial-gradient(ellipse_at_66%_64%,rgba(160,207,255,.86),transparent_30%),linear-gradient(135deg,rgba(255,255,255,.8),rgba(210,234,255,.54))] [clip-path:polygon(0_30%,23%_15%,44%_24%,70%_9%,100%_24%,87%_72%,62%_63%,40%_82%,10%_69%)]" />
                  <h2 className="relative m-0 max-w-[285px] text-[36px] leading-[.95] tracking-[-0.055em] font-bold">
                    Build better<br />products faster
                  </h2>
                  <p className="relative w-[270px] mt-[13px] mb-[19px] text-[#59667a] text-[12px]">
                    Acme is the AI copilot that helps teams move faster
                  </p>
                  <div className="relative flex gap-[10px]">
                    <b className="rounded-[18px] px-[15px] py-[9px] text-[10px] bg-[#07090d] text-white not-italic font-bold">
                      Get started
                    </b>
                    <span className="rounded-[18px] px-[15px] py-[9px] text-[10px] bg-white text-[#111827] font-bold">
                      Book a demo
                    </span>
                  </div>
                </div>
              </div>

              {/* Float cards */}
              <FloatCard className="left-[16px] top-[72px]" title="Animations" value="12" label="GSAP / Framer Motion">
                <Wave />
              </FloatCard>

              <FloatCard className="left-[24px] top-[303px]" title="Design Tokens" value="98" label="Extracted">
                <div className="flex gap-2 mt-[15px] items-center">
                  {["bg-[#111827]","bg-[#e8f0fa]","bg-[#abc3df]","bg-[#6382a9]","bg-[#d8e4f3]"].map((c, i) => (
                    <span key={i} className={`w-[22px] h-[22px] rounded-full border border-[#dfe7f1] inline-block ${c}`} />
                  ))}
                  <em className="w-[22px] h-[22px] rounded-full border border-[#dfe7f1] grid place-items-center text-[12px] text-[#8d98aa] not-italic bg-white">+</em>
                </div>
              </FloatCard>

              <FloatCard className="left-[285px] top-[369px]" title="Assets" value="248" label="Total Files">
                <div className="flex mt-4 pl-[5px]">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-7 h-7 rounded-[8px] -ml-[5px] border-2 border-white inline-block bg-[linear-gradient(135deg,#f5c38a,#34506d_55%,#111827)]"
                    />
                  ))}
                </div>
              </FloatCard>

              {/* Dark panel */}
              <div className="absolute text-white right-[7px] top-[56px] w-[216px] min-h-[390px] rounded-[10px] bg-[#080d14] px-4 py-[14px] shadow-[0_24px_48px_rgba(8,13,20,.35)]">
                <div className="flex items-center gap-[9px] text-[12px]">
                  <b className="text-[19px]">×</b>
                  <span className="flex-1 font-extrabold">webmimic</span>
                  <i className="not-italic text-[#7e8898]">‹</i>
                  <i className="not-italic text-[#7e8898]">×</i>
                </div>
                <p className="mt-5 mb-3 font-bold text-[12px]">Live Extraction</p>
                <small className="text-[#c6cfdb] block mb-2">acme.com</small>
                <div className="h-1 bg-[#1b2532] rounded-lg overflow-hidden">
                  <span className="block w-[82%] h-full bg-[#5fb9ff]" />
                </div>
                <span className="block text-right -mt-5 text-[#a9b6c8] text-[11px]">82%</span>
                <ul className="list-none mt-6 mb-[18px] p-0">
                  {[
                    { color: "bg-[#f04438]", label: "Colors", count: "24" },
                    { color: "bg-[#35c26b]", label: "Typography", count: "12" },
                    { color: "bg-[#96b5ff]", label: "Images", count: "64" },
                    { color: "bg-[#6d7cff]", label: "Icons", count: "100" },
                    { color: "bg-[#a855f7]", label: "SVGs", count: "36" },
                    { color: "bg-[#57a9ff]", label: "Gradients", count: "8" },
                    { color: "bg-[#f97316]", label: "Spacing", count: "16" },
                    { color: "bg-[#ef5da8]", label: "Animations", count: "09" },
                  ].map(({ color, label, count }) => (
                    <li key={label} className="flex items-center gap-2 my-[9px] text-[12px] text-[#dce4ef]">
                      <b className={`w-[10px] h-[10px] rounded-[2px] shrink-0 not-italic ${color}`} />
                      {label}
                      <span className="ml-auto text-[#8793a5]">{count}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full border-0 text-white bg-[#151b25] rounded-lg h-9 font-bold text-[11px]">
                  View Full Report
                </button>
              </div>
            </div>
          </section>

          {/* ── EXTRACT ──────────────────────────────────────── */}
          <section className={`mx-auto grid items-center gap-7 py-[42px] pb-7 min-h-[390px] grid-cols-[34%_66%] ${sectionWidth}`}>
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
                  { icon: <ColorWheel />, label: "Colors" },
                  { icon: "Tt", label: "Typography" },
                  { icon: "✦", label: "Icons" },
                  { icon: "⌁", label: "SVGs" },
                  { icon: "▰", label: "Gradients" },
                  { icon: "□", label: "Spacing" },
                  { icon: "▧", label: "Images" },
                  { icon: "✣", label: "Animations" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    className="h-[72px] border border-[#e2e9f3] rounded-lg bg-white grid place-items-center text-[#172033] text-[11px] shadow-[0_10px_22px_rgba(35,57,95,.05)]"
                  >
                    <span className="font-extrabold text-[17px] flex items-center justify-center">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Demo */}
            <div className="h-[360px] relative">
              {/* Nike window */}
              <div className={`absolute left-0 top-0 overflow-hidden w-[440px] h-[357px] ${glassCard}`}>
                <WindowBar url="nike.com" />
                <div className="relative h-[calc(100%-42px)] p-9">
                  <span className="absolute left-9 top-4 text-[31px] font-black -rotate-12">
                    ⌒
                  </span>
                  <h3 className="mt-6 text-[51px] leading-[.86] tracking-[-0.07em] font-bold">
                    YOU<br />CAN&apos;T<br />STOP<br />US
                  </h3>
                  <div className="absolute right-[28px] top-[62px] w-[255px] h-[125px] rounded-[50%_18%_22%_42%] -rotate-12 shadow-[24px_36px_24px_rgba(17,24,39,.18)] bg-[radial-gradient(ellipse_at_48%_24%,#222_0_30%,transparent_31%),linear-gradient(163deg,transparent_0_32%,#f5f7fb_33%_58%,#10131a_59%_66%,transparent_67%),linear-gradient(170deg,transparent_0_18%,#111827_19%_51%,#f6f6f6_52%_69%,transparent_70%)]" />
                  <div className="absolute left-[30px] right-[30px] bottom-[22px] grid gap-[11px] grid-cols-3">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-[58px] bg-[#f6f8fb] rounded-[3px]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* System card */}
              <div className={`absolute right-0 top-[21px] w-[318px] h-[318px] p-4 ${glassCard}`}>
                <div className="flex items-center gap-[9px] text-[12px]">
                  <span className="w-[18px] h-[18px] rounded-full bg-black inline-block shrink-0" />
                  <b className="flex-1 font-extrabold">webmimic</b>
                  <i className="not-italic text-[#7e8898]">‹</i>
                  <i className="not-italic text-[#7e8898]">×</i>
                </div>
                <strong className="block text-[#19a963] text-[12px] mt-[18px]">Extraction Complete</strong>
                <small className="block text-[#667489] text-[10px] mt-[6px]">nike.com</small>
                <div className="text-[10px] font-bold text-[#667489] mt-4 mb-[10px]">Palette</div>
                <div className="flex items-center gap-2 flex-wrap">
                  {["bg-[#111]","bg-[#2f3848]","bg-[#f04438]","bg-[#ff8b2c]","bg-[#fae332]","bg-[#ef3b85]","bg-[#6f5bff]","bg-[#1d70ff]","bg-[#243c87]","bg-[#70c5ff]","bg-[#eef3fa]"].map(
                    (c, i) => (
                      <i
                        key={i}
                        className={`w-[22px] h-[22px] rounded-[3px] shrink-0 not-italic inline-block ${c}`}
                      />
                    )
                  )}
                </div>
                <div className="text-[10px] font-bold text-[#667489] mt-4 mb-[10px]">Typography</div>
                <div className="grid gap-2 grid-cols-[60px_1fr_40px_72px]">
                  {[{ t: "Aa", size: "text-[24px]" }, { t: "Aa", size: "text-[21px]" }, { t: "§", size: "text-[21px]" }, { t: "Aa", size: "text-[24px]" }].map(
                    ({ t, size }, i) => (
                      <div
                        key={i}
                        className={`h-[47px] bg-[#fbfcfe] border border-[#eef2f7] rounded grid place-items-center ${size}`}
                      >
                        {t}
                      </div>
                    )
                  )}
                </div>
                <div className="text-[10px] font-bold text-[#667489] mt-4 mb-[10px]">Spacing</div>
                <div className="flex justify-between">
                  {["4","8","12","16","24","32","48"].map((s) => (
                    <span key={s} className="bg-[#f7f9fc] px-[10px] py-2 rounded-[4px] text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── MOTION ───────────────────────────────────────── */}
          <section className={`mx-auto grid gap-6 items-start py-[23px] pb-[31px] grid-cols-[30%_70%] ${sectionWidth}`}>
            <div>
              <span className={sectionCopyEyebrow}>ANIMATED COMPONENTS</span>
              <h2 className={sectionH2}>Clone any animation.<br />Perfectly.</h2>
              <p className={sectionP}>
                Recreate GSAP, Framer Motion and custom interactions with our AI.
                One click to copy, one line to install.
              </p>
              <a className={ghostBtn} href="#">Explore Motion Library <span>→</span></a>
            </div>
            <div className="grid gap-[18px] grid-cols-4">
              {/* Parallax Reveal */}
              <article className="h-[214px] border border-[#dfe7f1] rounded-lg bg-white overflow-hidden relative shadow-[0_10px_24px_rgba(30,50,86,.06)]">
                <div className="h-[146px] bg-[#080d14] grid place-items-center">
                  <div className="w-[116px] h-[116px] rounded-full border border-[rgba(255,255,255,.42)] shadow-[inset_0_0_28px_rgba(32,130,255,.24)] bg-[radial-gradient(circle_at_50%_70%,rgba(36,130,255,.42),transparent_36%)]" />
                </div>
                <b className="block mt-[13px] ml-[13px] mb-[2px] text-[12px]">Parallax Reveal</b>
                <small className="ml-[13px] text-[#6a7587] text-[10px]">GSAP</small>
                <span className="absolute right-[14px] bottom-[19px] text-[#9da8b8]">›</span>
              </article>

              {/* Cursor Follower */}
              <article className="h-[214px] border border-[#dfe7f1] rounded-lg bg-white overflow-hidden relative shadow-[0_10px_24px_rgba(30,50,86,.06)]">
                <div className="h-[146px] bg-[#080d14] grid place-items-center relative overflow-hidden">
                  <div className="absolute w-7 h-7 rounded-full bg-[#20d4c7] left-[52px] top-[40px] shadow-[0_0_0_12px_rgba(32,212,199,.13)]" />
                  <button className="relative text-white bg-transparent border border-[rgba(255,255,255,.28)] rounded-lg px-10 py-4 text-sm">
                    Hover me
                  </button>
                </div>
                <b className="block mt-[13px] ml-[13px] mb-[2px] text-[12px]">Cursor Follower</b>
                <small className="ml-[13px] text-[#6a7587] text-[10px]">Framer Motion</small>
                <span className="absolute right-[14px] bottom-[19px] text-[#9da8b8]">›</span>
              </article>

              {/* Scroll Sequence */}
              <article className="h-[214px] border border-[#dfe7f1] rounded-lg bg-white overflow-hidden relative shadow-[0_10px_24px_rgba(30,50,86,.06)]">
                <div className="h-[146px] bg-[#080d14] relative overflow-hidden">
                  {(["top-[29px]","top-[57px]","top-[85px]"] as const).map((top) => (
                    <div
                      key={top}
                      className={`absolute w-[90px] h-[58px] bg-white/20 [transform:rotate(-20deg)_skewX(25deg)] shadow-[0_16px_24px_rgba(255,255,255,.08)] ${top}`}
                    />
                  ))}
                </div>
                <b className="block mt-[13px] ml-[13px] mb-[2px] text-[12px]">Scroll Sequence</b>
                <small className="ml-[13px] text-[#6a7587] text-[10px]">GSAP</small>
                <span className="absolute right-[14px] bottom-[19px] text-[#9da8b8]">›</span>
              </article>

              {/* Text Split */}
              <article className="h-[214px] border border-[#dfe7f1] rounded-lg bg-white overflow-hidden relative shadow-[0_10px_24px_rgba(30,50,86,.06)]">
                <div className="h-[146px] text-white grid place-items-center text-[43px] font-black tracking-[-0.05em] bg-[radial-gradient(circle_at_79%_50%,#1e76ff,transparent_32%),#0b1020] [text-shadow:7px_0_0_rgba(255,255,255,.18),-7px_0_0_rgba(255,255,255,.12)]">
                  HELLO
                </div>
                <b className="block mt-[13px] ml-[13px] mb-[2px] text-[12px]">Text Split</b>
                <small className="ml-[13px] text-[#6a7587] text-[10px]">Framer Motion</small>
                <span className="absolute right-[14px] bottom-[19px] text-[#9da8b8]">›</span>
              </article>
            </div>
          </section>

          {/* ── ECOSYSTEM ────────────────────────────────────── */}
          <section className={`mx-auto grid items-center py-[34px] pb-[42px] min-h-[340px] grid-cols-[30%_70%] ${sectionWidth}`}>
            <div>
              <span className={sectionCopyEyebrow}>DESIGN.MD ECOSYSTEM</span>
              <h2 className={sectionH2}>One design system.<br />Infinite possibilities.</h2>
              <p className={sectionP}>
                Generate design.md files for your favorite tools and AI platforms.
                Work everywhere, stay consistent.
              </p>
              <ul className="list-none p-0 text-[#263143] text-[14px] leading-[2]">
                {["Claude Design","Google Stitch","Figma","And more coming soon..."].map((item) => (
                  <li key={item} className="flex items-center gap-[9px]">
                    <span className="text-[#0a9d73]">◎</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-[38px]">
              {/* Mini system */}
              <div className="w-[168px] h-[244px] border border-[#dfe7f1] rounded-[12px] bg-white p-[17px] shadow-[0_14px_30px_rgba(36,58,97,.08)] shrink-0">
                <span className="text-[11px] text-[#4a5568] font-extrabold">
                  Extracted<br />Design System
                </span>
                <h4 className="text-[28px] my-[18px]">Aa</h4>
                <div className="flex gap-[10px] my-4">
                  {["bg-[#111]","bg-[#1b72ff]","bg-[#ffba2f]","bg-[#6ab0ff]"].map((c, i) => (
                    <i key={i} className={`w-5 h-5 rounded-full not-italic inline-block ${c}`} />
                  ))}
                </div>
                <div className="flex gap-[10px] my-4">
                  {[0,1,2,3].map((i) => (
                    <b key={i} className="w-3 h-3 bg-black rounded-[3px] inline-block not-italic" />
                  ))}
                </div>
                <div className="flex gap-[10px] my-4 flex-wrap">
                  {["4","8","12","16","24"].map((n) => (
                    <b key={n} className="text-[10px] bg-[#f4f7fb] p-[7px] rounded-[3px] font-normal">
                      {n}
                    </b>
                  ))}
                </div>
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

              {/* Connectors */}
              <div className="grid gap-5 relative shrink-0">
                <div className="absolute -left-[48px] top-[38px] w-[45px] h-[150px] border-2 border-dashed border-[#b5c3d8] border-r-0 rounded-l-[16px]" />
                {(["orange","google","figma"] as const).map((spark, i) => {
                  const labels = ["Claude Design","Google Stitch","Figma"];
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

          {/* ── FIGMA SECTION ────────────────────────────────── */}
          <section className={`mx-auto grid items-center gap-[58px] py-[22px] pb-[50px] min-h-[360px] grid-cols-[58%_42%] ${sectionWidth}`}>
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
              <h2 className={sectionH2}>See your tokens.<br />In a whole new way.</h2>
              <p className={sectionP}>
                Our Figma plugin turns design.md into a beautiful, interactive design
                system. Explore tokens, components, and guidelines — all inside Figma.
              </p>
              <a className={ghostBtn} href="#">Try Figma Plugin <span>→</span></a>
            </div>
          </section>

          {/* ── GALLERY ──────────────────────────────────────── */}
          <section className={`mx-auto grid gap-[38px] py-[43px] pb-[46px] grid-cols-[27%_73%] border-t border-[#edf1f7] ${sectionWidth}`}>
            <div>
              <span className={sectionCopyEyebrow}>INSPIRATION GALLERY</span>
              <h2 className={sectionH2}>200+ curated design<br />systems &amp; websites.</h2>
              <p className={sectionP}>
                Explore the best websites, design systems, and UI inspirations
                hand-picked for you.
              </p>
              <a className={ghostBtn} href="#">Explore Gallery <span>→</span></a>
            </div>
            <div className="relative grid gap-[17px] grid-cols-4">
              {[
                { name: "Vercel", url: "vercel.com", bg: "bg-[radial-gradient(circle_at_80%_25%,#1d8aff,transparent_38%),#05070a]", light: false, border: false },
                { name: "Linear", url: "linear.app", bg: "bg-[radial-gradient(circle_at_75%_40%,#4834d4,transparent_30%),#111827]", light: false, border: false },
                { name: "Stripe", url: "stripe.com", bg: "bg-[linear-gradient(135deg,#4f46e5,#6d28d9,#0ea5e9)]", light: false, border: false },
                { name: "Apple", url: "apple.com", bg: "bg-[linear-gradient(145deg,#eef3f8,#121820_56%,#fff_57%)]", light: true, border: false },
                { name: "Framer", url: "framer.com", bg: "bg-[linear-gradient(135deg,#04111f,#0a6cff)]", light: false, border: false },
                { name: "Notion", url: "notion.so", bg: "bg-[linear-gradient(#fff,#f7f8fb)]", light: true, border: true },
                { name: "Airbnb", url: "airbnb.com", bg: "bg-[linear-gradient(135deg,#f34d5c,#d8304a)]", light: false, border: false },
                { name: "Nike", url: "nike.com", bg: "bg-[radial-gradient(circle_at_80%_55%,#143a78,transparent_36%),#06090f]", light: false, border: false },
              ].map(({ name, url, bg, light, border }) => (
                <article
                  key={name}
                  className="h-[112px] border border-[#dfe7f1] rounded-[7px] pt-[74px] px-[15px] bg-white relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-x-0 top-0 bottom-9 ${bg} ${border ? "border-b border-[#dfe7f1]" : ""}`}
                  />
                  <b className={`block text-[11px] relative z-10 ${light ? "text-black" : "text-white"}`}>{name}</b>
                  <small className="text-[#667489] text-[10px] relative z-10">{url}</small>
                </article>
              ))}
              <button className="absolute rounded-full border border-[#e0e7f0] bg-white text-[22px] shadow-[0_12px_22px_rgba(20,35,60,.08)] flex items-center justify-center -right-[31px] top-[82px] w-12 h-12">
                →
              </button>
            </div>
          </section>

          {/* ── FEATURE STRIP ────────────────────────────────── */}
          <section className={`mx-auto grid border border-[#e1e8f2] rounded-[10px] bg-white py-6 px-5 gap-[18px] grid-cols-6 ${sectionWidth}`}>
            {[
              { icon: "✣", label: "AI Extraction", desc: "Smart AI that understands design like never before." },
              { icon: "▤", label: "Motion Cloning", desc: "Clone any animation with pixel-perfect accuracy." },
              { icon: "△", label: "Asset Export", desc: "Export all assets in perfect formats." },
              { icon: "◇", label: "Token Generation", desc: "Generate design tokens automatically." },
              { icon: "▣", label: "Components", desc: "200+ modern components ready to use." },
              { icon: "☄", label: "Team Workflows", desc: "Share, collaborate and ship faster together." },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                className="grid grid-cols-[34px_1fr] gap-x-[11px]"
              >
                <i className="row-span-2 w-7 h-7 grid place-items-center border border-[#dfe7f1] rounded-[7px] text-[#536174] not-italic self-start">
                  {icon}
                </i>
                <b className="text-[12px]">{label}</b>
                <span className="text-[#68758a] text-[10px] leading-[1.45]">{desc}</span>
              </div>
            ))}
          </section>

          {/* ── SOCIAL PROOF ─────────────────────────────────── */}
          <section className={`mx-auto grid gap-[18px] py-6 grid-cols-[1.15fr_repeat(3,1fr)_1.3fr] ${sectionWidth}`}>
            {/* Stats */}
            <div className="min-h-[154px] border border-[#e1e8f2] rounded-[10px] bg-white p-[22px] grid gap-1 grid-cols-2 content-center">
              {[["24,000+","Active Users"],["2.1M+","Websites Analyzed"],["98%","Time Saved"],["4.9/5","User Rating"]].map(
                ([val, lbl]) => (
                  <div key={lbl}>
                    <b className="text-[18px] block">{val}</b>
                    <span className="text-[#667489] text-[10px] block mb-[17px]">{lbl}</span>
                  </div>
                )
              )}
            </div>

            {/* Testimonials */}
            {[
              { name: "Sarah Chen", role: "Product Designer", text: "webmimic completely changed how I work. I can extract a whole design system in seconds. Game changer!", bg: avatarGradients[0] },
              { name: "Alex Morgan", role: "Frontend Developer", text: "The animation cloning is insane. It just works. Saved me dozens of hours already.", bg: avatarGradients[1] },
              { name: "James Carter", role: "Design Engineer", text: "Finally, a tool that brings designers and developers on the same page. Love the design.md workflow.", bg: avatarGradients[2] },
            ].map(({ name, role, text, bg }) => (
              <article key={name} className="min-h-[154px] border border-[#e1e8f2] rounded-[10px] bg-white p-[22px]">
                <div className="grid items-center mb-3 grid-cols-[36px_1fr]">
                  <span className={`w-7 h-7 rounded-full row-span-2 border-2 border-white inline-block ${bg}`} />
                  <b className="text-[11px]">{name}</b>
                  <small className="text-[#667489] text-[9px]">{role}</small>
                </div>
                <p className="text-[#435066] text-[11px] leading-[1.55] mb-3">{text}</p>
                <span className="text-[#ffb11b] tracking-[3px] text-[11px]">★★★★★</span>
              </article>
            ))}

            {/* Award */}
            <div className="min-h-[154px] border border-[#e1e8f2] rounded-[10px] bg-white p-[22px] text-center">
              <b className="text-[27px] block">🏆</b>
              <span className="text-[#667489] text-[10px] font-extrabold">PRODUCT HUNT</span>
              <strong className="block text-[18px] mt-1 mb-5">#1 Product of the Day</strong>
              <div className="flex justify-center gap-[17px] mb-3">
                {[0,1,2,3,4].map((i) => (
                  <i
                    key={i}
                    className="w-[18px] h-[18px] rounded-full not-italic inline-block bg-[conic-gradient(#1b72ff,#35c26b,#f6c543,#f04438,#1b72ff)]"
                  />
                ))}
              </div>
              <p className="text-[#667489] text-[13px]">Works where you work.</p>
            </div>
          </section>

          {/* ── BOTTOM CTA ───────────────────────────────────── */}
          <section className={`mx-auto min-h-[91px] rounded-[10px] text-white flex items-center justify-between px-32 bg-[radial-gradient(circle_at_7%_30%,rgba(255,255,255,.7)_0_1px,transparent_2px),radial-gradient(circle_at_40%_70%,rgba(255,255,255,.7)_0_1px,transparent_2px),radial-gradient(circle_at_74%_24%,rgba(255,255,255,.7)_0_1px,transparent_2px),#05070a] ${sectionWidth}`}>
            <div>
              <h2 className="m-0 text-[26px] tracking-[-0.035em] font-bold">
                Ready to build faster?
              </h2>
              <p className="mt-[5px] text-[#ccd5e2]">Join 24,000+ designers &amp; developers</p>
            </div>
            <div className="flex items-center gap-[14px] flex-wrap">
              <a className={blackBtn} href="#">
                <ChromeDot />Add to Chrome — It&apos;s Free <span>→</span>
              </a>
              <a
                className="min-h-[44px] inline-flex items-center justify-center gap-[10px] px-[21px] rounded-lg border border-white/30 text-white text-[13px] font-bold whitespace-nowrap"
                href="#"
              >
                <span className="text-[11px]">▶</span>Explore Dashboard
              </a>
            </div>
          </section>
        </main>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className={`mx-auto pt-[34px] pb-6 ${sectionWidth}`}>
          <div className="grid gap-[52px] grid-cols-[2.1fr_1fr_1fr_1fr_1.65fr]">
            <div className="flex flex-col gap-2">
              <a className="inline-flex items-center gap-2 font-extrabold tracking-[-0.02em]" href="#">
                <span className="text-[26px] leading-none -translate-y-px">×</span>webmimic
              </a>
              <p className="text-[#667489] text-[12px] leading-[1.7]">
                The AI-powered platform to extract design systems, clone animations,
                and build beautiful websites faster.
              </p>
            </div>
            {[
              { heading: "Product", links: ["Features","Chrome Extension","Figma Plugin","Design Systems"] },
              { heading: "Resources", links: ["Docs","Tutorials","Blog","Changelog"] },
              { heading: "Company", links: ["About","Careers","Contact","Privacy"] },
            ].map(({ heading, links }) => (
              <div key={heading} className="flex flex-col gap-2">
                <b className="text-[12px] mb-[7px]">{heading}</b>
                {links.map((l) => (
                  <a key={l} className="text-[#667489] text-[12px] leading-[1.7] hover:text-[#090b12]">
                    {l}
                  </a>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <b className="text-[12px] mb-[7px]">Stay in the loop</b>
              <p className="text-[#667489] text-[12px] leading-[1.7]">
                Get the latest updates and tips.
              </p>
              <form className="flex gap-2">
                <input
                  className="flex-1 h-[42px] border border-[#e1e8f2] rounded-[7px] px-[14px] text-[#647086] text-[12px] outline-none"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-[42px] border border-[#e1e8f2] bg-[#f8fafc] rounded-[7px] text-sm"
                >
                  →
                </button>
              </form>
            </div>
          </div>
          <div className="mt-[38px] pt-[23px] border-t border-[#e8eef6] flex justify-between text-[#667489] text-[11px]">
            <span>© 2025 webmimic. All rights reserved.</span>
            <nav className="flex gap-7">
              {["Terms","Privacy","Security","Cookies"].map((l) => (
                <a key={l} className="hover:text-[#090b12]">{l}</a>
              ))}
            </nav>
            <div className="flex gap-7">
              {["𝕏","in","♥","◎"].map((l) => (
                <a key={l} className="hover:text-[#090b12]">{l}</a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
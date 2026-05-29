import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Page() {
  return (
    <main
      className={`${figtree.className} flex min-h-screen items-center justify-center bg-[#050505] p-8`}
    >
      <div
        className="relative box-border h-[483.602px] w-[390px] overflow-hidden rounded-[19px] border border-[rgb(8,19,255)] p-8 text-[14px] leading-[20px] text-white shadow-[rgba(95,95,95,0.5)_0px_2px_1px_0px_inset,rgba(255,255,255,0.62)_1px_1px_0.2px_0px_inset]"
        style={{
          backgroundColor: "rgb(0, 0, 0)",
          backgroundImage:
            'url("https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1971_member-card-bg.jpg")',
          backgroundRepeat: "repeat",
          backgroundPosition: "0px 0px",
          backgroundSize: "auto",
        }}
      >
        <div className="relative z-[2] inline-flex items-center gap-[8px] rounded-full bg-black py-[5px] pl-[5px] pr-[12px]">
          <div className="flex h-[20px] w-[20px] items-center justify-center">
            <div className="h-[11px] w-[11px] rounded-full bg-[rgb(255,216,23)]" />
          </div>
          <div className="text-[13px] font-medium leading-[16px]">Start today</div>
        </div>

        <div className="relative z-[2] mt-[56px] flex flex-col">
          <div className="text-[46px] font-bold leading-[1.02] tracking-[-0.03em]">
            Join
          </div>
          <div className="text-[46px] font-bold leading-[1.02] tracking-[-0.03em]">
            Designjoy
          </div>
          <div className="mt-[10px] text-[15px] font-normal leading-[22px] text-white">
            One subscription to rule them all.
          </div>
          <a
            href="#pricing"
            className="mt-[22px] block w-full rounded-[12px] bg-[#efefef] px-6 py-[15px] text-center text-[15px] font-bold leading-none text-black no-underline transition-opacity hover:opacity-90"
          >
            See pricing
          </a>
        </div>

        <a
          href="#book"
          className="relative z-[2] mt-[26px] flex w-full items-center justify-between no-underline text-inherit"
        >
          <div className="flex items-center gap-[12px]">
            
            <div>
              <div className="text-[14px] font-medium leading-[20px]">
                Book a 15-min intro call
              </div>
              <div className="hero__member-card-call-schedule text-[13px] leading-[18px] text-[rgba(255,255,255,0.52)]">
                Schedule now
              </div>
            </div>
          </div>
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white">
            
          </div>
        </a>

        
      </div>
    </main>
  );
}
import type { ReactNode } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export function FooterPageShell({ title, description, children }: Props) {
  return (
    <div className="min-h-screen bg-white text-[#090b12]">
      <Navbar />
      <main className="pt-[66px]">
        <section className={`mx-auto py-16 sm:py-20 ${sectionWidth}`}>
          <div className="max-w-[760px]">
            <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#090b12]">
              {title}
            </h1>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#657185]">
              {description}
            </p>
            <div className="mt-10 space-y-6 text-[15px] leading-[1.75] text-[#536174]">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function FooterSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#090b12]">
        {heading}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

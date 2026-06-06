"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Navbar } from "../../(landing)/_components/Navbar";
import Footer from "../../(landing)/_components/Footer";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const tutorials = [
  {
    id: "1",
    title: "Getting started with the Webmimic extension",
    thumbnail: "/landing-page/1.png",
    duration: "4:32",
    views: "12K views",
    uploaded: "2 weeks ago",
  },
  {
    id: "2",
    title: "Extract assets, colors, and typography from any site",
    thumbnail: "/landing-page/1.png",
    duration: "6:18",
    views: "8.4K views",
    uploaded: "2 weeks ago",
  },
  {
    id: "3",
    title: "Inspect and copy element HTML & CSS",
    thumbnail: "/landing-page/2.png",
    duration: "5:05",
    views: "6.1K views",
    uploaded: "3 weeks ago",
  },
  {
    id: "4",
    title: "Clone any UI section with AI",
    thumbnail: "/landing-page/3.png",
    duration: "7:44",
    views: "15K views",
    uploaded: "1 month ago",
  },
  {
    id: "5",
    title: "Run a WCAG accessibility scan in seconds",
    thumbnail: "/landing-page/4.png",
    duration: "3:56",
    views: "4.2K views",
    uploaded: "1 month ago",
  },
  {
    id: "6",
    title: "Extract Lottie and motion animations",
    thumbnail: "/landing-page/5.png",
    duration: "5:29",
    views: "9.8K views",
    uploaded: "1 month ago",
  },
  {
    id: "7",
    title: "Export a full design system to Tailwind",
    thumbnail: "/landing-page/6.png",
    duration: "8:12",
    views: "11K views",
    uploaded: "2 months ago",
  },
  {
    id: "8",
    title: "Organize assets in your dashboard",
    thumbnail: "/landing-page/2.png",
    duration: "4:47",
    views: "3.5K views",
    uploaded: "2 months ago",
  },
  {
    id: "9",
    title: "Design tokens workflow for teams",
    thumbnail: "/landing-page/6.png",
    duration: "6:33",
    views: "5.9K views",
    uploaded: "2 months ago",
  },
];

function TutorialCard({
  title,
  thumbnail,
  duration,
  views,
  uploaded,
}: (typeof tutorials)[number]) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-[#f3f5f9] ring-1 ring-[#e8edf5]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[rgba(9,11,18,.06)] transition-colors group-hover:bg-[rgba(9,11,18,.14)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(9,11,18,.85)] text-white shadow-lg">
            <Play size={20} fill="currentColor" className="ml-0.5" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 rounded px-1.5 py-0.5 bg-[rgba(9,11,18,.82)] text-[11px] font-semibold text-white">
          {duration}
        </span>
      </div>

      <div className="mt-3 flex gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral-100 ring-1 ring-[#e8edf5]">
          <Image
            src="/landing-page/logo.jpg"
            alt="Webmimic"
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="line-clamp-2 text-[15px] font-semibold leading-snug text-[#090b12] group-hover:text-[#1463ff] transition-colors">
            {title}
          </h2>
          <p className="mt-1 text-[13px] text-[#657185]">Webmimic</p>
          <p className="text-[13px] text-[#657185]">
            {views} · {uploaded}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-white text-[#090b12]">
      <Navbar />
      <main className="pt-[66px]">
        <section className={`mx-auto py-10 sm:py-12 ${sectionWidth}`}>
          <div className="max-w-[640px]">
            <h1 className="text-[clamp(28px,3.5vw,36px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#090b12]">
              Tutorials
            </h1>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#657185]">
              Short walkthroughs to help you capture design assets, extract code, and ship faster with Webmimic.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} {...tutorial} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

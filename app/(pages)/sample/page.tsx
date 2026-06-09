"use client";

import Lottie from "lottie-react";
import animationData from "@/public/lottie.json";
import animationData2 from "@/public/lottie-2.json";
import React from "react";

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




const InkGamesHome = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black font-[Aeonik_Fono]">
      {/* Navbar */}
      <nav className="absolute left-0 top-0 z-10 flex w-full items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-2">
          {/* Replaced SVG with a placeholder div */}
          <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-black select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-squid scale-75"
            >
              <path d="M15.7 17.9c.7.2 1.4.3 2.3.4 1-.2 1.7-.5 2.3-1s.9-1.2.9-2.1c0-1-.3-1.8-.9-2.4-.7-.5-1.5-.7-2.3-.7-.5 0-.9 0-1.2.1-.3.1-.6.2-.8.3-.3.1-.5.2-.6.2s-.3.1-.4.1c-.2.1-.4.1-.5.1-.3 0-.6-.1-1-.2-.4-.1-.7-.2-1.1-.3-.6-.2-1.3-.3-2.1-.3s-1.5.1-2.1.3c-.4.1-.7.2-1.1.3-.3.1-.6.2-.9.2s-.5.1-.6.1c-.2 0-.4-.1-.6-.1s-.3-.1-.4-.1c-.3-.1-.5-.2-.8-.3-.3-.1-.6-.2-.8-.3-.7-.5-1.5-.7-2.3-.7-1 0-1.8.3-2.4.9-.7.6-.9 1.4-.9 2.4 0 1 .3 1.8.9 2.3.6.5 1.3.8 2.3 1 .8-.1 1.6-.2 2.3-.4zm-3-11.4c-.1.2-.2.3-.3.5-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6zm-1.8 1.8c-.1.2-.2.3-.3.5-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6-.2.2-.4.4-.6.6zm-1.8 1.8c-.1.2-.2.3-.3.5-.2.2-.4.4-.6.6zM12 9c.1-.2.2-.3.3-.5.2-.2.4-.4.6-.6.2-.2.4-.4.6-.6.2-.2.4-.4.6-.6.2-.2.4-.4.6-.6.2-.2.4-.4.6-.6.2-.2.4-.4.6-.6.2-.2.4-.4.6-.6z" />
            </svg>
          </div>
          <span className="font-semibold text-white">INK GAMES</span>
        </div>
        <div className="hidden lg:flex items-center space-x-8 text-neutral-400">
          <a href="#" className="hover:text-white transition-colors duration-200">
            GAMES
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            STUDIO
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            SUPPORT
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <button className="rounded px-4 py-2 text-white bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 text-sm">
            LOGIN
          </button>
          <button className="rounded bg-white px-4 py-2 text-black hover:bg-neutral-200 transition-colors duration-200 flex items-center space-x-1 text-sm">
            <span>SIGN UP</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-[1] flex h-screen w-full flex-col items-center justify-center p-4 text-white">
        <h1 className="select-none text-center text-[min(15vw,_200px)] font-extrabold leading-[0.8] tracking-[-0.03em] whitespace-nowrap">
          JOIN THE
          <br />
          NEW ERA OF
          <br />
          GAMING
        </h1>

        {/* Floating Images Container */}
        <div className="absolute bottom-[-10%] left-0 right-0 top-0 overflow-hidden">
          {/* Use the provided image path directly */}
          <img
            src="https://sidhvpjhuucqcehkevrl.supabase.co/storage/v1/render/image/public/screenshots/auto-1779823709331.webp?width=1080&amp;quality=60&amp;height=675&amp;resize=cover"
            srcSet="https://sidhvpjhuucqcehkevrl.supabase.co/storage/v1/render/image/public/screenshots/auto-1779823709331.webp?width=480&amp;quality=55&amp;height=300&amp;resize=cover 480w, https://sidhvpjhuucqcehkevrl.supabase.co/storage/v1/render/image/public/screenshots/auto-1779823709331.webp?width=720&amp;quality=55&amp;height=450&amp;resize=cover 720w, https://sidhvpjhuucqcehkevrl.supabase.co/storage/v1/render/image/public/screenshots/auto-1779823709331.webp?width=1080&amp;quality=60&amp;height=675&amp;resize=cover 1080w, https://sidhvpjhuucqcehkevrl.supabase.co/storage/v1/render/image/public/screenshots/auto-1779823709331.webp?width=1440&amp;quality=60&amp;height=900&amp;resize=cover 1440w"
            sizes="(max-width: 896px) 100vw, 896px"
            alt="Ink Games"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-top cursor-pointer will-change-transform scale-[1.04] translate-y-[-10px] sm:translate-y-[-20px] md:translate-y-[-30px] lg:translate-y-[-50px] opacity-70"
            style={{ width: "862px", height: "538px", objectPosition: "50% 0%" }}
          />
        </div>
      </main>

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 z-20 w-full bg-neutral-800 p-4 text-sm text-neutral-200 shadow-lg flex items-center justify-center space-x-4">
        <span>This website uses cookies.</span>
        <a href="#" className="font-semibold text-white hover:underline">
          Learn More
        </a>
        <button className="rounded bg-white px-3 py-1 text-neutral-800 hover:bg-neutral-200 transition-colors duration-200">
          Accept
        </button>
        <button className="rounded border border-neutral-600 px-3 py-1 text-neutral-200 hover:bg-neutral-700 transition-colors duration-200">
          Deny
        </button>
      </div>
    </div>
  );
};

export default InkGamesHome;



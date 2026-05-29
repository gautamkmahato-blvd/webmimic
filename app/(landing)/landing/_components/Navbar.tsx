"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-[18px] border-b border-[rgba(230,235,243,0.8)] shadow-[0_1px_12px_rgba(0,0,0,.05)]"
          : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="h-[66px] flex items-center justify-between text-[14px] mx-auto text-[#090b12] w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <a className="inline-flex items-center gap-[8px]" href="#">
          <Image src="/landing-page/logo.jpg" alt="webmimic" width={28} height={28} className="rounded-[6px]" />
          <span className="font-extrabold text-xl tracking-tight">Webmimic</span>
        </a>

        <nav className="hidden md:flex gap-11 ml-[105px] text-[#111827]">
          <a href="#" className="hover:text-[#1463ff] transition-colors">
            Product
          </a>
          <a href="#" className="hover:text-[#1463ff] transition-colors">Features</a>
          <a href="#" className="hover:text-[#1463ff] transition-colors">
            Resources
          </a>
          <a href="/billing" className="hover:text-[#1463ff] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#1463ff] transition-colors">Changelog</a>
        </nav>

        <div className="flex items-center gap-[30px]">
          {/* <a href="#" className="hover:text-[#1463ff] transition-colors">Log in</a> */}
          <a
            href="/sign-in"
            className="min-h-[38px] inline-flex items-center gap-[10px] px-[18px] rounded-lg bg-[#05070a] text-white text-[12px] font-bold whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,.18)]"
          >
            Get webmimic Free <span>→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

export function Navbar({ dark = false }: { dark?: boolean }) {
  const { isLoaded, isSignedIn } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        dark
          ? scrolled
            ? "bg-[rgba(8,13,20,0.92)] backdrop-blur-[18px] border-b border-[rgba(255,255,255,0.08)] shadow-[0_1px_12px_rgba(0,0,0,.35)]"
            : "bg-transparent"
          : scrolled
            ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-[18px] border-b border-[rgba(230,235,243,0.8)] shadow-[0_1px_12px_rgba(0,0,0,.05)]"
            : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`h-[66px] flex items-center justify-between text-[14px] mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16 ${dark ? "text-white" : "text-[#090b12]"}`}>
        <a className="inline-flex items-center gap-[8px]" href="/">
          <Image src="/landing-page/logo.jpg" alt="webmimic" width={28} height={28} className="rounded-[6px]" />
          <span className="font-extrabold text-xl tracking-tight">Webmimic</span>
        </a>

        <nav className={`hidden md:flex gap-11 ml-[105px] ${dark ? "text-[#8b9ab0]" : "text-[#111827]"}`}>
          <a href="/features" className="hover:text-[#1463ff] transition-colors">Features</a>
          <a href="/" className="hover:text-[#1463ff] transition-colors">
            Resources
          </a>
          <a href="/billing" className="hover:text-[#1463ff] transition-colors">Pricing</a>
          <a href="/" className="hover:text-[#1463ff] transition-colors">Changelog</a>
        </nav>

        <div className="flex items-center gap-[30px]">
          {isLoaded && (
            <a
              href={isSignedIn ? "/design-systems" : "/sign-in"}
              className={`min-h-[38px] inline-flex items-center gap-[10px] px-[18px] rounded-lg text-[12px] font-bold whitespace-nowrap ${
                dark
                  ? "bg-white text-[#080d14] shadow-[0_10px_20px_rgba(0,0,0,.28)]"
                  : "bg-[#05070a] text-white shadow-[0_10px_20px_rgba(0,0,0,.18)]"
              }`}
            >
              {isSignedIn ? "Dashboard" : "Sign in"} <span>→</span>
            </a>
          )}
        </div>
      </div>
    </motion.header>
  );
}

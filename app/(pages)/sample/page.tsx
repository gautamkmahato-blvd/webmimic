import React from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Github } from 'lucide-react';

export default function InvertaseHero() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0c] text-[#f3f4f6] font-sans overflow-x-hidden antialiased selection:bg-orange-500/30 selection:text-white">
      
      {/* --- BACKGROUND GRAPHICS & RADIAL GLOWS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle dark honeycomb grid placeholder on left / bottom */}
        <div className="absolute top-12 left-6 w-48 h-64 opacity-10 grid grid-cols-3 gap-2 text-zinc-500 text-xl font-mono">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-zinc-400 rotate-12 aspect-square rounded-sm"></div>
          ))}
        </div>
        <div className="absolute bottom-6 right-6 w-48 h-48 opacity-10 grid grid-cols-3 gap-2 text-zinc-500 text-xl font-mono">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-zinc-400 rotate-12 aspect-square rounded-sm"></div>
          ))}
        </div>

        {/* Center-Right Dynamic Ambient Flare for the Fluid Orb */}
        <div 
          className="absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] max-w-[800px] rounded-full opacity-30 blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(167,83,41,0.5) 0%, rgba(31,41,55,0.1) 60%, rgba(0,0,0,0) 100%)' }}
        />
        {/* Left top subtle ambient glow */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full opacity-20 blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)' }}
        />
      </div>

      {/* --- NAVIGATION BAR --- */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white group">
          <div className="relative w-6 h-6 flex flex-col justify-between items-center rotate-45 transform transition-transform group-hover:rotate-90 duration-300">
            <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white/40 rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
          <span className="uppercase font-semibold tracking-wider text-lg">Invertase</span>
        </Link>

        {/* Mid Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-zinc-400">
          <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
            Services <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">Open source</Link>
          <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
            Products <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">Blog</Link>
          <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
            Company <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* GitHub Metric */}
          <Link href="#" className="hidden sm:flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
            <Github className="w-4 h-4 text-white" />
            <span>32.5k</span>
          </Link>
          {/* CTA */}
          <Link href="#" className="px-5 py-2 text-xs font-medium text-white bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Get in touch
          </Link>
        </div>
      </header>

      {/* --- MAIN HERO SECTION --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[550px]">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Empower developers. <br />
              <span className="text-zinc-400">Engineer excellence.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
              We help technology companies provide exceptional developer experiences. We make developer tools, SDKs, and libraries for the open-source ecosystem.
            </p>

            {/* Trust Badges */}
            <div className="space-y-4 pt-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 block">
                Trusted by industry leaders
              </span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-40 grayscale contrast-200">
                <span className="text-lg font-bold tracking-tight text-white">Google</span>
                <span className="text-lg font-black tracking-tighter text-white">amazon</span>
                <span className="text-md font-semibold tracking-wide text-white flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-full bg-white"></span> Canonical
                </span>
              </div>
            </div>

            {/* CTA Interaction Block */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 rounded-full border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.08)]">
                Book a consultation
              </button>
              <button className="group flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors">
                Explore our services 
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Abstract Visual Column */}
          <div className="lg:col-span-5 flex justify-center relative select-none">
            {/* Background contextual absolute text labels behind the element */}
            <span className="absolute left-[-10%] top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-600/40 pointer-events-none hidden md:inline">
              Developer Tools
            </span>
            <span className="absolute right-[10%] top-8 text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-600/30 pointer-events-none hidden md:inline">
              Open Source
            </span>

            {/* Main Fluid Orb Artwork Graphic Container */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 relative flex items-center justify-center">
              {/* Outer thin neon ring circle */}
              <div className="absolute inset-0 rounded-full border border-orange-500/10 scale-105 animate-spin duration-[40000ms]"></div>
              
              {/* Core Chromatic Iridescent Abstract Topology Shape */}
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-zinc-800 via-stone-900 to-black relative shadow-[inset_0_0_60px_rgba(249,115,22,0.15)] border border-white/5">
                {/* Simulated displacement mesh using multiple highly stylized noise/metallic layers */}
                <div className="absolute inset-2 rounded-full mix-blend-color-dodge opacity-60 bg-radial from-emerald-500/20 via-transparent to-transparent blur-md"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-teal-400/20 mix-blend-overlay"></div>
                
                {/* Organic fluid topography rendering placeholder inside the frame */}
                <div 
                  className="w-full h-full scale-95 opacity-85 rounded-full filter contrast-125 saturate-150"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.035' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 15 -7'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- SERVICES GRID SECTION --- */}
        <section className="mt-32 pt-16 border-t border-zinc-900">
          <h2 className="text-3xl font-medium tracking-tight text-white mb-12">
            Our services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Service 1 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-2 text-orange-400">
                <div className="w-5 h-5 rounded border border-orange-400/40 flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full border-2 border-orange-400 border-dashed"></div>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide">SDK Development</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Empower developers with reliable, well-designed SDKs that integrate seamlessly into your platform, inspiring them to build amazing solutions.
              </p>
              <Link href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors pt-2">
                Learn more <ChevronRight className="w-3 h-3 text-orange-500 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-2 text-indigo-400">
                <div className="w-5 h-5 rounded border border-indigo-400/40 flex items-center justify-center p-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rotate-45"></div>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide">SDK Maintenance</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Keep your SDKs up-to-date, secure, and efficient with our maintenance services, handling updates, fixes, and compatibility, so your team can focus.
              </p>
              <Link href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors pt-2">
                Learn more <ChevronRight className="w-3 h-3 text-indigo-500 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="w-5 h-5 rounded border border-emerald-400/40 flex items-center justify-center p-1">
                  <div className="w-2 h-1 bg-emerald-400 rounded-sm"></div>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide">Cross-Platform Development</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Accelerate development and time-to-market with a unified codebase. We migrate apps to Flutter or React Native, enabling faster builds and innovation.
              </p>
              <Link href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors pt-2">
                Learn more <ChevronRight className="w-3 h-3 text-emerald-500 transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
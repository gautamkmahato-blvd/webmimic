"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Compass, Leaf, MapPin, Sun, ArrowRight, CheckCircle2 } from "lucide-react";

// Mock data based on the video
const destinations = [
  {
    id: 1,
    title: "Divert to the Dolomites",
    subtitle: "Sidestep Italy's hotpots for exclusive views",
    image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=800&auto=format&fit=crop",
    badges: [
      { icon: Compass, top: "40%", left: "-10%", delay: 0 },
      { icon: Leaf, top: "15%", right: "-10%", delay: 0.2 },
    ],
    button1: "GO OFFBEAT",
    button2: "TRAVEL GREEN",
    bgColor: "bg-[#EADDCF]", // Tan background
  },
  {
    id: 2,
    title: "Weave through Madeira",
    subtitle: "Get a front-row seat with the island's makers",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=800&auto=format&fit=crop",
    badges: [
      { icon: CheckCircle2, top: "10%", left: "-5%", delay: 0.1 },
      { icon: Compass, top: "50%", right: "-15%", delay: 0.3 },
    ],
    button1: "GO OFFBEAT",
    button2: "LOVE LOCAL",
    bgColor: "bg-[#B5AD98]", // Sage background
  },
  {
    id: 3,
    title: "Time travel in Tallinn",
    subtitle: "Unlock World Heritage without the waitlist",
    image: "https://images.unsplash.com/photo-1541846437637-23f2f814b752?q=80&w=800&auto=format&fit=crop",
    badges: [
      { icon: Sun, top: "15%", left: "-12%", delay: 0 },
      { icon: Compass, top: "60%", right: "-8%", delay: 0.4 },
    ],
    button1: "TRAVEL OFF-SEASON",
    button2: "GO OFFBEAT",
    bgColor: "bg-[#E8F0ED]", // Light mint background
  },
];

export default function FloatingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);

  const activeDest = destinations[currentIndex];

  // Carousel Loop Logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      gsap.to(cardRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // Change data
          setCurrentIndex((prev) => (prev + 1) % destinations.length);
          // Reset position and animate in
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Continuous Levitation Logic
  useEffect(() => {
    // Make the whole card bob up and down gently
    const cardFloat = gsap.to(cardRef.current, {
      y: "-=15",
      rotationX: "+=2", // Subtle rotation shift for realism
      rotationY: "+=2",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Make badges float independently
    const badgeFloats = badgesRef.current.map((badge, i) => {
      if (!badge) return null;
      return gsap.to(badge, {
        y: "-=20",
        duration: 2 + i * 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.2,
      });
    });

    return () => {
      cardFloat.kill();
      badgeFloats.forEach((anim) => anim?.kill());
    };
  }, [currentIndex]); // Re-trigger when badges change

  return (
    <div
      ref={containerRef}
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-1000 ${activeDest.bgColor} overflow-hidden`}
      // Set perspective on the parent to establish 3D space
      style={{ perspective: "1200px" }} 
    >
      {/* 3D Scene Wrapper */}
      <div
        ref={cardRef}
        className="relative w-[320px] sm:w-[380px]"
        // Preserve 3D depth and set the initial isometric rotation
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(15deg) rotateY(-20deg) rotateZ(-5deg)",
        }}
      >
        {/* Main Card */}
        <div className="bg-white rounded-[2rem] p-4 shadow-2xl pb-8">
          {/* Image */}
          <div className="relative h-[280px] w-full rounded-[1.5rem] overflow-hidden mb-6">
            <img
              src={activeDest.image}
              alt={activeDest.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Typography */}
          <div className="px-2">
            <h2 className="text-3xl font-extrabold text-[#113A2F] leading-tight mb-2 tracking-tight">
              {activeDest.title}
            </h2>
            <p className="text-gray-500 text-sm font-medium mb-6">
              {activeDest.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 items-start">
              <button className="flex items-center gap-2 bg-[#113A2F] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-[#1b5c4a] transition-colors">
                {activeDest.button1}
                <ArrowRight size={16} className="bg-[#21B573] rounded-full p-0.5 text-white" />
              </button>
              <button className="flex items-center gap-2 bg-[#E8F0ED] text-[#113A2F] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-[#d1e3dd] transition-colors">
                {activeDest.button2}
                <ArrowRight size={16} className="bg-[#21B573] rounded-full p-0.5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        {activeDest.badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={`${activeDest.id}-badge-${index}`}
              ref={(el) => {
                badgesRef.current[index] = el;
              }}
              className="absolute w-16 h-16 bg-[#113A2F] rounded-full flex items-center justify-center shadow-2xl"
              style={{
                top: badge.top,
                left: badge.left,
                right: badge.right,
                // translateZ pushes the badge "out" of the screen toward the user
                transform: "translateZ(80px)", 
              }}
            >
              <Icon size={32} className="text-[#21B573]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
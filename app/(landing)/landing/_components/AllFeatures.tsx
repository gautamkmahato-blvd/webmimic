'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Code2, Wand2, ShieldCheck, Clapperboard, Layers } from "lucide-react";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold text-[#090b12]";

interface FSFeature {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
}

const FS_FEATURES: FSFeature[] = [
    { id: 1, title: "Assets, Colors & Typography", description: "Extract images, SVGs, videos, color palettes, and full typography from any website in one click.", icon: Palette, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 2, title: "Element Code Extraction", description: "Hover any element to instantly grab its CSS properties and clean HTML markup.", icon: Code2, image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 3, title: "AI Component Cloner", description: "Pick any section and let AI recreate it as production-ready code you can drop straight into your project.", icon: Wand2, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 4, title: "WCAG 2.1 Accessibility Scan", description: "Scan the full page for alt text, contrast, labels, headings, landmarks, ARIA roles, keyboard access, skip links, and more.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1768839720936-87ce3adf2d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 5, title: "Animation Extractor & AI Cloner", description: "Detect Lottie animations on any page, preview them, and let AI recreate the component with its full animation.", icon: Clapperboard, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 6, title: "Design System Export", description: "Extract the complete design style as a Tailwind config, Claude skills file, or Figma design system in one shot.", icon: Layers, image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
];

const FS_INTERVAL = 4000;

function FeatureShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActiveIndex(p => (p + 1) % FS_FEATURES.length), FS_INTERVAL);
        return () => clearInterval(t);
    }, []);

    return (
        <section className={`mx-auto py-[43px] pb-[56px] border-t border-[#edf1f7] mt-16 ${sectionWidth}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Feature list */}
                <div className="flex flex-col gap-[6px]">
                    <div className="mb-[18px]">
                        <span className={sectionCopyEyebrow}>WHAT YOU CAN DO</span>
                        <h2 className={sectionH2}>Every tool a designer needs.</h2>
                        <p className="max-w-[680px] mb-3 text-[#667489] text-md leading-[1.6]">From extracting assets to cloning animations, everything you need to go from inspiration to production in one click.</p>
                    </div>
                    {FS_FEATURES.map((feature, index) => {
                        const Icon = feature.icon;
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={feature.id}
                                onClick={() => setActiveIndex(index)}
                                className={`relative flex items-start gap-4 px-5 py-[14px] rounded-[12px] cursor-pointer transition-all duration-300 border-2 ${
                                    isActive
                                        ? "bg-[#f4f5f7] border-[#d1d5db] shadow-[0_8px_24px_rgba(15,23,42,.07)]"
                                        : "bg-[#f9fafb] border-transparent hover:border-[#e5e7eb] hover:shadow-[0_4px_12px_rgba(15,23,42,.06)]"
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors duration-300 ${
                                    isActive ? "bg-[#374151]" : "bg-[#edf1f7]"
                                }`}>
                                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-[#667489]"}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-bold mb-[3px] text-[13px] transition-colors duration-300 ${isActive ? "text-[#111827]" : "text-[#283346]"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-[12px] leading-[1.55] transition-colors duration-300 ${isActive ? "text-[#4b5563]" : "text-[#667489]"}`}>
                                        {feature.description}
                                    </p>
                                </div>
                                {isActive && (
                                    <motion.div
                                        className="absolute right-5 top-1/2 -translate-y-1/2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    >
                                        <div className="w-[9px] h-[9px] rounded-full bg-[#374151]" />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}

                    {/* Progress bars */}
                    <div className="flex gap-[6px] mt-[14px]">
                        {FS_FEATURES.map((_, index) => (
                            <div key={index} className="flex-1 h-[3px] bg-[#e5e7eb] rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#374151] rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: index === activeIndex ? "100%" : "0%" }}
                                    transition={{ duration: index === activeIndex ? FS_INTERVAL / 1000 : 0.3, ease: "linear" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image panel */}
                <div className="relative h-[520px] rounded-[14px] overflow-hidden border border-[#dfe7f1] mt-44 shadow-[0_24px_55px_rgba(15,23,42,.13)]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeIndex}
                            src={FS_FEATURES[activeIndex].image}
                            alt={FS_FEATURES[activeIndex].title}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(to_top,rgba(9,11,18,.72),transparent)] p-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-[22px] font-bold text-white leading-[1.2] tracking-[-0.03em] mb-[6px]">
                                    {FS_FEATURES[activeIndex].title}
                                </h2>
                                <p className="text-[#b8c8e0] text-[13px] leading-[1.55]">
                                    {FS_FEATURES[activeIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default function AllFeatures() {
    return <FeatureShowcase />;
}

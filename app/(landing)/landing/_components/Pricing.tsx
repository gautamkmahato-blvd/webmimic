'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";
const sectionCopyEyebrow = "text-sm tracking-[.24em] font-extrabold text-[#1463ff]";
const sectionH2 = "mt-[19px] mb-[13px] text-[34px] leading-[1.03] tracking-[-0.045em] font-bold";

type Feature = { text: string; sub?: string[] };
const f = (text: string, sub?: string[]): Feature => ({ text, sub });

const sharedBase: Feature[] = [
  f("Inspect any element (CSS, fonts, colors)"),
  f("Unlimited asset downloads (images, SVGs, videos)"),
  f("Unlimited Lottie animation exports"),
  f("Unlimited component code exports (HTML, CSS)"),
  f("Save unlimited items to your library"),
  f("200+ real-world website style guides"),
  f("200+ real-world Framer Motion / GSAP animations"),
];

const freeFeatures: Feature[] = [
  ...sharedBase.slice(0, 5),
  f("10 design token extractions"),
  f("10 accessibility audit reports (WCAG 2.1)"),
  f("Generate up to 10 AI-ready design resources", [
    "Figma design guides",
    "Claude skills",
    "Google Stitch style guides",
  ]),
  ...sharedBase.slice(5),
];

const basicFeatures: Feature[] = [
  ...sharedBase.slice(0, 5),
  f("100 design token extractions"),
  f("50 accessibility audit reports (WCAG 2.1)"),
  f("50 near pixel-perfect component recreations"),
  f("50 Framer Motion / GSAP animation extractions"),
  f("Generate up to 100 AI-ready design resources", [
    "Figma design guides",
    "Claude skills",
    "Google Stitch style guides",
  ]),
  ...sharedBase.slice(5),
];

const proFeatures: Feature[] = [
  ...sharedBase.slice(0, 5),
  f("Unlimited design token extractions"),
  f("Unlimited accessibility audit reports (WCAG 2.1)"),
  f("Recreate any component with near pixel-perfect accuracy"),
  f("Extract Framer Motion / GSAP animations from any component"),
  f("Generate unlimited AI-ready design resources", [
    "Figma design guides",
    "Claude skills",
    "Google Stitch style guides",
  ]),
  ...sharedBase.slice(5),
];

const plans = {
  monthly: [
    {
      name: "Free", price: 0, period: "/mo", originalPrice: null, saving: null,
      desc: "Everything you need to start inspecting and extracting from any website.",
      cta: "Get started free", dark: false, popular: false,
      ctaStyle: "border border-[#dce3ee] bg-white text-[#171b24] hover:bg-[#f9fafb]",
      features: freeFeatures,
    },
    {
      name: "Basic", price: 5, period: "/mo", originalPrice: null, saving: null,
      desc: "For designers and developers who extract and recreate components regularly.",
      cta: "Start with Basic", dark: false, popular: false,
      ctaStyle: "bg-[#090b12] text-white hover:bg-[#1a1f2e]",
      features: basicFeatures,
    },
    {
      name: "Pro", price: 20, period: "/mo", originalPrice: null, saving: null,
      desc: "Unlimited power for professionals shipping production-ready work.",
      cta: "Start with Pro", dark: true, popular: true,
      ctaStyle: "bg-white text-[#080d14]",
      features: proFeatures,
    },
  ],
  yearly: [
    {
      name: "Free", price: 0, period: "/yr", originalPrice: null, saving: null,
      desc: "Everything you need to start inspecting and extracting from any website.",
      cta: "Get started free", dark: false, popular: false,
      ctaStyle: "border border-[#dce3ee] bg-white text-[#171b24] hover:bg-[#f9fafb]",
      features: freeFeatures,
    },
    {
      name: "Basic", price: 50, period: "/yr", originalPrice: 60, saving: 10,
      desc: "For designers and developers who extract and recreate components regularly.",
      cta: "Start with Basic", dark: false, popular: false,
      ctaStyle: "bg-[#090b12] text-white hover:bg-[#1a1f2e]",
      features: basicFeatures,
    },
    {
      name: "Pro", price: 200, period: "/yr", originalPrice: 240, saving: 40,
      desc: "Unlimited power for professionals shipping production-ready work.",
      cta: "Start with Pro", dark: true, popular: true,
      ctaStyle: "bg-white text-[#080d14]",
      features: proFeatures,
    },
  ],
};

function Price({ value, dark }: { value: number; dark: boolean }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className={`text-[46px] font-bold leading-none tracking-[-0.04em] ${dark ? "text-white" : "text-[#090b12]"}`}
      >
        {value === 0 ? "Free" : `$${value}`}
      </motion.span>
    </AnimatePresence>
  );
}

function FeatureRow({ feature, dark }: { feature: Feature; dark: boolean }) {
  return (
    <li className="flex flex-col gap-[5px]">
      <div className="flex items-start gap-[9px]">
        <span className={`mt-[2px] w-[15px] h-[15px] rounded-full flex items-center justify-center shrink-0 ${dark ? "bg-[#1a2a1e]" : "bg-[#dcfce7]"}`}>
          <Check size={8} className={dark ? "text-[#4ade80]" : "text-[#16a34a]"} strokeWidth={3.2} />
        </span>
        <span className={`text-[12.5px] leading-[1.55] ${dark ? "text-[#9aa3b2]" : "text-[#536174]"}`}>
          {feature.text}
        </span>
      </div>
      {feature.sub && (
        <ul className="ml-[24px] flex flex-col gap-[4px]">
          {feature.sub.map((s) => (
            <li key={s} className="flex items-center gap-[7px]">
              <span className={`w-[4px] h-[4px] rounded-full shrink-0 ${dark ? "bg-[#334155]" : "bg-[#c8d5e8]"}`} />
              <span className={`text-[11.5px] ${dark ? "text-[#64748b]" : "text-[#7e8fa4]"}`}>{s}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const currentPlans = plans[billing];

  return (
    <section className={`mx-auto py-[43px] pb-[56px] border-t border-[#edf1f7] mt-16 ${sectionWidth}`}>

      {/* Header */}
      <div className="text-center mb-[40px]">
        <span className={sectionCopyEyebrow}>PRICING</span>
        <h2 className={`${sectionH2} text-[#090b12]`}>Simple, transparent pricing.</h2>
        <p className="text-[#667489] text-md mt-1 mb-[28px]">Start free. Upgrade when you need more.</p>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-[4px] p-[4px] rounded-full bg-[#f3f5f8] border border-[#e5eaf3]">
          {(["monthly", "yearly"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setBilling(mode)}
              className="relative px-[20px] h-[36px] rounded-full text-[13px] font-semibold transition-colors duration-200 flex items-center gap-[7px]"
              style={{ color: billing === mode ? "#090b12" : "#667489" }}
            >
              {billing === mode && (
                <motion.span
                  layoutId="pricing-billing-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,.1)] border border-[#e5eaf3]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="relative z-10 capitalize">{mode}</span>
              {mode === "yearly" && (
                <span className="relative z-10 text-[10px] font-extrabold text-[#16a34a] bg-[#dcfce7] px-[6px] py-[2px] rounded-full">
                  Save 17%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-[17px] items-stretch">
        {currentPlans.map((plan, i) => (
          <motion.div
            key={`${billing}-${plan.name}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-[20px] p-[28px] flex flex-col ${
              plan.dark
                ? "bg-[#080d14] border border-[rgba(255,255,255,.08)] shadow-[0_28px_56px_rgba(0,0,0,.32)]"
                : "bg-white border border-[#dfe7f1] shadow-[0_8px_24px_rgba(15,23,42,.06)]"
            }`}
          >
            {/* Most popular badge */}
            {plan.popular && (
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-[14px] py-[5px] rounded-full bg-[#1463ff] text-white text-[11px] font-bold tracking-[.06em] whitespace-nowrap shadow-[0_4px_14px_rgba(20,99,255,.35)]">
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* Plan name */}
            <p className={`text-[11px] font-extrabold tracking-[.18em] mb-[16px] ${plan.dark ? "text-[#7e8fa8]" : "text-[#9aa3b2]"}`}>
              {plan.name.toUpperCase()}
            </p>

            {/* Price */}
            <div className="flex items-end gap-[6px] mb-[4px]">
              <Price value={plan.price} dark={plan.dark} />
              {plan.price > 0 && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${billing}-period-${plan.name}`}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-[13px] mb-[7px] ${plan.dark ? "text-[#536174]" : "text-[#9aa3b2]"}`}
                  >
                    {plan.period}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>

            {/* Savings */}
            <div className="h-[22px] mb-[12px]">
              {plan.saving && (
                <AnimatePresence>
                  <motion.p
                    key={`saving-${plan.name}`}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className={`text-[11px] font-semibold ${plan.dark ? "text-[#4ade80]" : "text-[#16a34a]"}`}
                  >
                    <s className={`font-normal mr-[4px] ${plan.dark ? "text-[#536174]" : "text-[#9aa3b2]"}`}>
                      ${plan.originalPrice}/yr
                    </s>
                    Save ${plan.saving} vs monthly
                  </motion.p>
                </AnimatePresence>
              )}
            </div>

            {/* Description */}
            <p className={`text-[12.5px] leading-[1.6] mb-[22px] ${plan.dark ? "text-[#8b9ab0]" : "text-[#667489]"}`}>
              {plan.desc}
            </p>

            {/* CTA */}
            <a
              href="/payment"
              className={`min-h-[44px] w-full inline-flex items-center justify-center rounded-[10px] text-[13px] font-bold mb-[24px] transition-colors ${plan.ctaStyle}`}
            >
              {plan.cta}
            </a>

            {/* Divider */}
            <div className={`w-full h-px mb-[20px] ${plan.dark ? "bg-white/[.08]" : "bg-[#edf1f7]"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-[11px]">
              {plan.features.map((feature, fi) => (
                <FeatureRow key={fi} feature={feature} dark={plan.dark} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

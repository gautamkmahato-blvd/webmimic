'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Navbar } from "../(landing)/_components/Navbar";
import Footer from "../(landing)/_components/Footer";

// ── Feature type — supports optional sub-items ──
type Feature = { text: string; sub?: string[] };

const f = (text: string, sub?: string[]): Feature => ({ text, sub });

// ── Shared feature blocks ──
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

// ── Plan definitions ──
const plans = {
  monthly: [
    {
      name: "Free",      price: 0,   period: "/mo", originalPrice: null, saving: null,
      description: "Everything you need to start inspecting and extracting from any website.",
      cta: "Get started free", dark: false, badge: null,
      features: freeFeatures,
    },
    {
      name: "Basic",     price: 5,   period: "/mo", originalPrice: null, saving: null,
      description: "For designers and developers who extract and recreate components regularly.",
      cta: "Start with Basic", dark: false, badge: null,
      features: basicFeatures,
    },
    {
      name: "Pro",       price: 20,  period: "/mo", originalPrice: null, saving: null,
      description: "Unlimited power for professionals shipping production-ready work.",
      cta: "Start with Pro", dark: true, badge: "Most popular",
      features: proFeatures,
    },
  ],
  yearly: [
    {
      name: "Free",      price: 0,   period: "/yr", originalPrice: null,  saving: null,
      description: "Everything you need to start inspecting and extracting from any website.",
      cta: "Get started free", dark: false, badge: null,
      features: freeFeatures,
    },
    {
      name: "Basic",     price: 50,  period: "/yr", originalPrice: 60,    saving: 10,
      description: "For designers and developers who extract and recreate components regularly.",
      cta: "Start with Basic", dark: false, badge: null,
      features: basicFeatures,
    },
    {
      name: "Pro",       price: 200, period: "/yr", originalPrice: 240,   saving: 40,
      description: "Unlimited power for professionals shipping production-ready work.",
      cta: "Start with Pro", dark: true, badge: "Most popular",
      features: proFeatures,
    },
  ],
};

// ── Animated price ──
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

// ── Feature row (with optional sub-list) ──
function FeatureRow({ feature, dark }: { feature: Feature; dark: boolean }) {
  return (
    <li className="flex flex-col gap-[6px]">
      <div className="flex items-start gap-[10px]">
        <span className={`mt-[2px] w-[15px] h-[15px] rounded-full flex items-center justify-center shrink-0 ${dark ? "bg-[#1a2a1e]" : "bg-[#dcfce7]"}`}>
          <Check size={8} className={dark ? "text-[#4ade80]" : "text-[#16a34a]"} strokeWidth={3.2} />
        </span>
        <span className={`text-[12.5px] leading-[1.55] ${dark ? "text-[#8693a8]" : "text-[#536174]"}`}>
          {feature.text}
        </span>
      </div>
      {feature.sub && (
        <ul className="ml-[25px] flex flex-col gap-[4px]">
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

export default function PaymentPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const currentPlans = plans[billing];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Header ── */}
      <section className="pt-[140px] pb-[52px] text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-[.24em] font-extrabold text-[#1463ff] mb-[14px]"
        >
          PRICING
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(34px,5vw,54px)] font-bold tracking-[-0.045em] text-[#090b12] leading-[1.04] mb-[14px]"
        >
          Simple, transparent pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#667489] text-[15px] max-w-[380px] mx-auto mb-[36px]"
        >
          Start for free. Scale as you grow. No hidden fees, ever.
        </motion.p>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-[4px] p-[4px] rounded-full bg-[#f3f5f8] border border-[#e5eaf3]"
        >
          {(["monthly", "yearly"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setBilling(mode)}
              className="relative px-[20px] h-[36px] rounded-full text-[13px] font-semibold transition-colors duration-200 flex items-center gap-[7px]"
              style={{ color: billing === mode ? "#090b12" : "#667489" }}
            >
              {billing === mode && (
                <motion.span
                  layoutId="billing-pill"
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
        </motion.div>
      </section>

      {/* ── Cards ── */}
      <section className="mx-auto w-[min(1160px,calc(100%-48px))] pb-[96px]">
        <div className="grid grid-cols-3 gap-[20px] items-stretch">
          {currentPlans.map((plan, i) => (
            <motion.div
              key={`${billing}-${plan.name}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[20px] p-[28px] border flex flex-col ${
                plan.dark
                  ? "bg-[#080d14] border-[#1a2235] shadow-[0_32px_72px_rgba(8,13,20,.45)]"
                  : "bg-white border-[#e5eaf3] shadow-[0_8px_32px_rgba(15,23,42,.07)]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 px-[14px] py-[5px] rounded-full text-[11px] font-extrabold bg-[#1463ff] text-white tracking-[.06em] shadow-[0_4px_14px_rgba(20,99,255,.35)]">
                  {plan.badge.toUpperCase()}
                </span>
              )}

              {/* Plan name */}
              <p className={`text-[11px] font-extrabold tracking-[.18em] mb-[18px] ${plan.dark ? "text-[#7e8fa8]" : "text-[#9aa3b2]"}`}>
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
              <div className="h-[22px] mb-[14px]">
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
              <p className={`text-[12.5px] leading-[1.6] mb-[22px] ${plan.dark ? "text-[#8693a8]" : "text-[#667489]"}`}>
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href="#"
                className={`w-full h-[44px] rounded-[10px] flex items-center justify-center text-[13px] font-bold mb-[24px] transition-opacity hover:opacity-80 ${
                  plan.dark
                    ? "bg-white text-[#080d14]"
                    : plan.price === 0
                    ? "bg-[#f3f5f8] text-[#374151] border border-[#e5eaf3]"
                    : "bg-[#090b12] text-white shadow-[0_4px_14px_rgba(9,11,18,.22)]"
                }`}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div className={`h-px mb-[20px] ${plan.dark ? "bg-[#1a2235]" : "bg-[#edf1f7]"}`} />

              {/* Features */}
              <ul className="flex flex-col gap-[11px]">
                {plan.features.map((feature, fi) => (
                  <FeatureRow key={fi} feature={feature} dark={plan.dark} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[12px] text-[#9aa3b2] mt-[32px]">
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto w-[min(720px,calc(100%-48px))] pb-[96px]">
        <h2 className="text-[22px] font-bold tracking-[-0.03em] text-[#090b12] text-center mb-[32px]">
          Common questions
        </h2>
        <div className="flex flex-col divide-y divide-[#edf1f7]">
          {[
            { q: "Can I switch plans anytime?", a: "Yes — upgrade or downgrade at any time. Changes take effect immediately and we'll prorate any difference." },
            { q: "What counts as a design token extraction?", a: "Each time you run a full design system scan on a page — capturing colors, typography, spacing, and tokens — that counts as one extraction." },
            { q: "What happens after my free trial?", a: "You'll be moved to the Free plan automatically. No charge unless you choose to upgrade." },
            { q: "Do yearly plans auto-renew?", a: "Yes, yearly plans renew annually. You can cancel anytime before the renewal date from your account settings." },
            { q: "Is there a team or enterprise plan?", a: "The Pro plan includes 3 seats. For larger teams, contact us and we'll put together a custom plan." },
          ].map(({ q, a }) => (
            <div key={q} className="py-[20px]">
              <p className="text-[14px] font-semibold text-[#111827] mb-[6px]">{q}</p>
              <p className="text-[13px] text-[#667489] leading-[1.65]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
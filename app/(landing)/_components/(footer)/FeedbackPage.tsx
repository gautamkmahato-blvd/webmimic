"use client";

import { useState, type FormEvent } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

const sectionWidth = "w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16";

const inputClass =
  "w-full rounded-lg border border-[#dce3ee] bg-white px-4 py-3 text-[14px] text-[#090b12] outline-none transition-colors placeholder:text-[#9aa3b2] focus:border-[#1463ff] focus:ring-2 focus:ring-[#1463ff]/15";

export function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#090b12]">
      <Navbar />
      <main className="pt-[66px]">
        <section className={`mx-auto py-16 sm:py-20 ${sectionWidth}`}>
          <div className="max-w-[560px]">
            <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-[#090b12]">
              Feedback
            </h1>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#657185]">
              Tell us what&apos;s working, what&apos;s missing, or what we should build next. Your input helps shape Webmimic.
            </p>

            {submitted ? (
              <div className="mt-10 rounded-xl border border-[#e8edf5] bg-[#f9fafb] px-6 py-8">
                <p className="text-[16px] font-semibold text-[#090b12]">Thanks for your feedback!</p>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#657185]">
                  We&apos;ve received your message and will review it soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div>
                  <label htmlFor="feedback-name" className="mb-2 block text-[13px] font-semibold text-[#090b12]">
                    Name
                  </label>
                  <input
                    id="feedback-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="feedback-email" className="mb-2 block text-[13px] font-semibold text-[#090b12]">
                    Email
                  </label>
                  <input
                    id="feedback-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="feedback-subject" className="mb-2 block text-[13px] font-semibold text-[#090b12]">
                    Subject
                  </label>
                  <input
                    id="feedback-subject"
                    name="subject"
                    type="text"
                    placeholder="Feature request, bug report, general feedback…"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="feedback-message" className="mb-2 block text-[13px] font-semibold text-[#090b12]">
                    Message
                  </label>
                  <textarea
                    id="feedback-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Share your thoughts in detail…"
                    className={`${inputClass} resize-y min-h-[140px]`}
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-[44px] rounded-lg bg-neutral-900 px-6 text-[13px] font-bold text-white shadow-[0_10px_20px_rgba(0,0,0,.18)] transition-colors hover:bg-neutral-700"
                >
                  Send feedback
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

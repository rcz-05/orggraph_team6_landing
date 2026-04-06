"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Warm background blob */}
        <div className="relative rounded-3xl bg-[#fdf5ed] px-8 py-14 md:px-16 md:py-20 overflow-hidden">
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#f9e4cc]/60 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-[#f5ddc8]/40 blur-[80px]" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#c4885a] block mb-5">
              Waitlist Open
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.12] text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Make Your Engineering
              <br />
              Impact Impossible To Ignore.
            </motion.h2>

            {/* Email input + button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Work email address"
                className="h-12 flex-1 w-full rounded-full border border-[#e0d5c8] bg-white px-5 text-[14px] text-[#0a0a0a] placeholder-[#bbb] outline-none focus:border-[#0a0a0a] transition-colors"
              />
              <button className="h-12 rounded-full bg-[#0a0a0a] px-6 text-[13px] font-semibold text-white whitespace-nowrap transition-opacity hover:opacity-80 flex items-center gap-2">
                Get Early Access <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-[#bba88f]">
              Joining 1,200+ teams in the private beta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

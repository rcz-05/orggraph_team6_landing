"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "I have to personally pitch my work upward because my contributions are otherwise invisible to leadership.",
    source: "Software Engineer",
    company: "Microsoft",
  },
  {
    text: "Internal infrastructure exists, but the discovery layer on top of it is broken — engineers have to build their own connections entirely.",
    source: "Senior Engineer (8+ yrs)",
    company: "Amazon",
  },
  {
    text: "We have visibility gaps across our international teams — promotions end up depending on who has the loudest manager.",
    source: "VP of People",
    company: "Jeeves",
  },
  {
    text: "SMBs are a strong entry point — smaller firms lack the resources or time to build internal tooling that makes expertise visible.",
    source: "Startup Founder",
    company: "Customer Discovery",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#bbb] block mb-3">
            Customer Discovery
          </span>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] max-w-lg">
            Straight from the engineers who live it.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.div
              key={q.source}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-[#eee] p-7 transition-all hover:border-[#ddd] hover:shadow-sm"
            >
              <blockquote className="text-[15px] leading-[1.7] text-[#444] mb-5">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[11px] font-bold text-[#999]">
                  {q.source[0]}
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#0a0a0a]">
                    {q.source}
                  </p>
                  <p className="text-[11px] text-[#aaa]">{q.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

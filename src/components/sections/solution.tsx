"use client";

import { motion } from "framer-motion";

export function SolutionSection() {
  return (
    <section id="solution" className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#0a0a0a] max-w-3xl mx-auto mb-6"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Impact Shouldn&apos;t Disappear At Scale.
        </motion.h2>
      </div>
    </section>
  );
}

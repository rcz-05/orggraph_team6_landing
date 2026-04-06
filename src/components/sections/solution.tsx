"use client";

import { motion } from "framer-motion";

export function SolutionSection() {
  return (
    <section id="solution" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[clamp(1.6rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] max-w-3xl mx-auto mb-6"
        >
          Impact shouldn&apos;t disappear at scale.
        </motion.h2>
      </div>
    </section>
  );
}

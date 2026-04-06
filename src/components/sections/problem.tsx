"use client";

import { motion } from "framer-motion";

const sidebar = [
  { num: "01", label: "The Challenge" },
  { num: "02", label: "Why it matters" },
  { num: "03", label: "The data gap" },
  { num: "04", label: "Scaling complexity" },
];

export function ProblemSection() {
  return (
    <section id="problem" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Intro line */}
        <p className="text-center text-[15px] leading-relaxed text-[#666] max-w-2xl mx-auto mb-20">
          Founded to solve the scale problem: OrgGraph is a coalition of data
          signals from the tools you already use every day:
        </p>

        {/* Tool logos row */}
        <div className="flex flex-wrap justify-center gap-10 mb-24 text-[12px] font-medium tracking-[0.12em] uppercase text-[#bbb]">
          <span>GitHub</span>
          <span>Jira</span>
          <span>Slack</span>
          <span>Linear</span>
          <span>Confluence</span>
        </div>

        {/* Problem content: sidebar + big text */}
        <div className="grid gap-12 md:grid-cols-[200px_1fr]">
          {/* Left sidebar */}
          <div className="flex flex-col gap-4">
            {sidebar.map((item) => (
              <div key={item.num} className="flex items-baseline gap-3">
                <span className="text-[11px] font-medium text-[#ccc]">
                  {item.num}
                </span>
                <span className="text-[12px] text-[#999]">— {item.label}</span>
              </div>
            ))}
          </div>

          {/* Right: big problem statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(1.8rem,4vw,3.2rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] mb-8"
            >
              As organizations scale,
              <br />
              engineering expertise
              <br />
              becomes a ghost in the
              <br />
              system.
            </motion.h2>

            <div className="max-w-lg space-y-5 text-[14px] leading-[1.7] text-[#666]">
              <p>
                In a company of 500+ engineers, knowing who is actually the
                expert in high-concurrency Ruby systems or who pioneered your
                migration to K8s becomes tribal knowledge.
              </p>
              <p>
                Impact is often buried in closed PRs, resolved tickets, and
                ephemeral Slack threads. When promotion cycles hit, engineers
                struggle to prove their value, and hiring managers look external
                because they can&apos;t find the internal talent they need.
              </p>
              <p>
                We&apos;re building OrgGraph to ensure every line of code, every
                architectural decision, and every mentorship moment is counted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

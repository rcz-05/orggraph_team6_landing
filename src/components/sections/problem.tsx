"use client";

import { motion } from "framer-motion";
import { Eye, Search, TrendingUp, Ghost } from "lucide-react";
import {
  GitHubLogo,
  JiraLogo,
  SlackLogo,
  LinearLogo,
  ConfluenceLogo,
} from "@/components/tool-logos";

const painPoints = [
  {
    icon: Eye,
    title: "Invisible contributions",
    desc: "Engineers do critical work that never surfaces in reviews.",
    color: "bg-[#dce7fb]",
  },
  {
    icon: Search,
    title: "Broken internal discovery",
    desc: "Managers default to external hiring because internal talent is unfindable.",
    color: "bg-[#d4f0dc]",
  },
  {
    icon: TrendingUp,
    title: "Narrative-driven promotions",
    desc: "Advancement depends on who speaks loudest, not who ships most.",
    color: "bg-[#f5e6cc]",
  },
  {
    icon: Ghost,
    title: "Tribal knowledge loss",
    desc: "Expertise lives in people's heads and walks out the door with them.",
    color: "bg-[#e5daf5]",
  },
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
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-24">
          <GitHubLogo className="h-9 w-auto text-[#24292f]" />
          <JiraLogo className="h-9 w-auto" />
          <SlackLogo className="h-9 w-auto" />
          <LinearLogo className="h-9 w-auto" />
          <ConfluenceLogo className="h-8 w-auto" />
        </div>

        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] text-center mb-4"
        >
          Expertise gets lost at scale.
        </motion.h2>
        <p className="text-center text-[15px] text-[#999] mb-14 max-w-md mx-auto">
          The bigger the org, the harder it is to know who knows what.
        </p>

        {/* Pain point cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${p.color} rounded-2xl p-6 transition-all hover:shadow-md cursor-default`}
            >
              <p.icon className="h-5 w-5 text-[#0a0a0a]/50 mb-4" />
              <h3 className="text-[14px] font-bold text-[#0a0a0a] mb-1.5">
                {p.title}
              </h3>
              <p className="text-[12px] leading-[1.5] text-[#555]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

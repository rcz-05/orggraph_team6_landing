"use client";

import { motion } from "framer-motion";
import { Play, GitMerge, Search, Users, BarChart3, Layers } from "lucide-react";

const postits = [
  {
    // Top-left
    badge: "PROFILES",
    badgeColor: "bg-[#c5d5f6] text-[#3b5fad]",
    bg: "bg-[#dce7fb]",
    title: "Auto-Generated Expertise",
    desc: "AI maps skills from GitHub, Jira & Slack — no forms needed.",
    icon: GitMerge,
    position: "left-[2%] top-[2%] md:left-[3%] md:top-[8%]",
    rotate: "-3deg",
    delay: 0.2,
  },
  {
    // Top-right
    badge: "LIVE STATS",
    badgeColor: "bg-[#e8cfa0] text-[#8a6420]",
    bg: "bg-[#f5e6cc]",
    title: "Contribution Evidence",
    desc: "Verifiable impact signals for fairer promotion reviews.",
    icon: BarChart3,
    position: "right-[2%] top-[2%] md:right-[3%] md:top-[5%]",
    rotate: "2.5deg",
    delay: 0.35,
  },
  {
    // Bottom-left
    badge: "DISCOVERY",
    badgeColor: "bg-[#99d4a8] text-[#2a6e3c]",
    bg: "bg-[#d4f0dc]",
    title: "Internal Talent Search",
    desc: "Managers search by real skills, not titles or familiarity.",
    icon: Search,
    position: "left-[2%] bottom-[6%] md:left-[5%] md:bottom-[8%]",
    rotate: "-2deg",
    delay: 0.5,
  },
  {
    // Bottom-right
    badge: "MOBILITY",
    badgeColor: "bg-[#c9b8e8] text-[#5e3fa3]",
    bg: "bg-[#e5daf5]",
    title: "Team Discovery Portal",
    desc: "Engineers explore teams, stacks & projects before applying.",
    icon: Layers,
    position: "right-[2%] bottom-[6%] md:right-[4%] md:bottom-[5%]",
    rotate: "3deg",
    delay: 0.65,
  },
];

export function HeroSection() {
  return (
    <section className="relative px-6 pt-16 pb-10 md:pt-20 md:pb-16 overflow-hidden">
      <div className="relative mx-auto max-w-6xl min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center">

        {/* ── Post-it cards ── */}
        {postits.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: card.delay,
              duration: 0.5,
              ease: "easeOut",
            }}
            className={`absolute ${card.position} z-10 hidden md:block`}
            style={{ transform: `rotate(${card.rotate})` }}
          >
            <div
              className={`${card.bg} w-[220px] rounded-2xl p-5 shadow-sm transition-all hover:shadow-md hover:scale-[1.03] cursor-default`}
              style={{ transform: `rotate(${card.rotate})` }}
            >
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-bold tracking-[0.12em] ${card.badgeColor} mb-3`}
              >
                {card.badge}
              </span>
              <h3 className="text-[14px] font-bold text-[#0a0a0a] leading-tight mb-1.5">
                {card.title}
              </h3>
              <p className="text-[11px] leading-[1.5] text-[#666]">
                {card.desc}
              </p>
              <card.icon className="h-4 w-4 text-[#0a0a0a]/20 mt-3" />
            </div>
          </motion.div>
        ))}

        {/* ── Mobile post-it cards (grid below hero) ── */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-10 w-full">
          {postits.map((card) => (
            <motion.div
              key={card.title + "-mobile"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.4 }}
            >
              <div className={`${card.bg} rounded-xl p-4`}>
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-[8px] font-bold tracking-[0.1em] ${card.badgeColor} mb-2`}
                >
                  {card.badge}
                </span>
                <h3 className="text-[12px] font-bold text-[#0a0a0a] leading-tight mb-1">
                  {card.title}
                </h3>
                <p className="text-[10px] leading-[1.4] text-[#666]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Center content ── */}
        <div className="relative z-20 flex flex-col items-center text-center">
          {/* Tiny label */}
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#999] mb-5">
            Engineering Intelligence
          </span>

          {/* Giant handwritten-style headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.15] tracking-[-0.01em] text-[#0a0a0a] max-w-2xl"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            what&apos;s your team&apos;s
            <br />
            hidden expertise?
          </motion.h1>

          {/* Sub-elements row */}
          <div className="mt-16 flex flex-col items-start justify-between gap-8 w-full max-w-3xl md:flex-row md:items-end">
            {/* Left: play button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col gap-1"
            >
              <span
                className="text-[11px] italic text-[#bbb]"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                niche, amplified
              </span>
              <button className="flex items-center gap-2.5 text-[13px] font-medium text-[#0a0a0a] group">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a0a] transition-transform group-hover:scale-105">
                  <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
                </span>
                See the expertise graph
              </button>
            </motion.div>

            {/* Right: stat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-right"
            >
              <span
                className="text-[11px] italic text-[#bbb] block mb-0.5"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                fully managed
              </span>
              <p className="text-[13px] text-[#666]">
                Currently mapping expertise for
                <br />
                <strong className="text-[#0a0a0a]">24,000+</strong> engineers
                worldwide
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

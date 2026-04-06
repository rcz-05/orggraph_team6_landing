"use client";

import { motion } from "framer-motion";
import { Brain, Search, LayoutGrid, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  {
    badge: "PROFILES",
    badgeColor: "bg-[#f5c4b8] text-[#9e4433]",
    bg: "bg-[#fce8e1]",
    icon: Brain,
    title: "Automated Skill Profiles",
    desc: "No more manual resume updates. OrgGraph connects to GitHub, Jira, and Slack to map your true technical footprint across every repository.",
    checks: [
      "AI-generated skill graphs from real work artifacts",
      "Engineers review and confirm before going live",
      "Editable transfer preferences and growth goals",
    ],
  },
  {
    badge: "SEARCH",
    badgeColor: "bg-[#b8cdb0] text-[#3d6132]",
    bg: "bg-[#e2edd9]",
    icon: Search,
    title: "AI Talent Discovery",
    desc: "Hiring managers find internal candidates using semantic search. \"Find me someone with fraud detection experience\" — and get ranked results instantly.",
    checks: [
      "Natural language search across the org",
      "Ranked results by expertise fit and transfer interest",
      "One-click candidate profile summaries",
    ],
  },
  {
    badge: "MOBILITY",
    badgeColor: "bg-[#e5d5a0] text-[#7a6520]",
    bg: "bg-[#f5edd0]",
    icon: LayoutGrid,
    title: "Internal Mobility Hub",
    desc: "Engineers discover projects and teams matched to their expertise, enabling career growth without leaving the company.",
    checks: [
      "Auto-generated team pages with tech stacks",
      "Filter by technology, domain, or project type",
      "AI-recommended teams based on your profile",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl ${f.bg} p-7 transition-all hover:shadow-lg cursor-default`}
            >
              {/* Badge */}
              <span
                className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] ${f.badgeColor} mb-5`}
              >
                {f.badge}
              </span>

              {/* Icon */}
              <f.icon className="h-6 w-6 text-[#0a0a0a]/60 mb-4" />

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-[1.6] text-[#555] mb-5">
                {f.desc}
              </p>

              {/* Checklist */}
              <div className="flex flex-col gap-2">
                {f.checks.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0a0a0a]/30" />
                    <p className="text-[12px] leading-[1.5] text-[#777]">{c}</p>
                  </div>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="mt-5 flex items-center gap-1.5 text-[12px] font-medium text-[#0a0a0a]/40 group-hover:text-[#0a0a0a]/70 transition-colors">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

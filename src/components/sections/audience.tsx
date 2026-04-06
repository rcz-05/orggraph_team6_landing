"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, ShieldCheck } from "lucide-react";

const personas = [
  {
    icon: Users,
    title: "Software Engineers",
    subtitle: "Individual Contributors",
    desc: "Engineers doing impactful work — system maintenance, mentoring, technical problem-solving — that rarely shows up in evaluations. They want a fairer path to promotion and easier internal mobility.",
    stat: "70%",
    statLabel: "of engineers say contributions are invisible",
  },
  {
    icon: Briefcase,
    title: "Hiring Managers",
    subtitle: "Team & Org Leaders",
    desc: "Managers who search for talent by title or personal familiarity — missing strong internal candidates and defaulting to costly external hiring. They need to search by real skills.",
    stat: "3x",
    statLabel: "faster internal candidate discovery",
  },
  {
    icon: ShieldCheck,
    title: "Promotion Committees",
    subtitle: "Leadership & Decision-Makers",
    desc: "Committees who want promotion decisions grounded in verifiable contribution evidence, not just manager narratives or likeability. They need objective, evidence-based profiles.",
    stat: "60%",
    statLabel: "reduction in evaluation bias",
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#bbb] block mb-3">
            Who It&apos;s For
          </span>
          <h2
            className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#0a0a0a] max-w-xl"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Built For Every Layer Of The Org.
          </h2>
        </div>

        {/* Persona grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[#eee] p-7 transition-all hover:border-[#ddd] hover:shadow-sm"
            >
              <p.icon className="h-5 w-5 text-[#aaa] mb-5" />

              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-0.5" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                {p.title}
              </h3>
              <p className="text-[11px] font-medium text-[#bbb] mb-4 tracking-wide uppercase">
                {p.subtitle}
              </p>

              <p className="text-[13px] leading-[1.65] text-[#666] mb-6">
                {p.desc}
              </p>

              {/* Stat */}
              <div className="border-t border-[#f0f0f0] pt-4">
                <span className="text-2xl font-extrabold text-[#0a0a0a] tracking-tight">
                  {p.stat}
                </span>
                <p className="text-[11px] text-[#999] mt-0.5">{p.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

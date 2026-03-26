"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";
import { Award, LineChart, Shield, Users } from "lucide-react";

const points = [
  {
    title: "Experienced Attorneys",
    body: "Seasoned counsel with deep familiarity across agencies, courts, and evolving policy.",
    icon: Award,
  },
  {
    title: "Personalized Legal Strategy",
    body: "No one-size-fits-all templates—your roadmap is built around your facts and goals.",
    icon: Users,
  },
  {
    title: "High Success Rate",
    body: "Rigorous preparation and attention to detail at every stage of your matter.",
    icon: LineChart,
  },
  {
    title: "Client-Focused Approach",
    body: "Responsive communication and transparency so you always know where you stand.",
    icon: Shield,
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="scroll-mt-24 bg-white py-24 sm:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeSmooth }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Why choose us
          </p>
          <h2
            id="why-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Counsel you can stake your future on
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Immigration decisions shape careers, families, and futures. We
            treat that responsibility with the gravity it deserves.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {points.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: 0.06 * i,
                duration: 0.5,
                ease: easeSmooth,
              }}
              className="flex gap-5 rounded-sm border border-navy/8 bg-white p-8 shadow-[0_20px_50px_-28px_rgba(11,28,44,0.18)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                <p.icon className="h-6 w-6" strokeWidth={1.35} aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/68 sm:text-base">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

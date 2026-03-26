"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";
import {
  BookOpen,
  Briefcase,
  Gavel,
  HeartHandshake,
  IdCard,
  Scale,
} from "lucide-react";

const areas = [
  {
    title: "Family Immigration",
    description:
      "Fiancé visas, marriage-based adjustment, parents, children, and waivers.",
    icon: HeartHandshake,
  },
  {
    title: "Employment-Based Visas",
    description:
      "H-1B, L-1, O-1, PERM, and employer sponsorship tailored to your workforce.",
    icon: Briefcase,
  },
  {
    title: "Green Cards",
    description:
      "Employment and family paths, consular processing, and adjustment of status.",
    icon: IdCard,
  },
  {
    title: "Deportation Defense",
    description:
      "Removal proceedings, bond, relief, and appellate options when it matters most.",
    icon: Gavel,
  },
  {
    title: "Citizenship & Naturalization",
    description:
      "N-400 applications, interview preparation, and complex residency issues.",
    icon: BookOpen,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

export function PracticeAreas() {
  return (
    <section
      id="practice"
      className="relative scroll-mt-24 overflow-hidden bg-gray-soft/60 py-24 sm:py-28"
      aria-labelledby="practice-heading"
    >
      <div
        className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="legal-pattern absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeSmooth }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Practice areas
          </p>
          <h2
            id="practice-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
          >
            Comprehensive immigration counsel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Strategic representation across the full spectrum of U.S.
            immigration matters—from reuniting families to protecting your
            future in the United States.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((a) => (
            <motion.li key={a.title} variants={item}>
              <article className="group glass-light relative h-full rounded-sm p-8 transition-shadow duration-300 hover:shadow-[0_28px_56px_-20px_rgba(11,28,44,0.2)]">
                <div
                  className="pointer-events-none absolute inset-0 rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(201, 169, 92, 0.25)",
                  }}
                  aria-hidden
                />
                <div className="mb-5 inline-flex rounded-sm bg-navy/5 p-3 text-navy transition-all duration-300 group-hover:bg-gold/15 group-hover:text-gold group-hover:shadow-[0_0_24px_-4px_rgba(201,169,92,0.45)]">
                  <a.icon className="h-7 w-7" strokeWidth={1.35} aria-hidden />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/68">
                  {a.description}
                </p>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 flex justify-center text-navy/35"
          aria-hidden
        >
          <Scale className="h-10 w-10" strokeWidth={1} />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
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
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Employment-Based Visas",
    description:
      "H-1B, L-1, O-1, PERM, and employer sponsorship tailored to your workforce.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Green Cards",
    description:
      "Employment and family paths, consular processing, and adjustment of status.",
    icon: IdCard,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Deportation Defense",
    description:
      "Removal proceedings, bond, relief, and appellate options when it matters most.",
    icon: Gavel,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Citizenship & Naturalization",
    description:
      "N-400 applications, interview preparation, and complex residency issues.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=85&w=1600",
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
            <motion.li
              key={a.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: easeSmooth }}
              className="h-full min-h-[360px] sm:min-h-[400px]"
            >
              <article
                className="group glass-light relative h-full min-h-[inherit] overflow-hidden rounded-sm shadow-[0_20px_50px_-28px_rgba(11,28,44,0.18)] transition-[box-shadow] duration-300 hover:shadow-[0_32px_64px_-24px_rgba(11,28,44,0.32)] focus-within:shadow-[0_32px_64px_-24px_rgba(11,28,44,0.32)]"
                tabIndex={0}
                aria-label={`${a.title}. ${a.description}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-[3] rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 2px rgba(201, 169, 92, 0.45)",
                  }}
                  aria-hidden
                />

                <Image
                  src={a.image}
                  alt=""
                  fill
                  className="object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:brightness-[1.05] group-focus-within:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-navy via-navy/75 to-navy/25"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 z-[2] bg-gradient-to-br from-gold/15 via-transparent to-transparent opacity-60 mix-blend-soft-light"
                  aria-hidden
                />

                <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-6 sm:p-8">
                  <div className="mb-4 inline-flex w-fit rounded-sm border border-white/20 bg-white/10 p-2.5 text-gold shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-gold/50 group-hover:bg-gold/20 group-hover:text-white">
                    <a.icon
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      strokeWidth={1.35}
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-white drop-shadow-md sm:text-2xl">
                    {a.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/88 sm:text-[0.9375rem]">
                    {a.description}
                  </p>
                </div>
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

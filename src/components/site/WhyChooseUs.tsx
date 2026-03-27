"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";
import { Award, LineChart, Shield, Users } from "lucide-react";

const points = [
  {
    title: "Experienced Attorneys",
    body: "Seasoned counsel with deep familiarity across agencies, courts, and evolving policy.",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Personalized Legal Strategy",
    body: "No one-size-fits-all templates—your roadmap is built around your facts and goals.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "High Success Rate",
    body: "Rigorous preparation and attention to detail at every stage of your matter.",
    icon: LineChart,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=85&w=1600",
  },
  {
    title: "Client-Focused Approach",
    body: "Responsive communication and transparency so you always know where you stand.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=85&w=1600",
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

        <ul className="mt-16 grid list-none gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                y: -6,
                transition: { duration: 0.35, ease: easeSmooth },
              }}
              transition={{
                delay: 0.06 * i,
                duration: 0.5,
                ease: easeSmooth,
              }}
              className="min-h-[320px] sm:min-h-[360px]"
            >
              <article
                className="group glass-light relative h-full min-h-[inherit] overflow-hidden rounded-sm border border-navy/10 shadow-[0_20px_50px_-28px_rgba(11,28,44,0.22)] transition-[box-shadow] duration-300 hover:shadow-[0_32px_64px_-24px_rgba(11,28,44,0.3)] focus-within:shadow-[0_32px_64px_-24px_rgba(11,28,44,0.3)]"
                tabIndex={0}
                aria-label={`${p.title}. ${p.body}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-[3] rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 2px rgba(201, 169, 92, 0.45)",
                  }}
                  aria-hidden
                />

                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:brightness-[1.05] group-focus-within:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
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
                    <p.icon
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      strokeWidth={1.35}
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-white drop-shadow-md sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/88 sm:text-[0.9375rem]">
                    {p.body}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

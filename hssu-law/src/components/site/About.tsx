"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";

const aboutImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";

const aboutContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-white py-24 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={aboutContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              About the firm
            </motion.p>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
            >
              Angela W Hssu & Associates
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-5 h-px w-14 bg-gold/80"
              aria-hidden
            />
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg"
            >
              We are a dedicated immigration law practice based in the heart of
              downtown Los Angeles. Our team combines decades of collective
              experience with a meticulous, client-first approach—helping
              individuals, families, and employers navigate complex U.S.
              immigration rules with clarity and confidence.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-navy/75 sm:text-lg"
            >
              From family petitions to employment-based visas and removal
              defense, we build strategies grounded in law, precedent, and the
              unique facts of your case. You receive direct communication,
              honest assessments, and advocacy shaped around your long-term
              goals.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: easeSmooth }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-[0_32px_64px_-24px_rgba(11,28,44,0.35)] ring-1 ring-navy/8">
              <Image
                src={aboutImage}
                alt="Professional law office interior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-navy/25 to-transparent"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

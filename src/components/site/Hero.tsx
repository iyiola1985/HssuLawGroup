"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeSmooth } from "@/lib/motion";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2400";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.35]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-navy"
      aria-label="Introduction"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 -z-0"
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/88 via-navy/82 to-navy/95"
          aria-hidden
        />
        <div className="legal-pattern absolute inset-0" aria-hidden />
      </motion.div>

      {/* Subtle world-map hint (SVG) */}
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] opacity-[0.07]"
        aria-hidden
      >
        <svg viewBox="0 0 200 100" className="h-full w-full text-gold">
          <ellipse
            cx="100"
            cy="50"
            rx="95"
            ry="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
          />
          <path
            d="M20 45 Q60 30 100 50 T180 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
          />
          <path
            d="M25 58 Q70 72 120 55 T175 62"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.35"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: easeSmooth }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold/95">
            Los Angeles · Immigration Law
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.1]">
            Trusted Immigration Law Experts
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Guiding Individuals & Families Through U.S. Immigration Law
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38, ease: easeSmooth }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="#contact"
            className="jq-glow inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-navy shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
          <Link
            href="#about"
            className="glass-dark inline-flex items-center justify-center rounded-sm px-8 py-4 text-center text-sm font-semibold tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-16 hidden max-w-md glass-dark rounded-sm p-6 sm:block"
        >
          <p className="font-serif text-lg text-white/95">
            Experience, discretion, and relentless advocacy—tailored to your
            immigration goals.
          </p>
          <div className="mt-4 h-px w-16 bg-gold/70" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}

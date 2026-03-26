"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";
import { MapPin } from "lucide-react";

const addressLines = [
  "Angela W Hssu & Associates Immigration Law",
  "355 S Grand Ave, Suite 2450",
  "Los Angeles, CA 90071",
];

const mapsEmbedSrc =
  "https://www.google.com/maps?q=355+S+Grand+Ave,+Suite+2450,+Los+Angeles,+CA+90071&output=embed";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-navy py-24 text-white sm:py-28"
      aria-labelledby="contact-heading"
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
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Schedule a consultation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Share a brief summary of your matter. We will respond as soon as
            possible. This form does not create an attorney–client relationship.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: easeSmooth }}
            className="glass-dark rounded-sm p-8 sm:p-10"
          >
            <div className="flex gap-4">
              <MapPin
                className="mt-0.5 h-6 w-6 shrink-0 text-gold"
                strokeWidth={1.35}
                aria-hidden
              />
              <address className="not-italic text-sm leading-relaxed text-white/88 sm:text-base">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm ring-1 ring-white/10">
              <iframe
                title="Office location: 355 S Grand Ave, Los Angeles"
                src={mapsEmbedSrc}
                className="h-[280px] w-full grayscale-[20%] contrast-[1.05] sm:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: 0.08,
              duration: 0.5,
              ease: easeSmooth,
            }}
          >
            {sent ? (
              <div className="glass-dark flex min-h-[320px] flex-col items-center justify-center rounded-sm p-10 text-center">
                <p className="font-serif text-xl text-white">
                  Thank you for reaching out.
                </p>
                <p className="mt-3 max-w-sm text-sm text-white/75">
                  Your message has been noted. Please call our office if your
                  matter is urgent.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-dark space-y-6 rounded-sm p-8 sm:p-10"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-gold/90"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-gold/40 transition-[box-shadow,border-color] focus:border-gold/50 focus:ring-2"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-gold/90"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-gold/40 transition-[box-shadow,border-color] focus:border-gold/50 focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gold/90"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-gold/40 transition-[box-shadow,border-color] focus:border-gold/50 focus:ring-2"
                    placeholder="Briefly describe your immigration matter…"
                  />
                </div>
                <button
                  type="submit"
                  className="jq-glow w-full rounded-sm bg-gold py-4 text-sm font-semibold tracking-wide text-navy transition-transform hover:-translate-y-0.5"
                >
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="site-nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/0"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="font-serif text-lg tracking-tight sm:text-xl"
        >
          <span className="nav-brand-strong font-semibold">Angela W Hssu</span>
          <span className="nav-brand-amp"> & </span>
          <span className="nav-brand-rest">Associates</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="jq-glow rounded-sm border border-gold/80 bg-navy px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-navy-light"
          >
            Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="nav-menu-btn inline-flex rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: easeSmooth }}
            className="overflow-hidden border-t border-navy/10 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-navy/85 hover:bg-navy/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-sm bg-navy py-3 text-center text-sm font-semibold text-white"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

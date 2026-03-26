import Link from "next/link";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071420] py-14 text-white/75">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-lg font-semibold text-white">
            Angela W Hssu & Associates
          </p>
          <p className="mt-1 text-sm text-gold/90">Immigration Law</p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            355 S Grand Ave, Suite 2450
            <br />
            Los Angeles, CA 90071
          </address>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
            Quick links
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-5 pt-8 sm:px-8">
        <p className="text-center text-xs text-white/45">
          © {new Date().getFullYear()} Angela W Hssu & Associates. All rights
          reserved. Attorney advertising. Prior results do not guarantee a
          similar outcome.
        </p>
      </div>
    </footer>
  );
}

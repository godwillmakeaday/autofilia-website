import Link from "next/link";
import { navLinks } from "@/lib/siteData";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/10 bg-[#090806] py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="display-title text-4xl font-semibold text-[#fff4df]">Autofilia</p>
          <p className="mt-4 max-w-xl leading-8 text-smoke">
            For the love of cars before, during, and beyond ownership. A premium automotive affection platform for dreamers, owners, former owners, and observers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-softgold">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-page mt-10 gold-line" />
      <p className="container-page mt-8 text-xs uppercase tracking-[0.24em] text-muted">Autofilia — Automotive Affection, not automotive arrogance.</p>
    </footer>
  );
}

import Link from "next/link";
import { navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-4xl text-pearl">Autofilia</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-smoke/70">
            For the love of cars before, during, and beyond ownership. A cultural home for the dreamer, the owner, the former owner, and the person still learning the language of machines.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-smoke/80 transition hover:border-gold/40 hover:text-gold">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

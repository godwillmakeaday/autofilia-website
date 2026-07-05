import Link from "next/link";
import { navLinks } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-4" aria-label="Autofilia home">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/35 bg-gold/10 font-display text-xl font-black text-gold shadow-glow transition group-hover:bg-gold group-hover:text-black">
            A
          </span>
          <span>
            <span className="block font-display text-3xl tracking-wide text-pearl">Autofilia</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.42em] text-smoke/70">For the Love of Cars</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-smoke/75 transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="list-none rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] text-gold marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-4 w-72 rounded-[2rem] border border-white/10 bg-[#090909] p-4 shadow-panel">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-2xl px-4 py-3 text-base font-semibold text-pearl/85 transition hover:bg-white/[0.05] hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

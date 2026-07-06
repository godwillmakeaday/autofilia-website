"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/siteData";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-ink/86 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-lg font-black text-gold">A</span>
          <span>
            <span className="display-title block text-2xl font-semibold text-[#fff4df]">Autofilia</span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-muted sm:block">Automotive Affection</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-smoke transition hover:text-softgold">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-softgold xl:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/10 bg-[#0b0a08] xl:hidden">
          <nav className="container-page grid gap-2 py-5 sm:grid-cols-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-gold/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-smoke hover:border-gold/40 hover:text-softgold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

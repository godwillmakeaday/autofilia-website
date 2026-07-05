import Link from "next/link";

const links = [
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#categories", label: "Car Categories" },
  { href: "/#garage", label: "Dream Garage" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "mailto:hello@autofilia.example", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="font-display text-3xl text-smoke">Autofilia</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
            Autofilia — for the love of cars before, during, and beyond ownership.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-white/60 sm:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brass">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const navItems = [
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#categories", label: "Car Categories" },
  { href: "/#garage", label: "Dream Garage" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass/40 bg-brass/10 text-sm font-black text-brass shadow-glow">
            A
          </span>
          <span>
            <span className="block font-display text-xl tracking-wide text-smoke">Autofilia</span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-white/45">For the love of cars</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brass">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#community" className="hidden rounded-full border border-brass/35 px-4 py-2 text-sm font-semibold text-brass transition hover:bg-brass hover:text-asphalt sm:inline-flex">
          Join the Circle
        </Link>
      </div>
    </header>
  );
}

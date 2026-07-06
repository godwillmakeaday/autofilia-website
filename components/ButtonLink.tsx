import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold/60";
  const styles = variant === "primary"
    ? "bg-gold text-ink hover:bg-softgold"
    : "border border-gold/35 text-softgold hover:border-gold hover:bg-gold/10";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

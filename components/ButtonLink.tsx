import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
};

export default function ButtonLink({ href, children, variant = "solid" }: Props) {
  const classes = variant === "solid"
    ? "bg-gold text-black hover:bg-pearl"
    : "border border-white/15 bg-white/[0.02] text-pearl hover:border-gold/40 hover:text-gold";

  return (
    <Link href={href} className={`inline-flex min-h-14 items-center justify-center rounded-full px-8 text-center text-base font-black transition sm:min-w-56 ${classes}`}>
      {children}
    </Link>
  );
}

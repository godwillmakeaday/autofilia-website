import Link from "next/link";

export function FeatureCard({ title, description, eyebrow, href }: { title: string; description: string; eyebrow?: string; href?: string }) {
  const content = (
    <div className="card-surface group h-full rounded-[1.6rem] p-6 transition hover:-translate-y-1 hover:border-gold/45">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold/90">{eyebrow}</p> : null}
      <h3 className="editorial-title text-2xl font-semibold text-[#fff1d8]">{title}</h3>
      <p className="mt-4 leading-7 text-smoke">{description}</p>
      {href ? <p className="mt-5 text-sm font-semibold text-softgold group-hover:text-gold">Open →</p> : null}
    </div>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

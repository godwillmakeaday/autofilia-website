import Link from "next/link";
import Card from "./Card";

type Props = {
  title: string;
  slug: string;
  label: string;
  excerpt: string;
};

export default function ArticleCard({ title, slug, label, excerpt }: Props) {
  return (
    <Link href={`/articles/${slug}`} className="group block">
      <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:border-gold/40">
        <span className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-gold">{label}</span>
        <h2 className="mt-7 font-display text-3xl leading-tight text-pearl sm:text-4xl">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-smoke/70">{excerpt}</p>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-gold">Read article</p>
      </Card>
    </Link>
  );
}

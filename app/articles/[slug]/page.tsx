import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/siteData";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "Article — Autofilia" };
  return {
    title: `${article.title} — Autofilia`,
    description: article.excerpt
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/articles" className="text-sm font-semibold text-gold hover:text-softgold">← Back to Articles</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.28em] text-gold">{article.category} · {article.readingTime}</p>
        <h1 className="display-title mt-5 text-5xl font-semibold leading-[0.98] text-[#fff4df] sm:text-6xl">{article.title}</h1>
        <p className="mt-6 text-xl leading-9 text-smoke">{article.intro}</p>
        <div className="gold-line my-10" />
        <div className="article-prose">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <h2>Closing reflection</h2>
          <p>{article.closing}</p>
        </div>
        <div className="mt-12 rounded-[1.7rem] border border-gold/20 bg-gold/10 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Related Autofilia roads</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {article.related.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-gold/25 px-4 py-2 text-sm font-semibold text-softgold hover:bg-gold/10">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

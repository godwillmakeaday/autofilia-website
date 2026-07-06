import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articleCategories, articles, extraArticleCards } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Articles — Autofilia",
  description: "Reflective automotive affection essays on first car dreams, SUV culture, African roads, luxury, status, ownership, and memory."
};

export default function ArticlesPage() {
  const allCards = [
    ...articles.map((article) => ({ ...article, href: `/articles/${article.slug}` })),
    ...extraArticleCards
  ];

  return (
    <>
      <PageHero eyebrow="Editorial" title="Articles" description="Essays for people who want to understand cars not only as machines, but as freedom, status, memory, family infrastructure, design, and responsibility." />
      <section className="container-page py-16">
        <div className="mb-10 flex flex-wrap gap-3">
          {articleCategories.map((category) => (
            <span key={category} className="rounded-full border border-gold/20 px-4 py-2 text-sm font-semibold text-smoke">{category}</span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allCards.map((article) => (
            <Link key={article.title} href={article.href} className="card-surface group rounded-[1.6rem] p-6 transition hover:-translate-y-1 hover:border-gold/45">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{article.category}</p>
              <h2 className="editorial-title mt-4 text-2xl font-semibold text-[#fff1d8]">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-smoke">{article.excerpt}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">{article.readingTime}</p>
              <p className="mt-5 text-sm font-semibold text-softgold group-hover:text-gold">Open →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

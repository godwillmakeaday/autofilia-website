import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { articleBodies } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(articleBodies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBodies[slug];
  if (!article) {
    return {
      title: "Article Not Found — Autofilia"
    };
  }
  return {
    title: `${article.title} — Autofilia`,
    description: article.paragraphs[0]
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articleBodies[slug];

  if (!article) notFound();

  return (
    <article className="section-pad">
      <div className="mx-auto max-w-4xl">
        <Link href="/articles" className="mb-10 inline-flex text-sm font-black uppercase tracking-[0.3em] text-gold transition hover:text-pearl">
          ← Back to Articles
        </Link>
        <SectionHeader kicker={article.label} title={article.title} intro={article.paragraphs[0]} />
        <Card className="mt-12">
          <div className="space-y-8">
            {article.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-xl leading-10 text-smoke/78 sm:text-2xl sm:leading-[3rem]">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </article>
  );
}

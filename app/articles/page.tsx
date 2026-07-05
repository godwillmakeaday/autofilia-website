import { SectionHeader } from "@/components/SectionHeader";
import { articles, editorialPillars } from "@/data/site";

export const metadata = {
  title: "Autofilia Articles",
  description: "Car culture essays and guides on car beauty, car types, SUVs, first car dreams, African roads, and automotive memory."
};

export default function ArticlesPage() {
  return (
    <main>
      <section className="py-16 lg:py-24">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Articles"
            title="The Autofilia Editorial Desk"
            description="A starter archive for car writing that carries both information and feeling: car types, dreams, SUVs, ownership lessons, luxury signals, African roads, and automotive memory."
            align="center"
          />
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {editorialPillars.map((pillar) => (
              <span key={pillar} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-pad grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.title} className="soft-card flex min-h-[310px] flex-col justify-between p-6 transition hover:-translate-y-1 hover:border-brass/40">
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brass/80">{article.category}</p>
                  <span className="text-xs text-white/35">0{index + 1}</span>
                </div>
                <h2 className="font-display text-3xl leading-tight text-smoke">{article.title}</h2>
                <p className="mt-5 text-sm leading-7 text-white/60">{article.excerpt}</p>
              </div>
              <p className="mt-8 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.24em] text-white/35">
                Future essay placeholder
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

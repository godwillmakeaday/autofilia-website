import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import SectionHeader from "@/components/SectionHeader";
import { articleCards } from "@/data/site";

export const metadata: Metadata = {
  title: "Autofilia Articles — Car Culture, First Car Dreams, SUV Culture, and Car Meaning",
  description: "Read Autofilia essays on first car dreams, SUV culture, car types, luxury, status, freedom, and the dignity of loving cars before ownership."
};

export default function ArticlesPage() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Articles"
          title="Car culture with feeling, structure, and intelligence."
          intro="Autofilia is not a news race. It is a place for deeper essays about why cars matter to people before ownership, during ownership, and after ownership."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articleCards.map((article) => <ArticleCard key={article.slug} {...article} />)}
        </div>
      </div>
    </section>
  );
}

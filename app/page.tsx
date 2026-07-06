import { Metadata } from "next";
import Link from "next/link";
import { HeroPanel } from "@/components/HeroPanel";
import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";
import { ButtonLink } from "@/components/ButtonLink";
import { articles, carMeanings, dreamTypes } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Autofilia — For the Love of Cars Before, During, and Beyond Ownership",
  description: "Autofilia is a premium automotive affection platform for people who love cars before they own them, while they own them, and even after they outgrow them."
};

export default function HomePage() {
  return (
    <>
      <HeroPanel />

      <section className="container-page py-16">
        <div className="card-surface overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Start here</p>
              <h2 className="editorial-title mt-4 text-4xl font-semibold text-[#fff4df]">You are welcome here whether you own a car or not.</h2>
            </div>
            <div>
              <p className="leading-8 text-smoke">Autofilia is for the person who admires cars from a distance, saves toward a first car, owns one with pride, or remembers a car that shaped a season of life. Desire is not shameful. It can be the beginning of taste.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/start-here">Enter the journey</ButtonLink>
                <ButtonLink href="/manifesto" variant="secondary">Read the Manifesto</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeader
          eyebrow="Autofilia tools"
          title="Useful beauty, not just beautiful pages."
          description="The next Autofilia is not only an essay platform. It helps beginners think clearly about car desire, type, meaning, and ownership readiness."
        />
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard title="Dream Garage Builder" eyebrow="Tool" description="Build an emotional garage: practical, family, luxury, speed, African road, electric future, collector, and first car dreams." href="/dream-garage-builder" />
          <FeatureCard title="Car Type Finder" eyebrow="Tool" description="Answer simple questions and discover which car types fit your taste, roads, purpose, and imagination." href="/car-type-finder" />
          <FeatureCard title="Car Meaning Library" eyebrow="Authority" description="Learn what sedans, SUVs, hatchbacks, coupes, pickups, luxury cars, and EVs mean beyond mechanics." href="/car-meaning-library" />
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeader
          eyebrow="The dream garage"
          title="Every dream car is also a dream of a life."
          description="Autofilia treats the garage as imagination before it becomes ownership. These dream types help people name what they actually desire."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dreamTypes.slice(0, 8).map((dream) => (
            <div key={dream.title} className="card-surface rounded-[1.5rem] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{dream.feeling}</p>
              <h3 className="editorial-title mt-3 text-2xl font-semibold text-[#fff1d8]">{dream.title}</h3>
              <p className="mt-3 text-sm leading-6 text-smoke">{dream.why}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/garage" variant="secondary">Explore the Dream Garage</ButtonLink>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="African roads"
              title="Autofilia’s unfair advantage is an African-born reading of car culture."
              description="On many African roads, car desire is shaped by potholes, dust, family movement, fuel reality, social arrival, used-car markets, and the need for practical beauty."
            />
            <ButtonLink href="/african-roads">Read African Roads</ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Why SUVs mean something different on African roads",
              "The car as family infrastructure",
              "Used cars and aspiration",
              "Practical beauty for real roads"
            ].map((item) => (
              <div key={item} className="card-surface rounded-[1.4rem] p-5">
                <h3 className="text-lg font-bold text-softgold">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">A culturally aware Autofilia theme for deeper articles and tools.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeader eyebrow="Latest articles" title="Automotive affection, written with depth." />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.slice(0, 6).map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="card-surface group rounded-[1.6rem] p-6 transition hover:-translate-y-1 hover:border-gold/45">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{article.category}</p>
              <h3 className="editorial-title mt-4 text-2xl font-semibold text-[#fff1d8]">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-smoke">{article.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-softgold group-hover:text-gold">Read article →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="card-surface rounded-[2rem] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Join the Autofilia Circle</p>
              <h2 className="editorial-title mt-4 text-4xl font-semibold text-[#fff4df]">For car lovers, future owners, owners, and people who still remember the cars that shaped them.</h2>
            </div>
            <div>
              <p className="leading-8 text-smoke">A future newsletter can carry essays, car-type explainers, first-car wisdom, African road notes, and dream garage prompts. For now, this is a visual placeholder ready for connection later.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input aria-label="Email address" placeholder="your@email.com" className="min-h-12 flex-1 rounded-full border border-gold/20 bg-black/30 px-5 text-sm text-softgold outline-none placeholder:text-muted" />
                <button className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink" type="button">Join Circle</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

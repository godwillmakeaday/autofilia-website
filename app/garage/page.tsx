import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { dreamTypes } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "The Dream Garage — Autofilia",
  description: "A premium editorial page for the practical dream, family dream, luxury dream, speed dream, African road dream, electric future dream, collector dream, and first car dream."
};

export default function GaragePage() {
  return (
    <>
      <PageHero eyebrow="Dream Garage" title="The Dream Garage" description="Every dream car is also a dream of a life. The Autofilia garage is not only about what you can buy today. It is about what your taste, roads, memory, status, and future are trying to say." />
      <section className="container-page py-16">
        <div className="grid gap-6">
          {dreamTypes.map((dream, index) => (
            <article key={dream.title} className="card-surface overflow-hidden rounded-[1.8rem] p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[130px_1fr_0.85fr] lg:items-start">
                <div className="display-title text-6xl font-semibold text-gold/60">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{dream.feeling}</p>
                  <h2 className="editorial-title mt-3 text-4xl font-semibold text-[#fff1d8]">{dream.title}</h2>
                  <p className="mt-4 leading-8 text-smoke">{dream.why}</p>
                </div>
                <div className="rounded-3xl border border-gold/15 bg-black/25 p-5">
                  <p className="text-sm leading-7 text-muted"><span className="font-bold text-softgold">Ideal car type:</span> {dream.ideal}</p>
                  <p className="mt-4 text-sm leading-7 text-muted"><span className="font-bold text-softgold">Beginner note:</span> {dream.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/dream-garage-builder">Build Your Dream Garage</ButtonLink>
        </div>
      </section>
    </>
  );
}

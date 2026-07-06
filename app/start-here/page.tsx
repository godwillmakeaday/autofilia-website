import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Start Here — Autofilia",
  description: "Begin the Autofilia journey. You are welcome here whether you own a car or not."
};

const stages = [
  ["Admiration", "You notice cars, shapes, dashboards, ride height, brands, and road presence before you can fully explain why."],
  ["Learning", "You begin to understand types, costs, engines, maintenance, documents, fuel, roads, and ownership language."],
  ["Desire", "You allow yourself to want a car without pretending that wanting is the same thing as readiness."],
  ["Taste", "Your desire becomes more intelligent. You stop wanting everything and start recognizing what fits your life."],
  ["Selection", "You compare options, budget honestly, inspect wisely, and ask better questions before buying."],
  ["Ownership", "The car becomes responsibility: fuel, service, safety, parking, documents, and respect for others."],
  ["Care", "Maintenance becomes a form of respect for the machine and the people it carries."],
  ["Upgrade", "You outgrow some cars, but the wise owner upgrades without despising the earlier chapter."],
  ["Memory", "Some cars leave the garage but stay in personal history as symbols of a season." ]
];

export default function StartHerePage() {
  return (
    <>
      <PageHero eyebrow="Begin" title="Start Here" description="You are welcome here whether you own a car or not. Autofilia begins where car affection begins: in attention, desire, curiosity, and imagination." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="The admirer" description="The person who sees a parked car and pauses, not because they own it, but because something about its shape speaks." />
          <FeatureCard title="The future owner" description="The person saving, comparing, watching reviews, learning types, and preparing for a first honest purchase." />
          <FeatureCard title="The owner" description="The person learning that pride, maintenance, road discipline, and responsibility are part of car love." />
          <FeatureCard title="The former owner" description="The person who sold a car but still remembers the drives, seasons, mistakes, and memories it carried." />
          <FeatureCard title="The beginner" description="The person who wants to learn without shame, confusion, or the arrogance of experts." />
          <FeatureCard title="The cultural observer" description="The person who understands cars as design, status, family infrastructure, memory, and movement." />
        </div>
      </section>
      <section className="container-page py-16">
        <div className="card-surface rounded-[2rem] p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">The Autofilia Journey</p>
          <h2 className="editorial-title mt-4 text-4xl font-semibold text-[#fff4df]">From admiration to memory.</h2>
          <div className="mt-8 grid gap-4">
            {stages.map(([title, body], index) => (
              <div key={title} className="grid gap-4 rounded-2xl border border-gold/15 bg-black/25 p-5 sm:grid-cols-[70px_1fr] sm:items-start">
                <span className="text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold text-softgold">{title}</h3>
                  <p className="mt-2 leading-7 text-smoke">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/car-type-finder">Find Your Car Type</ButtonLink>
            <ButtonLink href="/dream-garage-builder" variant="secondary">Build a Dream Garage</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Life With the Machine — Autofilia",
  description: "Ownership lessons for people who already own cars: pride without arrogance, maintenance, fuel reality, road discipline, and responsibility."
};

const cards = [
  ["Pride without arrogance", "Enjoy your car without using it to humiliate others. A beautiful machine should not make its owner smaller in character."],
  ["Maintenance as respect", "Servicing, cleaning, inspection, and careful use are not boring duties. They are how affection becomes responsible."],
  ["Fuel reality", "Fuel cost is part of ownership truth. A car that constantly threatens your budget can turn love into anxiety."],
  ["Road discipline", "Signaling, patience, parking properly, and respecting pedestrians are part of mature car love."],
  ["Upgrade decisions", "Upgrade because your life, work, family, roads, or finances make sense for it, not because pressure is louder than wisdom."],
  ["The car as responsibility", "A car carries lives. It must not become a toy for carelessness, ego, or road aggression."],
  ["Owning without humiliating others", "The person walking today may own tomorrow. The person driving today may lose tomorrow. Respect must remain stable."],
  ["Moral line", "Love the machine. Respect people more."]
];

export default function DuringOwnershipPage() {
  return (
    <>
      <PageHero eyebrow="During ownership" title="Life With the Machine" description="For people who already own cars. Ownership is not only possession; it is care, discipline, road ethics, and maturity." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
      </section>
    </>
  );
}

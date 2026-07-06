import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Before the Keys — Autofilia",
  description: "A page for people who love cars before owning one. Desire is not shameful; it can be the beginning of taste."
};

const cards = [
  ["Desire is not shameful", "Wanting a car before owning one does not make you fake. It means imagination has reached the road before your finances have."],
  ["Learning before buying", "Study car types, maintenance costs, fuel reality, documents, used-car risks, and ownership responsibilities before pressure chooses for you."],
  ["Saving with taste", "Savings become wiser when they are guided by life reality, not only by badge desire or social comparison."],
  ["Watching reviews intelligently", "Do not watch only for excitement. Watch for reliability, ownership cost, road fit, comfort, and real complaints."],
  ["Understanding car types", "A sedan, SUV, hatchback, pickup, coupe, or crossover is not just a shape. It is a life choice."],
  ["First car imagination", "The first car should serve your life, not punish it. It should give mobility without destroying your peace."],
  ["The danger of pressure", "A car bought to impress can become an expensive public costume. Autofilia respects aspiration, but it refuses foolish pressure."],
  ["The dignity of preparation", "Preparation is part of affection. The future owner who studies now is already honoring the car they will own later."]
];

export default function BeforeOwnershipPage() {
  return (
    <>
      <PageHero eyebrow="Before ownership" title="Before the Keys" description="For people who do not yet own cars but already love them. Desire is not shameful. It can be the beginning of taste, preparation, and dignity." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/car-type-finder">Use Car Type Finder</ButtonLink>
          <ButtonLink href="/dream-garage-builder" variant="secondary">Build Dream Garage</ButtonLink>
          <ButtonLink href="/start-here" variant="secondary">Start Here</ButtonLink>
        </div>
      </section>
    </>
  );
}

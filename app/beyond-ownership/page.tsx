import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "After the Drive — Autofilia",
  description: "For people who once owned cars, sold cars, lost cars, inherited cars, or remember cars from earlier seasons of life."
};

const cards = [
  ["The first car as memory", "The first car can remain powerful because it witnessed the beginning of personal movement."],
  ["The family car", "A family car is not just a vehicle. It is school runs, emergencies, ceremonies, visits, arguments, laughter, and belonging."],
  ["Cars we sold but did not forget", "Some cars leave because life changes, but memory keeps a copy of their sound, smell, dashboard, and season."],
  ["The father’s car", "A father’s car can become authority, protection, childhood memory, and family mythology."],
  ["The mother’s car", "A mother’s car can become care, errands, school movement, hospital visits, and invisible sacrifice."],
  ["The business car", "Some cars mark the season when work became serious, clients became reachable, and income became visible."],
  ["When a car marks a season", "A car can become the timestamp of a life chapter: courtship, youth, family, struggle, breakthrough, or grief."],
  ["Automotive memory", "Autofilia treats car memory as personal history, not childish nostalgia."]
];

export default function BeyondOwnershipPage() {
  return (
    <>
      <PageHero eyebrow="Beyond ownership" title="After the Drive" description="For people who once owned cars, sold cars, lost cars, inherited cars, or remember cars from earlier seasons of life. Some cars leave the garage but stay in history." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
      </section>
    </>
  );
}

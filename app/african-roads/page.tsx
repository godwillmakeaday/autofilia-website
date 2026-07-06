import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "African Roads — Autofilia",
  description: "Autofilia’s African-born automotive perspective: SUVs, road conditions, family infrastructure, fuel cost, used cars, and practical beauty."
};

const cards = [
  ["Why SUVs mean something different", "On many African roads, height, clearance, strength, and visibility can feel like emotional insurance, not only status."],
  ["The car as family infrastructure", "A car may serve a whole household: school runs, hospital visits, ceremonies, shopping, business, and emergency movement."],
  ["Road conditions and desire", "Potholes, dust, rain, steep roads, poor drainage, and long distances shape the cars people admire."],
  ["Fuel cost and social reality", "A beautiful car can become stressful when fuel reality is ignored. Aspiration must meet operating cost."],
  ["Used cars and aspiration", "Used imports open mobility but bring risks: mileage uncertainty, hidden faults, parts pressure, and documentation questions."],
  ["The first car in a Nigerian household", "A first car can shift family logistics, social perception, and personal authority in powerful ways."],
  ["Cars, respect, and arrival", "In many communities, arrival by car is read socially before the visitor speaks. That reading can help or mislead."],
  ["Practical beauty", "The most beautiful car for real roads is the one that survives use, heat, bad roads, maintenance, and family obligation."]
];

export default function AfricanRoadsPage() {
  return (
    <>
      <PageHero eyebrow="African perspective" title="African Roads" description="Autofilia’s unfair advantage is an African-born reading of car culture: roads, fuel, family, used cars, arrival, dignity, and practical beauty." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, description]) => <FeatureCard key={title} title={title} description={description} />)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/articles/african-roads-and-suvs">Read SUV Essay</ButtonLink>
          <ButtonLink href="/articles/the-car-as-family-infrastructure" variant="secondary">Family Infrastructure</ButtonLink>
        </div>
      </section>
    </>
  );
}

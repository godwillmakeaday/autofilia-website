import type { Metadata } from "next";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Autofilia Manifesto — You Do Not Need to Own a Car Before You Love Cars",
  description: "The Autofilia manifesto gives dignity to car love before ownership, during ownership, and beyond ownership."
};

const points = [
  "You do not need to own a car before you love cars.",
  "Car love can begin with admiration, curiosity, observation, and desire.",
  "Desire is not shameful when it becomes attention, learning, discipline, and taste.",
  "Ownership is only one chapter of automotive affection.",
  "Cars can represent beauty, freedom, design, ambition, memory, engineering, status, and movement.",
  "Autofilia gives language to the emotional, aesthetic, practical, and cultural meanings of cars."
];

export default function ManifestoPage() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="The Manifesto"
          title="You do not need to own a car before you love cars."
          intro="Autofilia is built for the person whose affection began before the keys arrived. The love is not fake because the car is not yet owned. The dream is already a school of taste."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <Card key={point}>
              <div className="mb-7 h-2 w-20 rounded-full bg-gold" />
              <p className="text-xl leading-9 text-smoke/78">{point}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-10 border-gold/25 bg-gold/[0.06]">
          <p className="border-l-4 border-gold pl-7 font-display text-4xl leading-tight text-pearl sm:text-5xl">
            Autofilia is not a confession of possession. It is a confession of attention.
          </p>
        </Card>
      </div>
    </section>
  );
}

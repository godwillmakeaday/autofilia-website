import type { Metadata } from "next";
import Card from "@/components/Card";
import CarSilhouette from "@/components/CarSilhouette";
import SectionHeader from "@/components/SectionHeader";
import { garageDreams } from "@/data/site";

export const metadata: Metadata = {
  title: "The Dream Garage — Autofilia",
  description: "Autofilia's Dream Garage helps people organize the practical, luxury, family, speed, electric, and African road dreams behind car desire."
};

export default function GaragePage() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <SectionHeader
            kicker="Dream Garage"
            title="A mental showroom before the real keys arrive."
            intro="The Dream Garage is a place for people to organize the kinds of cars they admire before, during, and beyond ownership."
          />
          <CarSilhouette />
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {garageDreams.map((dream) => (
            <Card key={dream.title}>
              <h2 className="font-display text-5xl text-pearl">{dream.title}</h2>
              <div className="mt-8 grid gap-5 text-xl leading-9">
                <p className="text-smoke/78"><span className="font-bold text-gold">Emotional meaning: </span>{dream.feeling}</p>
                <p className="text-smoke/78"><span className="font-bold text-gold">Ideal car type: </span>{dream.type}</p>
                <p className="text-smoke/78"><span className="font-bold text-gold">Why people desire it: </span>{dream.desire}</p>
                <p className="text-smoke/78"><span className="font-bold text-gold">Beginner note: </span>{dream.beginner}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

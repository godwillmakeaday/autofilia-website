import type { Metadata } from "next";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { categories } from "@/data/site";

export const metadata: Metadata = {
  title: "Car Categories Explained — Autofilia",
  description: "Beginner-friendly explanations of sedans, SUVs, hatchbacks, coupes, wagons, pickup trucks, sports cars, luxury cars, EVs, and crossovers."
};

export default function CarCategoriesPage() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Car Categories Explained"
          title="Know the shape before you chase the badge."
          intro="A beginner should never feel embarrassed for asking what a car is called. Every category carries a practical meaning and an emotional signal."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <Card key={category.name}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display text-5xl text-pearl">{category.name}</h2>
                <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-black text-gold">{category.feeling}</span>
              </div>
              <div className="mt-8 grid gap-6">
                <p className="text-xl leading-9 text-pearl/86"><span className="font-bold text-gold">What it is: </span>{category.definition}</p>
                <p className="text-xl leading-9 text-smoke/72"><span className="font-bold text-gold">Who may love it: </span>{category.person}</p>
                <p className="text-xl leading-9 text-smoke/72"><span className="font-bold text-gold">Beginner note: </span>{category.beginner}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

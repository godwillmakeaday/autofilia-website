import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { carMeanings } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Car Categories Explained — Autofilia",
  description: "Beginner-friendly explanations of sedans, SUVs, hatchbacks, coupes, wagons, pickup trucks, sports cars, luxury cars, EVs, and crossovers."
};

export default function CarCategoriesPage() {
  return (
    <>
      <PageHero eyebrow="Beginner clarity" title="Car Categories Explained" description="No shame. No gatekeeping. This page explains major car types in simple language, with what they are, who may love them, what feeling they represent, and what beginners should know." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {carMeanings.map((car) => (
            <article key={car.slug} id={car.slug} className="card-surface rounded-[1.7rem] p-6 scroll-mt-28">
              <h2 className="editorial-title text-3xl font-semibold text-[#fff1d8]">{car.name}</h2>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">{car.equation}</p>
              <p className="mt-5 leading-7 text-smoke"><span className="font-bold text-softgold">What it is:</span> {car.practical}</p>
              <p className="mt-3 leading-7 text-smoke"><span className="font-bold text-softgold">Who may love it:</span> {car.who}</p>
              <p className="mt-3 leading-7 text-smoke"><span className="font-bold text-softgold">What feeling it represents:</span> {car.emotional}</p>
              <p className="mt-3 leading-7 text-muted"><span className="font-bold text-softgold">Beginner note:</span> {car.beginner}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { carMeanings } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Car Meaning Library — Autofilia",
  description: "Car types explained not just by mechanics, but by meaning: SUVs, sedans, hatchbacks, pickups, luxury cars, EVs, and more."
};

export default function CarMeaningLibraryPage() {
  return (
    <>
      <PageHero eyebrow="Authority library" title="The Car Meaning Library" description="Car types are not only mechanical categories. They are emotional languages: composure, command, agility, work, luxury, future, and memory." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {carMeanings.map((car) => (
            <article key={car.slug} id={car.slug} className="card-surface rounded-[1.7rem] p-6 scroll-mt-28">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{car.equation}</p>
              <h2 className="editorial-title mt-4 text-3xl font-semibold text-[#fff1d8]">{car.name}</h2>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-smoke">
                <p><span className="font-bold text-softgold">Practical meaning:</span> {car.practical}</p>
                <p><span className="font-bold text-softgold">Emotional meaning:</span> {car.emotional}</p>
                <p><span className="font-bold text-softgold">Who may love it:</span> {car.who}</p>
                <p><span className="font-bold text-softgold">Beginner note:</span> {car.beginner}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Autofilia Tools",
  description: "Dream Garage Builder, Car Type Finder, Car Meaning Library, and coming tools for first car readiness and African road suitability."
};

export default function ToolsPage() {
  return (
    <>
      <PageHero eyebrow="Tools" title="Autofilia Tools" description="Simple tools for people who want to understand car desire, car types, ownership readiness, and the meaning behind automotive choices." />
      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Dream Garage Builder" eyebrow="Live" description="Select the dream types that match your automotive imagination and save them locally in your browser." href="/dream-garage-builder" />
          <FeatureCard title="Car Type Finder" eyebrow="Live" description="Answer three simple questions and discover car types that fit your needs and feelings." href="/car-type-finder" />
          <FeatureCard title="Car Meaning Library" eyebrow="Live" description="Understand cars by practical meaning and emotional meaning, from sedans to SUVs and EVs." href="/car-meaning-library" />
          <FeatureCard title="First Car Readiness" eyebrow="Coming soon" description="A future checklist for deciding whether your first car desire is ready for real ownership." />
          <FeatureCard title="Used Car Question Checklist" eyebrow="Coming soon" description="A future guide for asking better questions before buying a used car." />
          <FeatureCard title="African Road Suitability Score" eyebrow="Coming soon" description="A future tool for thinking about ground clearance, fuel, parts, heat, dust, and road reality." />
        </div>
      </section>
    </>
  );
}

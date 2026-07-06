import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "About Autofilia",
  description: "Autofilia was created from the belief that car love does not begin at ownership."
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A home for automotive affection." description="Autofilia was created from the belief that car love does not begin at ownership. It begins the first time a person sees a car and feels curiosity, desire, beauty, ambition, or freedom." />
      <section className="container-page py-16">
        <div className="card-surface article-prose rounded-[2rem] p-8 sm:p-12">
          <p>You can love cars before you have one. Ownership is only one chapter of automotive affection.</p>
          <p>Autofilia is not a dealership, repair shop, or ordinary review blog. It is a premium car culture platform for people who see cars as beauty, movement, status, family infrastructure, memory, engineering, and imagination.</p>
          <p>It is for the person walking past cars, watching reviews online, comparing SUVs, saving for a first car, maintaining a current car, or remembering one they once had.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <FeatureCard title="Beginner dignity" description="No one should be embarrassed for learning. Autofilia explains cars without gatekeeping." />
          <FeatureCard title="Cultural intelligence" description="Cars are read differently across roads, families, countries, and class systems." />
          <FeatureCard title="Pride without arrogance" description="A beautiful car should deepen responsibility, not reduce respect for people." />
        </div>
      </section>
    </>
  );
}

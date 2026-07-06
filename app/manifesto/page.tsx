import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "The Autofilia Manifesto",
  description: "You do not need to own a car before you love cars. Ownership is only one chapter of automotive affection."
};

export default function ManifestoPage() {
  return (
    <>
      <PageHero eyebrow="Manifesto" title="You do not need to own a car before you love cars." description="Ownership is only one chapter of automotive affection. Cars can represent beauty, freedom, design, ambition, memory, engineering, movement, status, and responsibility." />
      <section className="container-page py-16">
        <article className="card-surface article-prose rounded-[2rem] p-8 sm:p-12">
          <p>Autofilia begins with a simple correction: car love does not begin at ownership. It begins the first time a person sees a car and feels something — curiosity, desire, beauty, ambition, freedom, or memory.</p>
          <h2>Affection can come before possession</h2>
          <p>You can love architecture before owning a house. You can love aviation before owning an aircraft. You can love music before owning a studio. In the same way, you can love cars before you have one.</p>
          <h2>Desire is not shameful</h2>
          <p>Desire becomes dangerous only when it turns into pressure, debt, arrogance, or false appearance. But desire itself can be noble. It can make a person learn, save, compare, inspect, and prepare.</p>
          <h2>Cars are more than machines</h2>
          <p>A car can be transport, but it can also be a symbol of arrival, a family tool, a road companion, a design object, a memory container, a business instrument, and a dream of freedom.</p>
          <h2>Ownership is responsibility</h2>
          <p>Autofilia refuses careless car worship. Love the machine, but respect people more. A car should not make its owner arrogant, reckless, or cruel to people outside the car.</p>
          <h2>Automotive affection deserves language</h2>
          <p>Many people love cars without knowing how to explain the love. Autofilia exists to give that affection dignity, structure, vocabulary, and direction.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/start-here">Start the Journey</ButtonLink>
            <ButtonLink href="/car-meaning-library" variant="secondary">Read Car Meanings</ButtonLink>
          </div>
        </article>
      </section>
    </>
  );
}

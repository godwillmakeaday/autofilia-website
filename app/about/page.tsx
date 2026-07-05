import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "About Autofilia",
  description: "Autofilia was created from the belief that car love does not begin at ownership."
};

const beliefs = [
  "Car love can begin from the roadside, a screen, a memory, a father’s car, a mother’s car, or a machine you have only seen once.",
  "Ownership is important, but it is not the only legitimate chapter of automotive affection.",
  "A person who studies cars before buying is not pretending; that person is forming taste.",
  "Cars deserve cultural writing: not just prices and specs, but meaning, design, memory, freedom, and ambition."
];

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 lg:py-24">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="About Autofilia"
            title="Car love does not begin at ownership."
            description="Autofilia was created from the belief that car love begins the first time a person sees a car and feels something: curiosity, desire, beauty, ambition, or freedom."
          />
          <div className="soft-card p-8 sm:p-10">
            <p className="font-display text-3xl leading-tight text-smoke">
              You can love cars before you have one. Ownership is only one chapter of automotive affection.
            </p>
            <p className="mt-6 text-base leading-8 text-white/62">
              Autofilia is for dreamers, owners, observers, collectors, former owners, and beginners who are still learning the difference between an SUV, sedan, hatchback, coupe, pickup, crossover, sports car, luxury car, and electric vehicle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-pad">
          <SectionHeader
            eyebrow="What We Believe"
            title="The site gives language to admiration."
            description="Many people love cars quietly because they do not yet own one. Autofilia turns that quiet affection into a dignified culture of learning, taste, imagination, and responsible ownership."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {beliefs.map((belief) => (
              <article key={belief} className="soft-card p-6">
                <span className="mb-5 block h-1 w-12 rounded-full bg-brass" />
                <p className="text-base leading-8 text-white/66">{belief}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-pad">
          <div className="rounded-[2.5rem] border border-brass/25 bg-brass/10 p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brass">Editorial posture</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-smoke lg:text-6xl">
              Not a dealership. Not a repair shop. Not a generic review blog.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Autofilia is a cultural home for people who love cars emotionally, aesthetically, intellectually, and aspirationally. The goal is to help people understand cars without shame, admire them without arrogance, and eventually own them with wisdom.
            </p>
            <Link href="/articles" className="button-primary mt-8">Read the Articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

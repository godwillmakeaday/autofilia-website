import type { Metadata } from "next";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Autofilia — Car Love Before Ownership",
  description: "Autofilia was created from the belief that car love does not begin at ownership. It begins with curiosity, desire, beauty, ambition, or freedom."
};

export default function AboutPage() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="About Autofilia"
          title="Car love does not begin at ownership."
          intro="It begins the first time a person sees a car and feels something: curiosity, desire, beauty, ambition, freedom, memory, or movement."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.82fr]">
          <Card>
            <p className="text-2xl leading-10 text-smoke/82">
              Autofilia was created from the belief that automotive affection is bigger than possession. You can love cars before you have one. Ownership is only one chapter of automotive affection.
            </p>
            <p className="mt-8 text-xl leading-9 text-smoke/72">
              This platform is for the person comparing SUVs on a phone, the person saving for a first car, the owner learning maintenance discipline, the former owner remembering a lost machine, and the observer who stops on the road because a certain shape has spoken.
            </p>
          </Card>
          <Card className="border-gold/20 bg-gold/[0.05]">
            <p className="font-display text-4xl leading-tight text-pearl">
              You can love cars before you have one. Ownership is only one chapter of automotive affection.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

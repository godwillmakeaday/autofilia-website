import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DreamGarageBuilder } from "@/components/DreamGarageBuilder";

export const metadata: Metadata = {
  title: "Dream Garage Builder — Autofilia",
  description: "Build a dream garage emotionally, not financially. Select the car dreams that represent your taste and imagination."
};

export default function DreamGarageBuilderPage() {
  return (
    <>
      <PageHero eyebrow="Tool" title="Dream Garage Builder" description="Build a dream garage emotionally, not financially. This is a place to name what you desire: practicality, family, luxury, speed, African road confidence, electric future, collection, or first-car freedom." />
      <section className="container-page py-16">
        <DreamGarageBuilder />
      </section>
    </>
  );
}

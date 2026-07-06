import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CarTypeFinder } from "@/components/CarTypeFinder";

export const metadata: Metadata = {
  title: "Car Type Finder — Autofilia",
  description: "A beginner-friendly tool to discover which car type fits your taste, roads, purpose, and imagination."
};

export default function CarTypeFinderPage() {
  return (
    <>
      <PageHero eyebrow="Tool" title="Car Type Finder" description="Answer simple questions and discover which car type fits your emotional and practical imagination. This is not a perfect buying tool. It is a language tool for your car affection." />
      <section className="container-page py-16">
        <CarTypeFinder />
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type AnswerKey = "want" | "where" | "feeling";
type Answers = Partial<Record<AnswerKey, string>>;

const questions: { key: AnswerKey; question: string; options: string[] }[] = [
  { key: "want", question: "What do you want most from a car?", options: ["comfort", "status", "family space", "fuel economy", "speed", "rough-road confidence", "city agility", "luxury feeling"] },
  { key: "where", question: "Where do you imagine using it most?", options: ["city roads", "highways", "rough roads", "family movement", "business image", "weekend enjoyment"] },
  { key: "feeling", question: "What feeling attracts you most?", options: ["composure", "command", "agility", "freedom", "arrival", "adventure", "elegance", "power"] }
];

const recommendations = [
  { type: "SUV", slug: "suv", matches: ["family space", "rough-road confidence", "rough roads", "family movement", "command", "adventure"], reason: "You seem drawn to height, confidence, family readiness, and road presence.", beginner: "Watch fuel cost, tire cost, suspension health, and parts availability." },
  { type: "Sedan", slug: "sedan", matches: ["comfort", "fuel economy", "city roads", "highways", "composure", "elegance"], reason: "You seem to value balance, comfort, maturity, and a calm driving personality.", beginner: "A sedan can be an intelligent first serious car, but check ground clearance for your roads." },
  { type: "Hatchback", slug: "hatchback", matches: ["fuel economy", "city agility", "city roads", "agility", "freedom"], reason: "You seem attracted to economical, agile, city-smart movement.", beginner: "A hatchback can teach ownership without overwhelming you financially." },
  { type: "Luxury Car", slug: "luxury-car", matches: ["status", "luxury feeling", "business image", "arrival", "elegance"], reason: "You are attracted to refinement, status, quietness, and arrival.", beginner: "Luxury is only sweet when maintenance is realistic." },
  { type: "Sports Car", slug: "sports-car", matches: ["speed", "weekend enjoyment", "power", "freedom"], reason: "You seem drawn to performance, emotion, and the beauty of response.", beginner: "Performance requires discipline, insurance awareness, and maintenance capacity." },
  { type: "Pickup", slug: "pickup", matches: ["rough-road confidence", "rough roads", "business image", "adventure", "power"], reason: "You may value strength, utility, and the ability to carry work as well as people.", beginner: "Buy a pickup for genuine use, not only road image." },
  { type: "Crossover", slug: "crossover", matches: ["comfort", "family space", "city roads", "family movement", "freedom"], reason: "You may want flexible modern usefulness without the full cost or size of a large SUV.", beginner: "Compare real boot space, clearance, and engine strength." },
  { type: "Electric Vehicle", slug: "electric-vehicle", matches: ["comfort", "city roads", "elegance", "freedom"], reason: "You may appreciate quiet power, technology, and future-facing mobility.", beginner: "Charging access and battery support matter more than excitement." },
  { type: "Coupe", slug: "coupe", matches: ["status", "weekend enjoyment", "elegance", "freedom"], reason: "You may love style, intimacy, personal taste, and motion.", beginner: "A coupe may be less practical for passengers and daily family use." }
];

export function CarTypeFinder() {
  const [answers, setAnswers] = useState<Answers>({});

  const ranked = useMemo(() => {
    const values = Object.values(answers).filter(Boolean);
    return recommendations
      .map((rec) => ({ ...rec, score: rec.matches.filter((match) => values.includes(match)).length }))
      .sort((a, b) => b.score - a.score)
      .filter((rec) => rec.score > 0)
      .slice(0, 3);
  }, [answers]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
      <div className="grid gap-6">
        {questions.map((q) => (
          <div key={q.key} className="card-surface rounded-[1.7rem] p-6">
            <h2 className="editorial-title text-2xl font-semibold text-[#fff1d8]">{q.question}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {q.options.map((option) => {
                const active = answers[q.key] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [q.key]: option }))}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${active ? "border-gold bg-gold text-ink" : "border-gold/20 text-smoke hover:border-gold/60 hover:text-softgold"}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <aside className="card-surface h-fit rounded-[1.8rem] p-6 lg:sticky lg:top-28">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">Your result</p>
        <h2 className="editorial-title mt-3 text-3xl font-semibold text-[#fff1d8]">Recommended car meanings</h2>
        {ranked.length === 0 ? (
          <p className="mt-5 leading-7 text-smoke">Answer the questions to reveal the car types that may fit your emotional and practical imagination.</p>
        ) : (
          <div className="mt-5 grid gap-4">
            {ranked.map((rec) => (
              <div key={rec.type} className="rounded-2xl border border-gold/15 bg-black/25 p-4">
                <h3 className="text-lg font-bold text-softgold">{rec.type}</h3>
                <p className="mt-2 text-sm leading-6 text-smoke">{rec.reason}</p>
                <p className="mt-3 text-xs leading-5 text-muted"><span className="text-gold">Beginner note:</span> {rec.beginner}</p>
                <Link href={`/car-categories#${rec.slug}`} className="mt-3 inline-block text-sm font-semibold text-gold hover:text-softgold">
                  Read category →
                </Link>
              </div>
            ))}
          </div>
        )}
        <button type="button" onClick={() => setAnswers({})} className="mt-6 w-full rounded-full border border-gold/30 px-4 py-3 text-sm font-semibold text-softgold hover:bg-gold/10">
          Reset answers
        </button>
      </aside>
    </div>
  );
}

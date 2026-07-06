"use client";

import { useEffect, useState } from "react";
import { dreamTypes } from "@/lib/siteData";

export function DreamGarageBuilder() {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem("autofilia-dream-garage");
    if (stored) {
      try {
        setSelected(JSON.parse(stored));
      } catch {
        setSelected([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("autofilia-dream-garage", JSON.stringify(selected));
  }, [selected]);

  function toggle(title: string) {
    setSelected((current) => current.includes(title) ? current.filter((item) => item !== title) : [...current, title]);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-5 md:grid-cols-2">
        {dreamTypes.map((dream) => {
          const active = selected.includes(dream.title);
          return (
            <button
              type="button"
              key={dream.title}
              onClick={() => toggle(dream.title)}
              className={`card-surface rounded-[1.6rem] p-6 text-left transition hover:-translate-y-1 ${active ? "border-gold bg-gold/10" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="editorial-title text-2xl font-semibold text-[#fff1d8]">{dream.title}</h3>
                <span className="rounded-full border border-gold/25 px-3 py-1 text-xs font-bold text-gold">{active ? "Added" : "Add"}</span>
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-gold/80">{dream.feeling}</p>
              <p className="mt-4 leading-7 text-smoke">{dream.why}</p>
              <p className="mt-4 text-sm leading-6 text-muted"><span className="text-softgold">Ideal:</span> {dream.ideal}</p>
              <p className="mt-3 text-sm leading-6 text-muted"><span className="text-softgold">Beginner note:</span> {dream.note}</p>
            </button>
          );
        })}
      </div>

      <aside className="card-surface h-fit rounded-[1.8rem] p-6 lg:sticky lg:top-28">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">My Dream Garage</p>
        <h2 className="editorial-title mt-3 text-3xl font-semibold text-[#fff1d8]">Your selected meanings</h2>
        {selected.length === 0 ? (
          <p className="mt-5 leading-7 text-smoke">Select dream types to create an emotional garage. This is not about money first. It is about taste, imagination, and self-knowledge.</p>
        ) : (
          <div className="mt-5 grid gap-3">
            {selected.map((item) => (
              <div key={item} className="rounded-2xl border border-gold/15 bg-black/25 px-4 py-3 text-sm font-semibold text-softgold">
                {item}
              </div>
            ))}
          </div>
        )}
        <button type="button" onClick={() => setSelected([])} className="mt-6 w-full rounded-full border border-gold/30 px-4 py-3 text-sm font-semibold text-softgold hover:bg-gold/10">
          Reset Garage
        </button>
      </aside>
    </div>
  );
}

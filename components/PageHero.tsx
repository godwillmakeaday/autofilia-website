export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-gold/10 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 road-grid opacity-40" />
      <div className="container-page max-w-4xl">
        {eyebrow ? <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-gold">{eyebrow}</p> : null}
        <h1 className="display-title text-5xl font-semibold leading-[0.98] text-[#fff4df] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 text-lg leading-9 text-smoke sm:text-xl">{description}</p>
      </div>
    </section>
  );
}

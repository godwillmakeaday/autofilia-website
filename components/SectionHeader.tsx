export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p> : null}
      <h2 className="editorial-title text-3xl font-semibold text-[#fff4df] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-smoke sm:text-lg">{description}</p> : null}
    </div>
  );
}

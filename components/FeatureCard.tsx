type FeatureCardProps = {
  title: string;
  description: string;
  meta?: string;
};

export function FeatureCard({ title, description, meta }: FeatureCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-brass/40 hover:bg-white/[0.07]">
      {meta ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brass/80">{meta}</p> : null}
      <h3 className="font-display text-2xl text-smoke">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/60">{description}</p>
    </article>
  );
}

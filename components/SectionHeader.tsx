type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  centered?: boolean;
};

export default function SectionHeader({ kicker, title, intro, centered = false }: Props) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {kicker ? <p className="mb-5 text-sm font-black uppercase tracking-[0.45em] text-gold">{kicker}</p> : null}
      <h1 className="font-display text-5xl leading-[0.98] text-pearl sm:text-6xl lg:text-7xl">{title}</h1>
      {intro ? <p className="mt-7 text-xl leading-9 text-smoke/75 sm:text-2xl sm:leading-10">{intro}</p> : null}
    </div>
  );
}

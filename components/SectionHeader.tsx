type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-brass">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-smoke sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">{description}</p> : null}
    </div>
  );
}

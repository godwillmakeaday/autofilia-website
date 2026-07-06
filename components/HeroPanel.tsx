import { ButtonLink } from "./ButtonLink";

export function HeroPanel() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 road-grid opacity-50" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-gold">Automotive Affection</p>
          <h1 className="display-title text-6xl font-semibold leading-[0.92] text-[#fff4df] sm:text-7xl lg:text-8xl">
            Autofilia
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-smoke sm:text-2xl">
            For people who love cars before they own them, while they own them, and even after they outgrow them.
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-muted">
            A car can be machine, dream, tool, memory, signal, responsibility, status, freedom, and beauty. Autofilia gives language to that affection.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/start-here">Start Here</ButtonLink>
            <ButtonLink href="/dream-garage-builder" variant="secondary">Build a Dream Garage</ButtonLink>
          </div>
        </div>
        <div className="card-surface relative min-h-[430px] overflow-hidden rounded-[2.2rem] p-7 shadow-glow">
          <div className="absolute inset-x-10 top-16 h-28 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-gold">The doctrine</p>
              <h2 className="editorial-title mt-4 text-4xl font-semibold text-[#fff2d8]">You do not need to own a car before you love cars.</h2>
            </div>
            <div className="grid gap-3">
              {["Admiration", "Learning", "Desire", "Taste", "Ownership", "Memory"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-gold/15 bg-black/25 px-4 py-3">
                  <span className="text-sm font-semibold text-smoke">{item}</span>
                  <span className="text-xs text-gold">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-gold/20 bg-gold/10 p-5">
              <p className="text-sm leading-7 text-softgold">Ownership is only one chapter. Attention, affection, memory, and imagination are chapters too.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

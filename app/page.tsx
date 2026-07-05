import Link from "next/link";
import { CarSilhouette } from "@/components/CarSilhouette";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeader } from "@/components/SectionHeader";
import { articles, carCategories, dreamGarage, editorialPillars } from "@/data/site";

const beforeOwnership = [
  ["Dream Garage", "A private mental showroom for the cars you admire before they ever enter your compound."],
  ["Cars I Admire", "A place to study shapes, dashboards, engines, interiors, and road presence without pretending."],
  ["Learning Before Buying", "Guides that make beginners sharper before the first purchase decision."],
  ["Understanding Car Types", "Simple explanations of sedans, SUVs, hatchbacks, pickups, EVs, and crossovers."],
  ["Saving With Taste", "Desire becomes more disciplined when you understand what kind of car fits your real life."],
  ["The First Car Imagination", "The beautiful period when ownership has not arrived, but taste is already forming."]
];

const ownershipCards = [
  ["Ownership Stories", "Real reflections on first cars, difficult roads, proud moments, and lessons learned behind the wheel."],
  ["Maintenance Culture", "Respecting the machine through care, regular checks, clean records, and responsible use."],
  ["Road Discipline", "The mature side of car love: patience, restraint, safety, and awareness of others."],
  ["Fuel Economy", "Understanding the running cost of desire without killing the joy of driving."],
  ["Upgrade Decisions", "Knowing when to repair, replace, upgrade, sell, or simply appreciate what you already have."],
  ["Pride Without Arrogance", "A car can represent progress without becoming a weapon of social oppression."]
];

const manifestoItems = [
  "You do not need to own a car before you love cars.",
  "Car love can begin with admiration, curiosity, observation, and desire.",
  "Some people love cars as machines; others love them as design, freedom, status, memory, or future.",
  "A car can be a tool, but it can also be a moving symbol of ambition, taste, and story."
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden pb-16 pt-16 sm:pt-20 lg:pb-24 lg:pt-28">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-brass/25 bg-brass/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brass">
              Automotive affection, not automotive pretence
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-smoke sm:text-7xl lg:text-8xl">
              Autofilia
            </h1>
            <p className="mt-7 max-w-3xl text-2xl leading-10 text-white/78 sm:text-3xl">
              For people who love cars before they own them, while they own them, and even after they outgrow them.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
              Cars are more than machines. They are dreams, designs, journeys, memories, identities, and symbols of movement. Autofilia is a home for everyone who has ever stopped to admire a car, imagined a road trip, studied a dashboard, compared models, or loved a machine before they could afford one.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="#garage" className="button-primary">Enter the Garage</Link>
              <Link href="#pillars" className="button-secondary">Explore Car Culture</Link>
            </div>
          </div>
          <CarSilhouette />
        </div>
      </section>

      <section id="manifesto" className="py-16 lg:py-24">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="The Autofilia Manifesto"
            title="You can love the machine before the keys arrive."
            description="Autofilia gives dignity to car love before ownership. It welcomes the admirer, the saver, the driver, the collector, the former owner, and the person still learning what each car type means."
          />
          <div className="soft-card p-6 sm:p-8 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {manifestoItems.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <span className="mb-4 block h-1 w-12 rounded-full bg-brass" />
                  <p className="text-sm leading-7 text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-brass pl-5 font-display text-2xl leading-10 text-smoke">
              Autofilia is not only about ownership. It is about affection, attention, and automotive imagination.
            </p>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 lg:py-24">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Car Categories Explained"
            title="A beginner should never feel embarrassed for asking what a car is called."
            description="Every category carries a practical meaning and an emotional signal. Autofilia explains both."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {carCategories.map((category) => (
              <article key={category.name} className="soft-card p-6 transition hover:border-brass/40 hover:bg-white/[0.06]">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-smoke">{category.name}</h3>
                  <span className="rounded-full border border-brass/25 bg-brass/10 px-3 py-1 text-xs font-semibold text-brass">
                    {category.feeling}
                  </span>
                </div>
                <p className="text-sm leading-7 text-white/62">{category.definition}</p>
                <p className="mt-4 text-sm leading-7 text-white/45">{category.lover}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="before" className="py-16 lg:py-24">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Before Ownership"
            title="Before the Keys"
            description="Desire is not shameful. It is the beginning of taste. The person who studies cars before buying may become a wiser owner than the person who buys without affection or understanding."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeOwnership.map(([title, description]) => (
              <FeatureCard key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section id="ownership" className="py-16 lg:py-24">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card flex min-h-[420px] flex-col justify-between overflow-hidden p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-brass">During Ownership</p>
              <h2 className="mt-4 font-display text-5xl leading-tight text-smoke">Life With the Machine</h2>
              <p className="mt-6 text-base leading-8 text-white/60">
                Ownership is where affection meets duty. The car becomes more than an object; it becomes a relationship of care, cost, pride, discipline, and movement.
              </p>
            </div>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/30 p-6">
              <p className="font-display text-2xl text-smoke">Pride without arrogance.</p>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Autofilia celebrates cars without turning them into instruments of humiliation. Love the machine. Respect people more.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {ownershipCards.map(([title, description]) => (
              <FeatureCard key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section id="beyond" className="py-16 lg:py-24">
        <div className="container-pad">
          <div className="soft-card overflow-hidden p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <SectionHeader
                eyebrow="Beyond Ownership"
                title="After the Drive"
                description="Cars can become memories. A first car, a family car, a business car, a father’s car, a mother’s car, or a car that marked a season of life can remain meaningful even after it is gone."
              />
              <div className="grid gap-4 sm:grid-cols-3">
                {["First car", "Family car", "Business car", "Mother’s car", "Father’s car", "Lost car"].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-black/25 p-5 text-center">
                    <p className="font-display text-xl text-smoke">{item}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/35">memory</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-16 lg:py-24">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Editorial Pillars"
            title="The site is a culture desk, not a dealership floor."
            description="These pillars give Autofilia room to grow from emotion into education, from admiration into useful intelligence, and from car dreams into car literacy."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {editorialPillars.map((pillar) => (
              <span key={pillar} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/68 transition hover:border-brass/40 hover:text-brass">
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 lg:py-24">
        <div className="container-pad">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Featured Articles"
              title="Car writing with beauty, intelligence, and feeling."
              description="Sample article cards are ready for expansion into a real editorial archive."
            />
            <Link href="/articles" className="button-secondary w-fit">View Articles</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="soft-card p-6 transition hover:-translate-y-1 hover:border-brass/40">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brass/80">{article.category}</p>
                <h3 className="mt-5 font-display text-2xl leading-tight text-smoke">{article.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="garage" className="py-16 lg:py-24">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Autofilia Garage"
            title="The Dream Garage"
            description="A showcase space for the cars people desire, the meanings they attach to them, and the identities those machines seem to promise."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dreamGarage.map((dream) => (
              <article key={dream.title} className="soft-card overflow-hidden">
                <div className="h-32 border-b border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(216,168,79,0.25),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brass">{dream.feeling}</p>
                  <h3 className="mt-4 font-display text-2xl text-smoke">{dream.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-white/70">Ideal type: {dream.type}</p>
                  <p className="mt-4 text-sm leading-7 text-white/55">{dream.desire}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-16 lg:py-28">
        <div className="container-pad">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brass/25 bg-[linear-gradient(135deg,rgba(216,168,79,0.18),rgba(255,255,255,0.04),rgba(242,92,46,0.12))] p-8 text-center shadow-glow sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brass">Community</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-tight text-smoke sm:text-5xl lg:text-6xl">
              A Home for Car Lovers at Every Stage
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              Whether you are walking past parked cars, watching reviews online, comparing SUVs, saving for your first car, maintaining your current one, or remembering one you once had, Autofilia gives language to your love of cars.
            </p>
            <Link href="mailto:hello@autofilia.example" className="button-primary mt-9">Join the Autofilia Circle</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

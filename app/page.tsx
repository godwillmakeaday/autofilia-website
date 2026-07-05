import ArticleCard from "@/components/ArticleCard";
import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import CarSilhouette from "@/components/CarSilhouette";
import SectionHeader from "@/components/SectionHeader";
import { articleCards, categories, garageDreams } from "@/data/site";

const beforeCards = [
  ["Dream Garage", "A private mental showroom for the cars you admire before they ever enter your compound."],
  ["Cars I Admire", "A place to study shapes, dashboards, engines, interiors, and road presence without pretending."],
  ["Learning Before Buying", "Guides that make beginners sharper before the first purchase decision."],
  ["Understanding Car Types", "Simple explanations of sedans, SUVs, hatchbacks, pickups, EVs, and crossovers."],
  ["Saving With Taste", "Desire becomes more disciplined when you understand what kind of car fits your real life."],
  ["The First Car Imagination", "The beautiful period when ownership has not arrived, but taste is already forming."]
];

const ownershipLessons = ["Ownership stories", "Maintenance culture", "Road discipline", "Fuel economy", "Upgrade decisions", "Pride without arrogance"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 hairline-grid opacity-20" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <div className="mb-10 inline-flex rounded-full border border-gold/25 bg-gold/10 px-6 py-4 text-xs font-black uppercase tracking-[0.42em] text-gold sm:text-sm">
              Automotive affection, not automotive pretence
            </div>
            <h1 className="font-display text-6xl leading-[.92] text-pearl sm:text-8xl lg:text-9xl">Autofilia</h1>
            <p className="mt-8 max-w-4xl text-3xl leading-[1.45] text-pearl sm:text-4xl">
              For people who love cars before they own them, while they own them, and even after they outgrow them.
            </p>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-smoke/78 sm:text-2xl sm:leading-10">
              Cars are more than machines. They are dreams, designs, journeys, memories, identities, and symbols of movement. Autofilia is a home for everyone who has ever stopped to admire a car, imagined a road trip, studied a dashboard, compared models, or loved a machine before they could afford one.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/garage">Enter the Garage</ButtonLink>
              <ButtonLink href="/articles" variant="ghost">Explore Car Culture</ButtonLink>
            </div>
          </div>
          <CarSilhouette />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="The Autofilia Manifesto"
            title="You can love the machine before the keys arrive."
            intro="Autofilia gives dignity to car love before ownership. It is for the dreamer, the driver, the collector, the former owner, and the person still learning what each car type means."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {[
              "You do not need to own a car before you love cars.",
              "Car love can begin with admiration, curiosity, observation, and desire.",
              "Some people love cars as machines; others love them as design, freedom, status, memory, or future.",
              "A car can be a tool, but it can also be a moving symbol of ambition, taste, and story."
            ].map((item) => (
              <Card key={item}>
                <div className="mb-7 h-2 w-20 rounded-full bg-gold" />
                <p className="text-xl leading-9 text-smoke/80">{item}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-8 border-gold/25 bg-gold/[0.06]">
            <p className="border-l-4 border-gold pl-7 font-display text-4xl leading-tight text-pearl sm:text-5xl">
              Autofilia is not only about ownership. It is about affection, attention, and automotive imagination.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-pad bg-black/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Car Categories Explained"
            title="A beginner should never feel embarrassed for asking what a car is called."
            intro="Every category carries a practical meaning and an emotional signal. Autofilia explains both."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.slice(0, 6).map((category) => (
              <Card key={category.name}>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-4xl text-pearl">{category.name}</h2>
                  <span className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-black text-gold">{category.feeling}</span>
                </div>
                <p className="mt-6 text-lg leading-8 text-pearl/85">{category.definition}</p>
                <p className="mt-5 text-lg leading-8 text-smoke/62">{category.person}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/car-categories" variant="ghost">See All Car Categories</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Before Ownership" title="Before the Keys" intro="Desire is not shameful. It is the beginning of taste. The person who studies cars before buying may become a wiser owner than the person who buys without affection or understanding." centered />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {beforeCards.map(([title, text]) => (
              <Card key={title}>
                <h2 className="font-display text-4xl text-pearl">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-smoke/72">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <Card className="border-gold/20 bg-gold/[0.045]">
            <SectionHeader kicker="During Ownership" title="Life With the Machine" intro="Ownership is where affection meets duty. The car becomes more than an object; it becomes a relationship of care, cost, pride, discipline, and movement." />
            <Card className="mt-12 bg-black/40">
              <h2 className="font-display text-4xl text-pearl">Pride without arrogance.</h2>
              <p className="mt-6 text-lg leading-8 text-smoke/70">Autofilia celebrates cars without turning them into instruments of humiliation. Love the machine. Respect people more.</p>
            </Card>
          </Card>
          <div className="grid gap-5 sm:grid-cols-2">
            {ownershipLessons.map((lesson) => (
              <Card key={lesson}>
                <p className="font-display text-3xl text-pearl">{lesson}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Beyond Ownership" title="After the Drive" intro="Cars can become memories. A first car, a family car, a business car, a father’s car, a mother’s car, or a car that marked a season of life can remain meaningful even after it is gone." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {["The car you sold", "The car you lost", "The car that taught you"].map((item) => (
              <Card key={item}>
                <h2 className="font-display text-4xl text-pearl">{item}</h2>
                <p className="mt-6 text-lg leading-8 text-smoke/70">Some machines leave the driveway but stay in the memory. Autofilia records the emotional afterlife of cars.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-black/30">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Autofilia Garage" title="The Dream Garage" intro="A showcase of the practical, luxury, family, speed, electric, and African road dreams that shape car desire." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {garageDreams.map((dream) => (
              <Card key={dream.title}>
                <h2 className="font-display text-4xl text-pearl">{dream.title}</h2>
                <p className="mt-5 text-lg leading-8 text-gold">{dream.type}</p>
                <p className="mt-5 text-lg leading-8 text-smoke/70">{dream.feeling}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/garage">Open the Dream Garage</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Featured Articles" title="Car culture with feeling, structure, and intelligence." intro="Autofilia turns car admiration into language: categories, essays, memories, beginner guidance, and honest reflection." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {articleCards.slice(0, 3).map((article) => <ArticleCard key={article.slug} {...article} />)}
          </div>
          <div className="mt-10">
            <ButtonLink href="/articles" variant="ghost">View All Articles</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

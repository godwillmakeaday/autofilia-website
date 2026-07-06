import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24">
      <div className="card-surface rounded-[2rem] p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">404</p>
        <h1 className="editorial-title mt-4 text-4xl font-semibold text-[#fff4df]">This road is not open yet.</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-smoke">The page you were looking for is not available. Return to the Autofilia garage and continue the journey.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink">Back Home</Link>
      </div>
    </section>
  );
}

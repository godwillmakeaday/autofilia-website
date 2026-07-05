export function CarSilhouette() {
  return (
    <div className="relative mx-auto aspect-[1.45/1] w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(216,168,79,0.22),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6 shadow-glow">
      <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-brass/10 blur-3xl" />
      <div className="absolute inset-x-8 bottom-20 h-20 rounded-t-[100px] border border-brass/30 bg-black/30" />
      <div className="absolute inset-x-14 bottom-28 h-20 rounded-t-[90px] border border-white/15 bg-white/[0.05]" />
      <div className="absolute left-20 right-20 bottom-16 h-8 rounded-full bg-brass/80 shadow-[0_0_50px_rgba(216,168,79,0.28)]" />
      <div className="absolute bottom-10 left-20 h-20 w-20 rounded-full border-[10px] border-white/15 bg-black shadow-inner" />
      <div className="absolute bottom-10 right-20 h-20 w-20 rounded-full border-[10px] border-white/15 bg-black shadow-inner" />
      <div className="absolute bottom-11 left-[94px] h-12 w-12 rounded-full border border-brass/50" />
      <div className="absolute bottom-11 right-[94px] h-12 w-12 rounded-full border border-brass/50" />
      <div className="absolute bottom-7 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute left-6 top-6 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/50">
        Dream Garage
      </div>
    </div>
  );
}

export default function CarSilhouette() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.09] via-gold/[0.08] to-black p-8 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(217,169,79,.22),transparent_35%),linear-gradient(180deg,rgba(255,255,255,.04),transparent)]" />
      <div className="relative mb-10 inline-flex rounded-full border border-white/10 px-6 py-3 text-xs font-black uppercase tracking-[0.45em] text-smoke/70">
        Dream Garage
      </div>
      <svg viewBox="0 0 720 340" className="relative w-full" role="img" aria-label="Abstract car silhouette">
        <path d="M82 214 C116 128 184 84 286 84 H432 C520 84 586 130 638 214" fill="none" stroke="rgba(244,236,224,.28)" strokeWidth="3" />
        <path d="M130 214 H90 C76 214 66 226 66 240 V268 H654 V240 C654 226 644 214 630 214 H580" fill="none" stroke="rgba(217,169,79,.35)" strokeWidth="3" />
        <path d="M172 190 L236 114 H450 L534 190 Z" fill="rgba(255,255,255,.03)" stroke="rgba(244,236,224,.18)" strokeWidth="2" />
        <circle cx="226" cy="268" r="52" fill="#050505" stroke="rgba(255,255,255,.12)" strokeWidth="18" />
        <circle cx="226" cy="268" r="30" fill="none" stroke="rgba(217,169,79,.4)" strokeWidth="2" />
        <circle cx="500" cy="268" r="52" fill="#050505" stroke="rgba(255,255,255,.12)" strokeWidth="18" />
        <circle cx="500" cy="268" r="30" fill="none" stroke="rgba(217,169,79,.4)" strokeWidth="2" />
        <rect x="282" y="248" width="164" height="28" rx="4" fill="rgba(217,169,79,.75)" />
      </svg>
    </div>
  );
}

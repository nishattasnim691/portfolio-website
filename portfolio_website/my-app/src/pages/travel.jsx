import { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const destinations = [
  {
    id: 1,
    name: "Cox's Bazar",
    subtitle: 'The Longest Beach',
    emoji: '🏖️',
    desc: "Located on the southeastern coast of Bangladesh, Cox's Bazar boasts the longest natural sea beach in the world, stretching over 120 kilometers. Stunning sunsets, vibrant local culture, and incredible seafood make it an unforgettable destination.",
    tags: [
      { label: 'Beach',     style: 'text-[#00e5ff] bg-[#00e5ff]/8 border-[#00e5ff]/20' },
      { label: 'Adventure', style: 'text-orange-400 bg-orange-400/8 border-orange-400/20' },
      { label: 'Sunset',    style: 'text-[#ffab40] bg-[#ffab40]/8 border-[#ffab40]/20' },
    ],
    gradient: 'from-cyan-500/15 via-blue-500/8 to-transparent',
    fact: '120 km of pristine beach',
    factIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Sajek Valley',
    subtitle: 'Peaceful Retreat',
    emoji: '⛰️',
    desc: 'Nestled in the Chittagong Hill Tracts, Sajek Valley offers breathtaking views of rolling hills, lush greenery, and mist-covered peaks. A paradise for nature lovers seeking tranquility and adventure far from the city.',
    tags: [
      { label: 'Nature',  style: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20' },
      { label: 'Hiking',  style: 'text-blue-400 bg-blue-400/8 border-blue-400/20' },
      { label: 'Culture', style: 'text-purple-400 bg-purple-400/8 border-purple-400/20' },
    ],
    gradient: 'from-emerald-500/15 via-teal-500/8 to-transparent',
    fact: '1,800 ft above sea level',
    factIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Saint Martin's Island",
    subtitle: 'Tropical Paradise',
    emoji: '🏝️',
    desc: "A small tropical island off Bangladesh's southeastern coast, famous for crystal-clear waters and sandy beaches. Known as the 'Coconut Island,' it's perfect for relaxation, swimming, and snorkeling in the Bay of Bengal.",
    tags: [
      { label: 'Island',     style: 'text-[#ffab40] bg-[#ffab40]/8 border-[#ffab40]/20' },
      { label: 'Snorkeling', style: 'text-blue-400 bg-blue-400/8 border-blue-400/20' },
      { label: 'Relaxation', style: 'text-red-400 bg-red-400/8 border-red-400/20' },
    ],
    gradient: 'from-amber-500/15 via-orange-500/8 to-transparent',
    fact: "Bangladesh's only coral island",
    factIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Travel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = destinations[activeIdx];

  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          tag="Travel"
          title="My Adventures"
          subtitle="Exploring the stunning landscapes and rich culture of Bangladesh — one journey at a time."
        />

        {/* ── DESTINATION CARDS ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {destinations.map((dest, i) => (
            <Reveal key={dest.id} delay={i * 70}>
              <button
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.02] focus:outline-none ${
                  activeIdx === i
                    ? 'border-[#00e5ff]/30 bg-[#00e5ff]/4 shadow-lg shadow-[#00e5ff]/8'
                    : 'card-glass-dark hover:border-white/10'
                }`}
              >
                {/* Gradient header area */}
                <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${dest.gradient} flex items-center justify-center text-5xl mb-5 relative overflow-hidden`}>
                  <span role="img" aria-label={dest.name}>{dest.emoji}</span>
                  {activeIdx === i && (
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#00e5ff] animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  )}
                </div>

                <h3 className="font-serif text-lg font-light text-cream-50 mb-0.5">{dest.name}</h3>
                <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#00e5ff] mb-3">{dest.subtitle}</p>
                <p className="text-xs text-navy-500 leading-relaxed mb-4 line-clamp-2">{dest.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dest.tags.map((tag) => (
                    <span key={tag.label} className={`tag text-[10px] py-[3px] px-2.5 ${tag.style}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-1.5 text-[10px] font-mono ${activeIdx === i ? 'text-[#00e5ff]/70' : 'text-navy-600'} transition-colors duration-200`}>
                  {dest.factIcon}
                  {dest.fact}
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* ── SPOTLIGHT ─────────────────────────────────────────────── */}
        <Reveal className="mb-4">
          <div className="rounded-2xl card-glass-dark p-8 md:p-10 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${active.gradient} opacity-40 pointer-events-none`} />

            <div className="relative">
              {/* Header */}
              <div className="flex items-start gap-5 mb-5">
                <span className="text-5xl" role="img" aria-label={active.name}>{active.emoji}</span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-cream-50 leading-tight">
                    {active.name}
                  </h2>
                  <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#00e5ff] mt-1">
                    {active.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-navy-400 leading-[1.85] mb-7 max-w-2xl">
                {active.desc}
              </p>

              {/* Dot navigator */}
              <div className="flex items-center gap-3">
                {destinations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`View ${destinations[i].name}`}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      i === activeIdx
                        ? 'w-6 bg-[#00e5ff]'
                        : 'w-2 bg-navy-700 hover:bg-navy-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── MAP PANEL ─────────────────────────────────────────────── */}
        <Reveal>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/[0.06] bg-navy-900/60 flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#00e5ff]">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span className="text-sm text-cream-100">Destinations Visited</span>
              <span className="ml-auto font-mono text-[9px] tracking-[0.15em] text-navy-500">BANGLADESH</span>
            </div>

            {/* Map body */}
            <div className="bg-[#050d1a] py-14 px-8 flex flex-col items-center">
              <span className="text-6xl mb-3" role="img" aria-label="Map">🗺️</span>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/15 mb-8 uppercase">
                Places Explored
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setActiveIdx(destinations.indexOf(dest))}
                    className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      activeIdx === destinations.indexOf(dest)
                        ? 'border-[#00e5ff]/35 bg-[#00e5ff]/8'
                        : 'border-white/8 bg-white/2 hover:border-[#00e5ff]/20'
                    }`}
                  >
                    <span className="text-base" role="img" aria-label={dest.name}>{dest.emoji}</span>
                    <span className="font-mono text-[10px] tracking-[0.08em] text-[#00e5ff]">{dest.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
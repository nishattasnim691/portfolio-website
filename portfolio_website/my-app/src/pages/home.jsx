import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Designing intelligent systems with TensorFlow, PyTorch, and scikit-learn — from NLP pipelines to multimodal misinformation detection.',
    accent: 'text-[#00e5ff]',
    bg: 'bg-[#00e5ff]/8',
    border: 'border-[#00e5ff]/15',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'Building modern web applications with React, Vite, and Python — from API design to pixel-perfect, accessible interfaces.',
    accent: 'text-[#ffab40]',
    bg: 'bg-[#ffab40]/8',
    border: 'border-[#ffab40]/15',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Research & Innovation',
    desc: 'Conducting academic research in emerging technologies — explainable AI, autonomous systems, and natural language processing.',
    accent: 'text-purple-400',
    bg: 'bg-purple-400/8',
    border: 'border-purple-400/15',
  },
];

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '4+', label: 'Languages Mastered' },
  { value: '2026', label: 'Expected Graduate' },
  { value: '∞',   label: 'Curiosity Level' },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 bg-grid pt-16">
        {/* Ambient orbs */}
        <div className="orb w-[500px] h-[500px] top-[15%] left-[8%] bg-[#00e5ff]/6" />
        <div className="orb w-[360px] h-[360px] bottom-[20%] right-[6%] bg-[#ffab40]/5" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 w-full flex items-center gap-16">
          {/* Left: text */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 mb-10 animate-fade-up animate-fill-both">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#00e5ff] uppercase">
                Available for Opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-light leading-[1.02] tracking-[-0.03em] text-cream-50 mb-6 animate-fade-up animate-fill-both animate-delay-100"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>
              Hi, I'm{' '}
              <em className="text-gradient not-italic">Nishat</em>
              <br />
              <span className="text-navy-600 dark:text-navy-400">Tasnim</span>
            </h1>

            {/* Role line */}
            <p className="font-mono text-[10px] tracking-[0.22em] text-navy-400 uppercase mb-6 animate-fade-up animate-fill-both animate-delay-200">
              ECE Student &nbsp;·&nbsp; AI Researcher &nbsp;·&nbsp; Web Developer
            </p>

            {/* Description */}
            <p className="text-base text-navy-300 max-w-lg leading-[1.8] mb-10 animate-fade-up animate-fill-both animate-delay-300">
              Undergraduate at{' '}
              <span className="text-cream-100 font-medium">North South University</span>,
              building at the intersection of intelligent systems, elegant engineering, and technology that matters.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up animate-fill-both animate-delay-400">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00e5ff] text-navy-950 font-semibold text-sm tracking-wide hover:bg-[#00cfea] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#00e5ff]/20"
              >
                View Projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/10 text-navy-200 font-medium text-sm tracking-wide hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right: stat column */}
          <div className="hidden lg:flex flex-col gap-4 shrink-0 animate-fade-up animate-fill-both animate-delay-500">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="w-36 text-center p-5 rounded-2xl card-glass-dark hover:border-[#00e5ff]/20 transition-colors duration-300"
              >
                <span className="font-serif text-3xl font-light text-gradient block leading-none mb-1.5">
                  {value}
                </span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-navy-500 block">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-float pointer-events-none">
          <span className="font-mono text-[9px] tracking-[0.2em] text-navy-400 uppercase">Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-navy-400">
            <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </section>

      {/* ── WHAT I DO ──────────────────────────────────────────────── */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-6xl mx-auto px-8">
          <RevealSection className="mb-16">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#00e5ff] block mb-3">
              What I Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-[-0.025em] text-cream-50">
              Areas of Expertise
            </h2>
          </RevealSection>

          {/* Service cards — separated by 1px lines */}
          <div className="divide-y divide-white/[0.05] border border-white/[0.06] rounded-2xl overflow-hidden">
            {services.map(({ num, icon, title, desc, accent, bg, border }, i) => (
              <RevealSection key={title} delay={i * 80}>
                <div className={`group flex items-start gap-8 p-8 md:p-10 bg-navy-950/40 hover:bg-navy-950/70 transition-all duration-300 relative`}>
                  {/* Number */}
                  <span className="font-mono text-[11px] tracking-[0.15em] text-navy-600 shrink-0 mt-1">{num}</span>

                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center ${accent}`}>
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl text-cream-50 mb-2 group-hover:text-gradient transition-all duration-300">
                      {title}
                    </h3>
                    <p className="text-sm text-navy-400 leading-relaxed max-w-2xl">{desc}</p>
                  </div>

                  {/* Arrow */}
                  <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="w-5 h-5 text-navy-700 group-hover:text-[#00e5ff] group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-950 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }, i) => (
              <RevealSection key={label} delay={i * 60}>
                <div className="text-center group">
                  <span className="font-serif text-5xl md:text-6xl font-light text-gradient block leading-none mb-3">
                    {value}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-navy-500">
                    {label}
                  </span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
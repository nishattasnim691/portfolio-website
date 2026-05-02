import { useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const projects = [
  {
    id: 1,
    featured: true,
    category: 'AI / ML',
    categoryStyle: 'text-[#00e5ff] bg-[#00e5ff]/8 border-[#00e5ff]/20',
    accentBar: 'from-[#00e5ff] to-[#00b8d4]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-[#00e5ff] to-[#00b8d4]',
    title: 'Explainable Multimodal Misinformation Detection',
    desc: 'A system leveraging large language models (LLMs) to detect misinformation on social media. Analyzes text, images, and video content to identify and explain why content is classified as misinformation — with interpretable, user-facing results.',
    tags: [
      { label: 'Python',     style: 'text-blue-400 bg-blue-400/8 border-blue-400/20' },
      { label: 'TensorFlow', style: 'text-orange-400 bg-orange-400/8 border-orange-400/20' },
      { label: 'NLP',        style: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20' },
      { label: 'LLM',        style: 'text-purple-400 bg-purple-400/8 border-purple-400/20' },
      { label: 'Multimodal', style: 'text-[#00e5ff] bg-[#00e5ff]/8 border-[#00e5ff]/20' },
    ],
  },
  {
    id: 2,
    featured: false,
    category: 'System Design',
    categoryStyle: 'text-[#ffab40] bg-[#ffab40]/8 border-[#ffab40]/20',
    accentBar: 'from-[#ffab40] to-[#ff7043]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-[#ffab40] to-[#ff7043]',
    title: 'Disaster Relief Management System',
    desc: 'A comprehensive platform for coordinating disaster relief efforts — managing resources, tracking affected zones, and routing aid to those in need in real time. Built with scalability and urgency in mind.',
    tags: [
      { label: 'System Design', style: 'text-[#ffab40] bg-[#ffab40]/8 border-[#ffab40]/20' },
      { label: 'Database',      style: 'text-blue-400 bg-blue-400/8 border-blue-400/20' },
      { label: 'Real-time',     style: 'text-red-400 bg-red-400/8 border-red-400/20' },
      { label: 'Java',          style: 'text-orange-400 bg-orange-400/8 border-orange-400/20' },
    ],
  },
  {
    id: 3,
    featured: false,
    category: 'Web Dev',
    categoryStyle: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20',
    accentBar: 'from-emerald-400 to-teal-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-400',
    title: 'Personal Portfolio Website',
    desc: 'A modern, responsive portfolio showcasing projects, skills, and travel adventures. Built with React, Vite, and Tailwind CSS — with full dark mode support and smooth animations.',
    tags: [
      { label: 'React',       style: 'text-[#00e5ff] bg-[#00e5ff]/8 border-[#00e5ff]/20' },
      { label: 'Vite',        style: 'text-purple-400 bg-purple-400/8 border-purple-400/20' },
      { label: 'Tailwind CSS', style: 'text-teal-400 bg-teal-400/8 border-teal-400/20' },
      { label: 'JavaScript',  style: 'text-[#ffab40] bg-[#ffab40]/8 border-[#ffab40]/20' },
    ],
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

function TagChip({ label, style }) {
  return (
    <span className={`tag ${style}`}>{label}</span>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          tag="Portfolio"
          title="My Projects"
          subtitle="A showcase of systems, tools, and ideas I've brought to life — from AI research to full-stack web development."
        />

        {/* ── FEATURED ─────────────────────────────────────────── */}
        {featured && (
          <Reveal className="mb-4">
            <div className="group relative rounded-2xl card-glass-dark overflow-hidden hover:border-[#00e5ff]/20 transition-all duration-300">
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${featured.accentBar}`} />
              {/* Ambient glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00e5ff]/4 blur-3xl pointer-events-none" />

              <div className="relative p-8 md:p-12">
                {/* Header row */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className={`w-12 h-12 rounded-xl ${featured.iconBg} flex items-center justify-center text-white`}>
                    {featured.icon}
                  </div>
                  <span className={`tag ${featured.categoryStyle}`}>{featured.category}</span>
                  <span className="tag text-[#00e5ff] bg-[#00e5ff]/6 border-[#00e5ff]/15">
                    ★ Featured
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-4xl font-light tracking-[-0.025em] text-cream-50 mb-5 leading-[1.1] max-w-3xl">
                  {featured.title}
                </h2>
                <p className="text-sm md:text-base text-navy-400 leading-[1.85] mb-7 max-w-2xl">
                  {featured.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <TagChip key={tag.label} {...tag} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── OTHER PROJECTS ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <div className="group relative h-full rounded-2xl card-glass-dark overflow-hidden hover:border-[#00e5ff]/15 hover:-translate-y-1 transition-all duration-300">
                {/* Hover accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.accentBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="p-8 flex flex-col h-full">
                  {/* Icon + category */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                    <span className={`tag ${project.categoryStyle}`}>{project.category}</span>
                  </div>

                  <h3 className="font-serif text-xl font-light tracking-[-0.015em] text-cream-50 mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-navy-400 leading-[1.8] mb-6 flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TagChip key={tag.label} {...tag} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <Reveal>
          <div className="text-center p-12 rounded-2xl border border-[#00e5ff]/10 bg-[#00e5ff]/2">
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#00e5ff] mb-4">What's Next</p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-cream-50 mb-3">
              More Coming Soon
            </h3>
            <p className="text-sm text-navy-500 mb-8 max-w-sm mx-auto leading-relaxed">
              I'm always building something new. Follow along on GitHub to see the latest work.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#00e5ff]/25 text-[#00e5ff] text-sm font-medium hover:bg-[#00e5ff] hover:text-navy-950 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
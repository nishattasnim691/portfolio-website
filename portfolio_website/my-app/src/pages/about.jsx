import { useEffect, useRef, useState } from 'react';
import PageHeader from '../components/PageHeader';

const techSkills = [
  {
    group: 'Languages',
    items: [
      { label: 'Python',     color: 'chip-blue' },
      { label: 'JavaScript', color: 'chip-amber' },
      { label: 'Java',       color: 'chip-orange' },
      { label: 'C++',        color: 'chip-purple' },
    ],
  },
  {
    group: 'Web Dev',
    items: [
      { label: 'React',      color: 'chip-cyan' },
      { label: 'HTML',       color: 'chip-orange' },
      { label: 'CSS',        color: 'chip-blue' },
      { label: 'Bootstrap',  color: 'chip-purple' },
    ],
  },
  {
    group: 'ML / AI',
    items: [
      { label: 'TensorFlow', color: 'chip-orange' },
      { label: 'PyTorch',    color: 'chip-red' },
      { label: 'Scikit-learn', color: 'chip-green' },
    ],
  },
];

const chipClasses = {
  'chip-cyan':   'text-[#00e5ff] border-[#00e5ff]/25 bg-[#00e5ff]/6',
  'chip-blue':   'text-blue-400 border-blue-400/25 bg-blue-400/6',
  'chip-amber':  'text-[#ffab40] border-[#ffab40]/25 bg-[#ffab40]/6',
  'chip-orange': 'text-orange-400 border-orange-400/25 bg-orange-400/6',
  'chip-purple': 'text-purple-400 border-purple-400/25 bg-purple-400/6',
  'chip-green':  'text-emerald-400 border-emerald-400/25 bg-emerald-400/6',
  'chip-red':    'text-red-400 border-red-400/25 bg-red-400/6',
};

const softSkills = ['Problem Solving', 'Teamwork & Collaboration', 'Communication', 'Time Management'];

const proficiency = [
  { label: 'Python',           pct: 75, color: 'from-[#00e5ff] to-[#00b8d4]' },
  { label: 'JavaScript',       pct: 70, color: 'from-[#ffab40] to-[#ff9020]' },
  { label: 'Machine Learning', pct: 65, color: 'from-purple-400 to-indigo-400' },
  { label: 'Web Development',  pct: 80, color: 'from-emerald-400 to-teal-400' },
];

function SkillBar({ label, pct, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-navy-300">{label}</span>
        <span className="font-mono text-[10px] text-[#00e5ff]">{pct}%</span>
      </div>
      <div className="h-[2px] rounded-full bg-white/6 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} progress-bar-fill`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
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

function Card({ children, className = '' }) {
  return (
    <div className={`p-8 rounded-2xl card-glass-dark hover:border-[#00e5ff]/15 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

function CardLabel({ children }) {
  return (
    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy-500 mb-5">{children}</p>
  );
}

function CardTitle({ icon, children }) {
  return (
    <h3 className="font-serif text-xl text-cream-50 mb-4 flex items-center gap-3">
      <span className="w-8 h-8 rounded-lg bg-[#00e5ff]/8 border border-[#00e5ff]/15 flex items-center justify-center text-[#00e5ff] shrink-0">
        {icon}
      </span>
      {children}
    </h3>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          tag="About Me"
          title="Who I Am"
          subtitle="A curious engineer driven by a passion for intelligent systems and elegant solutions."
        />

        {/* ── BENTO: BIO CARDS ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Reveal>
            <Card>
              <CardLabel>The Person</CardLabel>
              <CardTitle
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                }
              >
                Nishat Tasnim
              </CardTitle>
              <p className="text-sm text-navy-400 leading-[1.85] mb-6">
                Undergraduate student of Electrical and Computer Engineering at North South University.
                With a deep passion for technology, programming, and research, I've built skills in
                Python, JavaScript, and C++, while diving deeper into Artificial Intelligence and
                Machine Learning. My curiosity drives me to tackle challenges that push my limits.
              </p>
              <div className="pt-5 border-t border-white/5">
                <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-navy-600 mb-1.5">Currently at</p>
                <p className="text-sm font-medium text-cream-100">North South University</p>
                <p className="text-xs text-navy-500">B.Sc. Electrical &amp; Computer Engineering</p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card>
              <CardLabel>The Vision</CardLabel>
              <CardTitle
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                }
              >
                Looking Ahead
              </CardTitle>
              <p className="text-sm text-navy-400 leading-[1.85] mb-5">
                Aiming to specialize in AI/ML research and contribute to intelligent systems that
                make a real difference — working on cutting-edge projects in autonomous systems,
                data science, and natural language processing. Always committed to continuous
                learning and using technology as a force for good.
              </p>
              <div className="space-y-2.5">
                {['NLP & Language Models', 'Autonomous Systems', 'Multimodal AI Research'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full border border-[#00e5ff]/30 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2.5" className="w-2.5 h-2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm text-navy-400">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* ── BENTO: SKILLS ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Technical Skills */}
          <Reveal delay={40}>
            <Card>
              <CardLabel>Technical Skills</CardLabel>
              <div className="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#00e5ff]">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
                <span className="font-serif text-lg text-cream-50">Stack Overview</span>
              </div>
              <div className="space-y-5">
                {techSkills.map(({ group, items }) => (
                  <div key={group}>
                    <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-navy-600 mb-2.5">{group}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map(({ label, color }) => (
                        <span
                          key={label}
                          className={`tag ${chipClasses[color]}`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Soft Skills */}
          <Reveal delay={120}>
            <Card>
              <CardLabel>Soft Skills</CardLabel>
              <div className="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#ffab40]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="font-serif text-lg text-cream-50">People & Process</span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 py-3 group hover:text-[#00e5ff] transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#00e5ff]/50 group-hover:text-[#00e5ff] shrink-0 transition-colors duration-200">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-navy-400 group-hover:text-navy-200 transition-colors duration-200">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* ── PROFICIENCY BARS ─────────────────────────────────────── */}
        <Reveal delay={60}>
          <Card>
            <CardLabel>Skill Proficiency</CardLabel>
            <div className="flex items-center gap-2 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#00e5ff]">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6"  y1="20" x2="6"  y2="14" />
              </svg>
              <span className="font-serif text-lg text-cream-50">Self-assessed Proficiency</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
              {proficiency.map((item) => (
                <SkillBar key={item.label} {...item} />
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
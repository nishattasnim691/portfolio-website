import { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const contactInfo = [
  {
    label: 'Email',
    value: 'nishat@gmail.com',
    href: 'mailto:nishat@gmail.com',
    cta: 'Send Email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+880 1234 567890',
    href: 'tel:+8801234567890',
    cta: 'Call Now',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    cta: 'View Map',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const availability = [
  { label: 'Open to Internships',        open: true },
  { label: 'Research Collaborations',    open: true },
  { label: 'Freelance Projects',         open: true },
  { label: 'Full-time Roles',            open: false, note: 'post-grad' },
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

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'success'

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email is required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('success');
    setForm(initialForm);
    setTimeout(() => setStatus(null), 5000);
  };

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const inputClass = (key) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-navy-900/50 text-cream-50 placeholder-navy-600 outline-none input-base ${
      errors[key]
        ? 'border-red-500/40 focus:border-red-400/60'
        : 'border-white/8 focus:border-[#00e5ff]/35'
    }`;

  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        <PageHeader
          tag="Contact"
          title="Get In Touch"
          subtitle="Have a question or want to collaborate? I'd love to hear from you."
        />

        {/* ── INFO CARDS ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {contactInfo.map(({ label, value, href, cta, icon }, i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="group p-6 rounded-2xl card-glass-dark text-center hover:border-[#00e5ff]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/6 border border-[#00e5ff]/12 flex items-center justify-center text-[#00e5ff] mx-auto mb-4 group-hover:bg-[#00e5ff]/12 group-hover:border-[#00e5ff]/25 transition-all duration-200">
                  {icon}
                </div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy-600 mb-1">{label}</p>
                <p className="text-sm font-medium text-cream-100 mb-4">{value}</p>
                <a
                  href={href}
                  className="inline-block font-mono text-[10px] tracking-[0.08em] text-[#00e5ff] border border-[#00e5ff]/25 px-4 py-1.5 rounded-full hover:bg-[#00e5ff] hover:text-navy-950 transition-all duration-200"
                >
                  {cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── FORM + SIDEBAR ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="p-8 rounded-2xl card-glass-dark h-full">
              <div className="flex items-center gap-3 mb-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[#00e5ff]">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span className="font-serif text-xl text-cream-50">Send a Message</span>
              </div>

              {/* Success toast */}
              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message sent! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-navy-600 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder="Nishat Tasnim"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-navy-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      placeholder="you@example.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-navy-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    placeholder="What's this about?"
                    className={inputClass('subject')}
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-[9px] tracking-[0.18em] uppercase text-navy-600 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Your message here..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00e5ff] text-navy-950 font-semibold text-sm tracking-wide hover:bg-[#00cfea] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#00e5ff]/15"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Social links */}
            <Reveal delay={80}>
              <div className="p-7 rounded-2xl card-glass-dark">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy-600 mb-1">Socials</p>
                <h3 className="font-serif text-lg text-cream-50 mb-5">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-2.5">
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex flex-col items-center gap-2 py-3.5 px-2 rounded-xl border border-white/6 text-navy-500 hover:text-[#00e5ff] hover:border-[#00e5ff]/20 hover:bg-[#00e5ff]/4 transition-all duration-200"
                    >
                      {icon}
                      <span className="font-mono text-[9px] tracking-[0.05em]">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Availability */}
            <Reveal delay={140}>
              <div className="p-7 rounded-2xl card-glass-dark">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-navy-600 mb-1">Status</p>
                <h3 className="font-serif text-lg text-cream-50 mb-5">Availability</h3>
                <div className="divide-y divide-white/[0.04]">
                  {availability.map(({ label, open, note }) => (
                    <div key={label} className="flex items-center justify-between py-3">
                      <span className="text-sm text-navy-400">{label}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            open ? 'bg-emerald-400' : 'bg-navy-600'
                          }`}
                        />
                        <span
                          className={`font-mono text-[10px] ${
                            open ? 'text-emerald-400' : 'text-navy-600'
                          }`}
                        >
                          {open ? 'Open' : note || 'Closed'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
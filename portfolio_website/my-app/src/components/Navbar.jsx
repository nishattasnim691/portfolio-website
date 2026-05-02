import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/travel', label: 'Travel' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar({ isDark, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 dark:bg-navy-950/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-black/5 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-normal tracking-tight text-navy-900 dark:text-cream-50 hover:opacity-70 transition-opacity"
        >
          <span className="text-gradient">N</span>ishat
          <span className="text-[#00e5ff] ml-[1px]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg group ${
                  active
                    ? 'text-[#00e5ff]'
                    : 'text-navy-700 dark:text-cream-200/70 hover:text-navy-900 dark:hover:text-cream-50'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-px bg-[#00e5ff] transition-all duration-300 ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right: theme + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 bg-white/60 dark:bg-navy-800/60 text-navy-700 dark:text-cream-100 hover:border-[#00e5ff]/40 hover:text-[#00e5ff] transition-all duration-200"
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-navy-800 dark:text-cream-100"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-cream-50/95 dark:bg-navy-900/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#00e5ff] bg-[#00e5ff]/5'
                    : 'text-navy-700 dark:text-cream-200/70 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
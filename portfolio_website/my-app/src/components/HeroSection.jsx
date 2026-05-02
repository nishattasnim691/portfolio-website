import React from 'react';
import './HeroSection.css';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ onScroll, isDark }) {
  return (
    <section className={`hero-section ${isDark ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hello, I'm a Developer</h1>
          <p className="hero-subtitle">
            Creating innovative digital solutions with modern technologies
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="lg" onClick={() => onScroll('projects')}>
              View My Work
            </Button>
            <Button variant="secondary" size="lg" onClick={() => onScroll('contact')}>
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="hero-animation">
          <div className="floating-card">
            <span className="code-symbol">&lt;</span>
          </div>
          <div className="floating-card delayed">
            <span className="code-symbol">/&gt;</span>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => onScroll('about')}>
        <ChevronDown size={24} />
      </button>
    </section>
  );
}

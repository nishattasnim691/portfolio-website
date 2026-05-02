import React from 'react';
import './SkillsList.css';

export default function SkillsList({ isDark }) {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'CSS/SASS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Webpack', 'VS Code', 'Figma'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Work', 'Communication', 'Leadership'] },
  ];

  return (
    <div className={`skills-container ${isDark ? 'dark' : 'light'}`}>
      <div className="skills-grid">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

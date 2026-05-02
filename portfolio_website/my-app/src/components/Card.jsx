import React from 'react';
import './Card.css';

export default function Card({ 
  title, 
  description, 
  image, 
  tags = [],
  onClick,
  children,
  ...props 
}) {
  return (
    <div className="card" onClick={onClick} {...props}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import './Icon.css';

export const Icon = ({ src, alt, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className="icon" src={src} alt={alt} />
    </a>
  );
};

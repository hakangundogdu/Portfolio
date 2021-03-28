import React from 'react';
import './Header.css';

export const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
  );
};

import React from 'react';
import { NavLink } from './NavLink';
import './Nav.css';

export const Nav = () => {
  return (
    <ul className="nav">
      <NavLink link="#home" title="Home" />
      <NavLink link="#about" title="About" />
      <NavLink link="#work" title="Work" />
      <NavLink link="#skills" title="Skills" />
      <NavLink link="#testimonials" title="Testimonials" />
      <NavLink link="#contact" title="Contact" />
    </ul>
  );
};

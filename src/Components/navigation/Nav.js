import React, { useState } from 'react';
import { NavLink } from './NavLink';
import './Nav.css';
import { Hamburger } from './Hamburger';

export const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav">
      <ul className={toggle ? 'open' : 'close'}>
        <NavLink link="#home" title="Home" />
        <NavLink link="#about" title="About" />
        <NavLink link="#work" title="Work" />
        <NavLink link="#skills" title="Skills" />
        <NavLink link="#testimonials" title="Testimonials" />
        <NavLink link="#contact" title="Contact" />
      </ul>
      <Hamburger
        onToggle={() => {
          setToggle(!toggle);
        }}
      />
    </div>
  );
};

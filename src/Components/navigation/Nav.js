import React, { useState } from 'react';
import { NavLink } from './NavLink';
import './Nav.css';
import { Hamburger } from './Hamburger';

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="nav">
      <ul className={toggle ? 'open' : 'close'}>
        <NavLink
          link="#home"
          title="Home"
          onToggle={() => {
            setToggle(!toggle);
          }}
        />
        <NavLink
          link="#about"
          title="About"
          onToggle={() => {
            setToggle(!toggle);
          }}
        />
        <NavLink
          link="#work"
          title="Work"
          onToggle={() => {
            setToggle(!toggle);
          }}
        />
        <NavLink
          link="#skills"
          title="Skills"
          onToggle={() => {
            setToggle(!toggle);
          }}
        />
        <NavLink
          link="#testimonials"
          title="Testimonials"
          onToggle={() => {
            setToggle(!toggle);
          }}
        />
        <NavLink
          link="#contact"
          title="Contact"
          onToggle={() => {
            setToggle(!toggle);
          }}
        />
      </ul>
      <Hamburger
        onToggle={() => {
          setToggle(!toggle);
        }}
      />
    </div>
  );
};

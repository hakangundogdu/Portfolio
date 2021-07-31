import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="current">
        <a className="nav-items" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="nav-items" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav-items" href="#work">
          Work
        </a>
      </li>
      <li>
        <a className="nav-items" href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a className="nav-items" href="#testimonials">
          Testimonials
        </a>
      </li>
      <li>
        <a className="nav-items" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Nav;

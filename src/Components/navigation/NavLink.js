import React from 'react';

export const NavLink = ({ link, title, onToggle }) => {
  return (
    <li>
      <a className="nav-items" href={link} onClick={onToggle}>
        {title}
      </a>
    </li>
  );
};

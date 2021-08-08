import React from 'react';

export const NavLink = ({ link, title }) => {
  return (
    <li>
      <a className="nav-items" href={link}>
        {title}
      </a>
    </li>
  );
};

import React from 'react';
import { ReactComponent as Bars } from 'assets/bars.svg';

export const Hamburger = ({ onToggle }) => {
  return (
    <button className="bar" onClick={onToggle}>
      <Bars />}
    </button>
  );
};

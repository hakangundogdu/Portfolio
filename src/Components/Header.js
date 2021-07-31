import React from 'react';
import './Header.css';

export const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <p className="intro">Developer & Designer</p>
      <div className="icon-container">
        <img className="icon" src={'./Assets/mail.png'} alt="mail icon" />
        <img
          className="icon"
          src={'../Assets/linkedin.png'}
          alt="linkedin icon"
        />
        <img className="icon" src={'../Assets/github.png'} alt="github icon" />
        <img
          className="icon"
          src={'../Assets/twitter.png'}
          alt="twitter icon"
        />
      </div>
      <img className="arrow" src={'../Assets/arrow.png'} alt="arrow" />
    </div>
  );
};

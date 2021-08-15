import React from 'react';
import './Header.css';
import { Icon } from './Icon';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';

export const Header = ({ title }) => {
  return (
    <div className="header" id="home">
      <h1 className="title">{title}</h1>
      <p className="intro">Developer & Designer</p>
      <div className="icon-container">
        <Icon
          src={mail}
          alt="mail icon"
          link="mailto:hakan.gundogdu@gmail.com"
        />
        <Icon
          src={linkedin}
          alt="linkedin icon"
          link="https://www.linkedin.com/in/hakangundogdu1/"
        />
        <Icon
          src={github}
          alt="github icon"
          link="https://github.com/hakangundogdu"
        />
        <Icon
          src={twitter}
          alt="twitter icon"
          link="https://twiter.com/hakancode"
        />
      </div>
    </div>
  );
};

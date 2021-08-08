import React from 'react';
import './Footer.css';
import { Icon } from './Icon';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import link from '../assets/link.png';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h2 className="footer-title">Contact Me</h2>
      <div className="footer-container">
        <div className="contact-icon">
          <Icon
            src={mail}
            alt="mail icon"
            link="mailto:hakan.gundogdu@gmail.com"
          />
          <a
            href="mailto:hakan.gundogdu@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            hakan.gundogdu@gmail.com
          </a>
        </div>
        <div className="contact-icon">
          <Icon
            src={linkedin}
            alt="linkedin icon"
            link="https://www.linkedin.com/in/hakangundogdu1/"
          />
          <a
            href="https://www.linkedin.com/in/hakangundogdu1/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hakangundogdu1/
          </a>
        </div>
        <div className="contact-icon">
          <Icon
            src={github}
            alt="github icon"
            link="https://github.com/hakangundogdu"
          />
          <a
            href="https://github.com/hakangundogdu"
            target="_blank"
            rel="noreferrer"
          >
            github.com/hakangundogdu
          </a>
        </div>
        <div className="contact-icon">
          <Icon
            src={link}
            alt="link icon"
            link="https://upwork.com/freelancers/hakan"
          />
          <a
            href="https://upwork.com/freelancers/hakan"
            target="_blank"
            rel="noreferrer"
          >
            upwork.com/freelancers/hakan
          </a>
        </div>
        <div className="contact-icon">
          <Icon
            src={twitter}
            alt="twitter icon"
            link="https://twiter.com/hakancode"
          />
          <a
            href="https://twiter.com/hakancode"
            target="_blank"
            rel="noreferrer"
          >
            twiter.com/hakancode
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

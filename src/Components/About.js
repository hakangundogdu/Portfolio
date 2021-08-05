import React from 'react';
import './About.css';
import hakan from '../Assets/hakan.png';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="image-container"></div>
      <img className="profile-image" src={hakan} alt="Hakan" />
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hi there! I am Hakan! After working in finance industry for 10 years,
          I switched to graphic design and programming. For the last 3 years,
          I’ve worked with almost 200 clients. I am passionate about learning
          new things and acquire new skills. I have experince with HTML, CSS,
          Javascript, and Pyhton, Currently I am learning React and React Native
        </p>
      </div>
    </div>
  );
};

export default About;

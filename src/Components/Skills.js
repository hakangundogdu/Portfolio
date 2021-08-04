import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        <div className="skills-left">
          <h2 className="skills-sub">Graphic Design</h2>
          <p>Adobe Illustrator / Photoshop / Indesign</p>
          <p>Figma / Sketch / Canva</p>
          <p>PowerPoint / Keynote / Google Slides</p>
        </div>
        <div className="skills-right">
          <h2 className="skills-sub">Graphic Design</h2>
          <p>HTML / CSS / Javascript</p>
          <p>React / React Native</p>
          <p>Python / Django</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

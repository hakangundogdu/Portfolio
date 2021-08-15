import React from 'react';
import './Work.css';
import w1 from 'assets/w1.png';
import w2 from 'assets/w2.png';
import w3 from 'assets/w3.png';
import w4 from 'assets/w4.png';

const Work = () => {
  return (
    <div className="work" id="work">
      <h1 className="title">Work</h1>
      <div className="boxes">
        <div className="box">
          <img className="work-img" src={w1} alt="sample work" />
        </div>
        <div className="box">
          <img className="work-img" src={w2} alt="sample work" />
        </div>
        <div className="box">
          <img className="work-img" src={w3} alt="sample work" />
        </div>
        <div className="box">
          <img className="work-img" src={w4} alt="sample work" />
        </div>
      </div>
    </div>
  );
};

export default Work;

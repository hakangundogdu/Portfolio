import React from 'react';
import './Testimonials2.css';
import quote from '../assets/quote.png';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="test-title">Testimonials</h1>
      <div className="main-container">
        <div className="test-container">
          <img
            className="quote"
            src={quote}
            alt={quote}
            width="20px"
            height="18px"
          />
          <p className="test-text">
            It was a pleasure to work with Hakan. Brilliant communication from
            the very beginning. Quality of work was to an excellent standard &
            completed well before the deadline - which was a very tight deadline
            to start with. Would most definitely work with Hakan again & I would
            highly recommend him to anyone looking for high quality work.
          </p>
          <p className="test-name">-Claire Dobson</p>
        </div>
        <div className="test-container">
          <img
            className="quote"
            src={quote}
            alt={quote}
            width="20px"
            height="18px"
          />
          <p className="test-text">
            Hakan was brilliant! great design, VERY fast , great flexibility in
            giving me different options when I asked for them, and adapting his
            work when I expanded the contract a bit. I would recommend Hakan to
            anyone looking for great PPT skills , flexible, positive attitude,
            and good value for money. Thank you Hakan, I'll be back!
          </p>
          <p className="test-name">-Alison Hatherall</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

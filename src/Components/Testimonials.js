import React, { useState } from 'react';
import './Testimonials.css';
import quote from '../assets/quote.png';
import leftarrow from '../assets/left-arrow.png';
import rightarrow from '../assets/right-arrow.png';

const Testimonials = () => {
  const testimonials = [
    'It was a pleasure to work with Hakan. Brilliant communication from the very beginning. Quality of work was to an excellent standard & completed well before the deadline - which was a very tight deadline to start with. Would most definitely work with Hakan again & I would highly recommend him to anyone looking for high quality work. Claire Dobson',
    "Hakan was brilliant! great design, VERY fast , great flexibility in giving me different options when I asked for them, and adapting his work when I expanded the contract a bit. Hakan was recommended to me by a friend and colleague, and I'm very glad I followed the recommendation. I would recommend Hakan to anyone looking for great PPT skills , flexible, positive attitude, and good value for money. Thank you Hakan, I'll be back! Alison Hatherall",
    'A collaboration that continues to be extremely successful. Hakan is extremely responsive, accountable, efficient and the quality of his work remains undisputed! Looking forward to our next collaboration, because there will be for sure. Lorraine Cane',
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="testimonials" id="testimonials">
      <h1 className="test-title">Testimonials</h1>
      <img
        className="quote"
        src={quote}
        alt={quote}
        width="20px"
        height="18px"
      />
      <div className="test-container">
        <img
          className="arrow"
          src={leftarrow}
          alt={leftarrow}
          onClick={() => (index === 0 ? setIndex(2) : setIndex(index - 1))}
          width="40px"
          height="40px"
        />
        <p>{testimonials[index]}</p>
        <img
          className="arrow"
          src={rightarrow}
          alt={rightarrow}
          onClick={() => (index === 2 ? setIndex(0) : setIndex(index + 1))}
          width="40px"
          height="40px"
        />
      </div>
    </div>
  );
};

export default Testimonials;

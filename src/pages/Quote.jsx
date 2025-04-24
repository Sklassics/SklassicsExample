import React from 'react';
import { FaStar } from 'react-icons/fa';
import './quote.css';

const Quote = () => {
  return (
    <>
  
      <div className="quote-container">
        <div className="quote-inner">
        <div className="star-divider">
         {/* line desing and star */}
        <FaStar className="star" />
        <div className="line"></div>
        <FaStar className="star" />
      </div>
          <p className="quote-main">
            THE MOST EXCITING ATTRACTIONS ARE BETWEEN <br />
            <span className="animated-text">OPPOSITES THAT NEVER MEET</span>. PEOPLE THINK THEY'VE<br />
            CONNECTED THROUGH ATTRACTION, BUT FOUND <br />
            SOMEONE TO FORGET THEMSELVES. THE LESS<br />
            IMPORTANT A MEETING, <span className="animated-text">THE MORE YOU WANT IT</span>
          </p>

          <p className="quote-ref">
            <em>The Philosophy of Andy Sklassics</em>
            <span className="book">(From A and B back Again)</span>
          </p>
          <div className="star-divider">
          <FaStar className="star" />
          <div className="line"></div>
          <FaStar className="star" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Quote;

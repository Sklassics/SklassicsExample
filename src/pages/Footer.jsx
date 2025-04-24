import React from 'react';
import './footer.css';

import symbol1 from '../assets/symbole-1.png';
import symbol2 from '../assets/symbole-2.png';
import symbol3 from '../assets/symbole-3.png';
import symbol4 from '../assets/symbole-4.png';
import symbol5 from '../assets/symbole-5.png';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-link">
        <a href="#">INSTAGRAM</a>
        <a href="#">DRIBBBLE</a>
        <a href="#">LINKEDIN</a>
        <span className="more">+</span>
        <span className="more">+</span>
        <div className="footer-desc">
          <p>Curated for Art Lovers</p>
          <p>Collection of 80+ Iconic Works</p>
          <p>Est. 2025 // sklassics™</p>
        </div>
          {/* … */}
    <img src={symbol1} className="float-icon icon1" alt="$1" />
    <img src={symbol2} className="float-icon icon2" alt="$2" />
    <img src={symbol3} className="float-icon icon3" alt="$3" />
    <img src={symbol4} className="float-icon icon4" alt="$4" />
    <img src={symbol5} className="float-icon icon5" alt="$5" />
    {/* … */}
      </div>
      <div className="footer-center">
        <div className="footer-logo">
          <div className="logo-back">
            <img
              src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png"
              alt="sklassics"
            />
          </div>
          <p className="copyright">&copy; 2025 sklassics, All Rights Reserved</p>
        </div>
      </div>
      <div className="sts-timeline">
        {[-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30].map((n) => (
          <div key={n} className="tick" data-label={n === 0 ? "0" : n}></div>
        ))}
      </div>
  </footer>
);

export default Footer;

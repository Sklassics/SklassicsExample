import React from 'react';
import './about.css';

import past from '../assets/past.png';
const About = () => {
  return (
    <>
    <div className="about-container">
        {/* image */}
        <img src={past} alt='Dive In' className='tube'/>
        
        {/* Right conatiner */}
        <div className="about-info">
        <p>&infin;<br/>PRAGUE, CZECH REPUBLIC,<span>2025</span></p>
        <p><strong>ANDY WARHOL</strong></p>
        <p>(EXHIBITION) THE MASTER OF POP ART</p>
        </div>
        {/* left conatiner */}
        <div className="about-left">
            <img src="https://cdn.prod.website-files.com/6718c8afa78e156621f3a2ed/671a057aee42ab7a8e9b0294_Andy-text.svg"/>
        </div>
    </div>
    </>
  )
}

export default About

import React from 'react'
import './hero.css'

import Traing from '../assets/it-traing.jpg'
import soup from '../assets/soup.png';
import pi from '../assets/pi.jpg';
import car from '../assets/car.png';
import she from '../assets/she.png';
import female from '../assets/female.png';
import changel from '../assets/changel.png';
import cors from '../assets/cors.png';
import flower from '../assets/flower.png';

const text = 'SKLASSICS';
const backgrounds  = [Traing, soup, pi, car, she, female, changel, cors, flower];
const Hero = () => {
  return (
   <>
   <div className="hero-conatiner">
    <div className="hero-text">
      {text.split('').map((char, index) =>
      (
        <span
        key={index}
        className='hero-letter'
        data-letter={char}
        style={{'--bg-img': `url(${backgrounds[index]})`}}
        >
          {char}
        </span>
      )
    )}
    </div>
   </div>
   </>
  )
}

export default Hero

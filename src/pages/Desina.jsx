import React from 'react';
import './desina.css';
import she from '../assets/she.png';
import soup from '../assets/soup.png';
import flower from '../assets/flower.png';
import blackglass from '../assets/blackglass.png';
import changel from '../assets/changel.png';
import car from '../assets/car.png';
import faces from '../assets/faces.png';
import desinMan from '../assets/desinMan.png';

const images = [
  she,
  soup,
  flower,
  blackglass,
  changel,
  car,
  faces,
  desinMan,
];

const Desina = () => {

  const looping = [...images, ...images];

  return (
    <div className="desina-wrapper">
      <div className="desina-left">
        <h2 className="desina-label">00_4</h2>
        <h1 className="desina-title">( EXPO )</h1>
        <div className="desina-text">
          <h3 className="clash-title">CULTURE CLASH</h3>
          <p>Bold colors and contrasts shine.</p>
          <p>Dynamic designs celebrate<br></br> forms, patterns, and the beauty of vivid hues.</p>
        </div>
      </div>

      <div className="desina-right">
        <div className="scroll">
          {looping.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i % images.length}`}
              className="desina-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Desina;

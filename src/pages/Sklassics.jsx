import React, { useEffect, useRef } from 'react';
import './sklassics.css';

import man from '../assets/man.png';
import soup from '../assets/soup.png';
import banana from '../assets/banana.png';

const imageData = [
  { id: 'man', src: man, alt: 'Main figure', className: 'center-man' },
  { id: 'banana', src: banana, alt: 'Banana', className: 'overlay-top-left' },
  { id: 'soup', src: soup, alt: 'Soup', className: 'overlay-top-right' }
];

const Sklassics = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        }),
      { threshold: 0.2 }
    );

    refs.current.forEach(img => img && observer.observe(img));

    return () => {
      refs.current.forEach(img => img && observer.unobserve(img));
    };
  }, []); 

  return (
    <div className="sklassics-hero">
      {imageData.map((img, i) => (
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          className={`image-item ${img.className}`} 
          ref={el => (refs.current[i] = el)}
        />
      ))}
    </div>
  );
};

export default Sklassics;

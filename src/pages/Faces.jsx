import React, { useState, useEffect } from 'react';
import '../pages/face.css';

import female from '../assets/female.png';
import vivid from '../assets/vivid.png';
import icon from '../assets/icon.png';
import tag from '../assets/tag.png';
import female1 from '../assets/female1.png';
import female2 from '../assets/female2.png';
import female4 from '../assets/female4.png';
import datted from '../assets/datted.png';

const faceImages = [female, female1, female2, female4];

const Faces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % faceImages.length);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="faces-conatiner">
      <div className="faces-left">
        <p className="faces-count">10 Faces<br/>
         1 Iconic Legend.
        </p>
     <img src={datted} alt='datted' className='datted-fixed'/>
      </div>
      <div
        className="faces-inner"
        style={{ cursor: isHovered ? `url(${tag}), auto` : 'auto' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating image in center */}
        <img
          src={faceImages[currentIndex]}
          alt={`face-${currentIndex}`}
          className="face-img rotating-img"
        />

        {/* Static vivid on top */}
        <img
          src={vivid}
          alt="vivid"
          className="face-img vivid-float"
        />

        {/* Static icon on bottom */}
        <img
          src={icon}
          alt="icon"
          className="face-img icon-float"
        />
      </div>
    </div>
  );
};

export default Faces;

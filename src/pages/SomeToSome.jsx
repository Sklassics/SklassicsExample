import React from 'react';
import './someToSome.css';

// Left‑nav words
const words = [
  'EXHIBIT', 'COLLECTION', 'POP',
  'EXPRESSION', 'INNOVATION', 'ICON',
  'MASTERPIECE', 'PAINT', 'PRINT',
  'ABSTRACT', 'BOLD', 'FAME',
  'SILKSCREEN', 'COLOR', 'INSPIRATION',
  'EXHIBITION', 'NYC', 'IMAGINATION',
  'NEON', 'TOUR'
];

// Center hero tickets (replace with your ticket image imports)
import ticket1 from '../assets/ticket1.png';
import ticket2 from '../assets/ticket2.png';
import ticket3 from '../assets/ticket3.png';


const tickets = [ ticket1, ticket2, ticket3];

const SomeToSome = () => (
  <div className="sts-wrapper">
    {/* — Left vertical word cloud — */}
    <nav className="sts-left">
      {words.map((w,i) => <span key={i} className="sts-word">{w}</span>)}
    </nav>

    {/* — Center hero — */}
    <section className="sts-center">
      <h1 className="sts-title">
        UNLOCK<br/>
        <span className="sts-highlight">the</span><br/>
        EXPERIENCE
      </h1>

      <div className="sts-tickets">
        {tickets.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`ticket-${i}`}
            className={`sts-ticket tc-${i+1}`}
          />
        ))}
      </div>

      <button className="sts-cta">EXPLORE AT YOUR OWN PACE</button>
    </section>

    {/* — Right schedule & crosshair — */}
    <aside className="sts-right">
      <div className="sts-schedule">
        <div className="sch-item">
          <span className="sch-date">14/11</span>
          <span className="sch-arrow">&gt;</span>
          <div className="sch-text">
            <p>Warhol Exhibit</p>
            <p>Prague, CZ</p>
          </div>
        </div>
        <div className="sch-item">
          <span className="sch-date">22/11</span>
          <div className="sch-dots">••••••••</div>
          <span className="sch-country">DE</span>
        </div>
      </div>
      {/* <div className="sts-crosshair">
        <div/><div/><div/>
        <div/><div/><div/>
        <div/><div/><div/>
      </div> */}
    </aside>
  </div>
);

export default SomeToSome;

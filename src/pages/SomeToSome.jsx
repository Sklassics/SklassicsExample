import React from 'react';
import './someToSome.css';

import ticket1 from '../assets/ticket1.png';
import ticket2 from '../assets/ticket2.png';
import ticket3 from '../assets/ticket3.png';

const words = [
  'EXHIBIT', 'COLLECTION', 'POP',
  'EXPRESSION', 'INNOVATION', 'ICON',
  'MASTERPIECE', 'PAINT', 'PRINT',
  'ABSTRACT', 'BOLD', 'FAME',
  'SILKSCREEN', 'COLOR', 'INSPIRATION',
  'EXHIBITION', 'NYC', 'IMAGINATION',
  'NEON', 'TOUR'
];

const tickets = [ticket1, ticket2, ticket3];

export const SomeToSome = () => (
  <div className="sts-wrapper">
    <nav className="sts-left">
      {words.map((w, i) => (
        <span key={i} className="sts-word">{w}</span>
      ))}
    </nav>

    <section className="sts-center">
      <h1 className="sts-title">
        UNLOCK<br />
        <span className="sts-highlight">the</span><br />
        EXPERIENCE
      </h1>

      <div className="sts-tickets">
        {tickets.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Ticket ${i + 1}`}
            loading="lazy"
            className={`sts-ticket tc-${i + 1}`}
          />
        ))}
      </div>

      <button className="sts-cta">EXPLORE AT YOUR OWN PACE</button>
    </section>

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

      <div className="sts-crosshair">
        <div/><div/><div/>
        <div/><div/><div/>
        <div/><div/><div/>
      </div>
    </aside>
  </div>
);

export default SomeToSome;

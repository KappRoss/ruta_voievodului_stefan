import React from 'react';
import './about.css';
import texts from "../../lib/aboutUs";

export default ({ loc }) => (
  <div className="about">
    <div className="about-title">{texts[loc].title}</div>
    <div className="about-text">
      
      {texts[loc].texts.map((k, i) => 
      <div style={{marginBottom: '30px'}} key={i}>{k}</div>
      )}
    </div>
    <div className="about-bottom" />
  </div>
);

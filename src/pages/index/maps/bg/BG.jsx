import React from 'react';
import { bg, active } from './bg.module.css';



export default ({ isActive, i }) => {
  const img = require('../../../../img/Moldova/'+(i+1)+'-1.jpg');
  return (
    <div
      stroke="white"
      strokeWidth="2.5"
      strokeMiterlimit="10"
      className={`map-radial ${bg} ${isActive && active}`}
      style={{backgroundImage: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 42.08%, #000000 100%), linear-gradient(270deg, #000000 1%, rgba(0, 0, 0, 0.3) 99.19%), url('+img+')'}}
    />
  );
}

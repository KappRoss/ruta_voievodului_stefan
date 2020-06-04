import React from 'react';
import {
  mark,
  active,
  number,
  activeNumber
} from './mark.module.css';

export default ({ isActive, data, sliderMove }) => (
  <g onClick={sliderMove}>
    <path
      fill="#E3393B"
      d={data[0]}
    />
    <path
      d={data[1]}
      className={`${mark} ${isActive && active}`}
    />
    <path
      d={data[2]}
      className={`${number} ${isActive && activeNumber}`}
    />
  </g>
);

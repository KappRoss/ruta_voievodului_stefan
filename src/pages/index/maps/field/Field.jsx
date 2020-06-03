import React from 'react';
import { field, active } from './field.module.css';

export default ({ isActive, d }) => (
  <g opacity="0.3">
    <path
      d={d}
      stroke="white"
      strokeWidth="2.5"
      strokeMiterlimit="10"
      className={`${field} ${isActive && active}`}
    />
  </g>
);

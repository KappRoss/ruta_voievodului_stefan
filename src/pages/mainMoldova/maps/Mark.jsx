import React from 'react';

export default ({ setActive, id, children }) => (
  <g
    onClick={setActive(id)}
    onMouseEnter={setActive(id)}
    onMouseLeave={setActive(id)}
    id={id}
  >
    {children}
  </g>
);

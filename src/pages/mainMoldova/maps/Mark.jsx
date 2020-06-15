import React from 'react';

export default ({ openModal, setActive, id, children }) => (
  <g
    onClick={openModal(id)}
    onMouseEnter={setActive(id)}
    onMouseLeave={setActive(id)}
    id={id}
  >
    {children}
  </g>
);

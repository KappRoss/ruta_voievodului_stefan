import React from 'react';

export default ({ openModal, setActive, id, children }) => (
  <g
    onClick={openModal(id)}
    onMouseEnter={setActive(id)}
    onMouseLeave={setActive(id)}
    id={id}
    className="mark"
  >
    {children}
  </g>
);

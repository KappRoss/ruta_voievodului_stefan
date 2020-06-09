import React from 'react';

export default ({ activeElement, svg }) => {
  if (!activeElement || !svg) {
    return null;
  }

  const elPositions = activeElement.getBoundingClientRect();
  const svgPositions = svg.getBoundingClientRect();
  const x = elPositions.x - svgPositions.x;
  const y = elPositions.y - svgPositions.y;
  return (
    <g transform={`translate(${x}, ${y})`} pointerEvents="none" >
      <circle opacity="0.3" cx="21" cy="55" r="26.4418" fill="#03799C"/>
      <circle cx="21" cy="55" r="13.7957" fill="#163842"/>
    </g>
  );
}
import React from 'react';
import attractions from "../../../lib/attractions";

export default ({ active, activeElement, svg, locId }) => {
    if (!activeElement || !svg) {
      return null;
    }
    const elPositions = activeElement.getBoundingClientRect();
    const svgPositions = svg.getBoundingClientRect();
    const x = elPositions.x - svgPositions.x - 60;
    const y = elPositions.y - svgPositions.y - 70;
    const found = attractions.find(item => item.id === active) || {};
    const { title, shortTitle } = found[locId];
    const text = (shortTitle || title).split('^');
    return (
      <g transform={`translate(${x}, ${y})`} pointerEvents="none" >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H153C155.209 0 157 1.79086 157 4V62C157 64.2091 155.209 66 153 66H77L73.7809 70.0239C73.3805 70.5243 72.6195 70.5243 72.2191 70.0239L69 66H4C1.79086 66 0 64.2091 0 62V4Z"
          fill="#fff"
        />
          {text.map((item, i) => (
            <text
              transform={`translate(${i === 0 ? "20,25" : "20,47"})`}
              fill="black"
              width="100"
              key={item + i}
            >
              <tspan
                textLength="100"
                lengthAdjust="spacingAndGlyphs"
                width="200"
                dx="10"
              >
                {item}
              </tspan>
            </text>
          ))}
      </g>
    );
  };
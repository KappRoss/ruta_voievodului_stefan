import React from 'react';

const tooltipData = [
  { id: '1-0', texts: ['Restaurant National:', "“Villa Etnica”"] },
  { id: '1-1', texts: [] },
  { id: '1-2', texts: [] },

  { id: '2-0', texts: [] },
  { id: '2-1', texts: [] },
  { id: '2-2', texts: [] },
  { id: '2-3', texts: [] },
  { id: '2-4', texts: [] },
  { id: '2-5', texts: [] },

  { id: '3-0', texts: [] },
  { id: '3-1', texts: [] },
  { id: '3-2', texts: [] },

  { id: '4-0', texts: [] },
  { id: '4-1', texts: [] },
  { id: '4-2', texts: [] },
  { id: '4-3', texts: [] },

  { id: '5-0', texts: [] },
  { id: '5-1', texts: [] },
  { id: '5-2', texts: [] },
  { id: '5-3', texts: [] },
  { id: '5-4', texts: [] },
  { id: '5-5', texts: [] },

  { id: '6-0', texts: [] },
  { id: '6-1', texts: [] },

  { id: '7-0', texts: [] },
  { id: '7-1', texts: [] },

  { id: '9-0', texts: [] },
  { id: '9-1', texts: [] },
  { id: '9-2', texts: [] }
]


export default ({ active, activeElement, svg }) => {
    if (!activeElement || !svg) {
      return null;
    }
    const found = tooltipData.find(item => item.id === active);
    const { texts } = found || { texts: [] };

    const elPositions = activeElement.getBoundingClientRect();
    const svgPositions = svg.getBoundingClientRect();
    const x = elPositions.x - svgPositions.x - 60;
    const y = elPositions.y - svgPositions.y - 70;
    return (
      <g transform={`translate(${x}, ${y})`} pointerEvents="none" >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H153C155.209 0 157 1.79086 157 4V62C157 64.2091 155.209 66 153 66H77L73.7809 70.0239C73.3805 70.5243 72.6195 70.5243 72.2191 70.0239L69 66H4C1.79086 66 0 64.2091 0 62V4Z"
          fill="#fff"
        />
        <text transform="translate(20,25)" fill="black">{texts[0] || active}</text>
        <text transform="translate(35,47)" fill="black">{texts[1] || ""}</text>
      </g>
    );
  };
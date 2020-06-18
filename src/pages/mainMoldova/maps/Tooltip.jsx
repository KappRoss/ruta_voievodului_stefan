import React, { useRef, useCallback, useState } from 'react';
import attractions from "../../../lib/attractions";

const paddings = 30;

export default ({ active, activeElement, svg, locId }) => {
    const textMinEl = useRef(null);
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
    const maxLength = Math.max(...text.map(item => item.length));
    const [width, setWidth] = useState(paddings + (maxLength * 5.5));
    const [isCurWidth, setIsCurWidth] = useState('');
    const textMaxEl = useCallback((el) => {
      if (!el && isCurWidth) {
        setIsCurWidth('');
      } else if (
        el &&
        isCurWidth !== active &&
        el.getBoundingClientRect() &&
        el.getBoundingClientRect().width
      ) {
        setWidth(el.getBoundingClientRect().width + paddings);
        setIsCurWidth(active);
      }
    }, [width, isCurWidth]);
    const textX = width / 2;
    return (
      <g transform={`translate(${x}, ${y})`} pointerEvents="none" >
        <path
          d={
            `M0 4C0 1.79086 1.79086 0 4 0 
              H${width - 4}
              C${width - 2} 0
              ${width} 1.79086
              ${width} 4V62
              C${width} 64.2091
              ${width - 2} 66
              ${width - 4}
              66H77L73.7809 70.0239C73.3805 70.5243 72.6195
              70.5243 72.2191 70.0239L69 66H4C1.79086 66 0 64.2091 0 62V4Z
            `
          }
          fill="#fff"
        />
          {text.map((item, i) => {
            const isMaxText = item.length === maxLength;
            return (
              <text
                transform={`translate(${textX},${i === 0 ? 25 : 47})`}
                fill="black"
                key={item + i}
                textAnchor="middle"
                ref={isMaxText ? textMaxEl : textMinEl}
                id={active}
              >
                {item}
              </text>
            );
          })}
      </g>
    );
  };
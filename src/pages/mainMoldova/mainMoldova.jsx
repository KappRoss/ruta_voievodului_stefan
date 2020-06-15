import React from 'react';
import './mainMoldova.css';
import MapWrapper from './maps/MapWrapper';
import { mainAttractions } from "../../lib/attractions";

import Distance from './distance/distance';

const getDescription = (text, i) => {
  const desc = text.substring(0, 650);
  return desc.substring(0, desc.lastIndexOf(". ") + 1);
}

const getClassName = i =>
  `moldova-wrap moldova-wrap${i % 2 !== 0 ? "--reflection" : ""}`;

export default ({ loc }) => (
  <div className="main-moldova">
    <div className="main-title">{loc.title}</div>
    <div className="main-desc">{loc.desc}</div>
    <div className="moldova">
      {loc.name.map((k, i) => (
        <div
          key={`moldova-wrap-${i}`}
          className={getClassName(i)}
        >
          <div className="moldova-distance">
            <img
              className="moldova-distance-img"
              src={mainAttractions[i].img.img1}
              alt=""
            />
            <Distance i={i} to={k} />
          </div>
          <div className="moldova-about">
            <div className="moldova-title">{k}</div>
            <div className="moldova-text">{getDescription(mainAttractions[i][loc.id].texts.join(''), i)}</div>
          </div>
          <div className="moldova-map">
            <MapWrapper id={`map${i + 1}`} locId={loc.id} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

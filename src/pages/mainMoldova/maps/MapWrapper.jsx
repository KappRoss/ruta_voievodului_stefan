import React, { Component } from 'react';
import Map1 from "./Map1";
import Map2 from "./Map2";
import Map3 from "./Map3";
import Map4 from "./Map4";
import Map5 from "./Map5";
import Map6 from "./Map6";
import Map7 from "./Map7";
import Map8 from "./Map8";
import Map9 from "./Map9";

const maps = {
  map1: Map1,
  map2: Map2,
  map3: Map3,
  map4: Map4,
  map5: Map5,
  map6: Map6,
  map7: Map7,
  map8: Map8,
  map9: Map9
};

export default class MapWrapper extends Component {
  state = {
    active: "",
    activeElement: null,
    svg: null,
    eventType: "",
    ignoreNextEvent: false
  }

  setSvg = (svg) => {
    this.svg = svg;
  };

  setActive = (id) =>
    ({ target, nativeEvent: { type } }) => {
      let { eventType, activeElement, active, ignoreNextEvent } = this.state;
      const isNewActive = active !== id;
      const isMouseEvent = type.indexOf("mouse") === 0;
      const isNewEvent = type !== eventType;


      if (isNewActive && ignoreNextEvent) {
        ignoreNextEvent = false;
      } else if (isNewActive) {
        eventType = type;
        activeElement = target;
        active = id;
      } else if (isMouseEvent && isNewEvent) {
        //
      } else if (!isMouseEvent && isNewEvent) {
        eventType = type;
      } else if (!isNewEvent) {
        eventType = "";
        activeElement = null;
        active = "";
        ignoreNextEvent = !isMouseEvent;
      }

      this.setState({
        active,
        activeElement,
        eventType,
        ignoreNextEvent
      });
    }

  render() {
    const { active, activeElement } = this.state;
    const { id } = this.props;
    const Tag = maps[id];
    return (
      <Tag
        active={active}
        setActive={this.setActive}
        activeElement={activeElement}
        setSvg={this.setSvg}
        svg={this.svg}
      />
    );
  }
}
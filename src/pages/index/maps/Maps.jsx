import React, { Fragment } from 'react';
import ModalInfo from '../../../components/modal/ModalInfo';
import GrayZone from './gray-zone/GrayZone';
import Road from "./road/Road";
import Label from './label/Label';
import { mapWrapper, map } from './map.module.css';

import First from './regions/First';
import Second from './regions/Second';
import Third from './regions/Third';
import Fourth from './regions/Fourth';
import Fifth from './regions/Fifth';
import Sixth from './regions/Sixth';
import Seventh from './regions/Seventh';
import Eighth from './regions/Eighth';
import Ninth from './regions/Ninth';

const mapsElements = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
  Ninth
];

export default class Maps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      openedModal: "",
      openINFO: true
    }
  }

  sliderMove = sliderCount => () => {
    const { cur, sliderMove } = this.props;
    if (cur === sliderCount) {
      this.setState({ openINFO: !this.state.openINFO });
    } else {
      this.setState({
        openINFO: true
      }, () => sliderMove(sliderCount))
    }

  }

  openModal = (name) => () => this.setState({ openedModal: name });

  closeModal = () => this.setState({ openedModal: '' });

  changeStyle = () => this.setState({ openINFO: !this.state.openINFO });

  render(){
    const { openedModal, openINFO } = this.state;
    const { cur, loc: { id: locId } } = this.props;
    return (
      <div className={mapWrapper}>
        <ModalInfo
          openedModal={openedModal}
          closeModal={this.closeModal}
          locId={locId}
        />
        <svg
          viewBox="0 0 1273 1468"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={map}
        >
          <GrayZone
            sliderMove={this.sliderMove}
            cur={cur}
           />
           {mapsElements.map((Tag, i) => (
              <Road
                cur={cur}
                isActive={cur === i}
                key={`road-${i + 1}`}
              />
            ))}

          {mapsElements.map((Tag, i) => (
            <Fragment key={`map-${i + 1}`}>

              <Tag
                key={`map-${i + 1}`}
                isActive={cur === i}
                openINFO={cur === i && openINFO}
                showFifthMark={openINFO}
                openModal={this.openModal}
                sliderMove={this.sliderMove}
                loc={locId}
                cur={cur}
                id={`map-${i + 1}`}
                index={i}
              />
            </Fragment>
          ))}
          {openINFO && <Label cur={cur} locId={locId} />}
        </svg>
      </div>
    )
  }

}
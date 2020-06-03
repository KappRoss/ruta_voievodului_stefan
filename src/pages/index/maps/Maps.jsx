import React from 'react';
import ModalInfo from './modal/ModalInfo';
import GrayZone from './gray-zone/GrayZone';

import First from './regions/First';
import Second from './regions/Second';
import Third from './regions/Third';
import Fours from './regions/Fours';
import Fifth from './regions/Fifth';
import Sixth from './regions/Sixth';
import Seventh from './regions/Seventh';
import Eighth from './regions/Eighth';
import Ninth from './regions/Ninth';

export default class MapWrapper extends React.Component {

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
    const { cur } = this.props;
    return (
      <div>
        <ModalInfo
          openedModal={openedModal}
          closeModal={this.closeModal}
        />
        <svg
          width="1273"
          height="1468"
          viewBox="0 0 1273 1468"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1273" height="1468" fill="black"/>
            {/*<GrayZone />*/}

            {/*First*/}
            {/*Second */}
            <Third
              isActive={cur === 2}
              openINFO={cur === 2 && openINFO}
              openModal={this.openModal}
              sliderMove={this.sliderMove}
            />
            {/*Fours*/}
            {/*Fifth*/}
            {/*Sixth*/}
            {/*Seventh*/}
            <Eighth />
            {/*Ninth*/}
        </svg>
      </div>
    )
  }

}
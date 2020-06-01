import React from 'react';
import './map.css';
import ModalInfo from './ModalInfo';
import Map1 from './Map1';
import Map2 from './Map2';
import Map3 from './Map3';
import Map4 from './Map4';
import Map5 from './Map5';
import Map6 from './Map6';
import Map7 from './Map7';
import Map8 from './Map8';
import Map9 from './Map9';



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

  renderMap = () => {
    const { cur, sliderMove } = this.props;
    const { openINFO } = this.state;

    let Tag = Map1;

    switch (cur) {
      case 1: Tag = Map2; break;
      case 2: Tag = Map3; break;
      case 3: Tag = Map4; break;
      case 4: Tag = Map5; break;
      case 5: Tag = Map6; break;
      case 6: Tag = Map7; break;
      case 7: Tag = Map8; break;
      case 8: Tag = Map9; break;
      default: break;
    }

    return (
      <Tag
        openINFO={openINFO}
        openModal={this.openModal}
        changeStyle={this.sliderMove(0)}
        sliderMove={this.sliderMove}
      />
    );
  }

  render(){
    const { openedModal } = this.state;
    return (
      <div>
        <ModalInfo
          openedModal={openedModal}
          closeModal={this.closeModal}
        />
        <svg className="main-wrapper" width="1273" height="1468" viewBox="0 0 1273 1468" fill="none">
          {this.renderMap()}
        </svg>
      </div>
    )
  }

}
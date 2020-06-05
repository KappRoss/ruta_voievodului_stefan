import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button/button';
import IndexSlider from './indexSlider/indexSlider';
import InfoBlock from './infoBlock/infoBlock';
import Login from './feedbackForm/Login';
import Maps from './maps/Maps';
import BG from './maps/bg/BG';
import Scroll20 from './scroll20';
import Anchor from '../../components/anchor/Anchor';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

const acc = [];

for (let i = 0; i < 9; ++i) {
	acc.push(i);
}
const StyledPopup = styled(Popup)`
  &-overlay {

  }
  &-content {
	border: none!important;
	background: #000000!important;
	width: 85%!important;
  }
`
export default props => 

	(
		<div className="index">
			<div className="index-block">
				<div className="index-block-bottom" />
				<div className="index-top-wrap">
					<div className="index-block-title">
						{props.loc.title[0]}
					</div>
					<div className="index-block-desc">
						{props.loc.desc[0]}
					</div>
					<NavLink to="/about">
						<Button text={props.loc.buttons[0]} />
					</NavLink>
				</div>
			</div>
			<div className="index-block-middle">
				<div className="index-middle-wrap" cnl={console.log(props.loc.title)}>
					<Anchor id="?pos=map" />
					<div className="index-block-middle-title">
						{props.loc.title[1]}
					</div>
					<div className="index-block-middle-desc">
						{props.loc.desc[1]}
					</div>
				</div>
				<IndexSlider cur={props.cur} sliderMove={props.sliderMove} />
				<div className="map-mobile-title">
					<div className="index-block-middle-title">{props.loc.name[props.cur]}</div>
				</div>
				<div className={'mobile-button-info'}>
				<StyledPopup
					trigger={<button className = 'btn-popup'>{props.loc.buttons[3]}</button> }
					position={'center center'}
					modal
					closeOnDocumentClick
					>
					<div className="modal-info-mobile">
						<div>
							<div className="info-block-title">{props.loc.name[props.cur]}</div>
							<div className="info-block-desc">{props.loc.info[props.cur]}</div>
							<img className="info-block-img" style={{width: '100%'}} src={require('../../img/Moldova/'+(props.cur+1)+'-0.jpg')} alt="map" />
							<div style={{marginBottom: '140px'}} className="info-block-text">{props.loc.text[props.cur]}</div>
						</div>
					</div>
					</StyledPopup>
				</div>
				<div id="newMainMap" className="map-wrap">
					{acc.map(i => <BG i={i} isActive={i === props.cur} key={`bg-${i}`} />)} 
					<div className="map-radial">
						<div className="map-dark">
							

							<div className="map">
								
								<Maps
									loc={props.loc}
									cur={props.cur} 
									sliderMove={props.sliderMove}
								/>
								
							</div>


							<img className="bottom-bg" src={require('../../img/Moldova/'+(props.cur+1)+'-1.jpg')} alt="map" />
						</div>
					</div>
					<InfoBlock loc={props.loc} cur={props.cur} sliderMove={props.sliderMove} className = 'infoBlock'/>
				</div>
				<NavLink to="/create-rout" className="create-route">
					<Button text={props.loc.buttons[1]} />
				</NavLink>
			</div>
			<div className="index-middle-wrap-2">
				<div className="index-block-middle-title">
					{props.loc.title[2]}
				</div>
				<div className="index-block-middle-desc">
					{props.loc.desc[2]}
				</div>
				<NavLink to="/other-moldova">
					<Button text={props.loc.buttons[0]} />
				</NavLink>
			</div>
			<div className="index-middle-wrap-3">
				<Anchor id="?pos=rom" />
				<div className="index-block-middle-title">
					{props.loc.title[3]}
				</div>
				<div className="index-block-middle-desc">
					{props.loc.desc[3]}
				</div>
				<Scroll20 />
			</div>
			<div className="index-middle-wrap-4">
				<img className="bottom-left-img" src={require('./img/left-bg-4.png')} alt="map" />
				<div className="index-middle-wrap-2 wrap-2-row">
					<div className="index-block-middle-title">
						{props.loc.title[4]}
					</div>
					<div className="index-block-middle-desc">
						{props.loc.desc[4]}
					</div>
					<NavLink to="/romania">
						<Button text={props.loc.buttons[0]} />
					</NavLink>
				</div>
				<img className="bottom-right-img" style={{marginLeft: '-120px'}} src={require('./img/right-bg-4.png')} alt="map" />
			</div>
			<div className="grad-wrap-4" />
			<div className="index-middle-wrap-5">
				<div className="index-block-middle-title" style={{margin: '30px'}}>
					{props.loc.title[5]}
				</div>
				<div className="formmm">
					<Login 
						props = {props.loc.form}
						text = {props.loc.buttons[2]}
					/>
				</div>
				
			</div>
		</div>
	);

import React from 'react';
import './index.css';
import './map.css';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button/button';
import IndexSlider from './indexSlider/indexSlider';
import InfoBlock from './infoBlock/infoBlock';
import Login from './feedbackForm/Login';
import Maps from './maps/Maps';
import BG from './maps/bg/BG';
import Scroll20 from './scroll20';
import Anchor from '../../components/anchor/Anchor';
import { mainAttractions } from "../../lib/attractions";
import Popup from './mobilePopup/MobilePopup';

const acc = [];

for (let i = 0; i < 9; ++i) {
	acc.push(i);
}

const getShortDesc = ({ text }, cur) => {
	let string = text[cur];
	const dotIndex = string.indexOf('.');
	return dotIndex > 0 ? string.substring(0, dotIndex + 1) : string;
}

export default props => (
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
					<NavLink to="/about-us">
						<Button text={props.loc.buttons[0]} />
					</NavLink>
				</div>
			</div>
			<div className="index-block-middle">
				<div className="index-middle-wrap">
					<Anchor id="?pos=map" />
					<div className="index-block-middle-title">
						{props.loc.title[1]}
					</div>
					<div className="index-block-middle-desc">
						{getShortDesc(props.loc, props.cur)}
					</div>
				</div>
				<IndexSlider cur={props.cur} sliderMove={props.sliderMove} />
				<div className="map-mobile-title">
					<div className="index-block-middle-title">{props.loc.name[props.cur]}</div>
				</div>
				<div className={'mobile-button-info'}>
					<Popup loc={props.loc} cur={props.cur} />
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


							<img className="bottom-bg" src={mainAttractions[props.cur].img.img2} alt="map" />
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
				<Scroll20 locId={props.loc.id} />
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
						texts = {[...props.loc.form, props.loc.buttons[2]]}
					/>
				</div>
				
			</div>
		</div>
	);

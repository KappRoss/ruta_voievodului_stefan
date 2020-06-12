import React from 'react';
import './index.css';
import './map.css';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
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

const acc = [];

for (let i = 0; i < 9; ++i) {
	acc.push(i);
}

const getShortDesc = ({ text }, cur) => {
	let string = text[cur];
	const dotIndex = string.indexOf('.');
	return dotIndex > 0 ? string.substring(0, dotIndex + 1) : string;
}

const StyledPopup = styled(Popup)`
  &-overlay {
	background-color: rgba(255,255,255,0.4)!important;
  }
  &-content {
	border: none!important;
	background: #000000!important;
	width: 90%!important;
	max-height: 100%;
    overflow: auto;
  }
`;

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
					<NavLink to="/about">
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
				<StyledPopup
					trigger={<button className = 'btn-popup'>{props.loc.buttons[3]}</button> }
					position={'center center'}
					modal
					closeOnDocumentClick
					>
						{close => (
					<div className="modal-info-mobile">
					<a className="close" onClick={close}>
          				&times;
        			</a>
						<div>
							<div className="info-block-title">{props.loc.name[props.cur]}</div>
							<div className="info-block-desc">{props.loc.info[props.cur]}</div>
							<img className="info-block-img" style={{width: '90%'}} src={mainAttractions[props.cur].img.img1} alt="map" />
							<div style={{marginBottom: '50px'}} className="info-block-text">{props.loc.text[props.cur]}</div>
							<div className='add-title'>Alte atractii turistie</div>
							<div className = "add-district" cnl={console.log(props.loc)}>
								{	
								props.loc.title[props.cur].map((key, i) =>
										<div className = "add-item">
											<div className = "img-default">
												{<img src={require('../../img/Moldova/Group_172.png')}/>}
											</div>
											<div className = "link-to-url">
												{<a href={props.loc['url_' + props.cur][i]} target = '_blank'>{key}<br/></a>}
											</div>
										</div>
										
									)
								}	
							</div>  
							
						</div>
					</div>
						)}
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
						texts = {[...props.loc.form, props.loc.buttons[2]]}
					/>
				</div>
				
			</div>
		</div>
	);

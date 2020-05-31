import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button/button';
import IndexSlider from './indexSlider/indexSlider';
import InfoBlock from './infoBlock/infoBlock';
import SlideButtons from '../../components/slideButtons/slideButtons';
import Login from './feedbackForm/Login';
import MapWrapper from './MapWrapper';
import Scroll20 from './scroll20';


export default props => {
	
	const getBg = i => {
		const img = require('../../img/Moldova/'+(i+1)+'-1.jpg');
		const container  = {
				marginTop: '100px',
				width: '100%',
				maxWidth: '60%',
				maxHeight: '1000px',
				paddingRight: '-100px',
			}
		
			
		return {
			mixBlendMode: 'normal',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 42.08%, #000000 100%), linear-gradient(270deg, #000000 1%, rgba(0, 0, 0, 0.3) 99.19%), url('+img+')',
		}
	}

	return(
		<div className="index">
			<div style={{marginTop: '-235px'}} className="index-block">
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
				<div className="index-block-bottom" />
			</div>
			<div className="index-block-middle">
				<div className="index-middle-wrap">
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
				<div id="mainMap" className="map-wrap">
					<div className="map-radial" style={{...getBg(props.cur)}}>
						<div className="map-dark">
							

							<div className="map">
								
								<MapWrapper 
									cur={props.cur} 
									sliderMove={props.sliderMove}
								/>
								
							</div>


							<img className="bottom-bg" src={require('../../img/Moldova/'+(props.cur+1)+'-1.jpg')} alt="map" />
						</div>
					</div>
					<InfoBlock loc={props.loc} cur={props.cur} sliderMove={props.sliderMove} className = 'infoBlock'/>
				</div>
				<NavLink to="/create-rout">
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
				{/* <Modal /> */}
				<div className="formmm">
					<Login 
						props = {props.loc.form}
						text = {props.loc.buttons[2]}
					/>
				</div>
				
			</div>
		</div>
	)
}
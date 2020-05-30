import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import Button from '../../components/button/button';
import IndexSlider from './indexSlider/indexSlider';
import InfoBlock from './infoBlock/infoBlock';
import SlideButtons from '../../components/slideButtons/slideButtons';
import Login from './feedbackForm/Login';
import Map1 from './Map1';
import Map2 from './Map2';
import Map3 from './Map3';
import Map4 from './Map4';
import Map5 from './Map5';
import Map6 from './Map6';
import Map7 from './Map7';
import Map8 from './Map8';
import Map9 from './Map9';


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

	
		let currentComponent;
		if(props.cur === 0){
			currentComponent = <Map1 />
		}
		else if(props.cur === 1){
			currentComponent = <Map2 />
		}
		else if(props.cur === 2){
			currentComponent = <Map3 />
		}
		else if(props.cur === 3){
			currentComponent = <Map4 />
		}
		else if(props.cur === 4){
			currentComponent = <Map5 />
		}
		else if(props.cur === 5){
			currentComponent = <Map6 />
		}
		else if(props.cur === 6){
			currentComponent = <Map7 />
		}
		else if(props.cur === 7){
			currentComponent = <Map8 />
		}
		else if(props.cur === 8){
			currentComponent = <Map9 />
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
								
								{currentComponent}
								
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
				<div className="ro-slider">
					<div className="ro-slider-area">
						{props.loc.roname.map((k, i) => (
							<div key={i} className="ro-slide">
								<img src={require('../../img/Romania/'+(i+1)+'.png')} alt={k} />
								<div>{k}</div>
							</div>
						))}
					</div>
				</div>
				<SlideButtons cur={props.cur} sliderMove={props.sliderMove} />
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
import React from 'react';
import './indexSlider.css';

const slides = ['', '', '', '', '', '', '', '', ''];

export default props => {

	const getCursor = i => {
		return 23 + i * 110
	}

	return(
		<React.Fragment>
		<div className="slider">
			<div className="slider-wrapper">
				<div className="slider-photo">
					{slides.map((key,index) => (
						<img key={index} src={require('./img/s-'+(index+1)+'.png')} alt={key}
							style={{border: props.cur === index ? '1px solid #FFFFFF' : 'none', borderRadius: '4px', cursor: 'pointer'}}
							onClick={() => props.sliderMove(index)}
							width={80}
						/>
					))}
				</div>
				<div className="slider-navi">
					{slides.map((key,index) => (
						<div key={index} className="slider-round" 
							onClick={() => props.sliderMove(index)}
						/>
					))}
					<div style={{left: getCursor(props.cur)}} className="slider-cursor">{'0'+(props.cur+1)}</div>
				</div>
				<div className="slider-position slider-position-big-screen">{'0'+(props.cur+1)} <span style={{opacity: '0.5'}}>/ 09</span></div>
			</div>
		</div>
		<div className="slider-position slider-position-mobile">{'0'+(props.cur+1)} <span style={{opacity: '0.5'}}>/ 09</span></div>
		</React.Fragment>
	)
}
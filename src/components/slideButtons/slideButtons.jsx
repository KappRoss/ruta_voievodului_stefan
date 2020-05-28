import React from 'react';
import './slideButtons.css';

export default props => {

	const click = dir => props.sliderMove(dir === 'left' && props.cur > 0 ? props.cur-1 : dir === 'right' && props.cur < 8 ? props.cur+1 : 0);
	
	return(
		<div className="slide-buttons">
			<div className="slide-status">
				0{(props.cur+1)}
				<img style={{margin: '0 10px 5px 10px'}} src={require('./img/line.png')} alt="line" />
				<span style={{opacity: 0.5}}>09</span>
			</div>
			<img onClick={click.bind(this, 'left')} style={{marginLeft: '50px'}} src={require('./img/left.png')} alt="left" />
			<img onClick={click.bind(this, 'right')} style={{margin: '0 20px'}} src={require('./img/right.png')} alt="right" />
		</div>
	)
}
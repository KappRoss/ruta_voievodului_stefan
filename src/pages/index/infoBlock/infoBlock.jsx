import React from 'react';
import './infoBlock.css';

import SlideButtons from '../../../components/slideButtons/slideButtons';

export default props => (
	<div className="info-block">
		<div className="info-block-content">
			<div className="info-block-title">{props.loc.name[props.cur]}</div>
			<div className="info-block-desc">{props.loc.info[props.cur]}</div>
			<img className="info-block-img" style={{width: '100%'}} src={require('../../../img/Moldova/'+(props.cur+1)+'-0.jpg')} alt="map" />
			<div style={{marginBottom: '140px'}} className="info-block-text">{props.loc.text[props.cur]}</div>
		</div>
		<SlideButtons cur={props.cur} sliderMove={props.sliderMove} />
	</div>
)
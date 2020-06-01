import React from 'react';
import './about.css';

export default props => (
	<div className="about">
		<div className="about-title">{props.loc.title}</div>
		<img src={require('./img/about.png')} alt="about"/>
		<div className="about-text">
			{props.loc.text.map((k, i) => <div style={{marginBottom: '30px'}} key={i}>{k}</div>)}
			
		</div>
		<div className="about-bottom" />
	</div>
)
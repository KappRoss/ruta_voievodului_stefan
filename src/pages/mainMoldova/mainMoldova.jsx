import React from 'react';
import './mainMoldova.css';

import Distance from './distance/distance';

export default props => {

	const desc = (k, i, text) => (
		<React.Fragment>
			<div className="moldova-distance">
				<img className="moldova-distance-img" src={require('../../img/Moldova/'+(i+1)+'-0.jpg')} alt=""/>
				<Distance i={i} to={k} />
				</div>
				<div className="moldova-about">
					<div className="moldova-title">{k}</div>
					<div className="moldova-text">{text}</div>
				</div>
			</React.Fragment>
	)

	const map = i => <img className="moldova-map" src={require('./img/'+i+'.png')} alt={i} />

	return(
		<div className="main-moldova">
			<div className="main-title">{props.loc.title}</div>
			<div className="main-desc">{props.loc.desc}</div>
			<div className="moldova">
				{props.loc.name.map((k, i) => (
					<div key={i} className="moldova-wrap">
						{i % 2 === 0 ?
							<React.Fragment>
								{desc(k, i, props.loc.text[i])}&nbsp;&nbsp;
								{map(i)}
							</React.Fragment>
						: <React.Fragment>
								{map(i)}&nbsp;&nbsp;&nbsp;
								{desc(k, i, props.loc.text[i])}
						</React.Fragment>}
					</div>
				))}
			</div>
		</div>
	)
}
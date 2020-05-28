import React from 'react';
import './distance.css';

const km = [35, 35, 125, 125, 0, 125, 92, 125, 87];

export default props => (
	<div className="distance">
		<div className="distance-left">
			<div className="distance-top">
				<div style={{display: 'flex'}}>
					<div className="distance-round distance-round-top" />
					<div className="distance-label">Chisinau</div>
				</div>
				<div className="distance-km">{km[props.i]} km</div>
			</div>
			<div className="distance-line" />
			<div className="distance-wrap ">
				<div className="distance-round" />
				<div className="distance-label">{props.to}</div>
			</div>
		</div>
	</div>
)
import React from 'react';
import './distance.css';
import styled from "styled-components/macro";

const km = [35, 35, 125, 125, 0, 125, 92, 125, 87];

export default props => (
		<div className="distance">
			<DistnceLeft>
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
			</DistnceLeft>
		</div>
)

const DistnceLeft = styled.div`
    display: flex;
    flex-direction: column;
    	@media (min-width: 320px) and (max-width: 768px) {
			padding: 1rem;
		}
`;

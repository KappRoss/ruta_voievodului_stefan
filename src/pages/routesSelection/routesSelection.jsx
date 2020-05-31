import React from 'react';
import './routesSelection.css';
import Map from "../routesSelection/googleMaps"

export default props => {

	const atr = arr => {
		return(
			<React.Fragment>
				{arr.map((k, i) => (
					k ?
						<React.Fragment key={i}>
							<div className="routes-path">
								<div className="routes-path-round" />
								<div className="routes-path-line">
									<div style={{marginTop: '-25px'}}>20km</div>
								</div>
								<div className="routes-path-round" />
							</div>
							<div key={i} className="routes-row">
								<div className="routes-entity">
									<div className="routes-entity-top">
										<img src={require('../createRout/img/'+i+'.png')} alt="route"/>
										<div className="routes-entity-name">
											<span className="traseni">traseni district</span><br />
											{props.loc.name2[i]}
										</div>
									</div>
									<div className="routes-entity-desc">Commodo amet aliquip qui est sint sit enim labore occaecat dolore sint ea mollit dolore</div>
								</div>
							</div>
						</React.Fragment>
					:null
				))}
			</React.Fragment>
		)
	}

	return(
		<div className="routes-selection">
			<div className="routes-selection-title">
				<span style={{width: '120px'}} />
				<span>{props.loc.title[2]}</span>
				<div className="routes-selection-pdf">{props.loc.title[3]}</div>
			</div>
			<div className="routes-selection-desc">{props.loc.desc[1]}</div>
			<div className="routes-wrap">
				{props.act.map((k, i) => (
					k ?
						<div key={i} className="routes-row">
							<div className="routes-entity">
								<div className="routes-entity-top">
									<img src={require('../createRout/img/'+i+'.png')} alt="route"/>
									<div className="routes-entity-name">{props.loc.name[i]}</div>
								</div>
								<div className="routes-entity-desc">Commodo amet aliquip qui est sint sit enim labore occaecat dolore sint ea mollit dolore</div>
							</div>
							{atr(k)}
						</div>
					:null
				))}
			</div>
			<Map/>
			{/*<img src={require('./img/map.png')} alt="map"/>*/}
		</div>
	)
}
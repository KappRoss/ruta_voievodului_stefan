import React from 'react';
import './romania.css'
import { Route } from 'react-router';

export default props => (
	<div className="romania">
		<div className="romania-title">{props.loc.title}</div>
		<div className="romania-content">
			<div className="romania-row">
				<img style={{marginRight: '50px'}} src={require('./img/1.png')} alt="1" />
				<div className="romania-row-right">
					<div style={{margin: '0 0 20px 0'}} className="romania-row-title">{props.loc.name[0]}</div>
					<div className="romania-row-text">
					{props.loc.text_1.map((key, i) => 
						<a href={props.loc.links_1[i]} target = '_blank'>{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank'>{props.loc.text[0]}</a> */}
					</div>
					
				</div>
			</div>
			<div className="romania-row">
				<div className="romania-row-right romania-row-middle">
					<img src={require('./img/2.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[1]}</div>
					<div className="romania-row-text">
					{props.loc.text_2.map((key, i) => 
						<a href={props.loc.links_2[i]} target = '_blank'>{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank'>{props.loc.text[0]}</a> */}
					</div>
				<div className="romania-row-right romania-row-middle">
					<img src={require('./img/3.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[2]}</div>
					<div className="romania-row-text">
					{props.loc.text_3.map((key, i) => 
						<a href={props.loc.links_3[i]} target = '_blank'>{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank'>{props.loc.text[0]}</a> */}
					</div>
				</div>
				<div className="romania-row-right romania-row-middle">
					<img src={require('./img/4.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[3]}</div>
					<div className="romania-row-text">
					{props.loc.text_4.map((key, i) => 
						<a href={props.loc.links_4[i]} target = '_blank'>{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank'>{props.loc.text[0]}</a> */}
					</div>
				</div>
			</div>
			<div className="romania-row">
				<div className="romania-row-right romania-row-bottom">
					<img src={require('./img/5.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[4]}</div>
					<div className="romania-row-text">
					{props.loc.text_5.map((key, i) => 
						<a href={props.loc.links_5[i]} target = '_blank'>{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank'>{props.loc.text[0]}</a> */}
					</div>
				</div>
				<div className="romania-row-right romania-row-bottom">
					<img src={require('./img/6.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[5]}</div>
					<div className="romania-row-text">
					{props.loc.text_6.map((key, i) => 
						<a href={props.loc.links_6[i]} target = '_blank'>{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank'>{props.loc.text[0]}</a> */}
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
)
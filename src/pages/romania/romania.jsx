import React from 'react';
import './romania.css'
import images from './img/index.js';
// import { Route } from 'react-router';

export default props => (
	<div className="romania">
		<div className="romania-title">{props.loc.title}</div>
		<div className="romania-content">
			<div className="romania-row">
				<img src={images[1]} alt="1" className="img-1" />
				<div className="romania-row-right">
					<div className="romania-row-title">{props.loc.name[0]}</div>
					<div className="romania-row-text">
					{props.loc.text_1.map((key, i) => 
						<a key={key + i} href={props.loc.links_1[i]} target = '_blank' rel="noopener noreferrer">{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank' rel="noopener noreferrer">{props.loc.text[0]}</a> */}
					</div>
					
				</div>
			</div>
			<div className="romania-row">
				<div className="romania-row-middle">
					<img src={images[2]} alt="2" />
					<div><div className="romania-row-title">{props.loc.name[1]}</div>
					<div className="romania-row-text">
					{props.loc.text_2.map((key, i) => 
						<a key={key + i} href={props.loc.links_2[i]} target = '_blank' rel="noopener noreferrer">{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank' rel="noopener noreferrer">{props.loc.text[0]}</a> */}
					</div></div>
				</div>
				<div className="romania-row-middle">
					<img src={images[3]} alt="3" />
					<div><div className="romania-row-title">{props.loc.name[2]}</div>
					<div className="romania-row-text">
					{props.loc.text_3.map((key, i) => 
						<a key={key + i} href={props.loc.links_3[i]} target = '_blank' rel="noopener noreferrer">{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank' rel="noopener noreferrer">{props.loc.text[0]}</a> */}
					</div></div>
				</div>
				<div className="romania-row-middle">
					<img src={images[4]} alt="4" />
					<div><div className="romania-row-title">{props.loc.name[3]}</div>
					<div className="romania-row-text">
					{props.loc.text_4.map((key, i) => 
						<a key={key + i} href={props.loc.links_4[i]} target = '_blank' rel="noopener noreferrer">{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank' rel="noopener noreferrer">{props.loc.text[0]}</a> */}
					</div></div>
				</div>
			</div>
			<div className="romania-row">
				<div className="romania-row-right romania-row-bottom">
					<img src={images[5]} alt="5" />
					<div className="romania-row-title">{props.loc.name[4]}</div>
					<div className="romania-row-text">
					{props.loc.text_5.map((key, i) => 
						<a key={key + i} href={props.loc.links_5[i]} target = '_blank' rel="noopener noreferrer">{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank' rel="noopener noreferrer">{props.loc.text[0]}</a> */}
					</div>
				</div>
				<div className="romania-row-right romania-row-bottom">
					<img src={images[6]} alt="6" />
					<div className="romania-row-title">{props.loc.name[5]}</div>
					<div className="romania-row-text">
					{props.loc.text_6.map((key, i) => 
						<a key={key + i} href={props.loc.links_6[i]} target = '_blank' rel="noopener noreferrer">{key}<br/></a>
					)}

						{/* <a href={props.loc.links[0]} target = '_blank' rel="noopener noreferrer">{props.loc.text[0]}</a> */}
					</div>
				</div>
			</div>
		</div>
	</div>
)
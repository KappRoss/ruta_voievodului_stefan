import React from 'react';
import './romania.css'

export default props => (
	<div className="romania">
		<div className="romania-title">{props.loc.title}</div>
		<div className="romania-content">
			<div className="romania-row">
				<img style={{marginRight: '50px'}} src={require('./img/1.png')} alt="1" />
				<div className="romania-row-right">
					<div style={{margin: '0 0 20px 0'}} className="romania-row-title">{props.loc.name[0]}</div>
					<div className="romania-row-text" dangerouslySetInnerHTML={{__html: props.loc.text[0]}} />
				</div>
			</div>
			<div className="romania-row">
				<div className="romania-row-right romania-row-middle">
					<img src={require('./img/2.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[1]}</div>
					<div className="romania-row-text" dangerouslySetInnerHTML={{__html: props.loc.text[2]}} />
				</div>
				<div className="romania-row-right romania-row-middle">
					<img src={require('./img/3.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[2]}</div>
					<div className="romania-row-text" dangerouslySetInnerHTML={{__html: props.loc.text[2]}} />
				</div>
				<div className="romania-row-right romania-row-middle">
					<img src={require('./img/4.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[3]}</div>
					<div className="romania-row-text" dangerouslySetInnerHTML={{__html: props.loc.text[3]}} />
				</div>
			</div>
			<div className="romania-row">
				<div className="romania-row-right romania-row-bottom">
					<img src={require('./img/5.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[4]}</div>
					<div className="romania-row-text" dangerouslySetInnerHTML={{__html: props.loc.text[4]}} />
				</div>
				<div className="romania-row-right romania-row-bottom">
					<img src={require('./img/6.png')} alt="1" />
					<div className="romania-row-title">{props.loc.name[5]}</div>
					<div className="romania-row-text" dangerouslySetInnerHTML={{__html: props.loc.text[5]}} />
				</div>
			</div>
		</div>
	</div>
)
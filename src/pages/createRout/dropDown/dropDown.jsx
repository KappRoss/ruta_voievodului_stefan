import React from 'react';
import './dropDown.css';

import {SlideDown} from 'react-slidedown';
import Input from '../input/input';

export default props => (
	<SlideDown className={'my-dropdown-slidedown'}>
		{props.open ? 
			props.arr.map((k, i) => (
				<div key={i} className="down-row">
					<img className="down-row-img" src={require('./img/1.png')} alt="attr"/>
					<div>
						<div className="down-row-title">{k.split('||')[0]}</div>
						<div className="down-row-desc">{k.split('||')[1]}</div>
					</div>
					<Input gr={props.gr} i={i} addAct={props.addAct} active={props.active && props.active[i] ? true : false} />
				</div>
			)) 
		: null}
	</SlideDown>
)
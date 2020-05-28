import React from 'react';
import './createRout.css';

import DropDown from './dropDown/dropDown';
import Input from './input/input';

import {NavLink} from 'react-router-dom';
import Button from '../../components/button/button';

export default props => {

	const getLength = arr => {
		let l = 0;
		for(let i = 0; i < arr.length; i++) if(arr[i]) l++;
		return l;
	}

	return(
		<div className="create-rout">
			<div className="create-rout-title">{props.loc.title[0]}</div>
			<div className="create-rout-desc">{props.loc.desc[0]}</div>
			<div className="create-rout-wrap">
				{props.loc.name.map((k, i) => (
					<div key={i} className="create-rout-block">
						<div className="rout-block-name">{k}</div>
						<img style={{width: '100%'}} src={require('./img/'+i+'.png')} alt={k} />
						<div className="create-rout-block-wrap">
							<div className="create-rout-block-desc">
								<span>{props.loc.name2[i]}</span>
								<Input gr={i} active={props.act[i] ? true : false} addAct={props.addAct} />
							</div>
							<div className="create-area-desc">
								Commodo amet aliquip qui est sint sit enim labore occaecat dolore sint ea mollit dolore.
							</div>
							<DropDown gr={i}
								arr={props.loc.arrt[i]} open={props.drop[i] ? true : false} 
								addAct={props.addAct} active={props.act[i]} 
							/>
							<div className="area-button-row">
								<span style={{cursor: 'pointer'}} onClick={props.setDrop.bind(this, i)}>
									{props.drop[i] ? 'vezi mai putin -' : 'vezi mai mult +'}
								</span>
								<div className={props.act[i] ? 'routs-list is-routs' : 'routs-list'}>Creează ruta ({props.act[i] ? getLength(props.act[i]) : 0})</div>
							</div>
						</div>
					</div>
				))}
				<div className="create-rout-block rout-empty" />
			</div>
			<div className="route-select">{props.loc.title[1]}</div>
			<div className="selected-routes">
				<div className="selected-routes-wrap">
					{props.act.map((k, i) => (
						k ?
							<div key={i} className="selected-routes-row">
								<img onClick={props.addAct.bind(this, i, null)} className="selected-cross"  src={require('./img/cross.png')} alt={k} />
								<img className="selected-img" src={require('./img/'+i+'.png')} alt={k} />
								<div className="selected-routes-right">
									<div>{props.loc.name[i]}</div>
									<span>Atractii({getLength(props.act[i])})</span>
								</div>
							</div>
						: null
					))}
					<div className="route-to-top">{props.loc.buttons[3]}</div>
				</div>
			</div>
			<NavLink to="/routes-selection">
				<Button text={props.loc.buttons[2]} />
			</NavLink>
		</div>
	)
}
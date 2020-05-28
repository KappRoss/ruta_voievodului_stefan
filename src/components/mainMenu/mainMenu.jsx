import React from 'react';
import './mainMenu.css';
import {NavLink} from 'react-router-dom';

export default props => (
	<div className="mainMenu">
		<img onClick={props.mobMenu.bind(this, true)} className="mobile-menu" src={require('./img/menu.png')} alt="mobile" />
		<div className="locale">
			<span onClick={props.setLoc.bind(this, 'ro')} style={{opacity: props.cur === 'ro' ? 1 : 0.3}}>RO</span>
			&nbsp;<span style={{paddingBottom: '3px'}}>/</span>&nbsp;
			<span onClick={props.setLoc.bind(this, 'en')} style={{opacity: props.cur === 'en' ? 1 : 0.3}}>EN</span>
		</div>
		<NavLink to="/" className="link-to-main"></NavLink>
		<div className={props.menu ? 'main-menu-wrap open-menu' : 'main-menu-wrap'}>
			<img onClick={props.mobMenu.bind(this, false)} className="close-menu" src={require('./img/close.png')} alt="close" />
			<div className="menu-item-block">
				<NavLink to="/about" className="menu-item">{props.loc[0]}</NavLink>
				<NavLink exact to="/?pos=map" className="menu-item menu-item-span">{props.loc[1]}</NavLink>
			</div>
			<div className="menu-item-block">
				<NavLink exact to="/?pos=rom" className="menu-item">{props.loc[2]}</NavLink>
				<NavLink to="/other-moldova" className="menu-item menu-item-span">{props.loc[3]}</NavLink>
			</div>
		</div>
	</div>
)
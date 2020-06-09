import React from 'react';
import './about.css';
import {connect} from "react-redux";

 const About = (props) => {
	console.log(props.activeAttraction)
	return(
	<div className="about">
		<div className="about-title">{props.loc.title}</div>
		<img src={require('./img/about.png')} alt="about"/>
		<div className="about-text">
			
			{props.loc.text[props.activeAttraction].map((k, i) => 
			<div style={{marginBottom: '30px'}} key={i}>{k}</div>
			)}
		</div>
		<div className="about-bottom" />
	</div>
)
}

const mapStateToProps = (state) => {

	return	{
		activeAttraction: state.settings.activeAttraction
	}
}
export default connect(mapStateToProps, {})(About)
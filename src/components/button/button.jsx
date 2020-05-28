import React from 'react';
import './button.css';

export default props => <button onClick={props.onClick} className="button">{props.text}</button>
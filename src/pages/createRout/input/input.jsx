import React from 'react';
import './input.css';

export default props => (
	<label className={props.active ? 'create-checkbox checkbox-checked' : 'create-checkbox'}>
		<input onChange={props.addAct.bind(this, props.gr, props.i)} type="checkbox" />
	</label>
)
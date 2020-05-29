import React from 'react';
import './input.css';

const Input = ({active, addAct, gr, i}) => {
	console.log(active)
return(<label className={active ? 'create-checkbox checkbox-checked' : 'create-checkbox'}>
    <input onChange={addAct.bind(this, gr, i)} type="checkbox" />
</label>)

}

export default Input
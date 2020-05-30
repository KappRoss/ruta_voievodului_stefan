import React,{ useEffect} from 'react';
import './input.css';

const Input = ({active, addAct, gr, i, cordinates, setActiveCord, handleClick}) => {

    const onChange = (i, active)=>{
        addAct(gr, i);
        if(active===false && cordinates !== undefined){
            console.log(cordinates)
            setActiveCord(oldArray => [...oldArray, cordinates]);
        }
    }
return(<label className={active ? 'create-checkbox checkbox-checked' : 'create-checkbox'}>
    <input onChange={()=>onChange(i, active)} type="checkbox" />
</label>)

}

export default Input
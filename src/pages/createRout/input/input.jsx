import React,{ useEffect} from 'react';
import './input.css';
 import {filter} from 'lodash'
const Input = ({active, addAct, gr, i, cordinates, setActiveCord, activeCord, handleClick}) => {

    const onChange = (i, active)=>{
        addAct(gr, i);
        if(active===false && cordinates !== undefined){
            setActiveCord(oldArray => [...oldArray, cordinates]);
        }
        else if (active === true && cordinates !== undefined){
            const filterCheckbox = filter(activeCord, (el)=>{
               return el !== cordinates;
            })
           setActiveCord(filterCheckbox)
        }
    }
return(<label className={active ? 'create-checkbox checkbox-checked' : 'create-checkbox'}>
    <input onChange={()=>onChange(i, active)} type="checkbox" />
</label>)

}

export default Input

import React, {useEffect, useState} from 'react';
import './dropDown.css';

import {SlideDown} from 'react-slidedown';
import Input from '../input/input';

const DropDown = ({gr, arr, open, addAct, active, handleClick})=> {
    const [activeCord, setActiveCord] = useState([]);
    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        if(handleClick.handleClick === gr){
        	console.log(activeCord)
		}
    }, [handleClick]);
	return(	<SlideDown className={'my-dropdown-slidedown'}>
        {open ?
          arr.map((k, i) => (
                <div key={i} className="down-row">
                    <img className="down-row-img" src={require('./img/1.png')} alt="attr"/>
                    <div>
                        <div className="down-row-title">{k.split('||')[0]}</div>
                        <div className="down-row-desc">{k.split('||')[1]}</div>
                        {/*{console.log(k, i)}*/}
                    </div>
                    <Input handleClick={handleClick}setActiveCord={setActiveCord} gr={gr} i={i} addAct={addAct} active={active && active[i] ? true : false} cordinates={k.split('||')[1]}/>
                </div>
            ))
            : null}
    </SlideDown>)
}

export default DropDown
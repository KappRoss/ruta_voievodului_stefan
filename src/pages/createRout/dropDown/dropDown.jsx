import React, {useEffect, useState} from 'react';
import {uniq, map} from 'lodash'
import './dropDown.css';
import {SlideDown} from 'react-slidedown';
import Input from '../input/input';
import connect from "react-redux/es/connect/connect";
import {saveCordinates} from '../../../state/actions/settingsActions'

const DropDown = ({gr, arr, open, addAct, active, handleClick, saveCordinates})=> {
    const [activeCord, setActiveCord] = useState([]);
    
    useEffect(() => {
        if(handleClick.handleClick === gr){
            formatCord()
		}
    }, [handleClick]);

    const formatCord = () =>{
        const cordinates =  uniq(activeCord);
        const formatCord = map(cordinates, (el)=>{
            let splitEl = el.split(',');
            let geoFirst = splitEl[1].split('-')[1]
            let geoSecond = splitEl[2]
            return {latitude: +geoFirst, longitude: +geoSecond}
        })
        saveCordinates(formatCord);
    }
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
                    <Input handleClick={handleClick} setActiveCord={setActiveCord} activeCord={activeCord} gr={gr} i={i} addAct={addAct} active={active && active[i] ? true : false} cordinates={k.split('||')[1]}/>
                </div>
            ))
            : null}
    </SlideDown>)
}

export default connect(null, {saveCordinates})(DropDown)
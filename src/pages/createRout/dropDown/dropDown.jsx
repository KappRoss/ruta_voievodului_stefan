import React, {useEffect, useState} from 'react';
import './dropDown.css';
import {SlideDown} from 'react-slidedown';
import Input from '../input/input';
import connect from "react-redux/es/connect/connect";
import {saveCordinates} from '../../../state/actions/settingsActions'

const DropDown = ({gr, arr, open, addAct, active, handleClick, saveCordinates, cordinatesHeadMemo, activeCord, setActiveCord })=> {
    // const [activeCord, setActiveCord] = useState([]);

    useEffect(() => {
        if(handleClick.handleClick === gr){
            formatCord()
		}
    }, [handleClick]);

    const formatCord = () =>{
        saveCordinates(activeCord);
    }
	return(	<SlideDown className={'my-dropdown-slidedown'}>
        {open ?
          arr.map((k, i) =>{
              // const cordinates = [{latitude: k.latitude, longitude: k.longitude}]
                    return(
                        <div key={i} className="down-row">
                            <img className="down-row-img" src={require('./img/1.png')} alt="attr"/>
                            <div>
                                <div className="down-row-title">{k.name.split('||')[0]}</div>
                                <div className="down-row-desc">{k.name.split('||')[1]}</div>
                            </div>
                            <Input headMemo={false} handleClick={handleClick} setActiveCord={setActiveCord} activeCord={activeCord} gr={gr} i={i} addAct={addAct} active={active && active[i] ? true : false} cordinates={[{latitude: k.latitude, longitude: k.longitude}]} cordinatesHeadMemo={cordinatesHeadMemo}/>
                        </div>
                    )

        })
            : null}
    </SlideDown>)
}

export default connect(null, {saveCordinates})(DropDown)
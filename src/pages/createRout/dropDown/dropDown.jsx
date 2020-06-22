import React, {useEffect} from 'react';
import './dropDown.css';
import {SlideDown} from 'react-slidedown';
import Input from '../input/input';
import connect from "react-redux/es/connect/connect";
import {saveCordinates} from '../../../state/actions/settingsActions'

const DropDown = ({locId, subAttr, gr, arr, open, addAct, active, handleClick, saveCordinates, cordinatesHeadMemo, activeCord, setActiveCord })=> {

    useEffect(() => {
        if(handleClick.handleClick === gr){
            formatCord()
        }
    }, [handleClick]); // eslint-disable-line

    const formatCord = () =>{
        saveCordinates(activeCord);
    }

    return(	<SlideDown className={'my-dropdown-slidedown'}>
        {open ?
            arr.map((k, i) =>{
              const item = subAttr.find(b => b.id === k.id);
              const { latitude, longitude, id, [locId]: { desc, title } } = item;
                return(
                    <div key={i} className="down-row">
                        <img
                          className="down-row-img"
                          width={80}
                          src={require(`./img/${id}.png`)}
                          alt={title}
                        />
                        <div>
                            <div className="down-row-title">{title}</div>
                            <div className="down-row-desc">{desc}</div>
                        </div>
                        <Input
                          headMemo={false}
                          handleClick={handleClick}
                          setActiveCord={setActiveCord}
                          activeCord={activeCord}
                          gr={gr} i={i} addAct={addAct}
                          active={active && active[i] ? true : false}
                          cordinates={[{latitude, longitude}]}
                          cordinatesHeadMemo={cordinatesHeadMemo}/>
                    </div>
                )

            })
            : null}
    </SlideDown>)
}

export default connect(null, {saveCordinates})(DropDown)

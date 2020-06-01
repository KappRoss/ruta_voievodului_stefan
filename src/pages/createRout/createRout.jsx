import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import './createRout.css';
import styled from 'styled-components/macro';
import DropDown from './dropDown/dropDown';
import Input from './input/input';

// import {NavLink} from 'react-router-dom';
// import Button from '../../components/button/button';
import {addAct, setDrop, resetState, setMobMenu, sliderMove} from "../../state/actions/settingsActions";
import connect from "react-redux/es/connect/connect";

const CreateRout = ({loc, menu, cur, act, drop, setDrop, addAct, resetState, cordinates}) => {
    const [handleClick, setHandleClick] = useState({});
    let history = useHistory();
    useEffect(() => {
        resetState()
    }, []);
    const getLength = arr => {
        let l = 0;
        for(let i = 0; i < arr.length; i++) if(arr[i]) l++;
        return l;
    }

   const handleClickRuta = (i) => {
       setHandleClick({handleClick: i})
   }
   const handleGoSelection = () =>{
        history.push('routes-selection');
   }
    return(
        <div className="create-rout">
            <div className="create-rout-title">{loc.title[0]}</div>
            <div className="create-rout-desc">{loc.desc[0]}</div>
            <div className="create-rout-wrap">
                {loc.name.map((k, i) => (
                    <div key={i} className="create-rout-block">
                        <div className="rout-block-name">{k}</div>
                        <img style={{width: '100%'}} src={require('./img/'+i+'.png')} alt={k} />
                        <div className="create-rout-block-wrap">
                            <div className="create-rout-block-desc">
                                <span>{loc.name2[i]}</span>
                                <Input gr={i} active={act[i] ? true : false} addAct={addAct} />
                            </div>
                            <div className="create-area-desc">
                                Commodo amet aliquip qui est sint sit enim labore occaecat dolore sint ea mollit dolore.
                            </div>
                            <DropDown gr={i}
                                      arr={loc.arrt[i]} open={drop[i] ? true : false}
                                      addAct={addAct} active={act[i]} handleClick={handleClick} setHandleClick={setHandleClick}
                            />
                            <div className="area-button-row">
								<span style={{cursor: 'pointer'}} onClick={setDrop.bind(this, i)}>
									{drop[i] ? 'vezi mai putin -' : 'vezi mai mult +'}
								</span>
                                <div onClick={()=>handleClickRuta(i)} className={act[i] ? 'routs-list is-routs' : 'routs-list'}>Creează ruta ({act[i] ? getLength(act[i]) : 0})</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="create-rout-block rout-empty" />
            </div>
            <div className="route-select">{loc.title[1]}</div>
            <div className="selected-routes">
                <div className="selected-routes-wrap">
                    {act.map((k, i) => (
                        k ?
                            <div key={i} className="selected-routes-row">
                                <img onClick={addAct.bind(this, i, null)} className="selected-cross"  src={require('./img/cross.png')} alt={k} />
                                <img className="selected-img" src={require('./img/'+i+'.png')} alt={k} />
                                <div className="selected-routes-right">
                                    <div>{loc.name[i]}</div>
                                    <span>Atractii({getLength(act[i])})</span>
                                </div>
                            </div>
                            : null
                    ))}
                    <div className="route-to-top">{loc.buttons[3]}</div>
                </div>
            </div>
            {cordinates.length === 0? <BtnNotActive onClick={()=>handleGoSelection()}>{loc.buttons[2]}</BtnNotActive>: <Btn onClick={()=>handleGoSelection()} >{loc.buttons[2]}</Btn>}


        </div>
    )
}

const Btn = styled.button`
	width: 210px;
	height: 50px;
	background: #F0A000;
	border-radius: 25px;
	outline: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	text-transform: uppercase;
	color: #000000;
	border: none;
`;

const BtnNotActive = styled(props => <Btn {...props} />)`
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.3;
`;

const mapStateToProps = state => ({
    menu: state.settings.menu,
    cur: state.settings.cur,
    act: state.settings.act,
    drop: state.settings.drop,
    cordinates: state.settings.cordinates
})
export default connect(mapStateToProps, {setDrop, addAct, setMobMenu, sliderMove, resetState})(CreateRout);

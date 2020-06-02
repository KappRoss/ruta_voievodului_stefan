import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./createRout.css";
import styled from "styled-components/macro";
import DropDown from "./dropDown/dropDown";
import Input from "./input/input";
import { BtnCreateRout } from "../style/theme";
import {
    addAct,
    setDrop,
    resetState,
    setMobMenu,
    sliderMove
} from "../../state/actions/settingsActions";
import connect from "react-redux/es/connect/connect";

const CreateRout = ({
                        loc,
                        menu,
                        cur,
                        act,
                        drop,
                        setDrop,
                        addAct,
                        resetState,
                        cordinates,
                        header
                    }) => {
    const [handleClick, setHandleClick] = useState({});
    let history = useHistory();
    const selectedItems = useRef(null);
    const prevCountRef = useRef();
    useEffect(() => {
        resetState();
    }, []);
    
    useEffect(() => {
        prevCountRef.current = act;
    });
    const getLength = arr => {
        let l = 0;
        for (let i = 0; i < arr.length; i++) if (arr[i]) l++;
        return l;
    };

    const handleClickRuta = i => {
        setHandleClick({ handleClick: i });
    };

    const handleGoSelection = () => {
        history.push("routes-selection");
    };

    const handleClickVeziRuta = i => {
        scrollTo(selectedItems);
        if (drop[i] === true) {
            setDrop(i);
        }
    };

    const scrollTo = ref => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <CreateRouta>
            <div className="create-rout-title">{loc.title[0]}</div>
            <div className="create-rout-desc">{loc.desc[0]}</div>
            <CreateRoutWrap>
                {loc.name.map((k, i) => {
                    const CreateBtn = act[i] ? CreateRoutListRout : CreateRoutList;
                    // const checkLengthPrevAcr = prevCountRef.current[i].length === act[i].length;
                    return (
                        <CreateRoutBlock key={i}>
                            <div className="rout-block-name">{k}</div>
                            <img
                                style={{ width: "100%" }}
                                src={require("./img/" + i + ".png")}
                                alt={k}
                            />
                            <CreateRoutBlockWrap active={drop[i]}>
                                <div className="create-rout-block-desc-wrap">
                                    <div className="create-rout-block-desc">
                                        <span>{loc.name2[i]}</span>
                                        <Input
                                            gr={i}
                                            active={act[i] ? true : false}
                                            addAct={addAct}
                                        />
                                    </div>
                                    <div className="create-area-desc">
                                        Commodo amet aliquip qui est sint sit enim labore occaecat
                                        dolore sint ea mollit dolore.
                                    </div>
                                </div>

                                <div className="drop-down-wrap">
                                    <DropDown
                                        gr={i}
                                        arr={loc.arrt[i]}
                                        open={drop[i] ? true : false}
                                        addAct={addAct}
                                        active={act[i]}
                                        handleClick={handleClick}
                                        setHandleClick={setHandleClick}
                                    />
                                    <div className="area-button-row">
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={setDrop.bind(this, i)}
                    >
                      {drop[i] ? "vezi mai putin -" : "vezi mai mult +"}
                    </span>
                                        <div className="button-wrapper">
                                            {handleClick.handleClick === i && prevCountRef.current[i].length === act[i].length ? (
                                                <CreateBtn>
                                                    Ruta selectată{" "}
                                                    {act[i] ? "(" + getLength(act[i]) + ")" : ""}
                                                </CreateBtn>
                                            ) : (
                                                <CreateBtn onClick={() => handleClickRuta(i)}>
                                                    Creează ruta{" "}
                                                    {act[i] ? "(" + getLength(act[i]) + ")" : ""}
                                                </CreateBtn>
                                            )}

                                            <VeziRutra
                                                onClick={() => handleClickVeziRuta(i)}
                                                active={handleClick.handleClick === i && prevCountRef.current[i].length === act[i].length}
                                            >
                                                VESI RUTA
                                            </VeziRutra>
                                        </div>
                                    </div>
                                </div>
                            </CreateRoutBlockWrap>
                        </CreateRoutBlock>
                    );
                })}
                <CreateRoutBlockEmpty />
            </CreateRoutWrap>
            <div className="route-select" ref={selectedItems}>
                {loc.title[1]}
            </div>
            <SelectedRoutes length={act >= 3}>
                <div className="selected-routes-wrap">
                    <div className="selected-routes">
                        {act.map((k, i) =>
                            k ? (
                                <div key={i} className="selected-routes-row">
                                    <img
                                        onClick={addAct.bind(this, i, null)}
                                        className="selected-cross"
                                        src={require("./img/cross.png")}
                                        alt={k}
                                    />
                                    <img
                                        className="selected-img"
                                        src={require("./img/" + i + ".png")}
                                        alt={k}
                                    />
                                    <div className="selected-routes-right">
                                        <div>{loc.name[i]}</div>
                                        <span>Atractii({getLength(act[i])})</span>
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                    <div className="route-to-top" onClick={() => scrollTo(header)}>
                        {loc.buttons[3]}
                    </div>
                </div>
            </SelectedRoutes>
            {cordinates.length === 0 ? (
                <BtnNotActive onClick={() => handleGoSelection()}>
                    {loc.buttons[2]}
                </BtnNotActive>
            ) : (
                <Btn onClick={() => handleGoSelection()}>{loc.buttons[2]}</Btn>
            )}
        </CreateRouta>
    );
};
const CreateRouta = styled.div`
  background-color: #000000;
  padding: 240px 0 0 0;
  margin-top: -240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  .create-rout-title {
    font-size: 35px;
    line-height: 52px;
    color: #f4b938;
    margin-top: 140px;
    @media screen and (max-width: 1200px) {
      margin-top: 0;
      font-size: 25px;
      line-height: 37px;
    }
  }

  .create-rout-desc {
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    margin-top: 50px;
    width: 70%;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
      line-height: 24px;
      width: 90%;
      margin-top: 20px;
    }
  }
  .route-select {
    width: 80%;
    margin-top: 4rem;
    text-align: left;
    font-weight: 350;
    font-size: 45px;
    line-height: 66px;
    color: #f4b938;
    @media screen and (max-width: 1200px) {
      text-align: center;
      margin-top: 0;
      font-size: 25px;
      line-height: 37px;
    }
  }
`;

const CreateRoutWrap = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 1200px) {
    width: 90%;
    margin-top: 50px;
    flex-direction: column;
  }
`;

const CreateRoutBlock = styled.div`
  width: calc(95% / 3);
  margin-bottom: 10rem;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  .rout-block-name {
    font-size: 35px;
    line-height: 52px;
    color: #f4b938;
    text-align: left;
    margin-bottom: 15px;
  }
`;
const CreateRoutBlockEmpty = styled(props => <CreateRoutBlock {...props} />)`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const CreateRoutBlockWrap = styled.div`
  text-align: left;
  color: #ffffff;
  box-sizing: border-box;

  .create-rout-block-desc-wrap {
    padding: 30px 15px;
    .create-rout-block-desc {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 18px;
    }

    .create-area-desc {
      width: 90%;
      margin-top: 5px;
    }
  }
  .area-button-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #f0a000;
    margin: 1rem 0;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }
  .drop-down-wrap {
    position: absolute;
    background: black;
    margin-left: -3px;
    width: 102%;
    z-index: ${props => (props.active ? 2 : 0)};
    transition: z-index 1s;
    box-shadow: 0 35px 0px 10px black;

    .button-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;
const SelectedRoutes = styled.div`
  width: 80%;
  overflow-x: auto;
  @media screen and (max-width: 1200px) {
    margin-bottom: 30px;
  }
  .selected-routes-wrap {
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    margin: 30px 0;
    .selected-routes {
      display: flex;
      width: 80%;
      overflow-x: scroll;
      .selected-routes-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .selected-routes-right div {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: #f8981d;
      }

      .selected-routes-row {
        display: flex;
        align-items: center;
        position: relative;
        padding: 20px;
        min-width: 250px;
      }
    }
    .selected-cross {
      position: absolute;
      right: -10px;
      top: 0px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      z-index: 2;
      @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .selected-img {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
      margin-right: 10px;
    }

    .route-to-top {
      width: 300px;
      margin-left: 4rem;
      height: 120px;
      border: 1px dashed rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #f0a000;
      cursor: pointer;
      @media screen and (max-width: 1200px) {
        width: 99%;
        box-sizing: border-box;
        padding: 0 8%;
      }
    }
  }
`;

const CreateRoutList = styled.div`
  width: 210px;
  height: 50px;
  border: 1px solid #f8981d;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: not-allowed;
  pointer-events: none;
  @media screen and (max-width: 1200px) {
    margin-top: 20px;
  }
`;

const CreateRoutListRout = styled(props => <CreateRoutList {...props} />)`
  background: #f0a000;
  box-shadow: 0px 0px 35px rgba(248, 152, 29, 0.5);
  color: #000000;
  cursor: pointer;
  pointer-events: all;
`;

const Btn = styled(props => <BtnCreateRout {...props} />)``;

const BtnNotActive = styled(props => <Btn {...props} />)`
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.3;
`;

const VeziRutra = styled.button`
  opacity: ${props => (props.active ? "1" : "0")};
  color: #f0a000;
  padding-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: ${props =>
    props.active ? " opacity 0.3s ease-in-out" : " opacity 0.3s ease-in-out"};
`;

const mapStateToProps = state => ({
    menu: state.settings.menu,
    cur: state.settings.cur,
    act: state.settings.act,
    drop: state.settings.drop,
    cordinates: state.settings.cordinates
});
export default connect(mapStateToProps, {
    setDrop,
    addAct,
    setMobMenu,
    sliderMove,
    resetState
})(CreateRout);



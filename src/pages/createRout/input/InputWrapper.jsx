import React, {useEffect, useRef, useState} from "react";
import DropDown from "../dropDown/dropDown";
import Input from "./input";
import styled from "styled-components/macro";
import {BtnCreateRout} from "../../style/theme";

const InputWrapper = ({
                          act,
                          i,
                          addAct,
                          drop,
                          setDrop,
                          loc,
                          selectedItems,
               }) => {
    const [handleClick, setHandleClick] = useState({});
    const [activeCord, setActiveCord] = useState([]);
    const [prevCount, setPrevCount] = useState(null);
    const prevCountRef = useRef();
    const CreateBtn = act[i] ? CreateRoutListRout : CreateRoutList;
    const getLength = arr => {
        let l = 1;
        for (let i = 0; i < arr.length; i++) if (arr[i]) l++;
        return l;
    };
    const handleClickVeziRuta = i => {
        scrollTo(selectedItems);
        if (drop[i] === true) {
            setDrop(i);
        }
    };
    const handleClickRuta = i => {
        setHandleClick({ handleClick: i });
    };
    const scrollTo = ref => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        setPrevCount(prevCountRef.current = act)
    });

    return (
        <CreateRoutBlockWrap active={drop[i]}>
            <div className="create-rout-block-desc-wrap">
                <div className="create-rout-block-desc">
                    <span>{loc.name2[i].name}</span>
                    <Input
                        gr={i}
                        active={act[i] ? true : false}
                        addAct={addAct}
                        cordinates={[{latitude: loc.name2[i].latitude, longitude: loc.name2[i].longitude}]}
                        headMemo={true}
                        setActiveCord={setActiveCord}
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
                    cordinatesHeadMemo={[{latitude: loc.name2[i].latitude, longitude: loc.name2[i].longitude}]}
                    activeCord={activeCord}
                    setActiveCord={setActiveCord}
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
                            active={handleClick.handleClick === i && prevCountRef.current[i]?.length === act[i].length}
                        >
                            VEZI RUTA
                        </VeziRutra>
                    </div>
                </div>
            </div>
        </CreateRoutBlockWrap>
    );
};
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
    @media (min-width: 320px) and (max-width: 767px) {
    align-items: center;
  
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


const VeziRutra = styled.div`
  display: flex;
  justify-content: center;
  opacity: ${props => (props.active ? "1" : "0")};
  color: #f0a000;
  padding-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: ${props =>
    props.active ? " opacity 0.3s ease-in-out" : " opacity 0.3s ease-in-out"};
`;
export default InputWrapper;



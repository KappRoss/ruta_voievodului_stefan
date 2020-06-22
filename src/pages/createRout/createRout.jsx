import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./createRout.css";
import styled from "styled-components/macro";
import InputWrapper from './input/InputWrapper';
import { BtnCreateRout } from "../style/theme";
import {
  addAct,
  setDrop,
  resetState,
  setMobMenu,
  sliderMove
} from "../../state/actions/settingsActions";
import connect from "react-redux/es/connect/connect";
import { supportImgs, allAttractions } from "../../lib/attractions";

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
                      header,
                      locId
                    }) => {
  // const [handleClick, setHandleClick] = useState({});
  let history = useHistory();
  const selectedItems = useRef(null);

  useEffect(() => {
    resetState();
  }, []); // eslint-disable-line

  const getLength = arr => {
    let l = 1;
    for (let i = 0; i < arr.length; i++) if (arr[i]) l++;
    return l;
  };


  const handleGoSelection = () => {
    history.push("routes-selection");
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
            const item = allAttractions.find(b => b.id === i);
            const { [locId]: { label, name }, img: { img3 } } = item;
            // const CreateBtn = act[i] ? CreateRoutListRout : CreateRoutList;
            //  const checkLengthPrevAcr = prevCountRef.current[i].length === act[i].length;
            return (
                <CreateRoutBlock key={label}>
                  <div className="rout-block-name">{label || name}</div>
                  <img
                      style={{ width: "100%" }}
                      src={img3}
                      alt={name}

                  />
                  <InputWrapper
                      act={act}
                      i={i}
                      addAct={addAct}
                      drop={drop}
                      setDrop={setDrop}
                      loc={loc}
                      selectedItems={selectedItems}
                      item={item}
                      locId={locId}
                  />
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
              {act.map((k, i) => {
                if (!k) return null;
                  const item = allAttractions.find(b => b.id === i);
                  const { img: { img3 } } = item;
                  return (
                      <div key={i} className="selected-routes-row">
                        <img
                            onClick={addAct.bind(this, i, null)}
                            className="selected-cross"
                            src={supportImgs.cross}
                            alt={k}
                        />
                        <img
                            className="selected-img"
                            src={img3}
                            alt={k}
                        />
                        <div className="selected-routes-right">
                          <div>{loc.name[i]}</div>
                          <span>{loc.buttons[0]}({getLength(act[i])})</span>
                        </div>
                      </div>
                  );
              })}
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

  label {
    cursor: pointer;
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
  background: #000;
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
    flex-wrap: wrap;
    @media (min-width: 320px) and (max-width: 768px) {
       display: flex;
       flex-direction: column;
    }
    .selected-routes {
      display: flex;
      width: 1000px;
      flex-wrap: wrap;
      @media screen and (max-width: 900px) {
        width: 100%;
      }
       @media (min-width: 320px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        overflow-x: unset;
      }                    
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
        @media (min-width: 320px) and (max-width: 480px) {
        //white-space: pre;
        font-size: 14px;
        }
      }

      .selected-routes-row {
        display: flex;
        align-items: center;
        position: relative;
        padding: 20px;
        min-width: 300px;
        margin-right: 30px;
        margin-bottom: 30px;
        box-sizing: border-box;
        background: #0E0E0E;
        &::after {
          content: '';
          width: 30px;
          position: absolute;
          right: -30px;
          display: flex;
          top: 50%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          height: 1px;
        }
        &:last-child::after {
          display: none;
        }
        @media (min-width: 320px) and (max-width: 700px) {
         min-width: 220px;
         margin-right: 0;

        &::after {
          top: auto;
          bottom: -30px;
          width: 1px;
          height: 30px;
          right: 50%;
          border-left: 1px solid rgba(255,255,255,0.5);
        }
        &:last-child::after {
          display: flex;
        }
        }
      }
    }
    .selected-cross {
      position: absolute;
      right: 7.5px;
      top: 7.5px;
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
        width: 300px;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      @media (min-width: 320px) and (max-width: 768px) {
        margin: 0;
        width: 100%;
      }
    }
  }
`;

const Btn = styled(props => <BtnCreateRout {...props} />)``;

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
});
export default connect(mapStateToProps, {
  setDrop,
  addAct,
  setMobMenu,
  sliderMove,
  resetState
})(CreateRout);

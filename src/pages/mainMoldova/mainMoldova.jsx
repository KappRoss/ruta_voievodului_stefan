import React from 'react';
import './mainMoldova.css';
import styled from 'styled-components/macro';

import Distance from './distance/distance';

export default props => {
  const desc = (k, i, text) => (
      <React.Fragment>
        <div className="moldova-distance">
          <img
              className="moldova-distance-img"
              src={require("../../img/Moldova/" + (i + 1) + "-0.jpg")}
              alt=""
          />
          <Distance i={i} to={k} />
        </div>
        <div className="moldova-about">
          <div className="moldova-title">{k}</div>
          <div className="moldova-text">{text}</div>
        </div>
      </React.Fragment>
  );

  const map = i => (
      <img className="moldova-map" src={require("./img/" + i + ".png")} alt={i} />
  );

  return (
      <MainMoldova>
        <div className="main-title">{props.loc.title}</div>
        <div className="main-desc">{props.loc.desc}</div>
        <Moldova>
          {props.loc.name.map((k, i) => (
              <div key={i} className="moldova-wrap">
                {i % 2 === 0 ? (
                    <React.Fragment>
                      {desc(k, i, props.loc.text[i])}&nbsp;&nbsp;
                      {map(i)}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                      {map(i)}&nbsp;&nbsp;&nbsp;
                      {desc(k, i, props.loc.text[i])}
                    </React.Fragment>
                )}
              </div>
          ))}
        </Moldova>
      </MainMoldova>
  );
};

const MainMoldova = styled.div`
  background-color: #000000;
  padding: 240px 0 0 0;
  margin-top: -240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .main-title {
    width: 500px;
    font-weight: 350;
    font-size: 45px;
    line-height: 66px;
    color: #f4b938;
    margin: 100px 0 20px 0;
    @media (min-width: 320px) and (max-width: 768px) {
      width: 95%;
      font-size: 28px;
      padding: 0 10px;
    }
  }
  .main-desc {
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    opacity: 0.5;
    width: 900px;
    @media screen and (max-width: 1300px) {
      width: 90%;
      box-sizing: border-box;
    }
  }
`;
const Moldova = styled.div`
  margin-top: 140px;
  @media screen and (max-width: 1300px) {
    padding: 5%;
    margin-top: 30px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .moldova-wrap {
    display: flex;
    margin-bottom: 160px;
    @media screen and (max-width: 1300px) {
      flex-direction: column;
    }
    .moldova-distance-img {
      width: 410px;
      @media screen and (max-width: 1300px) {
        width: 100%;
      }
    }
    .moldova-about {
      width: 395px;
      margin-left: 30px;
      text-align: left;
      @media screen and (max-width: 1300px) {
        margin: 50px 0 0 0;
        width: 100%;
      }
      .moldova-text {
        margin-top: 30px;
        font-size: 16px;
        line-height: 28px;
        color: #ffffff;
        opacity: 0.5;
        @media (min-width: 320px) and (max-width: 768px) {
          text-align: center;
          padding: 0 1rem;
        }
      }
      .moldova-title {
        font-weight: normal;
        font-size: 25px;
        line-height: 37px;

        @media (min-width: 320px) and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;

import React from "react";
import "./input.css";
import { filter, isEqual, uniqWith, some } from "lodash";
import styled from "styled-components/macro";
import img from "./inp.png";
const Input = ({
                 active,
                 addAct,
                 gr,
                 i,
                 cordinates,
                 setActiveCord,
                 activeCord,
                 headMemo,
                 cordinatesHeadMemo
               }) => {
  const onChange = (i, active) => {
    addAct(gr, i);
    if (active === false) {
      if (headMemo) {
        setActiveCord(oldArray => [...oldArray, cordinates[0]]);
      } else {
        setActiveCord(oldArray => {
          if (some(oldArray, cordinatesHeadMemo[0])) {
            return [...oldArray, cordinates[0]];
          } else {
            return [
              ...uniqWith(oldArray, isEqual),
              cordinatesHeadMemo[0],
              cordinates[0]
            ];
          }
        });
      }
    } else if (active === true) {
      if (headMemo) {
        setActiveCord([]);
      } else {
        const filterCheckbox = filter(activeCord, el => {
          console.log(el, cordinates);
          return !isEqual(el, cordinates[0]);
        });
        setActiveCord(filterCheckbox);
      }
    }
  };
  return (
      <CreateCheckbox active={active}>
        <input onChange={() => onChange(i, active)} type="checkbox" />
      </CreateCheckbox>
  );
};

const CreateCheckbox = styled.label`
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  background-image: url(${props => (props.active ? img : "none")});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => (props.active ? "#F0A000" : "none")};
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-left: auto;
  input {
    display: none;
  }
`;
export default Input;

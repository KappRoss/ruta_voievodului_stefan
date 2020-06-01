import React  from "react";
import "./input.css";
import { filter } from "lodash";
import styled from "styled-components/macro";
import img from "./inp.png"
const Input = ({
                   active,
                   addAct,
                   gr,
                   i,
                   cordinates,
                   setActiveCord,
                   activeCord,
               }) => {
    const onChange = (i, active) => {
        addAct(gr, i);
        if (active === false && cordinates !== undefined) {
            setActiveCord(oldArray => [...oldArray, cordinates]);
        } else if (active === true && cordinates !== undefined) {
            const filterCheckbox = filter(activeCord, el => {
                return el !== cordinates;
            });
            setActiveCord(filterCheckbox);
        }
    };
    return (
        <CreateCheckbox  active={active}
       
        >
            <input onChange={() => onChange(i, active)} type="checkbox" />
        </CreateCheckbox>
    );
};


const CreateCheckbox = styled.label`
	min-width: 20px;
	min-height: 20px;
	max-width: 20px;
	max-height: 20px;
    background-image:  url(${props => (props.active ? img : "none")});
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${props => (props.active ? "#F0A000" : "none")};
	border: 1px solid rgba(255, 255, 255, 0.5);
	margin-left: 0.8rem;
	input {
  	  display: none;
    }
`;
export default Input;



import * as types from "./actionTypes";
import { cloneDeep } from "lodash";

export const setDrop = i => {
    return (dispatch, getState) => {
        const drop = getState().settings.drop
        const deep = cloneDeep(drop);
        if(deep[i]) delete(deep[i]);
        else deep[i] = true;
       dispatch(Drop(deep))
    }

    function Drop (drop) {
        return { type: types.SET_DROP, payload: drop };
    }
}

export const addAct = (a, i) => {
    return (dispatch, getState) => {
        const act = getState().settings.act;
        const deep = cloneDeep(act);
        if(!i && i !== 0) {
            if(deep[a]) delete(deep[a]);
            else deep[a] = [];
        }
        else {
            if(!deep[a]) deep[a] = [];
            if(!deep[a][i]) deep[a][i] = true;
            else delete(deep[a][i]);
        }
        dispatch(Act(deep))
        // this.setState({act});
    }

    function Act (act) {
        return { type: types.ADD_ACT, payload: act };
    }
}

export const setLocalisation = (loc) => {

    return { type: types.LOC, payload:loc}
}

export const setMobMenu = (mobMenu) => {

    return { type: types.SET_MOBILE, payload:mobMenu}
}

export const sliderMove = (slider) => {
    return { type: types.SLIDER_MOVE, payload:slider}
}

export const saveCordinates = (cordinates) =>{
    return {  type: types.SAVE_CORD, payload:cordinates}
}

export const resetState = () =>{
    return {  type: types.RESET_STATE}
}

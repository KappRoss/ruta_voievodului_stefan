import { authAPI } from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    firstName: null,
    lastName: null,
    email: null,
    message: null
}

let authReducer = (state = initialState, action) => {
    if(action.type === SET_USER_DATA){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
}

export const setAuthUserData = (firstName, lastName, email, message) => ({type:SET_USER_DATA, payload: {firstName, lastName, email, message}})


export const login = (firstName, lastName, email, message) => async (dispath) => {
    let response = await authAPI.login(firstName, lastName, email, message)
        if (response.data.resultCode === 0){
            dispath(setAuthUserData());
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
            dispath(stopSubmit("login", {_error: message}))
        }
}

export default authReducer;

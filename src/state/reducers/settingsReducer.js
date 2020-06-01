import * as types from "../actions/actionTypes";
import storage from "redux-persist/es/storage";
import { persistReducer } from "redux-persist";


const initialState = {
    loc: "ro",
    menu: false,
    cur: 0,
    act: [],
    drop: [],
    cordinates: [],
    activeAttraction: 0
};

const settings = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ACT:
            const act = action.payload
            return {
                ...state,
                act: act
            };
        case types.SET_DROP:
            const drop = action.payload
            return {
                ...state,
                drop: drop
            };
        case types.LOC:
            const loc = action.payload
            return {
                ...state,
                loc: loc
            };
        case types.SAVE_CORD:
            const cordinates = action.payload
            return {
                ...state,
                cordinates: cordinates
            };
        case types.SET_MOBILE:
            const mobile = action.payload
            return {
                ...state,
                menu: mobile
            };
        case types.SLIDER_MOVE:
            const SLIDER = action.payload
            return {
                ...state,
                cur: SLIDER
            };
        case types.RESET_STATE:
            return {
                ...state,
                act: [],
                drop: [],
                cordinates: [],
            };
            case types.CHANGE_ACTIVE_ATTRACTIONS:
            return {
                    ...state,
                    activeAttraction: action.payload
                };
        default:
            return state;
    }
};

const productBagPersistConfig = {
    key: "settings",
    storage: storage
};

export default persistReducer(productBagPersistConfig, settings);



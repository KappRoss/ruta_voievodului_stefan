import * as types from "../actions/actionTypes";
import storage from "redux-persist/es/storage";
import {persistReducer} from "redux-persist";



const initialState = {
    allData: [],
    currentSequence:{},
    seq_id: null,
    customSeq_id: null,
    loading: false,
};

const settings =  (state = initialState, action) => {
    // switch (action.type) {
    //     case types.ACCOUNT_SEQUENCE_REQUEST:
    //         return {
    //             ...state,
    //             loading: true
    //         };
    //
    //     default:
            return state;
    // }
};

const productBagPersistConfig = {
    key: 'settings',
    storage: storage,
};

export default persistReducer(productBagPersistConfig, settings )
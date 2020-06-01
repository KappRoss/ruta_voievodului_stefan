import { combineReducers } from 'redux';
import settings from "./settingsReducer"
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    settings,
    authReducer
});

export default rootReducer;

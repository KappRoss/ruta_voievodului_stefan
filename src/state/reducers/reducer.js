import { combineReducers } from 'redux';
import settings from "./settingsReducer";
import { reducer as formReducer} from "redux-form";


const rootReducer = combineReducers({
    settings,
    form: formReducer,
});

export default rootReducer;

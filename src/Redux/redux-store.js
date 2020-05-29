import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer} from "redux-form";


let reducers = combineReducers({
    authIcon: authReducer,
    form: formReducer,
    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.store = store;

export default store;
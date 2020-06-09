import rootReducer from "../reducers/reducer";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'

const middleware = [thunk];

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore);

const createAppStore = () => {
    let store = configureStore(rootReducer);
    let persistor = persistStore(store);

    return { persistor, store }
};

export default createAppStore
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import createAppStore from "./state/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

import { Provider } from "react-redux";
const { persistor, store } = createAppStore();
ReactDOM.render(
    <Provider store={store}>
        {console.log(store.getState())}
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();



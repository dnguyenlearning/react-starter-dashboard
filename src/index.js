import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import {Router} from "react-router-dom";
import App from "./containers/app";
import store from "./redux/configure-store";
import {history} from "./redux/configure-store";

//TODO: implement the provider here
const createProvider = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
    );
};

render(createProvider(), document.getElementById("root"));
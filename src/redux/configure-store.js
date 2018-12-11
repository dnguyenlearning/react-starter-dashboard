import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import createHistory from 'history/createBrowserHistory';

import rootSaga from "./root-saga";
import reducer from "./root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
export {history};

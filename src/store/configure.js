import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import ReduxPromise from "redux-promise";

export default createStore(rootReducer, compose(applyMiddleware(ReduxPromise)));

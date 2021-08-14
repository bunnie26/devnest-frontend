import rootReducer from "./reducers";
import { createStore } from "redux";
import { compose, applyMiddleware } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;

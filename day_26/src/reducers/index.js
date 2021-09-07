import EmailReducer from "./EmailReducer";
import PasswordReducer from "./PasswordReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ EmailReducer, PasswordReducer });

export default rootReducer;

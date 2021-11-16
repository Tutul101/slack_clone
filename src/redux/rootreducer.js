import { combineReducers } from "redux";
import userreducer from "./userreducer";
const rootreducer = combineReducers({ userreducer });
export default rootreducer;

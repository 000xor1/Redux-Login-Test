import { combineReducers } from "redux";
import AtuhReducer from "./reducer_lists";

const rootReducer = combineReducers({
  auth: AtuhReducer
});

export default rootReducer;

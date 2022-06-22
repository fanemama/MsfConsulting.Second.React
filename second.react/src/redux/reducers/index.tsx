import { combineReducers } from "redux";
import authorsReducer from "./authorsReducer";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  courses:courseReducer,
  authors:authorsReducer
});

export default rootReducer;
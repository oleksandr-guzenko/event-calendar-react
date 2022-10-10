import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  events: eventReducer,
  accounts: accountReducer
});
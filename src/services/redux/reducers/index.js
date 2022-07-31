import { combineReducers } from "redux";
import alertReducer from "./alertReducers";

import authReducer from "./authReducers";
import checkoutReducer from "./checkoutReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  checkout: checkoutReducer,
  alert: alertReducer
});

export default rootReducer;
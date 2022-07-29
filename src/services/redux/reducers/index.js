import { combineReducers } from "redux";

import authReducer from "./authReducers";
import checkoutReducer from "./checkoutReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  checkout: checkoutReducer
});

export default rootReducer;
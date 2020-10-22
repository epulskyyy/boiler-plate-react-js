import { combineReducers } from "redux";

import authReducer from "./auth/reducers";
const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;

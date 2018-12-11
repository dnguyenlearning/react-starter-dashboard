import { combineReducers } from "redux";

import userLogin from "./userLogin";
import userRegister from "./userRegister";

export default combineReducers({
    userLogin,
    userRegister
});
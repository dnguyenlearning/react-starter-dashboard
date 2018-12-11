import * as types from "./types";
import * as _ from "lodash";
import {getItem} from "utils/localStorage";

const userInfo = JSON.parse(getItem('userInfo'));
const initState = {
    userInfo: userInfo || {},
    loggedIn: true || !_.isEmpty(userInfo),
    loggingIn: false
};

export default function (
    state = initState, action) {
    switch (action.type) {
        case types.USER_LOGIN: {
            return {...state, loggingIn: true}
        }

        case types.USER_LOGIN_SUCCESS: {
            return {...state, loggedIn: true,loggingIn: false, userInfo: action.payload.userInfo}
        }

        case types.USER_LOGIN_FAILED: {
            return {...state, loggingIn: false, userInfo: {}}
        }

        case types.USER_LOGOUT: {
            return {...state, userInfo: {}, loggedIn: false}
        }

        default:
            return state;
    }
}
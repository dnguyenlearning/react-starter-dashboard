import * as types from "./types";

export const userLogin = ({email, password}) => {
    return {
        type: types.USER_LOGIN,
        payload:{
            email, password
        }
    }
};


export const userLoginFailed = () => {
    return {
        type: types.USER_LOGIN_FAILED
    }
};

export const userLoginSuccess = ({userInfo}) => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload: {
            userInfo
        }
    }
};

export const userLogout = () => {
    return {
        type: types.USER_LOGOUT
    }
};
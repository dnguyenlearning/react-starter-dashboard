import * as types from "./types";

export const userRegister = ({email, password}) => {
    return {
        type: types.USER_REGISTER,
        payload: {
            email, password
        }
    }
};


export const userRegisterFailed = () => {
    return {
        type: types.USER_REGISTER_FAILED
    }
};

export const userRegisterSuccess = () => {
    return {
        type: types.USER_REGISTER_SUCCESS
    }
};

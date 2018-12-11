import * as types from "./types";

export default function (
    state = {
        registered: false,
        registering: false
    }, action) {
    switch (action.type) {
        case types.USER_REGISTER: {
            return {...state, registering: true}
        }

        case types.USER_REGISTER_SUCCESS: {
            return {...state, registering: false}
        }

        case types.USER_REGISTER_FAILED: {
            return {...state, registering: false}
        }

        default:
            return state;
    }
}
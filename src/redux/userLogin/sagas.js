import {put, takeEvery, all, call} from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import {loginUser} from "services/api/user";
import {setItem} from "utils/localStorage";

function* userLogin(action) {

    let data = action.payload;
    try {
        const response = loginUser({data});
        if (response.status === 200) {
            setItem('userInfo', response.data);
            yield put(actions.userLoginSuccess({userInfo: response.data}));
        } else {
            /**
             * TODO: modal for failed status;
             */
        }
    } catch (err) {
        yield put(actions.userLoginFailed());
    }
}

export function* watchUserLogin() {
    yield takeEvery(types.USER_LOGIN, userLogin);
}

export const sagas = [
    watchUserLogin
];
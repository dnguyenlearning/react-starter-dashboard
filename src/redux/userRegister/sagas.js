import { put, takeEvery, all, call} from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import { registerUser } from "services/api/user";

function* userRegister(payload){
    try {
        console.log('register', payload)
        const response = registerUser();
        yield put(actions.userRegisterSuccess());
    }catch(err){
        yield put(actions.userRegisterFailed());
    }
}

export function* watchUserRegister(){
    yield takeEvery(types.USER_REGISTER, userRegister);
}

export const sagas = [
    watchUserRegister
];
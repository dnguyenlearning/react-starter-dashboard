import {sagas as userLoginSagas} from "./userLogin";
import {sagas as userRegisterSagas} from "./userRegister";
import { fork, all } from "redux-saga/effects";


const allSagas = [
	...userLoginSagas,
	...userRegisterSagas
];

// start all sagas in parallel
export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
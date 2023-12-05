import { all, fork } from "redux-saga/effects";

// Home
// import homeSaga from "./home/saga";

export default function* rootSaga() {
	yield all( [
		//public
		// fork(homeSaga),

	] );
}

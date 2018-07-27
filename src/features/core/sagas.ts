import { takeEvery, takeLatest } from "redux-saga/effects";

import { INIT } from "./constants";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCDI(action) {
  console.log("olá");
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* appSaga() {
  yield takeEvery(INIT, fetchCDI);
}

export default appSaga;

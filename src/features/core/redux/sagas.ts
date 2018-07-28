import { takeEvery, put, call } from "redux-saga/effects";
import { cdiRequestSuccess, cdiRequestError } from "./actions";

import { INIT } from "../constants";

import * as interestsServices from "../InterestsService";

function* fetchCDI(action) {
  try {
    const data = yield call(interestsServices.getCDI);
    yield put(cdiRequestSuccess(data));
  } catch (error) {
    yield put(cdiRequestError(error));
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* appSaga() {
  yield takeEvery(INIT, fetchCDI);
}

export default appSaga;

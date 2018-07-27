import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import appSaga from "@features/core/sagas";
import appReducer from "@features/core/reducer";

const rootReducer = combineReducers({
  app: appReducer
});

function* rootSaga() {
  yield [fork(appSaga)];
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

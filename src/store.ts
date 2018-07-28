import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import coreSaga from "@features/core/redux/sagas";
import coreReducer, { AppState } from "@features/core/redux/reducer";
import { REDUCER_NAME as CORE_REDUCER_NAME } from "@features/core/constants";

import investimentReducer, {
  InvestimentState
} from "@features/investiment/redux/reducer";
import { REDUCER_NAME as INVESTIMENT_REDUCER_NAME } from "@features/investiment/constants";

export interface StoreState {
  [CORE_REDUCER_NAME]: AppState;
  [INVESTIMENT_REDUCER_NAME]: InvestimentState;
}

const rootReducer = combineReducers<StoreState>({
  [CORE_REDUCER_NAME]: coreReducer,
  [INVESTIMENT_REDUCER_NAME]: investimentReducer
});

function* rootSaga() {
  yield [fork(coreSaga)];
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

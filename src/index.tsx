import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./polyfils";

import store from "./store";
import history from "./history";

import App from "@features/core/App";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App name="Hudo 3" />
    </Router>
  </Provider>,
  document.getElementById("root")
);

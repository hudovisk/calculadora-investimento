import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "moment/locale/pt-br";

import "@assets/sass/main.scss";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import "@src/polyfils";

import store from "@src/store";
import history from "@src/history";
import theme from "@src/theme";

import App from "@src/features/core/components/App";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

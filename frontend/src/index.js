import "./custom.scss";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { ToastContainer } from "react-toastify";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";

ReactDOM.render(
  <>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
    <ToastContainer />
  </>,

  document.getElementById("root")
);

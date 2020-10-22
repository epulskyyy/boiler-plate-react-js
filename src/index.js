import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import "./scss/base.scss";
import { Provider } from "react-redux"; // eslint-disable-line no-unused-vars
import store from "./store"; // eslint-disable-line no-unused-vars
import fontawesome from "./plugins/fonstawesome"; // eslint-disable-line no-unused-vars

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();

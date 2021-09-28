import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
//Ant design
import "../node_modules/antd/dist/antd.css";
//font awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";

//Redux
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

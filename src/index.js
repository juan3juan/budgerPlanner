import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
require("dotenv").config();

ReactDOM.render(
  <Router basename={process.env.REACT_APP_REPOSITORY}>
    <Route component={App} />
  </Router>,
  document.getElementById("root")
);

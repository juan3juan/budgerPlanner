import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./component/budget";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Budget} />
    </Router>
  );
}

export default App;

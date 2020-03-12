import React from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./component/budget";
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Budget} />
    </Router>
  );
}

export default App;

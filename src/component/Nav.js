import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
        <li className="liright">
          <button className="btn login">Log in ></button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

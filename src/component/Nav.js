import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
const Nav = props => {
  const { isAuthenticated, login, logout } = props.auth;
  const authenticated = isAuthenticated();
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
          {authenticated ? (
            <button className="btn login" onClick={logout}>
              Log out >
            </button>
          ) : (
            <button className="btn login" onClick={login}>
              Log in >
            </button>
          )}
        </li>
        <li className="liright greetings">
          {authenticated ? <p>Welcome! {props.username}</p> : null}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

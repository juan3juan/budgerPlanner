import React, { useState } from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./component/budget";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Auth from "./component/Auth/Auth";

function App(props) {
  let auth0 = new Auth(props.history);
  const [profile, setProfile] = useState();

  // setProfile in child component
  const setProfileFunc = value => {
    setProfile(value);
  };

  //set username
  let username = "";
  const setUsername = () => {
    if (profile) {
      console.log(profile);
      if (profile.given_name) username = profile.given_name;
      else if (profile.nickname) username = profile.nickname;
      else if (profile.name) username = profile.name;
    }
  };
  if (username === "") {
    setUsername();
  }

  return (
    <>
      <Nav auth={auth0} username={username} />
      <div className="body">
        <Route
          path="/"
          exact
          render={props => (
            <Home
              auth={auth0}
              setProfile={setProfileFunc}
              username={username}
              {...props}
            />
          )}
        />
        <Route
          path="/budget"
          render={props =>
            auth0.isAuthenticated() ? (
              <Budget
                auth={auth0}
                setProfile={setProfileFunc}
                username={username}
                {...props}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </div>
    </>
  );
}

export default App;

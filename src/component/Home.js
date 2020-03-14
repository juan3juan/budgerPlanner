import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import logo from "../img/logo.png";

const Home = props => {
  //#region Authentication Method
  const { isAuthenticated, login, getProfile } = props.auth;
  const authenticated = isAuthenticated();

  useEffect(() => {
    //Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(props.location.hash)) {
      props.auth.handleAuthentication();
    }
  }, []);

  //after authentication, get the username to App
  if (authenticated) {
    if (props.username === "") {
      getProfile((profile, err) => {
        props.setProfile(profile);
      });
    }
  }
  //#endregion

  return (
    <div className="homecontainer" id="formContent">
      <div className="text-center header">
        <img src={logo} alt="LOGO" className="logo" />
        {!authenticated ? (
          <h5>Login to use the Budget Calculator</h5>
        ) : (
          <h5>Welcome! {props.username}</h5>
        )}
      </div>
      {authenticated ? (
        <div className="text-center gotobudget largebottom">
          <Link to="/budget">
            <button className="btn buttoncolor">
              Start to Calculate Budget
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center gotobudget largebottom">
          <button className="btn buttoncolor loginbutton" onClick={login}>
            Login >
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

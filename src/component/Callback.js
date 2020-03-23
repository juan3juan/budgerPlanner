import React, { useEffect } from "react";
//import { connect } from "react-redux";
//import * as authAction from "../Redux/Actions/authAction";
//import { PropTypes } from "prop-types";
const Callback = props => {
  useEffect(() => {
    //Handle authentication if expected values are in the URL.
    console.log(props);
    if (/access_token|id_token|error/.test(props.location.hash)) {
      props.auth.handleAuthentication();
      //update auth as authenticated in Store
      // props.createAuth({
      //   ...props.auth,
      //   isAuthenticated: true
      // });
    } else {
      throw new Error("Invalid callback URL.");
    }
  }, []);
  return (
    <>
      <div className="text-center padtop">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};
// Callback.propTypes = {
//   auth: PropTypes.object.isRequired,
//   createAuth: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired
// };
// const mapStatetoProps = state => {
//   return {
//     auth: state.authReducer.auth
//   };
// };
// const mapActionstoProps = {
//   createAuth: authAction.createAuth
// };
// export default connect(mapStatetoProps, mapActionstoProps)(Callback);

export default Callback;

import React, { useState } from "react";
import BudgetPlanner from "./budgetPlanner";
import BudgetResult from "./budgetResult";

const Budget = props => {
  //#region Use State
  const [values, setValues] = useState({
    salary: "",
    expense: "",
    saving: "",
    percent: 15,
    errormessage: ""
  });

  const [donestatus, setdoneStatus] = useState(false);
  //#endregion

  //#region Event Handlers
  const handleChange = event => {
    let value = event.target.value;
    if (!isNaN(value)) {
      let salary = value;
      let expense = (salary * values.percent) / 100;
      let saving = salary - expense;
      setValues({ salary: salary, expense: expense, saving: saving });
    } else {
      setValues({
        ...values,
        salary: value,
        errormessage: "Invalid Input! Numbers Only"
      });
    }
  };
  const percentageChange = value => {
    if (value !== values.percent) {
      if (values.salary !== "") {
        let expense = (values.salary * value) / 100;
        let saving = values.salary - expense;
        setValues({
          ...values,
          percent: value,
          expense: expense,
          saving: saving
        });
      } else {
        setValues({ ...values, percent: value });
      }
    }
  };
  const handleSubmit = isDoneCal => {
    // jump to result
    if (isDoneCal === true) {
      if (values.salary === "") {
        setValues({
          ...values,
          errormessage: "Please input your Salary first"
        });
      } else {
        setdoneStatus(isDoneCal);
      }
    }
    // back to calculate
    else {
      setdoneStatus(isDoneCal);
    }
  };
  //#endregion

  //#region reobtain Username if somehow budget page lost username
  const { isAuthenticated, getProfile } = props.auth;
  const authenticated = isAuthenticated();
  //after authentication, get the username to App
  if (authenticated) {
    if (props.username === "") {
      getProfile((profile, err) => {
        props.setProfile(profile);
      });
    }
  }
  //#endregion

  // format salary expense and saving to USD
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return donestatus ? (
    <BudgetResult
      result={values}
      formatter={formatter}
      username={props.username}
      handleback={() => handleSubmit(false)}
    />
  ) : (
    <BudgetPlanner
      values={values}
      formatter={formatter}
      percentageChange={percentageChange}
      handleSubmit={() => handleSubmit(true)}
      handleChange={handleChange}
    />
  );
};
export default Budget;

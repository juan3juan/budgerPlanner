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
  const handleSubmit = () => {
    setdoneStatus(true);
  };
  const handleback = () => {
    setdoneStatus(false);
    // setValues(values);
  };
  //#endregion

  return donestatus ? (
    <BudgetResult
      initialValues={values}
      username={props.username}
      handleback={handleback}
    />
  ) : (
    <BudgetPlanner
      initialValues={values}
      percentageChange={percentageChange}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};
export default Budget;

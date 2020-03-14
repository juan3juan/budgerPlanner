import React from "react";
import { FormControl, TextField, Typography } from "@material-ui/core";
import "../css/planner.css";
const BudgetResult = props => {
  let values = props.result;
  let format = props.formatter.format;
  return (
    <>
      <div className="container">
        <div className="text-center header">
          <Typography center>{props.username}! Here is your Result</Typography>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Salary"
              value={format(values.salary)}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Expense %"
              value={values.percent + "%"}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Expense"
              value={format(values.expense)}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="padtop">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Your Saving"
              value={format(values.saving)}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="text-right padtop">
          <button
            type="button"
            className="btn buttoncolor"
            onClick={props.handleback}
          >
            Back to Calculator
          </button>
        </div>
      </div>
    </>
  );
};
export default BudgetResult;

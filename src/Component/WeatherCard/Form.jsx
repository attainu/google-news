import React from "react";
import "./css/form.css";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="city">
          <input
            type="text"
            placeholder="City"
            name="city"
            autoComplete="off"
          />
        </div>
        <div>
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return <div>Please Enter City...!</div>;
};

export default Form;

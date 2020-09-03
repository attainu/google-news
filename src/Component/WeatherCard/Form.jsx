import React from "react";
import "./css/form.css";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.loadweather} className="weatherForm">
        <div>{props.error ? error() : ""}</div>
        <div className="city">
          <input
            type="text"
            placeholder="Enter City..."
            name="city"
            autoComplete="off"
          />
        </div>
        <div>
          <button className="search">
            <i className="fas fa-search-location" />
          </button>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return <div>Please Enter City...!</div>;
};

export default Form;

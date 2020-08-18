import React from "react";
import "./css/weather.css";

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>/</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
}

const Weather = (props) => {
  return (
    <>
      <div className="weather">
        <h1>{props.cityname}</h1>
        <h5>
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? <h1>{props.temp_celsius}&deg;</h1> : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </>
  );
};

export default Weather;

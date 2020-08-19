import React from "react";
import "./css/weather.css";

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <span className= "weatherData">
        <span className='min'>{min}&deg;</span>
        <span className='max'>/{max}&deg;  </span>
      </span>
    );
  }
}

const Weather = (props) => {
  return (
    <>
      <div className="weather">
        <span className='weatherData'>{props.cityname}  </span>
        <span className='weatherData'>
          <i className={`wi ${props.weatherIcon} display-1`} />  
        </span>

        {/* Get Celsius */}
        {props.temp_celsius ? <span className='weatherData'>{props.temp_celsius}&deg;  </span> : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <span className='weatherData'>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </span>
      </div>
    </>
  );
};

export default Weather;

import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature text-end">
      <div className="temp">
        <span className="temperature">
          {Math.round(props.fahrenheit)}
          <sup className="superscript">°F</sup>
        </span>
      </div>
    </div>
  );
}

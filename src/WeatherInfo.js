import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-4">
          <div className="clearfix">
            <div className="icon">
              <WeatherIcon
                code={props.data.icon}
                className="icon"
                alt={props.data.description}
                size={60}
              />
            </div>

            <div className="float-left text-nowrap">
              <WeatherTemperature fahrenheit={props.data.temperature} />
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} mph</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-2 text-center p-0">
          <div className="vr"></div>
        </div>

        <div className="col-4">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours > 12) {
    hours = `${hours - 12}:${minutes} PM`;
  } else {
    hours = `${hours}:${minutes} AM`;
  }

  return (
    <div>
      {day} {hours}
    </div>
  );
}

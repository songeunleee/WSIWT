import moment from "moment";
import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
export default function TimeWeather({ data }) {
  return (
    <section className="flex">
      <div>{time(data[0].fcstTime)}</div>
      <div>{data[3].fcstValue == 0 && <TiWeatherSunny />}</div>
      <div>{}</div>
      <div>{data[0].fcstValue}</div>
    </section>
  );
}

function time(fcstTime) {
  const time = `${fcstTime.substr(0, 2)}:${fcstTime.substr(2, 4)}`;
  return time;
}

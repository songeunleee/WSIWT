import moment from "moment";
import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
export default function TimeWeather({ data }) {
  console.log(data[0].fcstTime.substr(0, 2), data[0].fcstTime.substr(2, 2));
  return (
    <section className="flex">
      <div>{data[0].fcstTime}</div>
      <div>{data[3].fcstValue == 0 && <TiWeatherSunny />}</div>
      <div>{}</div>
      <div>{data[0].fcstValue}</div>
    </section>
  );
}

function date(time) {
  time.splice(2);
  console.log(time);
}

import moment from "moment";
import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
export default function TimeWeather({ data }) {
  data.map((item) => console.log(item.category));
  return (
    <section>
      <div>{data[0].fcstTime}</div>
      <div>{data[3].fcstValue == 0 && <TiWeatherSunny />}</div>
      <div>{}</div>
      <div>{data[0].fcstValue}</div>
    </section>
  );
}
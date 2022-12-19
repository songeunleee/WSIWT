import moment from "moment";
import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
export default function TimeWeather(data: [data]) {
  console.log(data);
  return (
    <section>
      {/* <div>{data[0].fcstTime}</div>
      <div>{data[3].fcstValue == 0 && <TiWeatherSunny />}</div>
      <div>{}</div>
      <div>{data[0].fcstValue}</div> */}
    </section>
  );
}

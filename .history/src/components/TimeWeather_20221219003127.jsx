import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
export default function TimeWeather({ data }) {
  return (
    <section>
      <div>{data[3].fcstValue === 0 && <TiWeatherSunny />}</div>
      <div>{data[0].fcstValue}</div>
    </section>
  );
}

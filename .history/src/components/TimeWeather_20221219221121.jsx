import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import Clothes from "./Clothes";
export default function TimeWeather({ data }) {
  return (
    <section className="flex bg-gray-400 rounded-lg pb-3">
      <div className="flex">
        <div>{time(data[0].fcstTime)}</div>
        <div>{data[3].fcstValue == 0 && <TiWeatherSunny />}</div>
        <div>{data[0].fcstValue}</div>
      </div>
      <Clothes />
    </section>
  );
}

function time(fcstTime) {
  const time = `${fcstTime.substr(0, 2)}:${fcstTime.substr(2, 4)}`;
  return time;
}

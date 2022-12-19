import React from "react";
import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherShower,
} from "react-icons/ti";
import Clothes from "./Clothes";
export default function TimeWeather({ data }) {
  console.log(weatherIcon(3, 0));
  return (
    <section className="flex bg-gray-400 rounded-lg mb-3 p-2 items-center ">
      <div className="flex bg-gray-500 rounded-lg ">
        <div>{time(data[0].fcstTime)}</div>
        <div>{a()}</div>
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

function a() {
  return <TiWeatherSunny />;
}

function weatherIcon(SKY, PTY) {
  let icon;
  if (PTY === 0) {
    switch (SKY) {
      case 1:
        return <TiWeatherSunny />;

      case 3:
        return <TiWeatherPartlySunny />;

      default:
        <TiWeatherCloudy />;
    }
  } else {
    switch (PTY) {
      case 1:
        return <TiWeatherDownpour />;
      case 2:
        return <TiWeatherDownpour />;
      case 3:
        return <TiWeatherSnow />;
      default:
        <TiWeatherShower />;
    }
  }
}

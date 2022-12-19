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
  console.log(a);
  return (
    <section className="flex bg-gray-400 rounded-lg mb-3 p-2 items-center ">
      <div className="flex bg-gray-500 rounded-lg ">
        <div>{time(data[0].fcstTime)}</div>
        <div>{weatherIcon(data[2].fcstValue, data[3].fcstValue)}</div>
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
  if (PTY === 0) {
    switch (SKY) {
      case 1:
        return <TiWeatherSunny />;
      case 3:
        return <TiWeatherPartlySunny />;
      case 4:
        return <TiWeatherCloudy />;
    }
  } else {
    switch (PTY) {
      case 1:
        return <TiWeatherDownpour />;
      case 2:
        return <TiWeatherDownpour />;
      case 3:
        return <TiWeatherSnow />;
      case 4:
        return <TiWeatherShower />;
    }
  }
}

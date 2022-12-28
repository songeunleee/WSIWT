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
  const handleClick = () => {};
  return (
    <section
      onClick={handleClick}
      className="flex bg-gray-400 rounded-lg mb-3 p-2 items-center "
    >
      <div className=" bg-gray-500 rounded-lg  items-center w-1/3 p-1">
        <div className="flex items-center justify-center ">
          <div className="text-2xl">
            {weatherIcon(
              parseInt(data[2].fcstValue),

              parseInt(data[3].fcstValue)
            )}
          </div>
          <div>{data[0].fcstValue}°</div>
        </div>
        <div className="flex justify-center">{time(data[0].fcstTime)}</div>
      </div>
      <Clothes temperature={data[0].fcstValue} />
    </section>
  );
}

function time(fcstTime) {
  const time = `${fcstTime.substr(0, 2)}:${fcstTime.substr(2, 4)}`;
  return time;
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
        return (
          <div className="flex items-center">
            <TiWeatherDownpour />/<TiWeatherSnow />
          </div>
        );
      case 3:
        return <TiWeatherSnow />;
      case 4:
        return <TiWeatherShower />;
    }
  }
}

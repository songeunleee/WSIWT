import React from "react";
import { useNavigate } from "react-router-dom";
import { weatherIcon, weatherImg } from "../util/getValue";

import Clothes from "./Clothes";
export default function TimeWeather({ data }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/weatherdetail/${data[0].fcstDate}${data[0].fcstTime}`, {
      state: data,
    });
  };
  return (
    <section
      onClick={handleClick}
      className="flex bg-color3 rounded-lg mb-3 p-2 items-center cursor-pointer hover:ease-in duration-200 hover:scale-102"
    >
      <div className=" bg-color1 rounded-lg  items-center w-1/3 p-1">
        <div className="flex items-center justify-center ">
          <div className="w-2 pr-2">
            {weatherImg(
              data[0].fcstTime,
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

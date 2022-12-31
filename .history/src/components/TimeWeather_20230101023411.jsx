import React from "react";
import { useNavigate } from "react-router-dom";
import { time, weatherIcon, weatherImg } from "../util/getValue";

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
      className="flex bg-color3 rounded-lg p-2 items-center cursor-pointer hover:ease-in duration-200 hover:scale-102"
    >
      <div className=" bg-color4 rounded-lg  items-center min-w-fit w-20 py-1 pt-2 ">
        <div className="flex items-center justify-center ">
          <div className="w-6 mr-2">
            {weatherImg(
              data[0].fcstTime,
              parseInt(data[2].fcstValue),

              parseInt(data[3].fcstValue)
            )}
          </div>
          <div className="ml-1">{data[0].fcstValue}°</div>
        </div>
        <div className="flex justify-center pt-2 text-sm">
          {time(data[0].fcstTime)}
        </div>
      </div>
      <Clothes temperature={data[0].fcstValue} />
    </section>
  );
}
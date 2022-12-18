import React from "react";

export default function WeatherInfo({ data, date }) {
  return (
    <div>
      WeatherInfo
      {console.log(data && data.filter((item) => item.fcstDate === date)}}
    </div>
  );
}

import React from "react";

export default function WeatherInfo({ data, date, time }) {
  return (
    <div>
      WeatherInfo
      {console.log(
        data &&
          data.filter(
            (item) => item.fcstDate === date && item.fcstTime === time
          )
      )}
    </div>
  );
}

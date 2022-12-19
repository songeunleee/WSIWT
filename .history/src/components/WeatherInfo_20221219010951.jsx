import React from "react";
import TimeWeather from "./TimeWeather";

export default function WeatherInfo({ data, date, time }) {
  console.log(time);
  return (
    <ul>
      {data &&
        division(
          data.filter(
            (item) => item.fcstDate === date && item.fsctTime === time
          ),
          7
        ).map((item, i) => <TimeWeather key={i} data={item} />)}
    </ul>
  );
}
const division = (배열, n개씩) => {
  const length = 배열.length;
  const divide = Math.floor(length / n개씩);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    newArray.push(배열.splice(0, n개씩));
  }

  return newArray;
};

import moment from "moment";
import React from "react";
import TimeWeather from "./TimeWeather";

export default function WeatherInfo({ data, date, time }) {
  if (time > "2300") {
    console.log(1);
  }
  return (
    <ul className="p-3">
      {data &&
        division(
          data.filter((item) =>
            time
              ? item.fcstTime >= time && item.fcstDate === date
              : item.fcstDate === date
          ),
          7
        ).map((item, i) => <TimeWeather key={i} data={item} />)}
    </ul>
  );
}
const division = (arr, n) => {
  const length = arr.length;
  const divide = Math.floor(length / n);
  const newArray = [];

  for (let i = 0; i < divide; i++) {
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    newArray.push(arr.splice(0, n));
  }

  return newArray;
};

import moment from "moment";
import React from "react";
import TimeWeather from "./TimeWeather";

export default function WeatherInfo({ data, date, time, today }) {
  if (time > "2310" || time < "0210") {
    date = moment(date).add(1, "days").format("YYYYMMDD");
    today = false;
  }
  console.log(date);
  return (
    <ul className="p-3">
      {data &&
        division(
          data.filter((item) =>
            today
              ? item.fcstTime.substr(0, 2) >= time.substr(0, 2) &&
                item.fcstDate === date
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

import moment from "moment";
import React from "react";
import TimeWeather from "./TimeWeather";

export default function WeatherInfo({ data, date, time, today }) {
  if (time > "2310" || time < "0000") {
    date = moment(date).add(1, "days").format("YYYYMMDD");
    today = false;
  }
  console.log();
  return (
    <section className="p-5 pb-6">
      <div className="text-center pb-3 text-xl">
        {moment(date).format("YYYY.MM.DD")}
      </div>
      <ul>
        {data &&
          division(
            data.filter((item) =>
              today
                ? item.fcstTime >= time.substr(0, 2) + "00" &&
                  item.fcstDate === date
                : item.fcstDate === date
            ),
            7
          ).map((item, i) => <TimeWeather key={i} data={item} />)}
      </ul>
    </section>
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

import React from "react";

export default function WeatherInfo({ data, date, time }) {
  return (
    <div>
      WeatherInfo
      {console.log(
        data &&
          division(
            data.filter((item) => item.fcstDate === date),
            7
          )
      )}
    </div>
  );
}
const division = (배열, n개씩) => {
  const length = 배열.length;
  const divide = Math.floor(length / n개씩);
  const newArray = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    newArray.push(배열.splice(0, n개씩));
  }

  return newArray;
};

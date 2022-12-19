import React from "react";

export default function TimeWeather({ data }) {
  return <div>{console.log(data.map((item) => item.category))}</div>;
}

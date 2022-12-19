import React from "react";

export default function TimeWeather({ data }) {
  return <div>{data[0].fcstValue}</div>;
}

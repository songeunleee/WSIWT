import React from "react";
import { isHtmlElement } from "react-router-dom/dist/dom";

export default function TimeWeather({ data }) {
  return <div>{console.log(data.map((item) => item.category))}</div>;
}

import React from "react";
import { useLocation } from "react-router-dom";

export default function WeatherDetail() {
  const location = useLocation();
  console.log(location.dtate);
  return <div>WeatherDetail</div>;
}

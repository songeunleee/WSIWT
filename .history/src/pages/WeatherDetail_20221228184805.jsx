import React from "react";
import { useLocation } from "react-router-dom";

export default function WeatherDetail() {
  const location = useLocation();
  console.log(location.state);
  return <div>WeatherDetail</div>;
}

import React from "react";
import { useLocation } from "react-router-dom";

export default function WeatherDetail() {
  const location = useLocation();
  const weatherInfo = location.state;
  return <div>WeatherDetail</div>;
}

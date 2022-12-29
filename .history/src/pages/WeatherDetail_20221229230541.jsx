import React from "react";
import { useLocation } from "react-router-dom";
import ClothesDetail from "../components/ClothesDetail";
import WeatherInfoDetail from "../components/WeatherInfoDetail";

export default function WeatherDetail() {
  const location = useLocation();
  const weatherInfo = location.state;
  return (
    <section className="flex flex-col items-center p-1">
      <WeatherInfoDetail data={weatherInfo} />
      <ClothesDetail temperature={weatherInfo[0].fcstValue} />
    </section>
  );
}

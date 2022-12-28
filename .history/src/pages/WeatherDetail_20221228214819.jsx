import React from "react";
import { useLocation } from "react-router-dom";
import ClothesDetail from "../components/ClothesDetail";
import WeatherInfoDetail from "../components/WeatherInfoDetail";

export default function WeatherDetail() {
  const location = useLocation();
  const weatherInfo = location.state;
  return (
    <section>
      <WeatherInfoDetail data={weatherInfo} />
      <ClothesDetail />
    </section>
  );
}

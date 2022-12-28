import React from "react";
import { useLocation } from "react-router-dom";
import WeatherInfoDetail from "../components/WeatherInfoDetail";

export default function WeatherDetail() {
  const location = useLocation();
  const weatherInfo = location.state;
  return (
    <section>
      <WeatherInfoDetail />
    </section>
  );
}

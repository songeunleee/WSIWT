import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getVilageFcst } from "../api/weather";

import useCurrentLocation from "../hooks/useCurrentLocation";

export default function NowWeather() {
  const { location } = useCurrentLocation();

  const weatherQuery = useQuery(["weather", latitude], () =>
    getVilageFcst(location.longitude, location.latitude)
  );
  const regionQuery = useQuery(["region", rs], () =>
    getRegion(location.longitude, location.latitude)
  );

  return (
    <>
      <div>{regionQuery.data}</div>
      <div>{console.log(weatherQuery.data)}</div>
    </>
  );
}

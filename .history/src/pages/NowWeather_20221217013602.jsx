import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getRegion } from "../api/reverseGeocoding";
import { getUltraSrtFcst, getVilageFcst } from "../api/weather";
import { dfs_xy_conv } from "../api/xy";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function NowWeather() {
  const { location } = useCurrentLocation();
  const rs = dfs_xy_conv(location.latitude, location.longitude);
  const weatherQuery = useQuery(["weather", rs], () =>
    getVilageFcst(rs.x, rs.y)
  );
  const { isLoading, error, data } = weatherQuery;
  const rigionQuery = useQuery(["rigion", rs], () => getRegion(rs.x, rs.y));

  return (
    <>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      <div>{data && console.log(data)}</div>

      <div>{location.latitude}</div>
      <div>{location.longitude}</div>
    </>
  );
}

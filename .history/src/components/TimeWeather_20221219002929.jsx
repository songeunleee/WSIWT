import React from "react";

export default function TimeWeather({ data }) {
  return (
    <section>
      <div>{data[0].fcstValue}</div>;
    </section>
  );
}

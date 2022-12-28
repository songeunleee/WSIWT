import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getType } from "../util/getValue";
import ClothesDetailItem from "./ClothesDetailItem";

export default function ClothesDetail({ temperature }) {
  const { isLoading, error, data } = useQuery(["clothes"], async () => {
    console.log("fetching...");
    const res = await fetch("../data/data.json");
    return res.json();
  });
  const clothesList =
    data &&
    data.items.filter((item) => item.type.includes(getType(temperature)));
  console.log(data);
  return (
    <ul className="flex flex-wrap p-1 box-content;">
      {clothesList &&
        clothesList.map((item) => (
          <ClothesDetailItem key={item.name} item={item} />
        ))}
    </ul>
  );
}

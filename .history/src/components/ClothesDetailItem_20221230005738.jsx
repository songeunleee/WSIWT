import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="flex items-center p-2 bg-color1 rounded-md">
      <img
        className="w-16 h-16 p-2 bg-color2 rounded-3xl"
        src={item.image}
        alt={item.name}
      />
      <p className="px-2">{item.name}</p>
    </section>
  );
}
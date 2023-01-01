import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section className="relative flex p-2 bg-color3 rounded-3xl">
      <img
        className="w-14 h-14 p-2 bg-color4 rounded-2xl"
        src={item.image}
        alt={item.name}
      />
      <p className="px-4 text-lg font-bold text-gray-800 xs:text-base sm:text-base w-full truncate ...  ">
        {item.name}
      </p>
    </section>
  );
}

import React from "react";

export default function ClosetList({ item }) {
  return (
    <section className="flex flex-col text-gray-800 bg-color2 rounded-3xl">
      <div className={`flex  items-center p-2 bg-color3 rounded-3xl  text-lg`}>
        <img
          className="w-14 h-14 p-2 bg-color4 rounded-2xl"
          src={item.image}
          alt={item.category}
        />
        <p className="px-4  font-bold sm:text-[15px]  w-full truncate  ">
          {item.category}
        </p>
      </div>
    </section>
  );
}

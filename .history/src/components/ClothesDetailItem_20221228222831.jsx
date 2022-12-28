import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section>
      <img className="w-20 h-10" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}

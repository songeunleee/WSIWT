import React from "react";

export default function ClothesDetailItem({ item }) {
  return (
    <section>
      <img className="w-15 h-15" src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </section>
  );
}

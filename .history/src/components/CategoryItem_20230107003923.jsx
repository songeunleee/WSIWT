import React, { memo, useEffect, useState } from "react";


export default function memo(CategoryItem({ item, clickCategory, value }) {
  const [selected, setSlected] = useState(false);
  useEffect(() => {
    value === item.name ? setSlected(true) : setSlected(false);
  }, [value]);

  return (
    <div
      className={
        selected
          ? `m-1 bg-color4 py-1 rounded-md cursor-pointer`
          : `m-1 bg-color3 py-1 rounded-md cursor-pointer`
      }
      onClick={() => {
        clickCategory(item.name === "none" ? "" : item.name, item.display);
      }}
    >
      {item.display}
    </div>
  );
}
)
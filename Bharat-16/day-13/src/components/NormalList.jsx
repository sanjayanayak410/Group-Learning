import React from "react";
import { items } from "../data/items";

function NormalList() {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default NormalList;

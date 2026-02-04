import React from "react";

function Item({ name }) {
  console.log("Item rendered:", name);
  return <div>{name}</div>;
}

export default React.memo(Item);

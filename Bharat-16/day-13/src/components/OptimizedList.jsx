import React from "react";
import * as ReactWindow from "react-window"; // ✅ default object import
import { items } from "../data/items";
import Item from "./Item";

const List = ReactWindow.FixedSizeList; // pick FixedSizeList from default export

function OptimizedList() {
  return (
    <List height={300} itemCount={items.length} itemSize={35} width="100%">
      {({ index, style }) => (
        <div style={style}>
          <Item name={items[index].name} />
        </div>
      )}
    </List>
  );
}

export default OptimizedList;

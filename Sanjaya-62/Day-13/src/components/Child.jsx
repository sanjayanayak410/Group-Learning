import React from "react";

const Child = ({ count }) => {
  console.log("Child rendered");
  return <h3>Count from parent: {count}</h3>;
};

export default React.memo(Child);

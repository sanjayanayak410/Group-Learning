import React from "react";

function Counter({ count, setCount }) {
  console.log("Counter rendered");

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

export default Counter;

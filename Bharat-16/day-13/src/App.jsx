import React, { useState } from "react";
import Counter from "./components/Counter";
import NormalList from "./components/NormalList";
import OptimizedList from "./components/OptimizedList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Performance Optimization Demo</h1>
      <Counter count={count} setCount={setCount} />

      <h2>Normal List</h2>
      <NormalList />

      <h2>Optimized List</h2>
      <OptimizedList />
    </div>
  );
}

export default App;

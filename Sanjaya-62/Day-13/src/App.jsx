 import { useState } from "react";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child count={count} />
    </>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>E2E Test Demo</h1>

      <input
        placeholder="Enter name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => alert(`Hello ${text}`)}>
        Submit
      </button>
    </>
  );
}

export default App;
clearInterval
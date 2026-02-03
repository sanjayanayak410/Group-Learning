import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Button from "./components/Button";
import type { JSX } from "react/jsx-dev-runtime";

function App(): JSX.Element {
  return (
    <div style={{ padding: "20px" }}>
      <h1>TypeScript + React </h1>

      <Welcome name="Sibu" />
      <Counter />
      <Button label="Click Me" onClick={() => alert("Hello TypeScript")} />
    </div>
  );
}

export default App;

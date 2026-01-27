import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>React Counter</h1>

        <p data-testid="count-value" className="count">
          {count}
        </p>

        <div className="btn-group">
          <button className="increment" onClick={() => setCount(count + 1)}>
            + Increment
          </button>

          <button className="decrement" onClick={() => setCount(count - 1)}>
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

/* Props type */
type CounterProps = {
  start: number;
};

const Counter: React.FC<CounterProps> = ({ start }) => {
  /* State typing */
  const [count, setCount] = useState<number>(start);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Counter;

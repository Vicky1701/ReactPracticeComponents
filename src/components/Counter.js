import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;

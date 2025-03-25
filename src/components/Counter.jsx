import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter : {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase by 1
      </button>
    </div>
  );
}
export default Counter;

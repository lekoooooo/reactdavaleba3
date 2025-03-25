import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecreaseButton";

function Hero() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hero Counter : {count}</h2>
      <div className="buttonContainer">
        <IncrementButton setCount={setCount} />
        <DecrementButton setCount={setCount} />
      </div>
    </div>
  );
}
export default Hero;

import { useState, useMemo } from "react";

const Calculations = () => {
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += i;
  }
  return result;
};

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [dependencyCount, setDependencyCount] = useState(0);

  const value = useMemo(Calculations, [dependencyCount]);

  return (
    <div>
      <div>count: {count}</div>
      <div>value: {value}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <div>dependencyCount:{dependencyCount}</div>
      <button onClick={() => setDependencyCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
};

export default CounterComponent;

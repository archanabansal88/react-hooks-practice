// useRef persists value between renders, doesnot trigger rerender, to trigger rerender we use useState

import { useState, useEffect, useRef } from "react";

const CounterRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    setCount((prev) => prev + 1); // if we comment out this line count will not update in the screen. line number 17
    countRef.current++;
    console.log("state:", count); // shows initial count
    console.log("ref:", countRef.current); // shows updated count
  };
  return (
    <div>
      <div>count: {countRef.current}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default CounterRef;

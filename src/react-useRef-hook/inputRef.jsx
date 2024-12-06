import { useState, useEffect, useRef } from "react";

const InputRef = () => {
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const renderedCount = useRef(0);
  const prevName = useRef("");

  useEffect(() => {
    renderedCount.current++;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderedCount.current} times</div>
    </div>
  );
};

export default InputRef;

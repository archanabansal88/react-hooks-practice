import ParentComponent from "./react-useCallback-hook/parentComponent";
import CounterComponent from "./recat-useMemo-hook/counterComponent";
import InputRef from "./react-useRef-hook/inputRef";
import CounterRef from "./react-useRef-hook/counterRef";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <CounterComponent />
      <InputRef />
      <CounterRef />
    </div>
  );
}

export default App;

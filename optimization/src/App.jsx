import { useState, useCallback, useMemo } from "react";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemListHOC from "./ItemList";
import CounterButton from "./CounterButton";
function App() {
  const [text, setText] = useState("");
  const array = useMemo(() => ["str", "str1", "str2"], []);
  const [count, setCount] = useState(0);
  const counter = useCallback(() => setCount((oldCount) => oldCount + 1), []);
  const inputChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <SearchInput setText={inputChange}></SearchInput>
      <h1>{text}</h1>
      <ItemListHOC list={array} filterStr={text}></ItemListHOC>
      <CounterButton counter={counter} count={count}></CounterButton>
    </>
  );
}

export default App;

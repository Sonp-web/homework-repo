import { useRef, useState } from "react";
import "./App.css";
import List from "./List";
function App() {
  const [array, setArray] = useState([]);
  let idRef = useRef(0);
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      setArray((oldArray) => [
        ...oldArray,
        { text: inputRef.current.value, id: ++idRef.current },
      ]);
    }
  };

  const addToLi = (idItem) => {
    setArray((oldArray) => {
      return oldArray.map((item) => {
        if (idItem == item.id) {
          return { ...item, text: "!!!" + item.text };
        }
        return item;
      });
    });
  };
  return (
    <>
      <input type="textarea" ref={inputRef} onKeyDown={handleKeyDown} />
      <button onClick={focusInput}>FOCUS</button>
      <List list={array} addToLi={addToLi} />
    </>
  );
}

export default App;

import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";
function ParentComponent() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ChildComponent name={"Egor"} counter={counter} />
      <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
        Увеличить
      </button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={() => setCounter(Math.floor(Math.random() * 10) + 1)}>
        Случайное значение
      </button>
      <button
        onClick={() =>
          setCounter((oldCounter) =>
            oldCounter > 0 ? --oldCounter : oldCounter,
          )
        }
      >
        Уменьшить
      </button>
      <SiblingComponent text={"Какой-то текст"} />
    </>
  );
}
export default ParentComponent;

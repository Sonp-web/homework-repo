import { useState, useRef, useEffect } from "react";
import type { KeyboardEventHandler } from "react";
import type { TaskType } from "./App";
type PropsType = {
  setTasks: (value: TaskType[] | ((prev: TaskType[]) => TaskType[])) => void;
  sortingTasks: () => void;
};
const Input = ({ setTasks, sortingTasks }: PropsType) => {
  const [text, setText] = useState("");
  const [isNull, setIsNull] = useState(false);
  const mainInput = useRef<HTMLInputElement>(null);
  const add = () => {
    if (text.trim().length == 0) {
      setIsNull(true);
    } else {
      setTasks((oldTasks: TaskType[]) => [
        ...oldTasks,
        {
          id: +crypto.randomUUID(),
          text: text,
          isDone: false,
          date: Date.now(),
        },
      ]);
      sortingTasks();
      setText("");
    }
  };
  const handleClick: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case "Enter":
        add();
        break;
      case "Escape":
        mainInput.current?.blur();
        break;
    }
  };
  useEffect(() => {
    if (mainInput.current) {
      mainInput.current.focus();
    }
  });
  return (
    <div className="input">
      <div>
        <input
          value={text}
          type="text"
          ref={mainInput}
          placeholder="Введите текст задачи..."
          onChange={(e) => {
            setText(e.target.value);
            setIsNull(false);
          }}
          onKeyDown={handleClick}
        />
        {isNull && <p>Нельзя добавить пустую строку</p>}
      </div>
      <button onClick={add}>Добавить</button>
    </div>
  );
};
export default Input;

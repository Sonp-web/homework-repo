import { useState, useRef, useEffect } from "react";
const Input = ({ setTasks, sortingTasks }) => {
  const [text, setText] = useState("");
  const [isNull, setIsNull] = useState(false);
  const mainInput = useRef(null);
  const add = () => {
    if (text.trim().length == 0) {
      setIsNull(true);
    } else {
      setTasks((oldTasks) => [
        ...oldTasks,
        {
          id: crypto.randomUUID(),
          text: text,
          isDone: false,
          date: Date.now(),
        },
      ]);
      sortingTasks();
      setText("");
    }
  };
  const handleClick = (e) => {
    switch (e.key) {
      case "Enter":
        add();
        break;
      case "Escape":
        mainInput.current.blur();
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

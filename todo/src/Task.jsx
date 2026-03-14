import { useState, useEffect, useRef } from "react";
const Task = ({ task, deleteTask, editTask, doneTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const focusInput = useRef(null);
  const [editText, setEditText] = useState(task.text);
  const save = () => {
    if (editText.length != 0) {
      editTask(task.id, editText);
      setIsEdit(false);
    }
  };
  const back = () => {
    setEditText(task.text);
    setIsEdit(false);
  };
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        save();
        break;
      case "Escape":
        back();
        break;
    }
  };
  useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, [isEdit]);
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        value={task.isDone}
        onChange={() => doneTask(task.id)}
      />
      {isEdit ? (
        <input
          type="text"
          value={editText}
          ref={focusInput}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
      ) : (
        <p style={task.isDone ? { textDecoration: "line-through" } : {}}>
          {task.text}
        </p>
      )}
      {!isEdit && (
        <button
          onClick={() => {
            setIsEdit((oldEdit) => !oldEdit);
          }}
        >
          edit
        </button>
      )}
      {isEdit && (
        <>
          <button onClick={save}>Сохранить</button>
          <button onClick={back}>Отмена</button>
        </>
      )}

      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};
export default Task;

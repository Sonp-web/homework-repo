import { useState } from "react";
import "./AllStyle.css";
import TaskItem from "./TaskItem";
function TaskList() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  return (
    <div className="wrapper">
      <h2>Список задач</h2>
      <ul>
        {tasks.map((item) => {
          return <TaskItem text={item}></TaskItem>;
        })}
      </ul>
      <button
        onClick={() =>
          setTasks((oldTasks) => {
            let length = Math.floor(Math.random() * 10) + 1;
            let str = "";
            while (str.length < length) {
              str += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            }
            return [...oldTasks, str];
          })
        }
      >
        Добавить задачу
      </button>
      <button onClick={() => setTasks((oldTasks) => oldTasks.slice(0, -1))}>
        Удалить последнюю задачу
      </button>
    </div>
  );
}
export default TaskList;

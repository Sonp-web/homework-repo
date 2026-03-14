import "./App.css";
import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newUp, setNewUp] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
    setTasks(parsedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    sortingTasks();
  }, [newUp]);
  const sortingTasks = () => {
    setTasks((oldTasks) =>
      newUp
        ? [...oldTasks].sort((a, b) => b.date - a.date)
        : [...oldTasks].sort((a, b) => a.date - b.date),
    );
  };

  const deleteTask = (id) => {
    setTasks((oldTasks) => oldTasks.filter((item) => item.id != id));
  };
  const editTask = (id, text) => {
    setTasks((oldTasks) =>
      oldTasks.map((item) => (item.id == id ? { ...item, text: text } : item)),
    );
  };
  const doneTask = (id) => {
    setTasks((oldTasks) =>
      oldTasks.map((item) =>
        item.id == id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };
  const clearDone = () => {
    setTasks((oldTasks) => oldTasks.filter((item) => !item.isDone));
  };

  console.log(tasks);

  return (
    <>
      <Header></Header>
      <Input setTasks={setTasks} sortingTasks={sortingTasks}></Input>
      <Routes>
        <Route
          path="/"
          element={
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              editTask={editTask}
              doneTask={doneTask}
            ></TaskList>
          }
        ></Route>
        <Route
          path="/active"
          element={
            <TaskList
              tasks={tasks.filter((item) => !item.isDone)}
              deleteTask={deleteTask}
              editTask={editTask}
              doneTask={doneTask}
            ></TaskList>
          }
        ></Route>
        <Route
          path="/done"
          element={
            <TaskList
              tasks={tasks.filter((item) => item.isDone)}
              deleteTask={deleteTask}
              editTask={editTask}
              doneTask={doneTask}
            ></TaskList>
          }
        ></Route>
      </Routes>
      <div className="buttons">
        <NavLink to="/">Все</NavLink>
        <NavLink to="/active">Активные</NavLink>
        <NavLink to="/done">Завершенные</NavLink>
      </div>
      <div className="notDone">
        <p>Осталось дел {tasks.filter((item) => !item.isDone).length}</p>
        <button onClick={clearDone}>Очистить выполненные</button>
        <button
          onClick={() => {
            setNewUp(true);
          }}
        >
          Новые сверху
        </button>
        <button
          onClick={() => {
            setNewUp(false);
          }}
        >
          Новые снизу
        </button>
      </div>
    </>
  );
}

export default App;

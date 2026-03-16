import "./App.css";
import Header from "./Header";
import Input from "./Input";
import Filter from "./Filter";
import InfoDo from "./InfoDo";
import AppRoutes from "./AppRoutes";
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

  return (
    <>
      <Header />
      <Input setTasks={setTasks} sortingTasks={sortingTasks} />
      <AppRoutes
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        doneTask={doneTask}
      />
      <Filter />
      <InfoDo tasks={tasks} clearDone={clearDone} setNewUp={setNewUp} />
    </>
  );
}

export default App;

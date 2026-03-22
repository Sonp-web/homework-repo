import TaskList from "./TaskList";
import { Routes, Route } from "react-router-dom";
const AppRoutes = ({ tasks, deleteTask, editTask, doneTask }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            doneTask={doneTask}
          />
        }
      />
      <Route
        path="/active"
        element={
          <TaskList
            tasks={tasks.filter((item) => !item.isDone)}
            deleteTask={deleteTask}
            editTask={editTask}
            doneTask={doneTask}
          />
        }
      />
      <Route
        path="/done"
        element={
          <TaskList
            tasks={tasks.filter((item) => item.isDone)}
            deleteTask={deleteTask}
            editTask={editTask}
            doneTask={doneTask}
          />
        }
      />
    </Routes>
  );
};
export default AppRoutes;

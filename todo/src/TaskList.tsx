import Task from "./Task";
import type { PropsType } from "./AppRoutes";

const TaskList = ({ tasks, deleteTask, editTask, doneTask }: PropsType) => {
  return (
    <>
      {tasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          deleteTask={deleteTask}
          editTask={editTask}
          doneTask={doneTask}
        />
      ))}
    </>
  );
};
export default TaskList;

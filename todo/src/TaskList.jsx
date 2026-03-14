import Task from "./Task";
const TaskList = ({ tasks, deleteTask, editTask,doneTask }) => {
  return (
    <>
      {tasks.map((item) => (
        <Task
          key={item.id}
          task={item}
          deleteTask={deleteTask}
          editTask={editTask}
          doneTask={doneTask}
        ></Task>
      ))}
    </>
  );
};
export default TaskList;

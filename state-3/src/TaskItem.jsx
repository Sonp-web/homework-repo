import React from "react";
const TaskItem = ({ text }) => {
  console.log("TaskItem");

  return (
    <>
      <li>{text}</li>
    </>
  );
};
export default React.memo(TaskItem);

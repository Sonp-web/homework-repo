import React from "react";
const CounterButton = ({ counter }) => {
  console.log("counterButton");

  return (
    <>
      <button onClick={counter}> </button>
    </>
  );
};
export default React.memo(CounterButton);

import React from "react";
const CounterButton = ({ counter, count }) => {
  return (
    <>
      <button onClick={counter}> {count}</button>
    </>
  );
};
export default React.memo(CounterButton);

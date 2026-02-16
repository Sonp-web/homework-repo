import { useState } from "react";
const ToggleButton = () => {
  const [state, setState] = useState("green");

  return (
    <>
      <button
        style={{ color: state }}
        onClick={() =>
          setState((oldState) => (oldState === "green" ? "red" : "green"))
        }
      >
        Toggle button
      </button>
    </>
  );
};
export default ToggleButton;

import { useState } from "react";
const Text = () => {
  const [state, setState] = useState("block");

  return (
    <div>
      <p style={{ display: state }}>Test text</p>
      <button
        onClick={() =>
          setState((oldState) => (oldState === "block" ? "none" : "block"))
        }
      ></button>
    </div>
  );
};
export default Text;

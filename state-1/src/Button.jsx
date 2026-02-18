import { useState } from "react";
const Button = () => {
  const [state, setState] = useState(0);

  return (
    <button onClick={() => setState((oldState) => oldState + 1)}>
      {state}
    </button>
  );
};
export default Button;

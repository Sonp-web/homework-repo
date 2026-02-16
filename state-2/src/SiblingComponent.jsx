import { useState } from "react";
function SiblingComponent({ text }) {
  const [state, setState] = useState(text);
  return (
    <>
      <h2>Текущий текст: {state}</h2>
      <button onClick={() => setState("REDEV")}>Изменить текст</button>
    </>
  );
}
export default SiblingComponent;

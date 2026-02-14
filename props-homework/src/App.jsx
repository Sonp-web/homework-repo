import "./App.css";
import Age from "./Age";
import Name from "./Name";
import Male from "./Male";
import Sports from "./Sports";
import SayHi from "./SayHi";
import Childs from "./Childs";
function App() {
  return (
    <>
      <Age age={12} />
      <Name name={"Egor"} />
      <Male male={true} />
      <Sports sports={{ voleyball: true }} />
      <SayHi sayHi={() => "Hi"} />
      <Childs childs={["Dasha", "Masha"]} />
    </>
  );
}

export default App;

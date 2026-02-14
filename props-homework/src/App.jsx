import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <Card
        age={12}
        name={"Egor"}
        male={true}
        sport={{ voleyball: true, football: false }}
        hello={() => "Hi"}
        childs={["Masha", "Dasha"]}
      />
    </>
  );
}

export default App;

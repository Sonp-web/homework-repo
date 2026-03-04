import "./App.css";
import RegistrationForm from "./RegistrationForm";
import Done from "./Done";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />}>
          <Route path="done" element={<Done></Done>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

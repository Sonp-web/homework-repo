import React, { useState, useEffect } from "react";
import "./App.css";
import Basket from "./Basket";
import Profile from "./Profile";
import TaskList from "./TaskList";
import { ThemeContext, themes } from "./themeContext";
import ToggleButton from "./ToggleButton";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Profile></Profile>
        <TaskList></TaskList>
        <Basket></Basket>
        <ToggleButton
          onClick={() => {
            setTheme(theme === themes.dark ? themes.light : themes.dark);
          }}
          value={theme}
        ></ToggleButton>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

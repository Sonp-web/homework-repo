import { ThemeContext, themes } from "./ThemeContext";
import { useState,useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(()=>{
    document.documentElement.dataset.theme=theme
  },[theme]) 
  const toggleTheme = () => {
    setTheme(
      (oldTheme) =>
        themes[
          themes.indexOf(oldTheme) + 1 === themes.length
            ? 0
            : themes.indexOf(oldTheme) + 1
        ],
    );
  };
  return (
    <>
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeProvider;

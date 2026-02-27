import React from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

const getTheme = () => {
  return themes.dark;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

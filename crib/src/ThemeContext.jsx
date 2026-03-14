import React from "react";
export const themes = ["light", "dark"];
export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

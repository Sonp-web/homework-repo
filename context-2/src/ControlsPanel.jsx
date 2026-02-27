import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeProvider from "./ThemeProvider";
import { LanguageContext } from "./LanguageContext";
const ControlsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
      <button onClick={toggleLanguage}>{language}</button>
    </>
  );
};
export default ControlsPanel;

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeProvider from "./ThemeProvider";
import { LanguageContext } from "./LanguageContext";
const ControlsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
      <select onChange={toggleLanguage}>
        <option value="en">En</option>
        <option value="ru">Ru</option>
        <option value="de">De</option>
        <option value="es">Es</option>
      </select>
    </>
  );
};
export default ControlsPanel;

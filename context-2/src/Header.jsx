import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Header.css";
import { LanguageContext, translations } from "./LanguageContext";
const Header = () => {
  const { language } = useContext(LanguageContext);
  return (
    <header className="header">
      <h1>{translations[language].welcome}</h1>
    </header>
  );
};
export default Header;

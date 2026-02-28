import { LanguageContext, translations } from "./LanguageContext";
import { useState, useEffect } from "react";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    document.documentElement.dataset.language = language;
  }, [language]);

  const toggleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      <LanguageContext.Provider
        value={{ toggleLanguage, language, translations }}
      >
        {children}
      </LanguageContext.Provider>
    </>
  );
};
export default LanguageProvider;

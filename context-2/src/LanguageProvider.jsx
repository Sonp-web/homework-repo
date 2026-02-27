import { LanguageContext, languages, translations } from "./LanguageContext";
import { useState, useEffect } from "react";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    document.documentElement.dataset.language = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(
      (oldLanguage) =>
        languages[
          languages.indexOf(oldLanguage) + 1 === languages.length
            ? 0
            : languages.indexOf(oldLanguage) + 1
        ],
    );
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

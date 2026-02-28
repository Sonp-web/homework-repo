import { useContext } from "react";
import { LanguageContext, translations } from "./LanguageContext";
const UserProfile = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h2>{translations[language].profile}</h2>
    </>
  );
};
export default UserProfile;

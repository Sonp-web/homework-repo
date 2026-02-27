import React from "react";

export const languages = ["en", "ru", "de", "es"];
export const translations = {
  en: {
    welcome: "Welcome",
    profile: "Your profile",
  },
  ru: {
    welcome: "Добро пожаловать",
    profile: "Твой профиль",
  },
  de: {
    welcome: "Willkommen",
    profile: "Ihr Profil",
  },
  es: {
    welcome: "Bienvenida",
    profile: "Tu perfil",
  },
};
export const LanguageContext = React.createContext({
  language: "en",
  toggleLanguage: () => {},
});

import React from "react";
import ReactDOM from "react-dom/client"; // Измененный импорт
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./providers/ThemeProvider";

// теперь корневой компонент у нас не App, а Root
import Root from "./components/Root";

// поменяли css на scss
import "./index.scss";

// Создаем root и рендерим
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();

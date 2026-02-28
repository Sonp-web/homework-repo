import "./App.css";
import ControlsPanel from "./ControlsPanel";
import LanguageProvider from "./LanguageProvider";
import ThemeProvider from "./ThemeProvider";
import Header from "./Header";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <UserProfile />
          <ControlsPanel />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;

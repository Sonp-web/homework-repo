import {
  NavLink,
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Components from "./Components";
import Home from "./Home";
import Props from "./Props";
import State from "./State";
import { navLinks } from "./NavContext";
import { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const scrollContainerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleButton = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, [location]);
  useEffect(() => {
    theme == "light"
      ? (toggleButton.current.style.filter = "invert(1)")
      : (toggleButton.current.style.filter = "invert(0)");
    theme == "light"
      ? (toggleButton.current.style.transform = "rotate(180deg)")
      : (toggleButton.current.style.transform = "rotate(0deg)");
  }, [theme]);
  const index = navLinks.indexOf(
    navLinks.find((item) => item.path == location.pathname),
  );

  return (
    <>
      <header className="header">
        <button onClick={toggleTheme} className="toggle" ref={toggleButton}>
          <img
            src="https://react-cheatsheet-json.vercel.app/assets/toggle-42fe979c.png"
            alt={theme}
          />
        </button>
      </header>
      <main className="main">
        <nav>
          {navLinks.map((item) => {
            return (
              <NavLink className="navLink" to={item.path} key={item.path}>
                {item.path.slice(1)}
              </NavLink>
            );
          })}
        </nav>

        <div className="content" ref={scrollContainerRef}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {navLinks.map((item) => {
              return (
                <Route path={item.path} element={<item.component />}></Route>
              );
            })}
          </Routes>
          <div className="buttons_wrapper">
            {index == -1 ? null : index != 0 ? (
              <button
                onClick={() => {
                  navigate(navLinks[index - 1].path);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {navLinks[index - 1].path.slice(1)}
              </button>
            ) : null}
            {index == -1 ? null : index != navLinks.length - 1 ? (
              <button
                onClick={() => {
                  navigate(navLinks[index + 1].path);
                }}
              >
                {navLinks[index + 1].path.slice(1)}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

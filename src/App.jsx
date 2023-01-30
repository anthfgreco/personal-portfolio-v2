import NavBar from "./NavBar";
import Greeting from "./Greeting";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UsePageTracking from "./UsePageTracking";

const LIGHT = "light";
const DARK = "dark";

function App() {
  const [isDarkMode, setDarkMode] = useState(setInitialDarkMode());

  // Prevents flashing and shaking on load, annoying bug
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("preload");
      document.body.style.transition = "all 0.2s ease-in-out";
    }, 20);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // Tailwind dark mode class
      localStorage.setItem("theme", DARK);
    } else {
      document.documentElement.classList.remove("dark"); // Tailwind dark mode class
      localStorage.setItem("theme", LIGHT);
    }
  }, [isDarkMode]);

  function setInitialDarkMode() {
    switch (localStorage.getItem("theme")) {
      case DARK:
        return true;
      case LIGHT:
        return false;
      default:
        return false;
    }
  }

  UsePageTracking();

  return (
    <div className="m-auto flex max-w-[720px] flex-col px-5">
      <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      <Greeting />

      <Outlet />
    </div>
  );
}

export default App;

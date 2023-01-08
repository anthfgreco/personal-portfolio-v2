import NavBar from "./NavBar";
import Greeting from "./Greeting";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UsePageTracking from "./UsePageTracking";

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
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  function setInitialDarkMode() {
    if (localStorage.theme == null) return isNight;
    if (localStorage.theme == "dark") return true;
    if (localStorage.theme == "light") return false;
  }

  function isNight() {
    let hour = new Date().getHours();
    if (hour < 5) return true;
    if (hour < 17) return false;
    else return true;
  }

  UsePageTracking();

  return (
    <div className="m-auto flex max-w-[720px] flex-col px-2">
      <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      <Greeting />

      <Outlet />
    </div>
  );
}

export default App;

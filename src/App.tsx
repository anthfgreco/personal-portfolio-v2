import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";

function isItDarkOutside() {
  const hour = new Date().getHours();
  return hour < 6 || hour >= 18; // Consider it dark from 6 AM to 6 PM
}

function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Hey, I'm Anthony Greco ";

  if (hour < 4) greeting += "🌝";
  else if (hour < 11) greeting += "☕";
  else if (hour < 16) greeting += "😎";
  else if (hour < 20) greeting += "👋";
  else greeting += "🌝";

  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold text-[#202020] dark:text-[#ededed]">
        {greeting}
      </h1>
    </div>
  );
}

export function App() {
  const [isDarkMode, setDarkMode] = useState(isItDarkOutside());

  // Prevents flashing and shaking on load, annoying bug
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("preload");
      document.body.style.transition = "all 0.2s ease-in-out";
    }, 20);
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="m-auto mb-[33px] flex max-w-[720px] flex-col px-5">
      <div className="mt-5 mb-16 md:mb-32">
        <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>

      <Greeting />

      <Outlet />
    </div>
  );
}

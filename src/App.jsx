import NavBar from "./NavBar";
import Greeting from "./Greeting";
import SocialMediaNavBar from "./SocialMediaNavBar";
import { useState, useEffect } from "react";
// Face background: #dbc7ff

function App() {
  const [isDarkMode, setDarkMode] = useState(isNight());

  // Prevents flashing and shaking on load, annoying bug
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("preload");
      document.body.style.transition = "all 0.2s ease-in-out";
    }, 20);
  }, []);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  function isNight() {
    let hour = new Date().getHours();
    if (hour < 5) return true;
    if (hour < 17) return false;
    else return true;
  }

  return (
    <div className="m-auto flex max-w-[720px] flex-col px-2">
      <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      <Greeting />

      {/*<img src="artboard purple.png" className="w-52 rounded-full" />*/}

      <p className="mt-9 text-[#202020] dark:text-[#ededed]">
        I'm a Computer Science graduate from Toronto Metropolitan University in
        Toronto, Ontario.
      </p>

      <p className="mt-5 text-[#202020] dark:text-[#ededed]">
        I'm passionate about finding creative ways to solve problems, especially
        through technology.
      </p>

      <p className="mt-5 text-[#202020] dark:text-[#ededed]">
        Most of my personal projects are available on my GitHub, linked below.
        I'm currently learning and making projects with web technologies such as
        React, Tailwind CSS, Flask, and Django.
      </p>

      <p className="mt-5 text-[#202020] dark:text-[#ededed]">
        Looking for software engineering, machine learning, or data scientist
        positions. Reach me at{" "}
        <a
          href="mailto:anthony1.greco@ryerson.ca"
          target="_blank"
          className="text-violet-500 hover:text-violet-900"
        >
          anthony1.greco@ryerson.ca
        </a>
        , even for a chat!
      </p>

      <SocialMediaNavBar />
    </div>
  );
}

export default App;

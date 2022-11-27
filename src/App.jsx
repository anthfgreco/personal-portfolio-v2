import Greeting from "./Greeting";
import DarkModeToggle from "./DarkModeToggle";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
// Face background: #dbc7ff

function App() {
  const [isDarkMode, setDarkMode] = useState(isNight());

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  function isNight() {
    let hour = new Date().getHours();
    if (hour <= 5) return true;
    if (hour <= 17) return false;
    else return true;
  }

  return (
    <div className="m-auto flex max-w-[720px] flex-col px-2">
      <header className="mb-24 mt-5 w-full">
        <nav className="flex items-center">
          <h2 className="text-4xl font-semibold tracking-tighter text-[#202020] dark:text-[#ededed]">
            ag.
          </h2>
          <div className="mx-2 flex w-20">
            <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
          </div>
        </nav>
      </header>

      <Greeting />
      <img src="/artboard purple.png" className="w-52 rounded-full" />

      <IconContext.Provider
        value={{
          size: "1.8em",
          className: "fill-violet-400 hover:fill-violet-600",
        }}
      >
        <div className="mt-5 flex space-x-3">
          <a href="https://github.com/anthfgreco" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anthfgreco/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:anthony1.greco@ryerson.ca" target="_blank">
            <FaEnvelope />
          </a>
          <a
            href="https://drive.google.com/file/d/13oXcZ-dZNB4hRfmZTwaXkfgVoTk0PgK8/view?usp=sharing"
            target="_blank"
          >
            <FaFile />
          </a>
        </div>
      </IconContext.Provider>

      <p className="mt-5 text-[#202020] dark:text-[#ededed]">
        I've recently completed a Bachelor of Science (Honours) in Computer
        Science at Toronto Metropolitan University (formerly Ryerson
        University).
      </p>

      <p className="mt-5 text-[#202020] dark:text-[#ededed]">
        I'm currently looking for software engineering or machine learning
        positions. My main passion is working with artificial neural networks
        and evolutionary algorithms to simulate complex, human-like behaviour.
      </p>

      <p className="mt-5 text-[#202020] dark:text-[#ededed]">
        Most of my personal projects are available on my GitHub, linked above.
        I'm currently studying web frameworks such as{" "}
        <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> and{" "}
        <a href="https://www.djangoproject.com/">Django.</a>
      </p>
    </div>
  );
}

export default App;

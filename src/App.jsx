import Greeting from "./Greeting";
import DarkSwitch from "./DarkSwitch";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
// Face background: #dbc7ff

function App() {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.theme == "dark" ? true : false
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <div className="m-auto flex max-w-[720px] flex-col bg-green-100 px-2 dark:bg-green-900">
      <header className="mb-24 w-full">
        <nav className="my-2 flex items-center">
          <h2 className="text-4xl font-semibold tracking-tighter">ag.</h2>
          <div className="mx-2 flex w-20">
            <DarkSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
          </div>
        </nav>
      </header>

      <h1 className="text-3xl font-semibold">Hello, I'm Anthony</h1>
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

      <p className="mt-5">
        I've recently completed a Bachelor of Science (Honours) in Computer
        Science at Toronto Metropolitan University (formerly Ryerson
        University).
      </p>

      <p className="mt-5">
        I'm currently looking for software engineering or machine learning
        positions. My main passion is working with artificial neural networks
        and evolutionary algorithms to simulate complex, human-like behaviour.
      </p>

      <p className="mt-5">
        Most of my personal projects are available on my GitHub, linked above.
        I'm currently studying web frameworks such as{" "}
        <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> and{" "}
        <a href="https://www.djangoproject.com/">Django.</a>
      </p>
    </div>
  );
}

export default App;

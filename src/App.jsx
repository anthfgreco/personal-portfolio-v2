import NavBar from "./NavBar";
import Greeting from "./Greeting";
import SocialMediaNavBar from "./SocialMediaNavBar";
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
      <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      <Greeting />

      <img src="/artboard purple.png" className="w-52 rounded-full" />

      <SocialMediaNavBar />

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

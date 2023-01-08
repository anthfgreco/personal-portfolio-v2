import { useEffect } from "react";
import SocialMediaNavBar from "./SocialMediaNavBar";

function HomePage() {
  useEffect(() => {
    document.title = "Anthony Greco";
  }, []);

  return (
    <div>
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

export default HomePage;

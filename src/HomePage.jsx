import { useEffect } from "react";

import SocialMediaNavBar from "./SocialMediaNavBar";
import { EMAIL, MAILTO_EMAIL } from "./global";

function HomePage() {
  useEffect(() => {
    document.title = "Anthony Greco";
  }, []);

  return (
    <div>
      <p className="mb-5 text-[#202020] dark:text-[#ededed]">
        I'm a Computer Science graduate from Toronto Metropolitan University in
        Toronto, Ontario.
      </p>

      <p className="mb-5 text-[#202020] dark:text-[#ededed]">
        I'm passionate about finding creative ways to solve problems, especially
        through technology.
      </p>

      <p className="mb-5 text-[#202020] dark:text-[#ededed]">
        Most of my personal projects are available on my GitHub, linked below.
        I'm currently learning and making projects with web technologies such as
        React, Tailwind CSS, Flask, and Django.
      </p>

      <p className="mb-5 text-[#202020] dark:text-[#ededed]">
        I'm currently looking for a position related to software engineering or
        machine learning. Reach me at{" "}
        <a
          href={MAILTO_EMAIL}
          target="_blank"
          className="text-violet-500 hover:text-violet-900"
        >
          {EMAIL}
        </a>
        , even for a chat!
      </p>

      <br />

      <SocialMediaNavBar />
    </div>
  );
}

export default HomePage;

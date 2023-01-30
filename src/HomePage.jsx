import { useEffect } from "react";

import SocialMediaNavBar from "./SocialMediaNavBar";
import { EMAIL, MAILTO_EMAIL } from "./global";

const emailLink = (
  <a
    href={MAILTO_EMAIL}
    target="_blank"
    className="text-violet-500 hover:text-violet-900"
  >
    {EMAIL}
  </a>
);

const paragraphList = [
  <>
    I'm a Computer Science graduate from Toronto Metropolitan University in
    Toronto, Ontario.
  </>,
  <>
    I'm passionate about finding creative ways to solve problems, especially
    through technology.
  </>,
  <>
    Most of my personal projects are available on my GitHub, linked below. I'm
    currently learning and making projects with web technologies such as React,
    Tailwind CSS, Flask, and Django.
  </>,
  <>
    I'm currently looking for a position related to software engineering or
    machine learning. Reach me at {emailLink}, even for a chat!
  </>,
];

function HomePage() {
  useEffect(() => {
    document.title = "Anthony Greco";
  }, []);

  return (
    <div>
      {paragraphList.map((paragraph, i) => {
        return (
          <p key={i} className="mb-5 text-[#202020] dark:text-[#ededed]">
            {paragraph}
          </p>
        );
      })}

      <br />

      <SocialMediaNavBar />
    </div>
  );
}

export default HomePage;

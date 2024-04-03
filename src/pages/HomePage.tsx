import { SocialMediaNavBar } from "../components/SocialMediaNavBar";
// import { EMAIL, MAILTO_EMAIL } from "../globals";

// const emailLink = (
//   <a
//     href={MAILTO_EMAIL}
//     target="_blank"
//     className="text-violet-500 hover:text-violet-900"
//   >
//     {EMAIL}
//   </a>
// );

const paragraphList = [
  <>
    I'm passionate about finding creative ways to solve problems, especially
    through technology. Most of my personal and school projects are available on
    my GitHub.
  </>,
  <>
    I'm currently working as a Junior Full Stack Developer at Own Health where
    I'm developing cutting-edge digital health solutions.
  </>,
  <>
    I'm also a Computer Science graduate from Toronto Metropolitan University.
  </>,
  // <>
  //   If you'd like to discuss any opportunities or simply want to chat, feel free
  //   to reach me at {emailLink}.
  // </>,
];

export function HomePage() {
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

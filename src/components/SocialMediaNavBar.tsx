import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

import { GITHUB, LINKEDIN, MAILTO_EMAIL, RESUME } from "../globals";

const urlIconList: [string, JSX.Element][] = [
  [GITHUB, <FaGithub />],
  [LINKEDIN, <FaLinkedin />],
  [MAILTO_EMAIL, <FaEnvelope />],
  [RESUME, <FaFile />],
];

export function SocialMediaNavBar() {
  return (
    <div className="flex space-x-6">
      {urlIconList.map(([url, icon]) => (
        <a
          key={url}
          href={url}
          target="_blank"
          className="text-3xl text-violet-400 hover:text-violet-800"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

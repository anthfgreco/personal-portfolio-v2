import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

function SocialMediaNavBar() {
  return (
    <IconContext.Provider
      value={{
        size: "1.8em",
        className: "fill-violet-400 hover:fill-violet-600",
      }}
    >
      <div className="flex space-x-4">
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
  );
}

export default SocialMediaNavBar;

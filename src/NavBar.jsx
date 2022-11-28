import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({ isDarkMode, setDarkMode }) {
  return (
    <nav className="mt-5 flex items-center">
      <h2 className="text-3xl font-semibold tracking-tighter text-[#202020] dark:text-[#ededed]">
        ag.
      </h2>

      <div className="w-15 mx-4 flex">
        <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="ml-auto">
        <Link
          to="/"
          className="p-3 font-semibold text-[#202020] dark:text-[#ededed]"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="p-3 font-semibold text-[#202020] dark:text-[#ededed]"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

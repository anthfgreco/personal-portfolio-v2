import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({ isDarkMode, setDarkMode }) {
  let activeStyle = {
    backgroundSize: "100% 3px",
    backgroundPosition: "0 100%",
  };

  return (
    <nav className="mt-5 mb-32 flex items-center">
      <h2 className="text-3xl font-semibold tracking-tighter text-[#202020] dark:text-[#ededed]">
        ag.
      </h2>

      <div className="w-15 ml-4">
        <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="ml-auto flex">
        <div className="p-2">
          <NavLink
            to="/"
            className="link-underline py-2 px-1 font-semibold text-[#202020] dark:text-[#ededed]"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </div>
        <div className="p-2">
          <NavLink
            to="/projects"
            className="link-underline py-2 px-1 font-semibold text-[#202020] dark:text-[#ededed]"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

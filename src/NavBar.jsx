import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({ isDarkMode, setDarkMode }) {
  let activeStyle = {
    backgroundSize: "100% 3px",
    backgroundPosition: "0 100%",
  };

  return (
    <nav className="mt-5 flex items-center">
      <h2 className="text-3xl font-semibold tracking-tighter text-[#202020] dark:text-[#ededed]">
        ag.
      </h2>

      <div className="w-15 mx-4 flex">
        <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="ml-auto">
        <NavLink
          to="/"
          className="link-underline link-underline-black p-3 font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="link-underline link-underline-black p-3 font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

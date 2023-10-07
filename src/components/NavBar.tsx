import { NavLink } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle/DarkModeToggle";

interface NavBarProps {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

export function NavBar({ isDarkMode, setDarkMode }: NavBarProps) {
  const activeStyle = {
    backgroundSize: "100% 3px",
    backgroundPosition: "0 100%",
  };

  return (
    <nav className="flex items-center">
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
            onClick={() => (document.title = "Anthony Greco")}
          >
            Home
          </NavLink>
        </div>

        <div className="p-2">
          <NavLink
            to="/projects"
            className="link-underline py-2 px-1 font-semibold text-[#202020] dark:text-[#ededed]"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => (document.title = "Anthony Greco - Projects")}
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

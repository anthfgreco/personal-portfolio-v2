import DarkModeToggle from "./DarkModeToggle";

function NavBar({ isDarkMode, setDarkMode }) {
  return (
    <nav className="mb-24 mt-5 flex w-full items-center">
      <h2 className="text-3xl font-semibold tracking-tighter text-[#202020] dark:text-[#ededed]">
        ag.
      </h2>
      <div className="w-15 mx-4 flex">
        <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
}

export default NavBar;

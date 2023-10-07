import "./DarkModeToggle.css";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

export function DarkModeToggle({
  isDarkMode,
  setDarkMode,
}: DarkModeToggleProps) {
  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div
      onClick={toggleDarkMode}
      className={"tdnn" + (isDarkMode ? "" : " day")}
    >
      <div className={"moon" + (isDarkMode ? "" : " sun")}></div>
    </div>
  );
}

import "./DarkModeToggle.css";

function DarkModeToggle({ isDarkMode, setDarkMode }) {
  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    // Logic to make DarkModeToggle.css styles work correctly
    <div
      onClick={toggleDarkMode}
      className={"tdnn" + (isDarkMode ? "" : " day")}
    >
      <div className={"moon" + (isDarkMode ? "" : " sun")}></div>
    </div>
  );
}

export default DarkModeToggle;

import "./DarkModeToggle.css";

function DarkModeToggle({ isDarkMode, setDarkMode }) {
  function toggle() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div onClick={toggle} className={"tdnn" + (isDarkMode ? "" : " day")}>
      <div className={"moon" + (isDarkMode ? "" : " sun")}></div>
    </div>
  );
}

export default DarkModeToggle;

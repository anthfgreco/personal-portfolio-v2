import "./DarkSwitch.css";

function DarkSwitch({ isDarkMode, setDarkMode }) {
  function toggle() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div onClick={toggle} className={"tdnn" + (isDarkMode ? "" : " day")}>
      <div className={"moon" + (isDarkMode ? "" : " sun")}></div>
    </div>
  );
}

export default DarkSwitch;

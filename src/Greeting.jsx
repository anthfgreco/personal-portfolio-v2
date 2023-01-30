function Greeting() {
  var hour = new Date().getHours();
  var greeting = "Hi, I'm Anthony Greco ";
  if (hour < 4) greeting += "🌝";
  else if (hour < 11) greeting += "☕";
  else if (hour < 16) greeting += "😎";
  else if (hour < 20) greeting += "👋";
  else greeting += "🌝";

  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold text-[#202020] dark:text-[#ededed]">
        {greeting}
      </h1>
    </div>
  );
}

export default Greeting;

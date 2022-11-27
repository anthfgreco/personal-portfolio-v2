function Greeting() {
  let hour = new Date().getHours();
  let greeting = "Hello, I'm Anthony Greco ";
  if (hour < 4) greeting += "🌝";
  else if (hour < 11) greeting += "☕";
  else if (hour < 16) greeting += "😎";
  else if (hour < 20) greeting += "👋";
  else greeting += "🌝";

  return (
    <div>
      <h1 className="mt-32 text-3xl font-semibold text-[#202020] dark:text-[#ededed]">
        {greeting}
      </h1>
    </div>
  );
}

export default Greeting;

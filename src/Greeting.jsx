function Greeting() {
  let currentHour = new Date().getHours();
  let greeting;

  // Night 0-4
  if (currentHour <= 4) greeting = "🌚Hello🌃";
  // Morning 5-10
  else if (currentHour <= 10) greeting = "☕Good Morning🌅";
  // Afternoon 11-16
  else if (currentHour <= 16) greeting = "😎Good Afternoon🌞";
  // Evening 17-20
  else if (currentHour <= 20) greeting = "🌆Good Evening🌇";
  // Night 21-23
  else greeting = "🌚Hello🌃";

  return (
    <div className="Greeting">
      <h1 className="text-4xl font-semibold">{greeting}</h1>
    </div>
  );
}

export default Greeting;

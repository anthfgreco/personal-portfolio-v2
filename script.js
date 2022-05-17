// Face background: #dbc7ff

$(function() {
  let currentHour = (new Date()).getHours();
  let greeting = "#greeting";

  // Night 0-4
  if (currentHour <= 4)       $(greeting).text("🌚Hello🌃");
  // Morning 5-10
  else if (currentHour <= 10) $(greeting).text("☕Good Morning🌅");
  // Afternoon 11-16
  else if (currentHour <= 16) $(greeting).text("😎Good Afternoon🌞");
  // Evening 17-20
  else if (currentHour <= 20) $(greeting).text("🌆Good Evening🌇");
  // Night 21-23
  else                        $(greeting).text("🌚Hello🌃");
});
// Face background: #dbc7ff

let currentHour = (new Date()).getHours();
let greeting_id = "#greeting";

// Night 0-4
if (currentHour <= 4)       $(greeting_id).text("🌚Hello🌃");
// Morning 5-10
else if (currentHour <= 10) $(greeting_id).text("☕Good Morning🌅");
// Afternoon 11-16
else if (currentHour <= 16) $(greeting_id).text("😎Good Afternoon🌞");
// Evening 17-20
else if (currentHour <= 20) $(greeting_id).text("🌆Good Evening🌇");
// Night 21-23
else                        $(greeting_id).text("🌚Hello🌃");

// Face background: #dbc7ff

var currentHour = (new Date()).getHours();

// Morning 0-11
if (currentHour <= 11) {
  document.getElementById("greeting").innerHTML = "☕ Good Morning 🌅";
}
// Afternoon 12-16
else if (currentHour <= 16) {
  document.getElementById("greeting").innerHTML = "😎 Good Afternoon 🌞";
}
// Evening 17-20
else if (currentHour <= 20) {
  document.getElementById("greeting").innerHTML = "🌆 Good Evening 🌇";
}
// Night 21-23
else {
  document.getElementById("greeting").innerHTML = "🌚 Hello 🌃";
}
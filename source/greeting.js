function writeGreeting() {
  let greeting = document.getElementById("greeting");
  let time = new Date();

  if (time.getHours() < 12) {
    greeting.innerHTML = "Good Morning, Adam";
  } else if (time.getHours() > 11 && time.getHours() < 18) {
    greeting.innerHTML = "Good Afternoon, Adam";
  } else {
    greeting.innerHTML = "Good Evening, Adam";
  }
}

writeGreeting();

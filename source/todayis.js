function returnDayOfTheWeek(dayNumber) {
  let day;
  switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
}

function returnTheCurrentMonth(monthNumber) {
  let month;
  switch (monthNumber) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  return month;
}

function todayIs() {
  let div = document.getElementById("todayis");
  let date = new Date();
  let day = returnDayOfTheWeek(date.getDay());
  let month = returnTheCurrentMonth(date.getMonth());

  div.innerHTML =
    "Today is " +
    day +
    ", " +
    month +
    " " +
    date.getDay() +
    ", " +
    date.getFullYear();
}

todayIs();

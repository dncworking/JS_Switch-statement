"use strict";

function daysUntilWeekend(day) {
  let dayNumber;
  switch (day.toLowerCase()) {
    case "monday":
      dayNumber = 1;
      break;
    case "tuesday":
      dayNumber = 2;
      break;
    case "wednesday":
      dayNumber = 3;
      break;
    case "thursday":
      dayNumber = 4;
      break;
    case "friday":
      dayNumber = 5;
      break;
    case "saturday":
      dayNumber = 6;
      break;
    case "sunday":
      dayNumber = 7;
      break;
    default:
      throw new Error(`"Unknown day" + day`);
  }

  if (dayNumber <= 6) {
    return 6 - dayNumber;
  } else {
    return 6;
  }
}

console.log(daysUntilWeekend("Monday")); // 5
console.log(daysUntilWeekend("Thursday")); // 2
console.log(daysUntilWeekend("Saturday")); // 0
console.log(daysUntilWeekend("Sunday"));

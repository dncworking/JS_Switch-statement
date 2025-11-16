"use strict";

function daysInMonthsByNumbers(monthNum) {
  switch (monthNum) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2:
      return 28;

    default:
      return "Error: Invalid months";
  }
}
console.log(daysInMonthsByNumbers(5));
console.log(daysInMonthsByNumbers(1));
console.log(daysInMonthsByNumbers(7));
console.log(daysInMonthsByNumbers(15));

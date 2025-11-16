"use strict";
function gradeToDescription(grades) {
  switch (grades.toLowerCase()) {
    case "a":
      return "Excellent";
    case "b":
      return "Good";
    case "c":
      return "Average";
    case "d":
      return "Poor";
    case "f":
      return "Fail";
    default:
      return "Error: Invalid Grade";
  }
}
console.log(gradeToDescription("A"));
console.log(gradeToDescription("B"));
console.log(gradeToDescription("C"));
console.log(gradeToDescription("D"));
console.log(gradeToDescription("K"));

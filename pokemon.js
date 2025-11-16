"use strict";

function typeAdvantage(type) {
  switch (type) {
    case "fire":
      return "grass";
    case "water":
      return "fire";
    case "grass":
      return "water";
    default:
      return "No advantage";
  }
}

console.log(typeAdvantage("fire"));
console.log(typeAdvantage("grass"));
console.log(typeAdvantage("water"));
console.log(typeAdvantage("stone"));

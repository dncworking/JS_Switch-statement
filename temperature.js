"use strict";

function checkSeason(temp) {
  switch (true) {
    case temp < 0:
      return "Freezing";
    case temp >= 0 && temp <= 10:
      return "Cold";
    case temp >= 11 && temp <= 20:
      return "Mild";
    case temp >= 21 && temp <= 30:
      return "Warm";
    case temp > 30:
      return "Hot";
    default:
      return "Invalid temperature";
  }
}

console.log(checkSeason(-5));  
console.log(checkSeason(5));   
console.log(checkSeason(15));  
console.log(checkSeason(25));  
console.log(checkSeason(35));
console.log(checkSeason("one"));


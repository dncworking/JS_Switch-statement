"use strict";

function trafficlightColor(colors) {
  switch (colors) {
    case "green":
      return "Go";
    case "yellow":
      return "Slow down";
    case "red":
      return "Stop";
    default:
      return "Error: Unknown light";
  }
}

console.log(trafficlightColor("green"));
console.log(trafficlightColor("yellow"));
console.log(trafficlightColor("red"));
console.log(trafficlightColor("pink"));

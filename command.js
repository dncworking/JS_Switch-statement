"use strict";

function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "Starting...";
    case "stop":
      return "Stopping...";
    case "pause":
      return "Pausing...";
    case "resume":
      return "Resuming...";
    default:
      return "Unknown command";
  }
}
console.log(runCommand("start"));
console.log(runCommand("stop"));
console.log(runCommand("pause"));
console.log(runCommand("resume"));
console.log(runCommand("delete"));

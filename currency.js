"use strict";

function currencySymbol(code) {
  switch (code) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CHF":
      return "Fr";
    default:
      return "Unsupported currency";
  }
}

console.log(currencySymbol("USD"));
console.log(currencySymbol("EUR"));
console.log(currencySymbol("GBP"));
console.log(currencySymbol("JPY"));
console.log(currencySymbol("CHF"));
console.log(currencySymbol("AUD"));

"use strict";

function languageTranslator(languages) {
  switch (languages) {
    case "en":
      return "Hello";
    case "lt":
      return "Labas";
    case "fr":
      return "Bonjour";
    case "es":
      return "Hola";
    default:
      return "Language not supported";
  }
}
console.log(languageTranslator("en"));
console.log(languageTranslator("lt"));
console.log(languageTranslator("fr"));
console.log(languageTranslator("es"));
console.log(languageTranslator("ru"));

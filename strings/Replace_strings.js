"use strict";


function replaceWord(string, oldWord, newWord) {
    return string.replace(oldWord, newWord);
  }
  

let message = "Our corporate offices are located in Dallas";
let newMessage = replaceWord(message, "Dallas", "Austin");
console.log(newMessage); // "Our corporate offices are located in Austin"

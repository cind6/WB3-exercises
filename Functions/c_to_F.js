"use strict";

// function displayFahrenheitTemp(currentTempcelsius){

// let FahrenheitTemp = (currentTempcelsius *9/5) + 32;
// console.log(currentTempcelsius + "degrees in celsius is equal to " + FahrenheitTemp + "degrees in fahrenheit.")
// }

// displayFahrenheitTemp(32);
// displayFahrenheitTemp(100);
// displayFahrenheitTemp(0);
// displayFahrenheitTemp(17);

function calculateFahrenheitTemp(currentTempcelsius){
    let FahrenheitTemp = (currentTempcelsius *9/5) + 32;
    return FahrenheitTemp;
}

let CelsiusValue = 32;
let anotherCelsiusValue = 0;
let FahrenheitValue = calculateFahrenheitTemp(CelsiusValue);
let anotherFahrenheitValue = calculateFahrenheitTemp(anotherCelsiusValue);

 console.log(CelsiusValue + " degrees in celsius is equal to " + FahrenheitValue + " degrees in fahrenheit.")

console.log(`The other values are ${anotherCelsiusValue}C and ${anotherFahrenheitValue}F `);
 //console.log(CelsiusValue + " degrees in celsius is equal to " +  calculateFahrenheitTemp(CelsiusValue) + " degrees in fahrenheit.")

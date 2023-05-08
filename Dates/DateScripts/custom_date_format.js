"use strict";
// Get the current date and time
const currentDate = new Date();

// Define an array of weekday names
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day, month, year, and weekday name from the current date
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Note that January is month 0
const year = currentDate.getFullYear();
const weekday = weekdayNames[currentDate.getDay()];

// Construct the formatted date string
const formattedDate = day + "-" + month + "-" + year + "(" + weekday + ")";

// Display the formatted date string
console.log(formattedDate);


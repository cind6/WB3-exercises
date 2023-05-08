"use strict";

// your birthday in the format of (MM/DD/YYYY)
const yourBirthday = new Date();
yourBirthday.setMonth(5); // month is zero-indexed, so 5 is June
yourBirthday.setDate(6);
yourBirthday.setFullYear(1994);

// your mom's birthday in the format of (MMM DD YYYY)
const momBirthday = new Date();
momBirthday.setMonth(8); // month is zero-indexed, so 8 is September
momBirthday.setDate(26);
momBirthday.setFullYear(1968);

// your dad's birthday using New Date (yyyy, m, d)
const dadBirthday = new Date(1952, 4, 25); // month is zero-indexed, so 4 is May

console.log("Your birthday: " + yourBirthday.toLocaleString());
console.log("Mom's birthday: " + momBirthday.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" }));
console.log("Dad's birthday: " + dadBirthday.toLocaleString());

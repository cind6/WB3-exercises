"use strict";


      // Get references to the input field, button, and result paragraph
const input = document.getElementById('birthdate');
const convertBtn = document.getElementById('convertBtn');
const dateParagraph = document.getElementById('date');

window.onload = init;
// Add event listener to the button
function init(){
    convertBtn.onclick = onconvertBtnClicked;
}

  // Convert the value to a date object
  function onconvertBtnClicked(){
   const dateString = birthdate.value
   
   // Display the value in the result paragraph
   let d = new Date(dateString);
   dateParagraph.innerHTML = d.toString();
  }

  



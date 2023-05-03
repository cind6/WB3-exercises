"use strict";

function displayMailingLabel(Name, Address, State, City,Zip){
    let shippingAddress = Name + Address + State + City + Zip;
    console.log("Your Shipping Adress is " + shippingAddress);
}

function addNumbers(num1, num2){
    let someNumber = num1+ num2;
    console.log(someNumber);

}

function displayReceipt(totaldue, amountpaid){

    let changedue = amountpaid - totaldue;
    console.log('total change is $ ${changedue}')
}

displayMailingLabel("Ana", "9547 Cherry Hill Ave", "Deltona", "Fl", "32738");
displayMailingLabel("Mark", "106 Glenwood ave", "Jersey City", "NJ", "07306");
let PersonName = "david";
let PersonAddress1 = "873 chapel drive";
let PersonCity = "Oceanside";
let PersonState = "CA";
let PersonPostalCode = "92056"; 
displayMailingLabel(PersonName, PersonAddress1, PersonCity, PersonState, PersonPostalCode)


addNumbers(7, 20);
addNumbers(10232, 5);

displayReceipt(45.23, 50);
displayReceipt(45.23, 100);

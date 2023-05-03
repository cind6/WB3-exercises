"use strict";





//here we define the functions, but we are not executing / invoking / calling them here.
function getSocSecTax(grosspay) {
    let tax = grosspay * 0.062;
    return tax;
}

function getMedicareTax(grosspay) {
    let tax = grosspay * .0145;
    //console.log(tax);
    return tax;
}

function getFederaltax(grosspay, withholdingcode) {
    let taxrate;

    if (withholdingcode == 0) {
        taxrate = .23;
    }
    else if (withholdingcode == 1) {
        taxrate = .21;
    }

    else if (withholdingcode == 2) {
        taxrate = .195;
    }

    else if (withholdingcode == 3) {
        taxrate = 0.185
     }
    else {
        //todo: fix this tax rate expression to match the rules in the chart...
        let withholdingrate =  (withholdingcode - 4) * .005; 
        taxrate = .18 - withholdingrate
       
    }
     return grosspay * taxrate;
}


//let federalTax = getFederaltax(1000, 6);
//console.log(federalTax);




// here is the code to execute / invoke / call the functions:

// 1 declare our initial values.
let persongrosspay = 1550;
let personwithholdingcode = 2;

// 2 use our functions to calculate the unknown values.
let federalTax = getFederaltax(persongrosspay, personwithholdingcode);

let medicareTax = getMedicareTax(persongrosspay);

// 3 display the results
console.log(`The Gross Pay is ${persongrosspay}`)
console.log(`The Medicare Tax Amount is ${federalTax}`);
console.log(`The Medicare Tax Amount is ${medicareTax}`);

let SocSecuritytax = getSocSecTax(persongrosspay);
console.log(`The socSec Tax Amount is ${SocSecuritytax}`);
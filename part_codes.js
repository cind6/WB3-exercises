"use strict";

// Define the three parsing functions
function getSupplier(code) {
    return code.split(':')[0];
  }
  
  function getProductNumber(code) {
    return code.split(':')[1].split('-')[0];
  }
  
  function getSize(code) {
    return code.split('-')[1];
  }
  
  // Define the part codes
  const part1 = 'ACME:123-L';
  const part2 = 'DI:12345-M';
  const part3 = 'ACE:1-12';
  
  // Call the functions for each part code and display the results
  console.log(`Part 1 - Supplier: ${getSupplier(part1)}, Product Number: ${getProductNumber(part1)}, Size: ${getSize(part1)}`);
  console.log(`Part 2 - Supplier: ${getSupplier(part2)}, Product Number: ${getProductNumber(part2)}, Size: ${getSize(part2)}`);
  console.log(`Part 3 - Supplier: ${getSupplier(part3)}, Product Number: ${getProductNumber(part3)}, Size: ${getSize(part3)}`);
  
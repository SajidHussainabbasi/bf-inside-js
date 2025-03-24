'use strict';

console.log('-- begin --');

// try different values and different types
const isLoggedIn = true;
const secretInformation = 'Classified Data';
const warningMessage = 'Access Denied';
console.log(isLoggedIn, secretInformation, warningMessage);

// Refactored to use ternary operator
const toDisplay = isLoggedIn ? secretInformation : warningMessage;
console.log(toDisplay);

console.log('-- end --');

'use strict';

console.log('-- begin --');

// try different values and different types
const firstName = 'Alice'; // Change this to test
const lastName = 'Brown'; // Change this to test
console.log(firstName, lastName);

let hasAnAName = false;
if (firstName[0] === 'A') {
  hasAnAName = true;
} else if (lastName[0] === 'A') {
  hasAnAName = true;
}

console.log(hasAnAName);

console.log('-- end --');
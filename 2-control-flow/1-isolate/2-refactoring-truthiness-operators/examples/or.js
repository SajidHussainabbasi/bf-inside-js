'use strict';

// experiment with different values
const a = 10;
const b = 20;

// "or" expression
const orValue = a || b;

// conditional statement
let conditionalValue;
if (Boolean(a) === true) {
  conditionalValue = a;
} else {
  conditionalValue = b;
}

console.assert(orValue === conditionalValue, 'always the same!');

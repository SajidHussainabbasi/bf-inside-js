'use strict';

// experiment with different values
const a = 10;
const b = 20;
const c = 30;

// ternary expression
const ternaryValue = a ? b : c;

// conditional statement
let conditionalValue;
if (Boolean(a) === true) {
  conditionalValue = b;
} else {
  conditionalValue = c;
}

console.assert(ternaryValue === conditionalValue, 'always the same!');
